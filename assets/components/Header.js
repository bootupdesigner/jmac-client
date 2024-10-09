import { Image,  StyleSheet, View } from 'react-native'
import React from 'react'
import Logo from '../images/online-logo.png';

const Header = () => {
    return (
            <View style={{ alignItems: 'center', }}>
                <Image alt='JMAC Cleaning Services logo' source={Logo}
                    style={{ width: 200, height: 113 }} />
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