import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native'
import Colors from '../constants/Colors';
import styled from 'styled-components';

export default function MyButton({title, subtitle, onPress}) {
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>
                <View style={styles.button}>
                    {title ? <Text style={styles.titleText}>{title}</Text> : null}
                    {subtitle ? <Text style={styles.subtitleText}>{subtitle}</Text> : null}
                </View>
            </TouchableOpacity>
        </View>
    );
}




const styles = StyleSheet.create({
    container: {
        paddingVertical: 20
    },
    button : {
        borderRadius: 8,
        paddingVertical: 14 ,
        paddingHorizontal: 10,
        backgroundColor: '#f0f0f0'
    },
    titleText: {
        color: 'black',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
        textAlign: 'center'
    },
    subtitleText: {
        color: 'black',
        fontWeight: 'normal',
        textTransform: 'capitalize',
        fontSize: 13,
        textAlign: 'center'
    }
}) 