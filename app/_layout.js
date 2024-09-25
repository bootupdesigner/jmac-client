import Ionicons from '@expo/vector-icons/Ionicons';

import { Tabs } from 'expo-router';

export default function Layout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue',
        headerShown:false
     }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Commercial Cleaning',
          tabBarIcon: ({color}) => <Ionicons name="business-sharp" size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="residential-cleaning"
        options={{
          title: 'Residential Cleaning',
          tabBarIcon: ({color}) => <Ionicons name="home" size={28} color={color} />,
        }}
      />
    </Tabs>
  );
}
