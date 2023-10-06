import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const WalletView = props => {

    return (
        <View>
            <View style={styles.fieldColumn}>
                <Text style={styles.fieldHeaderColumn}>{'Current Balance '}</Text>
                <Text style={styles.fieldValueColumn}>{props.wallet?.final_balance}</Text>
            </View> 
            <View style={styles.fieldRow}>
                <Text style={styles.fieldHeader}>{'Confirmed Txs'}</Text>
                <Text style={styles.fieldValue}>{props.wallet?.n_tx || '-'}</Text>
            </View> 
            <View style={styles.fieldRow}>
                <Text style={styles.fieldHeader}>{'Total Received '}</Text>
                <Text style={styles.fieldValue}>{props.wallet?.total_received || '-'}</Text>
            </View> 
            <View style={styles.fieldRow}>
                <Text style={styles.fieldHeader}>{'Total Spent '}</Text> 
                <Text style={styles.fieldValue}>{props.wallet?.total_sent || '-'}</Text>
            </View> 
            <View style={styles.fieldRow}>
                <Text style={styles.fieldHeader}>{'Total Unspent '}</Text>
                <Text style={styles.fieldValue}>{(props.wallet?.total_received - props.wallet?.total_sent) || '-'}</Text>
            </View> 
        </View>
    )
}

const styles = StyleSheet.create({
    SearchAreaContainer: {
        height: 250,
        padding:20
    },
    SearchBoxContainer: {
        flexDirection: 'column',
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
        marginBottom: 5,
        textAlign:'center'
    },
    fieldValueColumn: {
        color:'#f2f2f2',
        fontSize: 30,
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
        flex:1,
    },
    fieldValue: {
        color:'#f2f2f2',
        fontSize: 16,
        width:100
    }
  });
  
  export {WalletView};