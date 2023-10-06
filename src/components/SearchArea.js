import React, { useState } from 'react';
import { TouchableOpacity, View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';

import { SearchButton } from './SearchButton'
import { SearchBox } from './SearchBox'
import { SearchResultsPanel } from './SearchResultsPanel'
import { Loading } from './Loading'

const SearchArea = props => {
    
    const [loading, setLoading] = useState(false)
    const [addressResult, setAddressResult] = useState({})
    const [searchTerm, setSearchTerm] = useState('33NmiXDg4dwkidfm67RmKTTgL7en7TvxCw')
    
    async function changeSearchTerm(searchterm) {
        setSearchTerm(searchterm);
    }

    async function getAddressInfo() {
        if(searchTerm?.length < 5) { return setAddressResult('') }
        setLoading(true)
        const res = await fetch(`https://blockchain.info/multiaddr?cors=true&active=${searchTerm}`)
                                .then(response => response.json())
                                .then(data => {return data});
        setAddressResult(res);
        setLoading(false)
    }

    return (
        <View style={styles.SearchAreaContainer}>
            <View style={styles.SearchBoxContainer}>
                <SearchBox onTextChange={changeSearchTerm}/>
                <SearchButton label={'Search'} onPress={getAddressInfo} />
            </View>
            {loading ? <Loading /> : null }
            <SearchResultsPanel addressResult={addressResult} /> 
        </View>
    )
}

const styles = StyleSheet.create({
    SearchAreaContainer: {
        padding:20,
        flex:1, 
    },
    SearchBoxContainer: {
        flexDirection: 'row',
        height:80, marginTop: 10
    }
  });
  
  export {SearchArea};