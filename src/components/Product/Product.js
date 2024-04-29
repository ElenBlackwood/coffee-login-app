import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Product =(props) => {
    const item = props.route.params;
    const navigation = useNavigation();
    const [size, setSize] = useState('small');
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flex: 1, }}>
            <View style={styles.root} >
            </View> 
            <SafeAreaView style={{margin: 10}}>
                <View style={styles.container}>
                    <TouchableOpacity style={{margin: 5}} onPress={() => navigation.goBack()}>
                        <Image source={require('../../../assets/img/arrow.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <Image source={require('../../../assets/img/heart.png')} />
                    </TouchableOpacity>                
                </View >
                <View style={styles.centerContainer}>
                    <Image  source={item.image} />             
                </View>
                <View style={styles.textHolder}>
                    <Text style={styles.title}>{item.name}</Text>
                    <View style={styles.star}>
                        <Image source={require('../../../assets/img/star.png')} />
                        <Text style={styles.text}>{item.stars}</Text>
                    </View>
                </View>
                <View style={styles.centerContainer}>
                    <Text style={{fontSize: 24, fontWeight: 500, color: '#EEDCC6',}}>Price: $ {item.price}</Text>
                </View>
                <View style={{marginVertical: 30,}}>
                    <Text style={styles.subtitle}>Coffee Size:</Text>
                    <View style={styles.container}>
                        <TouchableOpacity
                            onPress={() => setSize('small')}
                            style={{
                                backgroundColor: size =='small' ? '#3B2C26' : '#584E49',
                                padding: 15,
                                borderRadius: 25,
                                marginVertical: 15,
                                width: 100,
                                alignItems: 'center',
                                borderWidth: size == 'small' ? 1 : 0,
                                borderColor: size == 'small' ? '#F2994A' : 'transparent',             
                            }}>
                            <Text style={{color: size == 'small' ? '#FFF5E9' : '#AEAEAE', }}>Small</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => setSize('medium')}
                            style={{
                                backgroundColor: size =='medium' ? '#3B2C26' : '#584E49',
                                padding: 15,
                                borderRadius: 25,
                                marginVertical: 15,
                                width: 100,
                                alignItems: 'center',
                                borderWidth: size == 'medium' ? 1 : 0,
                                borderColor: size == 'medium' ? '#F2994A' : 'transparent', 
                                }}>
                            <Text style={{color: size == 'medium' ? '#FFF5E9' : '#AEAEAE', }}>Medium</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => setSize('large')}
                            style={{
                                backgroundColor: size =='large' ? '#3B2C26' : '#584E49',
                                padding: 15,
                                borderRadius: 25,
                                marginVertical: 15,
                                width: 100,
                                alignItems: 'center',
                                borderWidth: size == 'large' ? 1 : 0,
                                borderColor: size == 'large' ? '#F2994A' : 'transparent',   
                            }}>
                            <Text style={{color: size == 'large' ? '#FFF5E9' : '#AEAEAE', }}>Large</Text>
                        </TouchableOpacity>
                    </View>                
                </View>
                <View style={{marginBottom: 10}}>
                    <Text style={styles.subtitle}>  About:</Text>
                    <Text style={{color: '#230C02', marginVertical: 5,}}>{item.desc}</Text>
                </View>
                <View style={{
                    flexDirection:'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    height: 80
                    }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 10                
                    }}>
                        <Text style={{
                            fontSize: 16,
                            color: '#847169',
                            fontWeight: 500
                        }}>Volume</Text>
                        <Text style={{
                            fontSize: 16,
                            color: '#584E49',
                            fontWeight: 500
                        }}>{item.volume}</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 25,
                        borderColor: '#3B2C26',
                        borderWidth: 2,
                        borderRadius: 30,
                        padding: 10,
                        width: 150,
                        justifyContent: 'center'
                    }}>
                        <TouchableOpacity>
                            <Image style={{width: 15, height: 15}} source={require('../../../assets/img/minus.png')} />
                        </TouchableOpacity>
                        <Text style={{color: '#3B2C26', fontSize: 18, fontWeight: 900,}}>2</Text>
                        <TouchableOpacity>
                            <Image style={{width: 15, height: 15}} source={require('../../../assets/img/plus.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.container}>
                    <TouchableOpacity style={{
                        padding: 5,
                        borderWidth: 1,
                        borderRadius: 20,
                        borderColor: '#3B2C26'
                    }}>
                        <Image source={require('../../../assets/img/bag.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        borderRadius: 30,
                        backgroundColor: '#3B2C26',
                        padding: 10,
                        width: 300,                  
                    }}>
                        <Text style={{color: '#EEDCC6', fontSize: 18, fontWeight: 700, textAlign: 'center' }}>Buy now</Text>
                    </TouchableOpacity>
                </View>      
            </SafeAreaView>
        </View>
    </ScrollView>
  )
};

    const styles = StyleSheet.create ({
        root: {
            backgroundColor: '#230C02',
            height: 300, 
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            width: '100%', 
            position: 'absolute'
        },
        topContainer: {
            backgroundColor: '#230C02',
            height: 300, 
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            width: '100%', 
            position: 'absolute',        
        },
        container: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        centerContainer: {
            flexDirection:'row', 
            alignItems: 'center',
            justifyContent: 'center'
        },
        textHolder: {
            flexDirection:'row',  
            alignItems:'center',
            justifyContent: 'space-around',
            marginVertical: 20,
        },
        title: {
            fontSize: 40,
            color: '#FFF5E9',
            fontWeight: "500",
        },
        text: {
            color: '#F2994A',
            fontSize: 17,
            fontWeight: "700"
        },
        star: {
            flexDirection:'row', 
            alignItems: 'center', 
            gap: 7, 
            padding: 7, 
            width: 70, 
            borderRadius: 30, 
            marginVertical: 15,
            backgroundColor: 'rgba(255,255, 255, 0.2)'
        },
        subtitle: {
            fontSize: 16,  
            fontWeight: "500", 
            color: '#230C02'
        }
    });

export default Product;