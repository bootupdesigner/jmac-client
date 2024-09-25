import { StyleSheet, Text, View, SafeAreaView, StatusBar, Platform } from "react-native";
import Head from 'expo-router/head';
import Header from "../assets/components/Header";
export default function Page() {
  return (
    <>
      <Head>
        <title>JMAC Cleaning Services</title>
        <meta name="description" content="Commercial and residential cleaning service, serving private and public entities. Cleaning homes, offices, and public spaces, tcaring for the community we live in." />
      </Head>
      <SafeAreaView>
        <View style={styles.container}>
          <Header />
          <View style={{paddingHorizontal:10,}}>
            <Text style={styles.h1}>Commercial Cleaning</Text>
            <Text style={{ ...styles.h3, textAlign: 'center', paddingVertical: 2, }}>JMAC Cleaning Services</Text>
            <Text style={{ ...styles.h4, textAlign: 'center', paddingVertical: 2, }}>Keeping your community and home beautiful.</Text>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}

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
