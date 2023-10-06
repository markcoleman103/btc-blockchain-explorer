import React, { useState } from 'react';
import { TouchableOpacity, View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';

import { SearchButton } from './../components/SearchButton'
import { SearchBox } from './../components/SearchBox'
import { SearchResultsPanel } from './../components/SearchResultsPanel'
import { Loading } from './../components/Loading'

import { blockchainUrl } from './../utils/consts'

export const SearchScreen = () => {
    
    const [loading, setLoading] = useState(false)
    const [addressResult, setAddressResult] = useState({})
    const [searchTerm, setSearchTerm] = useState('33NmiXDg4dwkidfm67RmKTTgL7en7TvxCw')
    
    async function changeSearchTerm(searchterm) {
        setSearchTerm(searchterm);
    }

    async function getAddressInfo() {
        if(searchTerm?.length < 5) { return setAddressResult('') }
        setLoading(true)
        const res = await fetch(`${blockchainUrl}${searchTerm}`)
                                .then(response => response.json())
                                .then(data => {return data});
        setAddressResult(res);
        setLoading(false)
    }

    return (
        <View style={styles.SearchAreaContainer}>
            <View style={styles.SearchBoxContainer}>
                <SearchBox value={searchTerm} onTextChange={changeSearchTerm}/>
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
  