import React, { useState } from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

const SearchButton = props => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={styles.buttonContainer}>
                <Text style={styles.buttonLabel}>{props.label}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        backgroundColor: '#f2a900',
        width: 100,
        height:50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonLabel: {
      fontWeight: '700',
      color: 'white'
    },
  });
  
  export { SearchButton };