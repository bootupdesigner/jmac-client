import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Feather from '@expo/vector-icons/Feather';

const ContactHeader = () => {
  return (
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
            width:'50%',
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
  )
}

export default ContactHeader

const styles = StyleSheet.create({})