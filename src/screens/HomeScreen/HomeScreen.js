import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';

import { categories, coffeeItems } from '../../constants';

import CoffeeCard from '../../components/CoffeeCard/CoffeeCard.js';

const HomeScreen = () => {
  const [active, setActive] = useState(1);
  return (
    <SafeAreaView>
      <View style={{padding: 10}}>
        <Text style={styles.title}>Good morning!</Text>
        <Text style={styles.text}>What would you like to drink today?</Text>
      </View>
      <View style={{padding: 5, marginVertical: 5}}>
        <FlatList 
        style={{overflow: 'visible',}}

        horizontal
        showsHorizontalScrollIndicator={false}
        data={categories}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => {
          let isActive = item.id === active;
          let activeText = isActive ? '#FFF' : '#230C02';
          return (
            <TouchableOpacity
            onPress={ () => setActive(item.id)}
             style={{backgroundColor: isActive ? '#230C02' : '#FFF5E9',
             padding: 18, marginHorizontal: 10, borderRadius: 25}}>
              <Text style={{color: activeText, fontWeight: 700,}}>
                {item.title}
              </Text>
            </TouchableOpacity>
          )
        }}
        
        />
      </View >

          

      <View style={{marginVertical: 30}} >
        {/* coffee cards */}
        <Carousel loop={true} containerCustomStyle={{overflow: 'visible'}} data ={coffeeItems} renderItem={({item}) => <CoffeeCard item={item} />}firstItem={1} inactiveSlideOpacity={0.75} inactiveSlideScale={0.77} sliderWidth={400} itemWidth={260} slideStyle={{display: 'flex', alignItems: 'center'}} />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  title: {  
    fontSize: 18, 
    alignSelf: 'flex-start', 
    color: '#230C02',
    textTransform: 'uppercase'
  },

  text: {
    fontSize: 24,
    fontWeight: 'bold',
    width: '60%',
    marginVertical: 10,
  }

})

export default HomeScreen


