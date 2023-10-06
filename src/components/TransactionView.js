import React from 'react';
import { ScrollView, StyleSheet  } from 'react-native';
import { TransactionItem } from './TransactionItem';

const TransactionView = props => {

    return (
        <ScrollView style={{flex:1, flexGrow:1, display: 'flex', }}>
            { props?.transactions?.map((tx, i) => {
                return <TransactionItem key={i} tx={tx} latestBlock={props.latestBlock} />
            })}
        </ScrollView>
    )
}

const styles = StyleSheet.create({

  });
  
  export {TransactionView};