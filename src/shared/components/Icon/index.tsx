import React from 'react';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';

interface IconProps {
  style?: any;
  type?: string;
  name: string;
  size?: number;
  color?: string;
}

const Icon: React.FC<IconProps> = ({
  style,
  type = 'default',
  name,
  size,
  color,
}) => {
  let icon;

  const iconProps = {
    name,
    size,
    style,
    color,
  };
  switch (type) {
    case 'font-5':
      icon = <FontAwesome5 {...iconProps} />;
      break;
    case 'font':
      icon = <FontAwesome {...iconProps} />;
      break;
    case 'foundation':
      icon = <Foundation {...iconProps} />;
      break;
    case 'ionicons':
      icon = <Ionicons {...iconProps} />;
      break;
    case 'material':
      icon = <MaterialIcons {...iconProps} />;
      break;
    case 'fontisto':
      icon = <Fontisto {...iconProps} />;
      break;
    default:
      icon = <MaterialCommunity {...iconProps} />;
      break;
  }

  return icon;
};

export default Icon;
