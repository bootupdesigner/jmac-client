import {  Image, Linking, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Logo from '../assets/images/online-logo.png';
import Feather from '@expo/vector-icons/Feather';

const Header = () => {
    return (
        <View>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                padding: 10,
                backgroundColor: 'black',
            }}>

                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                    <Feather name="phone-call" size={16} color="white" />
                    <Text
                        style={{

                            paddingHorizontal: 5, color: 'white', fontWeight: 'bold', fontSize: 16
                        }}
                        onPress={() => Linking.openURL("tel:+13057937944")}>Call</Text>
                </View>

                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                    <Feather name="mail" size={16} color="white" />
                    <Text
                        style={{
                            paddingHorizontal: 5, color: 'white', fontWeight: 'bold', fontSize: 16
                        }}
                        onPress={() => Linking.openURL("mailto:jmaccleaningservices@gmail.com")}>Email</Text>
                </View>
            </View>

          

        </View>

    )
}

export default Header

const styles = StyleSheet.create({
    h1: {
        fontSize: 32,
        fontWeight: "bold",
    },
    h2: {
        fontSize: 24,
        color: "#38434D",
    },
})