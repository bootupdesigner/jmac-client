import { Image , TouchableOpacity } from 'react-native'
import React from 'react'
import Logo from '../images/online-logo.png';
import { router } from 'expo-router';

const Header = () => {
    return (
            <TouchableOpacity 
            onPress={()=> router.push('/')}
            activeOpacity={0.5}
            style={{ alignItems: 'center', }}>
                <Image alt='JMAC Cleaning Services logo' source={Logo}
                    style={{ width: 200, height: 113 }} />
            </TouchableOpacity>
    )
}

export default Header
