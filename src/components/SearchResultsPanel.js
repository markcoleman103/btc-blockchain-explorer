import React from 'react';
import { TabView } from './TabView'
import { WalletView } from './WalletView'
import { TransactionView } from './TransactionView'


const SearchResultsPanel = props => {

    const wallet = props.addressResult.wallet;
    const latestBlock = props.addressResult.info?.latest_block;
    const transactions = props.addressResult.txs;

    return (
        <TabView 
            buttonLabels={["Address","Transactions"]} 
            content={[
                <WalletView wallet={wallet} />,
                <TransactionView latestBlock={latestBlock} transactions={transactions} />
            ]} 
        />
    )
}

export {SearchResultsPanel};