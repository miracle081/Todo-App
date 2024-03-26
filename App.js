import { Text, View } from 'react-native';
import { Login } from './Screens/Login';
import { Maps } from './Screens/Maps';
import { Position } from './Screens/Position';
import { Products } from './Screens/Products';

export default function App() {

  return (
    <View style={{ flex: 1 }}>
      <Products />
    </View>
  );
}
