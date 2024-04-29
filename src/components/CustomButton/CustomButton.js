import { View, Text, StyleSheet, Pressable} from 'react-native'
import React from 'react'

const CustomButton = ({onPress, text, type = "PRIMARY", bgColor, fgColor}) => {
  return (
    <Pressable 
        onPress={onPress} 
        style={[
        styles.container, 
        styles[`container_${type}`],
        bgColor ? {backgroundColor: bgColor} : {}
        ]}>
      <Text style={[
        styles.text, 
        styles[`text_${type}`],
        fgColor ? {color: fgColor} : {}
        ]}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create ({
    container : {
        width: '100%',
        padding: 15,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 25,
    },

    container_PRIMARY: {
        backgroundColor: '#230C02',
    },

    container_SECONDARY: {
        borderColor: '#230C02',
        borderWidth: 1,
    },

    text: {
        fontWeight: 'bold',
        color: 'white',
    },

    text_SECONDARY: {
        color: '#230C02',
    },

    text_TERTIARY: {
        color: '#230C02',

    },
})

export default CustomButton