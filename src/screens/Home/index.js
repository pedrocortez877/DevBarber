import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { RefreshControl } from 'react-native';

import * as Location from 'expo-location';

import Api from '../../Api';
import BarberItem from '../../components/BarberItem';
 
import { 
  Container,
  Scroller,

  HeaderArea,
  HeaderTitle,
  SearchButton,

  LocationArea,
  LocationInput,
  LocationFinder,

  LoadingIcon,

  ListArea
} from './styles';

import SearchIcon from '../../assets/search.svg';
import MyLocationIcon from '../../assets/my_location.svg';

export default () => {
  const [locationText, setLocationText] = useState('');
  const [coords, setCoords] = useState(null);
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const handleLocationFinder = async () => {
    setCoords(null);
    
    let { status } = await Location.requestPermissionsAsync();

    if(status == 'granted'){
      setLoading(true);
      setLocationText('');

      let location = await Location.getCurrentPositionAsync({});
      setCoords(location);
      getBarbers();
    }
  }

  const getBarbers = async () => {
    setLoading(true);
    setList([]);

    let lat = null;
    let lng = null;

    if(coords){
      lat = coords.latitude;
      lng = coords.longitude;
    }

    let res = await Api.getBarbers(lat, lng, locationText);
    if(res.error == ''){
      if(res.loc){
        setLocationText(res.loc);
      }
      setList(res.data);
    }else{
      alert("Erro: "+res.error);
    }

    setLoading(false);
  }

  const navigation = useNavigation();

  useEffect(() => {
    getBarbers();
  }, []);

  const onRefresh = () => {
    setRefreshing(false);
    getBarbers();
  }

  const handleLocationSearch = () => {
    setCoords({});
    getBarbers();
  }

  return (
    <Container>
      <Scroller refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}>

        <HeaderArea>
          <HeaderTitle>Encontre o seu barbeiro favorito</HeaderTitle>
          <SearchButton onPress={() => navigation.navigate('Search')}>
            <SearchIcon width="26" height="26" fill="#FFF"/>
          </SearchButton>
        </HeaderArea>

        <LocationArea>
          <LocationInput 
            placeholder="Onde você está?" 
            placeholderTextColor="#FFF"
            value={locationText}
            onChangeText={t=>setLocationText(t)}
            onEndEditing={handleLocationSearch}
          />
          <LocationFinder onPress={handleLocationFinder}>
            <MyLocationIcon width="24" height="24" fill="#FFF"/> 
          </LocationFinder>
        </LocationArea>

        {loading &&
          <LoadingIcon size="large" color="#FFF" />
        }

        <ListArea>
          {list.map((item,k) => (
            <BarberItem key={k} data={item}/> 
          ))}
        </ListArea>
        
      </Scroller>
    </Container>
  );
}