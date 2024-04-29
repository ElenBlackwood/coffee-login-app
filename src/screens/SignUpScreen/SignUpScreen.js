import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';


import CustomInput from '../../components/CustomInput/CustomInput.js'
import CustomButton from '../../components/CustomButton/CustomButton.js';
import SocialSignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons.js';


const SignUpScreen = () => {
const {control, handleSubmit, watch} =useForm();
const psw = watch('password');
const EMAIL_REGEX = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
const navigation = useNavigation();
const onRegisterPress = () => {
  navigation.navigate('ConfirmEmail'); 
};
const onSignInPress = () => {
  navigation.navigate('SignIn'); 
};
const onTermsOfUsePress = () => {
  console.warn("on terms of use pressed");
  //add Terms of use document
};
const onPrivacyPolicyPress = () => {
  console.warn("on privacy policy pressed");
  //add privacy police
};
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Create an account</Text>
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
        <CustomInput 
        name="email"
        placeholder="Email" 
        control={control}
        rules={{
          required: 'Email Address is required',
          pattern: {
            value: EMAIL_REGEX,
            message: 'Email is invalid'
          }
        }}
        />
        <CustomInput  
        name="password"
        placeholder="Password" 
        control={control}
        rules={{
          required: 'Password is required', 
          minLength: {
            value: 5, 
            message: 'Password should be minimum 5 characters long'
          }
        }}
        secureTextEntry
        />
        <CustomInput  
        name="passwordRepeat"
        placeholder="Repeat Password" 
        control={control}
        rules={{
          validate: value => 
           value === psw || 'Password does not match',          
        }}
        secureTextEntry
        />
        <CustomButton text="Register" onPress={handleSubmit(onRegisterPress)} />
        <Text style={styles.text}>By registering, you confirm that you accept our{' '}
          <Text style={styles.link} onPress={onTermsOfUsePress}>Terms of Use</Text> and{' '}
          <Text style={styles.link} onPress={onPrivacyPolicyPress}>Privacy Policy</Text>
        </Text>
        <SocialSignInButtons />
        <CustomButton text="Have an account? Sign in" onPress={onSignInPress} type="TERTIARY" bColor="transparent" />
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

export default SignUpScreen;