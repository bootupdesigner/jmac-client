import { StyleSheet, Text, View, SafeAreaView, ScrollView, StatusBar,  } from "react-native";
import Head from 'expo-router/head';
import Header from "../assets/components/Header";
import Tasks from "../assets/components/Tasks";
import { tasks } from "../assets/data";
import ContactHeader from "../assets/components/ContactHeader";
import Services from "../assets/components/Services";

export default function Page() {
  return (
    <>
      <Head>
        <title>JMAC Cleaning Services</title>
        <meta name="description" content="Commercial cleaning services, serving private and public entities. Cleaning homes, offices, warehouses, roadways, public restrooms, and contruction sites. Caring for the community we live in." />
      </Head>
      <SafeAreaView style={styles.container}>
        <StatusBar
          backgroundColor={'white'} />
        <ScrollView
          showsVerticalScrollIndicator={false} stickyHeaderIndices={[0]} >
           
           <ContactHeader/>

          <Header />

          <View style={{ paddingHorizontal: 10, }}>
            <Text style={styles.h1}>Commercial Cleaning Services</Text>

            <Text style={{ ...styles.h4, textAlign: 'center', paddingVertical: 2, }}>Keeping your community and home beautiful.</Text>
          </View>

          <View style={{
            padding: 30,
          }}>
            <Text style={{ fontSize: 16, lineHeight: 24, paddingBottom: 10, }}>Our commercial cleaning services meet the needs of the community and private businesses. We clean parks, warehouse, roadways, event halls, public restrooms, construction sites, and residential communities. We take pride in ensuring your community stays beautiful and refreshing.</Text>

           <Services/>


            <Tasks
              task={tasks}
            />
          </View>

        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  h1: {
    fontSize: 32,
    fontWeight: "700",
    textAlign: 'center',
  },
  h2: {
    fontSize: 24,
    fontWeight: "700",
    color: "#38434D",
  },
  h3: {
    fontSize: 18.72,
    fontWeight: "700",
  },
  h4: {
    fontSize: 16,
    fontWeight: "700",
    color: "#38434D",
  },
  h5: {
    fontSize: 13.28,
    fontWeight: "700",
  },
  h6: {
    fontSize: 10.72,
    fontWeight: "700",
    color: "#38434D",
  },
});