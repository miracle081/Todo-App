import { View, } from 'react-native';
import { Position } from './Screens/Position';
import { Login } from './Screens/Login';


export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Position />
      {/* <Login /> */}
    </View>
  );
}
