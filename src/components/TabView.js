import React, { useState, useEffect } from 'react';
import { ScrollView, TouchableOpacity, View, Text, StyleSheet, Dimensions, Animated  } from 'react-native';

const { width } = Dimensions.get("window");

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();

const TabView = props => {
    
    const [buttonId, setButtonId] = useState('1');
    const [xTabOne, setXTabOne] = useState(0);
    const [xTabTwo, setXTabTwo] = useState(0);
    const [translateX, setTranslateX] = useState(new Animated.Value(0));
    const [translateY, setTranslateY] = useState(-1000);
    const [translateXTabOne, setTranslateXTabOne] = useState(new Animated.Value(0));
    const [translateXTabTwo, setTranslateXTabTwo] = useState(new Animated.Value(width));

    useEffect(() => {
        if (buttonId == '1') {
            this.handleSlide(xTabOne)
        } else {
            this.handleSlide(xTabTwo)
        }
      }, [buttonId]);

    const wallet = props.addressResult.wallet;
    const txs = props.addressResult.txs;

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
                    <View>
                        <Text style={{fontSize: 20}}>{'Wallet'}</Text>
                        <View style={{flexDirection:'row'}}>
                            <Text>{'Confirmed Transactions: '}</Text>
                            <Text>{wallet?.n_tx || '-'}</Text>
                        </View> 
                        <View style={{flexDirection:'row'}}>
                            <Text>{'Total Received: '}</Text>
                            <Text>{wallet?.total_received || '-'}</Text>
                        </View> 
                        <View style={{flexDirection:'row'}}>
                            <Text>{'Total Spent: '}</Text> 
                            <Text>{wallet?.total_sent || '-'}</Text>
                        </View> 
                        <View style={{flexDirection:'row'}}>
                            <Text>{'Total Unspent: '}</Text>
                            <Text>{(wallet?.total_received - wallet?.total_sent) || '-'}</Text>
                        </View> 
                        <View style={{flexDirection:'row'}}>
                            <Text>{'Current Balance: '}</Text>
                            <Text>{wallet?.final_balance || '-'}</Text>
                        </View> 
                    </View>
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
                        <Text style={{fontSize: 20}}>{'Transactions'}</Text>
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
  
  export {TabView};