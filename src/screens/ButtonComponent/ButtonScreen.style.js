import styled from 'styled-components/native';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import SwipeButton from 'rn-swipe-button';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: black;
`;

export const SubView = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const Label = styled(Text)`
  font-size: ${props => props.fontSize || 16}px;
  text-align: center;
  margin: ${props => props.margin || 15}px;
  color: ${props => props.color || '#66b3ff'};
`;

export const ButtonLabelWithColor = styled(Label)`
  font-size: 16px;
  text-align: center;
  margin: 15px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const Button = styled(TouchableOpacity)`
  background-color: #33adff;
  align-items: center;
  border-radius: 10px;
  justify-content: center;
  margin: 10px;
`;

export const SwipeButtonView = styled(SwipeButton).attrs({
  railStyles: {
    backgroundColor: '#33300088',
    borderRadius: 10,
  },
  thumbIconStyles: {
    borderRadius: 10,
  },
})``;
