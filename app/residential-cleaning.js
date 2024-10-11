import { Platform, ScrollView,SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../assets/components/Header'
import ContactHeader from '../assets/components/ContactHeader'

const residential = () => {
  return (
    <SafeAreaView style={styles.container}>
    <StatusBar
      backgroundColor={'white'} />
    <ScrollView
      showsVerticalScrollIndicator={false} stickyHeaderIndices={[0]} >
       
       <ContactHeader/>
        <Header/>
        <View style={{paddingHorizontal:10,}}>
        <Text style={styles.h1}>Residential Cleaning</Text>

        </View>
        <View 
        style={{
          alignItems:'center',
          justifyContent:'center',
          height:400,
          paddingHorizontal:10
          }}>
          <Text style={{...styles.h2,textAlign:'center',}}>This Page is Under Construction</Text>
        </View>
      </ScrollView>
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