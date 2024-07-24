import { View, } from 'react-native';
import { Position } from './Screens/Position';
import { Login } from './Screens/Login';


export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Position />
      {/* <Login /> */}
      <Text>This is a text component in react native</Text>
    </View>
  );
}
