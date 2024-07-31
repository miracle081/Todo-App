import { Text, View, StyleSheet } from 'react-native';
import { TodoList } from './Screens/TodoList';


export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <TodoList />
    </View>
  );
}
