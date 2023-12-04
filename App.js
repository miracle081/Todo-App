import { View } from 'react-native';
import { TodoList } from './Screens/TodoList';
import { Position } from './Screens/Position';

export default function App() {

  return (
    <View style={{ flex: 1 }}>
      {/* <TodoList /> */}
      <Position />
    </View>
  );
}
