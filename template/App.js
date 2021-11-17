import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
} from 'react-native';
import { Provider } from 'react-redux';
import axios from './App/Utils/axios';
import './__mocks__/User'
import { store } from './App/store';

const App = () => {
  useEffect(() => {
    axios.get('https://randomuser.me/api/')
      .then(res => { console.log(res.data.results[0].email) })
      .catch(err => console.log(err.message));
  }, [])
  return (
    // <Provider store={store}>
    <SafeAreaView>
      <StatusBar barStyle='dark-content' />
      <Text style={{ textAlign: 'center', color: 'black' }}>First Text!</Text>
    </SafeAreaView>
    // </Provider>
  );
};

const styles = StyleSheet.create({

});

export default App;
