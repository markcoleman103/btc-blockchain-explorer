import React, { useState } from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';


const SearchResultsPanel = props => {
    
    const [addressResult, setAddressResult] = useState({})
    const [searchTerm, setSearchTerm] = useState({})
    
    async function changeSearchTerm(searchterm) {

        setSearchTerm(searchterm);
    }

    async function getAddressInfo() {

        if(searchTerm?.length < 5) {
            return setAddressResult({})
        }

        const res = await fetch(`https://blockchain.info/multiaddr?cors=true&active=${searchTerm}`);
        setAddressResult(res);
    }

    return (
        <ScrollView
                // contentInsetAdjustmentBehavior="automatic"
                style={{
                    backgroundColor: 'pink',
                    height: '100%',
                    flex:1, flexGrow:1, padding:20, display: 'flex',
                }}>

                <Text>{'Result 1'}</Text>
                <Text>{'Result 1'}</Text>
                <Text>{'Result 1'}</Text>
                <Text>{'Result 1'}</Text>
                <Text>{'Result 1'}</Text>
                <Text>{'Result 1'}</Text>
                <Text>{'Result 1'}</Text>
                <Text>{'Result 1'}</Text>
                <Text>{'Result 1'}</Text>
                <Text>{'Result 1'}</Text>
                <Text>{'Result 1'}</Text>
                <Text>{'Result 1'}</Text>
                <Text>{'Result 1'}</Text>
                <Text>{'Result 1'}</Text>
                <Text>{'Result 1'}</Text>
                <Text>{'Result 1'}</Text>
                <Text>{'Result 1'}</Text>
                <Text>{'Result 1'}</Text>
                <Text>{'Result 1'}</Text>
                <Text>{'Result 1'}</Text>
                <Text>{'Result 1'}</Text>
                <Text>{'Result 1'}</Text>
                <Text>{'Result 1'}</Text>
                <Text>{'Result 1'}</Text>
                <Text>{'Result 1'}</Text>
                <Text>{'Result 1'}</Text>
                <Text>{'Result 1'}</Text>
                <Text>{'Result 1'}</Text>
                <Text>{'Result 1'}</Text>
                <Text>{'Result 1'}</Text>
                <Text>{'Result 1'}</Text>
                <Text>{'Result 1'}</Text>
                <Text>{'Result 1'}</Text>
                <Text>{'Result 1'}</Text>
                <Text>{'Result 1'}</Text>
                <Text>{'Result 1'}</Text>
                <Text>{'Result 1'}</Text>
                <Text>{'Result 1'}</Text>
                <Text>{'Result 1'}</Text>
                <Text>{'Result 1'}</Text>
                <Text>{'Result 1'}</Text>
                <Text>{'Result 1'}</Text>
                <Text>{'Result 1'}</Text>
                <Text>{'Result 1'}</Text>
                <Text>{'Result 1'}</Text>
                <Text>{'Result 1'}</Text>
                <Text>{'Result 1'}</Text>
                <Text>{'Result 1'}</Text>
                <Text>{'Result 1'}</Text>
                <Text>{'Result 1'}</Text>
                <Text>{'Result 1'}</Text>
                <Text>{'Result 1'}</Text>
                <Text>{'Result 1'}</Text>
                <Text>{'Result 1'}</Text>
                <Text>{'Result 1'}</Text>
                <Text>{'Result 1'}</Text>
                <Text>{'Result 1'}</Text>
                <Text>{'Result 1'}</Text>
                <Text>{'Result 1'}</Text>
                <Text>{'Result 1'}</Text>
                <Text>{'Result 1'}</Text>
                <Text>{'Result 1'}</Text>
                <Text>{'Result 1'}</Text>
                <Text>{'Result 1'}</Text>
                <Text>{'Result 1'}</Text>
                <Text>{'Result 1'}</Text>
                <Text>{'Result 1'}</Text>
                <Text>{'Result 1'}</Text>
                <Text>{'Result 1'}</Text>
                <Text>{'Result 1'}</Text>
                <Text>{'Result 1'}</Text>
                <Text>{'Result 1'}</Text>
                <Text>{'Result 1'}</Text>
                <Text>{'Result 1'}</Text>
                <Text>{'Result 1'}</Text>
                <Text>{'Result 1'}</Text>
            {/* <Text>{JSON.stringify(addressResult)}</Text> */}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    SearchAreaContainer: {
        height: 250,
        padding:20
    },
    SearchBoxContainer: {
        flexDirection: 'column',
    }
  });
  
  export {SearchResultsPanel};