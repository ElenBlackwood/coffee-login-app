import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const CoffeeCard = ({item}) => {
  const navigation = useNavigation();
  return (
    <View style={{
      borderRadius: 40,
      backgroundColor: '#3B2C26',
      height: 350,
      width: 250,
      padding: 20,      
      shadowColor: 'black',
      shadowRadius: 2,
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.8,
      elevation: 8 
    }}>
      <View  style={{        
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 5,
      }}>
        <Image source={item.image}/>
      </View>
      <View>
        <Text style={{fontSize: 30, color: '#FFF5E9', fontWeight: 500, }}>{item.name}</Text>
        <View style={{backgroundColor: 'rgba(255,255, 255, 0.2)', flexDirection:'row', alignItems: 'center', gap: 7, padding: 7, width: 70, borderRadius: 30, marginVertical: 10}}>
          <Image source={require('../../../assets/img/star.png')} />
          <Text style={{
          color: '#F2994A',
          fontSize: 17,
          fontWeight: 700,}}>{item.stars}</Text>
        </View>
        <View style={{flexDirection:'row', gap: 7, marginVertical: 20, zIndex: 10,}}>
            <Text style={{fontSize: 16, fontWeight: 700, opacity: 0.5, color: '#FFF5E9',  }}>Volume:</Text>
            <Image source={require('../../../assets/img/cup.png')} />
            <Text style={{fontSize: 16, fontWeight: 700, color: '#FFF5E9'}}>{item.volume}</Text>
        </View>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <Text style={{fontSize: 20, fontWeight: 900, color: '#FFF5E9',}}>$ {item.price}</Text>
          <TouchableOpacity onPress={() => {navigation.navigate('Product', {...item})}} style={{backgroundColor: '#EEDCC6',  borderRadius: 40, padding: 15, width: '25%', alignItems: 'center'}}>
          <Image source={require('../../../assets/img/plus.png')} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CoffeeCard;