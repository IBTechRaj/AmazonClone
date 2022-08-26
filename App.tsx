import React, { type PropsWithChildren } from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import Router from './src/router';
// import Icon from 'react-native-vector-icons/FontAwesome';

// import ShoppingCartScreen from './src/screens/ShoppingCartScreen'
import AddressScreen from './src/screens/AddressScreen'

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {/* <AddressScreen /> */}
      <Router />
    </SafeAreaView>
  );
};


export default App;