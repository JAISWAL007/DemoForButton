import React from 'react';
import PropTypes from 'prop-types';
import {Alert} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Button from '../../component/Button/Button';
import {
  Container,
  SubView,
  Header,
  ButtonLabelWithColor,
  Label,
  SwipeButtonView,
} from './ButtonScreen.style';
import Strings from '../../Constant';
import {NavigationState, NavigationScreenProp} from 'react-navigation';

const DiamondIcon = () => <Icon name="diamond" color="#fff" size={20} />;

type Props = {
  navigation: NavigationScreenProp<NavigationState>,
};
const ButtonScreen = ({navigation}: Props) => {
  const onPress = () => {
    Alert.alert('Error', Strings.COMING_SOON, [{text: 'Ok'}]);
  };

  return (
    <Container>
      <SubView>
        <Header>
          <Button
            testID="back-button"
            icon
            iconName="angle-left"
            onPress={() => navigation.goBack()}
          />

          <Label fontSize={28} margin={10} color="#fff">
            {Strings.BUTTON_SCREEN}
          </Label>
          <Button
            testID="user-details"
            icon
            iconName="home"
            onPress={() => navigation.navigate('UserDetails')}
          />
        </Header>
      </SubView>
      <ButtonLabelWithColor>{Strings.VARIATION_OF_BUTTON}</ButtonLabelWithColor>
      <Label onPress={onPress} testID="button-1">
        {Strings.PRESS_ME}
      </Label>
      <Button
        backgroundColor="#333333"
        testID="button-2"
        margin={10}
        labelColor="#33adff"
        label={Strings.PRESS_ME}
        onPress={onPress}
      />
      <Button
        backgroundColor="#33adff"
        testID="button-3"
        margin={10}
        label={Strings.PRESS_ME}
        onPress={onPress}
      />
      <SwipeButtonView
        railBackgroundColor="black"
        testID="slider-button"
        thumbIconComponent={DiamondIcon}
        railBorderColor="#333"
        railFillBorderColor="#33adff"
        railFillBackgroundColor="#333"
        titleColor="#33adff"
        thumbIconBackgroundColor="#33adff"
        title={Strings.SLIDE_ME_TO_CONTINUE}
      />
    </Container>
  );
};

ButtonScreen.prototype = {
  navigation: PropTypes.objectOf({
    navigate: PropTypes.func,
  }).isRequired,
};
export default ButtonScreen;
