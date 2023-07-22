import { Button, Text, View } from 'react-native';

import React from 'react';

const Home = ({ navigation }) => {
   return (
      <View>
         <Text>Home</Text>
         <Button
            onPress={() => navigation.navigate('Details')}
            title="Click me!"
         />
      </View>
   );
};

export default Home;
