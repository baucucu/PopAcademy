import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';

const Input = ({label, value, onChangeText, palceholder, placeholderTextColor,secureTextEntry}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput 
                autoCorrect={false}
                onChangeText={onChangeText}
                placeholder={palceholder}
                placeholderTextColor={placeholderTextColor}
                style={styles.input}
                secureTextEntry={secureTextEntry}
                value={value}
                label={label}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        width: '100%',
        borderColor: '#eee',
        borderBottomWidth:  2, 
    },
    label: {
        padding: 5,
        paddingBottom: 0,
        color: '#707070',
        fontSize: 17,
        fontWeight: '700',
        width: '100%',
    },
    input: {
        paddingRight: 5,
        paddingLeft: 5,
        paddingBottom: 2,
        color: '#f0f0f0',
        fontSize: 18,
        fontWeight: '700',
        width: "100%"
    }
    
});
 export {Input}