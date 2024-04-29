import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import CustomInput from '../../components/CustomInput/CustomInput.js'
import CustomButton from '../../components/CustomButton/CustomButton.js';

const ResetPasswordScreen = () => {  
const {control, handleSubmit} = useForm();
const navigation = useNavigation();
const onSubmitPressed = () => {
  navigation.navigate('HomeScreen');
};
const onSignInPress = () => {
  navigation.navigate('SignIn');
};
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>
        <CustomInput 
        name="code" 
        placeholder="Code" 
        control={control}  
        rules={{
          required: 
          'Code is required'
          }} />
        <CustomInput 
        name="newPassword"
        placeholder="New password" 
        control={control} 
        rules={{ 
          required: 'New password is required'
        }}  />
        <CustomButton text="SUBMIT" onPress={handleSubmit(onSubmitPressed)} />
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
    margin: 10
  },

  text: {
    color: "#7A665D",
    marginVertical: 10
  },
  link: {
    color: "#FF7262"
  }
});

export default ResetPasswordScreen;