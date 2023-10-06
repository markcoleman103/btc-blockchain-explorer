import React, { useState, useEffect } from 'react';
import { ScrollView, TouchableOpacity, View, Text, StyleSheet, Dimensions, Animated  } from 'react-native';

import { WalletView } from './WalletView'
import { TransactionView } from './TransactionView'

const { width } = Dimensions.get("window");

const SearchResultsPanel = props => {
    
    // const [wallet, setWallet] = useState({});
    // const [transactions, setTransactions] = useState(props.addressResult.txs);
    const [buttonId, setButtonId] = useState('1');
    const [xTabOne, setXTabOne] = useState(0);
    const [xTabTwo, setXTabTwo] = useState(0);
    const [translateX, setTranslateX] = useState(new Animated.Value(0));
    const [translateY, setTranslateY] = useState(-1000);
    const [translateXTabOne, setTranslateXTabOne] = useState(new Animated.Value(0));
    const [translateXTabTwo, setTranslateXTabTwo] = useState(new Animated.Value(width));

    
    const wallet = props.addressResult.wallet;
    const latestBlock = props.addressResult.info?.latest_block;
    const transactions = props.addressResult.txs;

    useEffect(() => {
        if (buttonId == '1') {
            this.handleSlide(xTabOne)
        } else {
            this.handleSlide(xTabTwo)
        }
      }, [buttonId]);

    handleSlide = type => {
        Animated.spring(translateX, {
            toValue: type,
            duration: 100,
            useNativeDriver: true
        }).start();
        if (buttonId === '1') {
            Animated.parallel([
                Animated.spring(translateXTabOne, {
                    toValue: 0,
                    duration: 100,
                    useNativeDriver: true
                }).start(),
                Animated.spring(translateXTabTwo, {
                    toValue: width,
                    duration: 100,
                    useNativeDriver: true
                }).start()
            ]);
        } else {
            Animated.parallel([
                Animated.spring(translateXTabOne, {
                    toValue: -width,
                    duration: 100,
                    useNativeDriver: true
                }).start(),
                Animated.spring(translateXTabTwo, {
                    toValue: 0,
                    duration: 100,
                    useNativeDriver: true
                }).start()
            ]);
        }
    };

    return (
        <View
            // contentInsetAdjustmentBehavior="automatic"
            style={{
                height: '100%',
                flex:1, flexGrow:1, padding:20, display: 'flex',
            }}>
            <View style={{height:50}}>
                <View style={{ flex:1, flexDirection: 'row'}}>
                    <Animated.View
                        style={{
                            position: "absolute",
                            width: "50%",
                            height: "100%",
                            top: 0,
                            left: 0,
                            backgroundColor: "#FCE9BF",
                            borderRadius: 4,
                            transform: [
                                {
                                    translateX: translateX
                                }
                            ]
                        }}
                    />
                    <TouchableOpacity
                        style={{
                            flex: 1,
                            flexDirection: 'row',
                            justifyContent: "center",
                            alignItems: "center",
                            borderWidth: 1,
                            borderColor: "#fff",
                            borderRadius: 4,
                            borderRightWidth: 0,
                            borderTopRightRadius: 0,
                            borderBottomRightRadius: 0
                        }}
                        onLayout={event =>
                            setXTabOne(event.nativeEvent.layout.x)
                        }
                        onPress={() => {
                                setButtonId('1')
                                
                            }
                        }
                    >
                        <Text
                            style={{
                                color: buttonId === '1' ? "#F2A900" : "#fff",
                            }}
                        >
                            Wallet
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            flex: 1,
                            flexDirection: 'row',
                            justifyContent: "center",
                            alignItems: "center",
                            borderWidth: 1,
                            borderColor: "#fff",
                            borderRadius: 4,
                            borderLeftWidth: 0,
                            borderTopLeftRadius: 0,
                            borderBottomLeftRadius: 0
                        }}
                        onLayout={event =>
                            setXTabTwo(event.nativeEvent.layout.x)
                        }
                        onPress={() => {
                                setButtonId('2')

                            }
                        }
                    >
                        <Text
                            style={{
                                color: buttonId === '2' ? "#F2A900" : "#fff",
                            }}
                        >
                            Transactions
                        </Text>
                    </TouchableOpacity>

                    {/* <TabBarButton label={'All'} selected={this.state.buttonSelected} buttonId={'1'} handlePress={this.toggleActivityList } />
                    <TabBarButton label={'My Activities'} selected={this.state.buttonSelected} buttonId={'2'} handlePress={ this.toggleActivityList } count={this.state.myActivities.length} /> */}
                    
                </View>
            </View>
            <ScrollView style={{flex:1, flexGrow:1, padding:20, display: 'flex', }}>
                <Animated.View
                    style={{
                        flex:1, 
                        flexGrow:1, 
                        display: 'flex', 
                        transform: [
                            {
                                translateX: translateXTabOne
                            }
                        ]
                    }}
                    onLayout={event =>
                        setTranslateY(event.nativeEvent.layout.height)
                    }
                >   
                    <WalletView wallet={wallet} />
                </Animated.View>
                <Animated.View
                    style={{
                        flex:1, flexGrow:1,
                        display: 'flex', 
                        transform: [
                            {
                                translateX: translateXTabTwo
                            },
                            {
                                translateY: -(translateY)
                            }
                        ]
                    }}
                >
                    <View>
                        <TransactionView latestBlock={latestBlock} transactions={transactions} />
                    </View>
                </Animated.View>
            </ScrollView>
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
    }
  });
  
  export {SearchResultsPanel};