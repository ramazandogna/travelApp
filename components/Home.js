import {
   Button,
   Image,
   ScrollView,
   StyleSheet,
   Text,
   View,
} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import activitiesData from '../assets/data/activitiesData';
import colors from '../assets/colors/colors';
import discoverCategoriesData from '../assets/data/discoverCategoriesData';
import discoverData from '../assets/data/discoverData';
import learnMoreData from '../assets/data/learnMoreData';
import profile from '../assets/images/person.png';

Feather.loadFont();

const Home = ({ navigation }) => {
   return (
      <View style={styles.container}>
         <ScrollView>
            {/*Header*/}
            <SafeAreaView>
               <View style={styles.menuWrapper}>
                  <Feather
                     name="menu"
                     size={32}
                     color={colors.black}
                     style={styles.menuIcon}
                  />
                  <Image
                     source={profile}
                     style={styles.profileImage}
                  />
               </View>
            </SafeAreaView>
            {/* Discover */}
         </ScrollView>
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: colors.white,
   },
   menuWrapper: {
      marginHorizontal: 20,
      marginTop: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
   },
   profileImage: {
      width: 52,
      height: 52,
      borderRadius: 10,
   },
});

export default Home;
