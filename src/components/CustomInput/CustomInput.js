import { View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import { Controller } from 'react-hook-form';

const CustomInput = ({control, name, rules={}, placeholder, secureTextEntry}) => {
  return ( 
  <Controller 
  control={control} 
  name={name} 
  rules={rules}
  render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
  <>
    <View style={[styles.container, {borderColor:  error ? 'red' : '#967259'}]}>
      <TextInput placeholder={placeholder} 
      value={value}
      onChangeText={onChange}
      onBlur={onBlur}
      style={styles.input}
      secureTextEntry={secureTextEntry}/>              
    </View>{ error && (
      <Text style={{color: 'red', alignSelf: 'stretch'}}>{error.message || 'Error' }</Text>
    )}
  </>
  )} />
  );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EEDCC6',
        width: '100%',
        borderColor: '#967259',
        borderBottomWidth: 1,
        paddingHorizontal: 10,
        marginVertical:10,
      },
    input: {
        color: '#967259',
      },
  });

export default CustomInput;