import React from 'react';
import { TouchableOpacity, View, TextInput, StyleSheet } from 'react-native';

const SearchBox = props => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={styles.boxContainer}>
                <TextInput value={props.value} onChangeText={props.onTextChange} />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    boxContainer: {
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        borderColor: '#f2a900',
        borderWidth: 1,
        width: 250,
        paddingLeft:5,
        paddingRight: 5
    },
    buttonLabel: {
      fontWeight: '700',
      color: 'white'
    },
  });
  
  export { SearchBox };