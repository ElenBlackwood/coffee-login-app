import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import CustomInput from '../../components/CustomInput/CustomInput.js'
import CustomButton from '../../components/CustomButton/CustomButton.js';

const ConfirmEmailScreen = () => {
const {control, handleSubmit} = useForm();
const navigation = useNavigation();
const onConfirmPressed = () => {
  navigation.navigate('HomeScreen');
};
const onSignInPress = () => {
  navigation.navigate('SignIn');
};
const onResendPressed = () => {
  console.warn("onResendPressed")
}

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Confirm Your Email</Text>
        <CustomInput 
        name="code"
        placeholder="Enter your confirmation code" 
        control={control}
        rules={{
          required: 'Confirmation code is required'
        }}
        />
        <CustomButton text="Confirm" onPress={handleSubmit(onConfirmPressed)} />
        <CustomButton text="Resend code" onPress={onResendPressed} type="SECONDARY" />
        <CustomButton text="Back to Sign In" onPress={onSignInPress} type="TERTIARY" />      
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: '#EEDCC6',
  },  
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#230C02",
    margin: 10,
  },

  text: {
    color: "#7A665D",
    marginVertical: 10
  },

  link: {
    color: "#FF7262"
  }
});

export default ConfirmEmailScreen;