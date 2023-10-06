import React from 'react';
import { View, Text, StyleSheet  } from 'react-native';

const TransactionItem = props => {

    const latestBlock = props?.latestBlock

    displayCroppedHash = (hash) => {
        if(!hash){
            return '-'
        }
        return `${hash.substring(0,4)}-${hash.substring(hash.length-4,hash.length)}`
    }

    return (
        <View style={styles.item}>
  
            <View style={styles.fieldColumn}>
                <Text style={styles.fieldHeaderColumn}>{'Hash '}</Text>
                <Text style={styles.fieldValueColumn}>{displayCroppedHash(props?.tx?.hash)}</Text>
            </View> 
            <View style={styles.fieldRow}>
                <Text style={styles.fieldHeader}>{'Time '}</Text>
                <Text style={styles.fieldValue}>{props?.tx?.time || '-'}</Text>
            </View> 
            <View style={styles.fieldRow}>
                <Text style={styles.fieldHeader}>{'Total Spent '}</Text> 
                <Text style={styles.fieldValue}>{props?.tx?.status || '-'}</Text>
            </View> 
            <View style={styles.fieldRow}>
                <Text style={styles.fieldHeader}>{'Size '}</Text>
                <Text style={styles.fieldValue}>{(props?.tx?.size) || '-'}</Text>
            </View> 
            <View style={styles.fieldRow}>
                <Text style={styles.fieldHeader}>{'No. Confirmations '}</Text>
                <Text style={styles.fieldValue}>{(parseInt(latestBlock?.height) - parseInt(props?.tx?.block_height)) + 1 || '-'}</Text>
            </View> 
            <View style={styles.fieldRow}>
                <Text style={styles.fieldHeader}>{'No. Inputs '}</Text>
                <Text style={styles.fieldValue}>{(props?.tx?.vin_sz) || '-'}</Text>
            </View> 
            <View style={styles.fieldRow}>
                <Text style={styles.fieldHeader}>{'No. Outputs '}</Text>
                <Text style={styles.fieldValue}>{(props?.tx?.vout_sz) || '-'}</Text>
            </View> 
            <View style={styles.fieldRow}>
                <Text style={styles.fieldHeader}>{'Fee '}</Text>
                <Text style={styles.fieldValue}>{(props?.tx?.fee) || '-'}</Text>
            </View> 

        </View>
    )
}

const styles = StyleSheet.create({
    item: { 
        borderBottomWidth:1, 
        borderBottomColor: '#f2f2f2',
        marginBottom: 20,
        paddingBottom: 20
    },
    fieldColumn: {
        marginTop: 5,
        marginBottom: 5,
        flexDirection: 'column',
        textAlign:'center'
    }, 
    fieldHeaderColumn: {
        color:'#b6b6b6',
        fontSize: 16,
        textAlign:'center'
    },
    fieldValueColumn: {
        color:'#f2f2f2',
        fontSize: 20,
        flex:1,
        textAlign:'center',
        marginBottom: 20
    },
    fieldRow: {
        marginTop: 5,
        marginBottom: 5,
        flexDirection: 'row',
    },
    fieldHeader: {
        color:'#b6b6b6',
        fontSize: 16,
        width:150
    },
    fieldValue: {
        color:'#f2f2f2',
        fontSize: 16,
        flex:1,
    }
  });
  
  export {TransactionItem};