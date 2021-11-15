import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
} from 'react-native';


const App = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle='dark-content' />
      <Text style={{ textAlign: 'center' }}>First Text</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

});

export default App;
