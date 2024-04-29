import React from 'react';
import { StyleSheet, View, Image, useWindowDimensions, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useForm } from "react-hook-form"; 
import Logo from '../../../assets/img/logo.png';
import CustomInput from '../../components/CustomInput/CustomInput.js'
import CustomButton from '../../components/CustomButton/CustomButton.js';
import SocialSignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons.js';

const SignInScreen = () => {
const {control, handleSubmit} = useForm();
const {height} = useWindowDimensions();
const navigation = useNavigation();
const onSignInPress = (data) => {
  console.log(data);
  navigation.navigate('HomeScreen');
};
const onForgotPasswordPress = () => {
  navigation.navigate('ForgotPassword');
};
const onSignUpPress = () => {
  navigation.navigate('SignUp');  
};

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image source={Logo} style={[styles.logo, {height: height * 0.3}]} resizeMode='contain' />
        <CustomInput 
        name="username" 
        placeholder="Username"
        control={control}
        rules={{
          required: 'Username is required', 
          minLength: {value: 3, message: 'Username should be minimum 3 characters long'} 
        }} />
        <CustomInput  
        name="password"
        placeholder="Password" 
        control={control}
        rules={{
          required: 'Password is required', 
          minLength: {value: 5, message: 'Password should be minimum 5 characters long'}
        }}
        secureTextEntry
        />
        <CustomButton text="Sign In" onPress={handleSubmit(onSignInPress)} />
        <CustomButton text="Forgot password?" onPress={onForgotPasswordPress} type="SECONDARY" />
        <SocialSignInButtons />   
        <CustomButton text="Don't have an account? Create one" onPress={onSignUpPress} type="TERTIARY" bColor="transparent" />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },  
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
  },
});

export default SignInScreen;