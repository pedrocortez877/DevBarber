import React, { useState, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import Swiper from 'react-native-swiper';
import { StatusBar } from 'react-native';

import Stars from '../../components/Stars';

import FavoriteIcon from '../../assets/favorite.svg';
import BackIcon from '../../assets/back.svg';

import { 
  Container,
  Scroller,
  PageBody,
  UserInfoArea,
  UserAvatar,
  UserInfo,
  UserInfoName,
  UserFavButton,
  ServiceArea,
  TestimonialArea,
  SwipeDot,
  SwipeDotActive,
  SwipeItem,
  SwipeImage,
  FakeSwiper,
  BackButton
} from './styles';

import Api from '../../Api';

export default () => {
  const navigation = useNavigation();
  const route = useRoute();

  const [loading, setLoading] = useState(false);
  const [userInfo, setUserInfo] = useState({
    id: route.params.id,
    avatar: route.params.avatar,
    name: route.params.name,
    stars: route.params.stars,
  });

  const handleBackButton = () => {
    navigation.goBack();
  }

  useEffect(() => {
    const getBarberInfo = async () => {
      setLoading(true);
      let json = await Api.getBarber(userInfo.id);
      if(json.error == ''){
        setUserInfo(json.data);
      }else{
        alert("Erro: "+json.error);
      }
      setLoading(false);
    }

    getBarberInfo();
  }, []);

  return (
    <Container>
      <StatusBar backgroundColor="#000"/>
      <Scroller>
        {userInfo.photos && userInfo.photos.length > 0 ? 
          <Swiper
            style={{height: 240}}
            dot={<SwipeDot />}
            activeDot={<SwipeDotActive />}
            paginationStyle={{top: 15, right: 15, bottom: null, left: null}}
            autoplay={true}
          >
            {userInfo.photos.map((item, key) => (
              <SwipeItem key={key}>
                <SwipeImage source={{uri: item.url}} resizeMode="cover"/>
              </SwipeItem>
            ))} 
          </Swiper>
          :
          <FakeSwiper></FakeSwiper>  
        }

        <PageBody>
          <UserInfoArea>
            <UserAvatar source={{uri: userInfo.avatar}}/>
            <UserInfo>
              <UserInfoName>{userInfo.name}</UserInfoName>
              <Stars stars={userInfo.stars} showNumber={true}/>
            </UserInfo>
            <UserFavButton>
              <FavoriteIcon width="24" height="24" fill="#FF0000"/>
            </UserFavButton>
          </UserInfoArea>
          <ServiceArea>

          </ServiceArea>
          <TestimonialArea>

          </TestimonialArea>
        </PageBody>
      </Scroller>
      <BackButton onPress={handleBackButton}>   
        <BackIcon width="44px" height="44px" fill="#FFF"/>
      </BackButton>
    </Container>
  );
}