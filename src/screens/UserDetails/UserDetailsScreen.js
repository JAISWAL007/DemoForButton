import React, {useState} from 'react';
import {Alert} from 'react-native';
import PropTypes from 'prop-types';
import {userAction} from '../../redux/actions';
import {useDispatch} from 'react-redux';
import Strings from '../../Constant';
import Button from '../../component/Button/Button';
import {Container, Label, Input, Title} from './UserDetailsScreen.style';

const UserDetailsScreen = ({navigation}) => {
  const [userName, setUserName] = useState('');
  const dispatch = useDispatch();

  const onPress = () => {
    if (userName) {
      dispatch(userAction(userName));
      navigation.navigate('PostLogin', {
        screen: 'Dashboard',
      });
    } else {
      Alert.alert('Error', Strings.PLEASE_ENTER_NAME, [{text: 'Ok'}]);
    }
  };

  const validateUserName = name => {
    if (name) {
      return setUserName(name);
    }
    setUserName('');
  };

  return (
    <Container>
      <Title>{Strings.USER_NAME}</Title>
      <Input
        testID="input-field"
        onChangeText={validateUserName}
        placeholder={Strings.ENTER_USER_NAME}
        returnKeyType="done"
      />

      <Button
        backgroundColor="red"
        testID="button"
        margin={10}
        label={Strings.NEXT}
        onPress={onPress}
      />
    </Container>
  );
};

UserDetailsScreen.prototype = {
  navigation: PropTypes.objectOf({
    navigate: PropTypes.func,
  }).isRequired,
};
export default UserDetailsScreen;
