import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


const CommercialServices = ({
    icon,
    iconColor,
    title,
    duty,
    description,
    task,
}) => {
    return (
        <View>
            <Text style={{...styles.h2,paddingBottom:10,}}>Our Commercial Cleaning Services Include But Are Not Limited To:</Text>

                {task.map((task, index) => (
                    <View key={index}>
                        <Text style={{ fontSize: 16, fontWeight: '700',lineHeight:24, }}>{task.duty}</Text>
                        <Text style={{ fontSize: 16,lineHeight:24, }}>{task.description}</Text>
                    </View>
                ))}
        </View>
    )
}

export default CommercialServices

const styles = StyleSheet.create({
    h1: {
        fontSize: 32,
        fontWeight: "700",
        textAlign: 'center',
        lineHeight:24,
    },
    h2: {
        fontSize: 24,
        fontWeight: "700",
        lineHeight:24,
        color: "#38434D",
    },
    h3: {
        fontSize: 18.72,
        fontWeight: "700",
        lineHeight:24,
    },
    h4: {
        fontSize: 16,
        fontWeight: "700",
        color: "#38434D",
        lineHeight:24,
    },
    h5: {
        fontSize: 13.28,
        fontWeight: "700",
        lineHeight:24,
    },
    h6: {
        fontSize: 10.72,
        lineHeight:24,
        fontWeight: "700",
        color: "#38434D",
    },
})