import { Platform } from 'react-native';

const Box = Platform.OS === 'web'
  ? require('./Box.web').default
  : require('./Box.native').default;

export default Box;