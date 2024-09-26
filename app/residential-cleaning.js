import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../assets/components/Header'

const residential = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Header/>
        <View style={{paddingHorizontal:10,}}>
        <Text style={styles.h1}>Residential Cleaning</Text>

        </View>
      </View>
    </SafeAreaView>
  )
}

export default residential


const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ?
      StatusBar.currentHeight : 0,
  },
  h1: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: 'center',
  },
  h2: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#38434D",
  },
  h3: {
    fontSize: 18.72,
    fontWeight: "bold",
  },
  h4: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#38434D",
  },
});