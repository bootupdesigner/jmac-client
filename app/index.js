import { StyleSheet, Text, View, SafeAreaView, ScrollView, StatusBar, Platform } from "react-native";
import Head from 'expo-router/head';
import Header from "../assets/components/Header";
import CommercialServices from "../assets/components/CommercialServices";


const services = [
  {
    tasks: [
      {
        duty: 'Lawn Maintenance',
        description: `We make enjoying the view of your neighborhood parks a happy and refreshing experience. Lawn mowing, edging, weed eating, trimming hedges and trees, and fighting those stubborn weeds. We make your parks look beautiful.`
      },
      {
        duty: 'Restroom Cleaning',
        description: `Public restrooms need cleaning every few hours to ensure the community feels comfortable and clean when they use park facilities. We restock soaps, toilet papers, and keep the restrooms clean and smelling fresh.`
      },
      {
        duty: 'Trash Removal',
        description: `Emptying the trash daily helps keep our parks clean and trash from overflowing. We remove litter and debris from trees.`
      },
    ],
  }
];

export default function Page() {
  return (
    <>
      <Head>
        <title>JMAC Cleaning Services</title>
        <meta name="description" content="Commercial cleaning services serving private and public entities. Cleaning homes, offices, warehouses, roadways, public restrooms, and contruction sites. Caring for the community we live in." />
      </Head>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.container}>

            <Header />

            <View style={{ paddingHorizontal: 10, }}>
              <Text style={styles.h1}>Commercial Cleaning Services</Text>

              <Text style={{ ...styles.h4, textAlign: 'center', paddingVertical: 2, }}>Keeping your community and home beautiful.</Text>
            </View>

            <View style={{
              padding: 30,
            }}>
              <Text style={{ fontSize: 16, lineHeight: 24,paddingBottom:10,}}>Our commercial cleaning services meet the needs of the community and private businesses. We clean parks, warehouse, roadways, event halls, public restrooms, construction sites, and residential communities. We take pride in ensuring your community stays beautiful and refreshing.</Text>

              {services.map((service, index) => (
                <CommercialServices
                key={index}
                  task={service.tasks}
                />

              ))}
            </View>


          </View>
        </ScrollView>
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
