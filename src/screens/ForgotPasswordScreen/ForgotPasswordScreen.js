import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import CustomInput from '../../components/CustomInput/CustomInput.js'
import CustomButton from '../../components/CustomButton/CustomButton.js';

const ForgotPasswordScreen = () => {
const {control, handleSubmit} =useForm();
const navigation = useNavigation();
const onSendPressed = () => {
  navigation.navigate('ResetPassword');
  };
const onSignInPress = () => {
  navigation.navigate('SignIn');  
};
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>
        <CustomInput name="username" placeholder="Username" control={control}  rules={{
          required: 'Username is required', 
          minLength: {
            value: 3, 
            message: 'Username should be minimum 3 characters long'
          }, 
          maxLenght: {
            value: 24, 
            message: 'Username can`t be more then 24 characters long'
          } 
            }} />
        <CustomButton text="SEND" onPress={handleSubmit(onSendPressed)} />      
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

export default ForgotPasswordScreen;