
import { StyleSheet, Text, View } from 'react-native';
import Stopwatch from './src/Screens/Stopwatch';

export default function App() {
  return (
    <View style={styles.container}>
    <Stopwatch />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
