import React from 'react';
import {Text, NativeModules} from 'react-native';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';

import Strings from '../../Constant';
import Button from '../../component/Button/Button';
import {Container, SubContainer, LabelWrapper, Title} from './Dashboard.style';

const Dashboard = ({navigation}) => {
  const [isEmulator, setIsEmulator] = React.useState('');
  const storeUserName = useSelector(state => state?.UserDetails?.name);

  const checkIsEmulator = async () => {
    const {DeviceDetails} = NativeModules;
    const emulator = await DeviceDetails.isEmulator();
    setIsEmulator(emulator);
  };

  React.useEffect(() => {
    checkIsEmulator();
  }, []);

  return (
    <Container>
      <SubContainer>
        <Button
          testID="back-button"
          icon
          iconColor="#000"
          iconName="angle-left"
          onPress={() => navigation.goBack()}
        />
        <Title>{Strings.DASHBOARD}</Title>
        <Button
          testID="next-button"
          icon
          iconColor="#000"
          iconName="angle-right"
          onPress={() => navigation.navigate('ButtonScreen')}
        />
      </SubContainer>
      <LabelWrapper>
        <Text testID="store-label">Welcome {storeUserName}</Text>
        <Text testID="display-label">
          Running on {isEmulator ? 'Emulator' : 'Devices'}
        </Text>
      </LabelWrapper>
    </Container>
  );
};

Dashboard.prototype = {
  navigation: PropTypes.objectOf({
    navigate: PropTypes.func,
    goBack: PropTypes.func,
  }).isRequired,
};
export default Dashboard;
