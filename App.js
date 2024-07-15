import { StyleSheet, View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-web';
import Card from './components/Card';
import Balance from './components/Balance';
import Transactions from './components/Transactions';


export default function App() {
  
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Card />
        <Balance/>
        <Transactions/>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    height: 'auto',
    width:'auto'
  }
});
