import { Dimensions, Image, Pressable, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const {width,height}=Dimensions.get("window");
const Intro = ({navigation}) => {
  return (
    <SafeAreaView>
            <Image
            style={{ width:width, height:height,position:'absolute'}}
            source={{uri:'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dWJlciUyMGNhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60'}} 
            resizeMode="cover">
            </Image>
            <Text style={{fontSize:50,fontWeight:"700", color:"white",marginTop:440}}>Welcome to {"\n"}Ecstasy Rider</Text>
            <Text style={{fontSize:17, fontWeight:"600", color:"white",marginTop:10}}>School trip? Corporate event? Wedding?{"\n"}Whatever the occasion, Ecstasy Rider has you covered
            </Text>
            <View style={{marginTop:50, marginLeft:5}}>
                  <TouchableOpacity 
                     onPress={()=> navigation.navigate('Login')}>
                      <View style={{width:width-10,height:40,backgroundColor:'#3caea3',justifyContent:"center",alignItems:"center",borderRadius:5}}>   
                        <Text style={{color:"white"}}>
                          LOGIN
                        </Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                         onPress={()=> navigation.navigate('SignUp')} >
                        <View style={{width:width-10,height:40,backgroundColor:'#3caea3',justifyContent:"center",alignItems:"center",marginTop:10,borderRadius:5}}>   
                            <Text style={{color:"white"}}>
                              SIGN UP
                            </Text>
                        </View>
                    </TouchableOpacity>
               </View>
    </SafeAreaView>
    
  )
}

export default Intro

const styles = StyleSheet.create({})