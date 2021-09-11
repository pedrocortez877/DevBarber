import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  background-color: #FFF;
`;
export const Scroller = styled.ScrollView`
  flex: 1;
  background-color: #000;
`;

export const SwipeDot = styled.View`
  width: 10px;
  height: 10px;
  background-color: #FFF;
  border-radius: 5px;
  margin: 3px;
`;

export const SwipeDotActive = styled.View`
  width: 10px;
  height: 10px;
  background-color: #000;
  border-radius: 5px;
  margin: 3px;
`;

export const SwipeItem = styled.View`
  flex: 1;
  background-color: #63c2d1;
`;

export const SwipeImage = styled.Image`
  width: 100%;
  height: 240px;
`;

export const FakeSwiper = styled.View``;

export const PageBody = styled.View`
  background-color: #fff;
  border-top-left-radius: 50px;
  margin-top: -50px;
  min-height: 400px;
`;

export const UserInfoArea = styled.View`
  flex-direction: row;
  margin-top: -30px;
`;

export const UserInfo = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

export const UserAvatar = styled.Image`
  width: 110px;
  height: 110px;
  border-radius: 20px;
  margin-left: 30px;
  margin-right: 20px;
  border-width: 4px;
  border-color: #fff;
`;

export const UserInfoName = styled.Text`
  color: #000;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const UserFavButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  background-color: #FFF;
  border: 2px solid #999;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
`;

export const ServiceArea = styled.View``;

export const TestimonialArea = styled.View``;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 9;
`;

