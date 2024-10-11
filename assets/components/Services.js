import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { services } from '../data'

const Services = () => {
    return (
        <View>
            <Text style={{ ...styles.h2, paddingBottom: 10, }}>Our Commercial Cleaning Services Include But Are Not Limited To:</Text>

            {
                services.map((service, index) => (
                    <View style={{ flexDirection: 'row' }} key={index}>
                        <Text style={{ marginRight: 5, fontWeight: '700', fontSize: 18.72, textIndent: 50, }}>{'\u2022'}</Text>
                        <Text style={{ fontSize: 18.72, textIndent: 5, lineHeight: 24, }}>{service}</Text>
                    </View>
                ))
            }
        </View>
    )
}

export default Services

const styles = StyleSheet.create({
  h2: {
    fontSize: 24,
    fontWeight: "700",
    color: "#38434D",
  },
})