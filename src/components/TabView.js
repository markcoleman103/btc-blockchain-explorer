import React, { useState, useEffect } from 'react';
import { ScrollView, TouchableOpacity, View, Text, StyleSheet, Dimensions, Animated  } from 'react-native';
const { width } = Dimensions.get("window");

const TabView = props => {
    
    const [buttonId, setButtonId] = useState('1');
    const [xTabOne, setXTabOne] = useState(0);
    const [xTabTwo, setXTabTwo] = useState(0);
    const [translateX, setTranslateX] = useState(new Animated.Value(0));
    const [translateY, setTranslateY] = useState(-1000);
    const [translateXTabOne, setTranslateXTabOne] = useState(new Animated.Value(0));
    const [translateXTabTwo, setTranslateXTabTwo] = useState(new Animated.Value(width));

    const button1label = props?.buttonLabels[0];
    const button2label = props?.buttonLabels[1];
    const Content1 = props?.content[0];
    const Content2 = props?.content[1];

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
                        style={styles.tabBarButtonOne}
                        onLayout={event => setXTabOne(event.nativeEvent.layout.x) }
                        onPress={() => { setButtonId('1') } }
                    >
                        <Text style={{color: buttonId === '1' ? "#F2A900" : "#fff"}}>
                            {button1label}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.tabBarButtonTwo}
                        onLayout={event => setXTabTwo(event.nativeEvent.layout.x) }
                        onPress={() => { setButtonId('2') } }
                    >
                        <Text style={{ color: buttonId === '2' ? "#F2A900" : "#fff"}}>
                            {button2label}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView style={{flex:1, flexGrow:1, padding:20, display: 'flex' }}>
                <Animated.View style={{
                        flex:1, 
                        flexGrow:1, 
                        display: 'flex', 
                        transform: [
                            {
                                translateX: translateXTabOne
                            }
                        ]
                    }} 
                    onLayout={event => setTranslateY(event.nativeEvent.layout.height) }
                >   
                    {Content1}
                </Animated.View>
                <Animated.View style={{
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
                    {Content2}
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
    },
    tabBarButtonOne: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#fff",
        borderRightWidth: 0,
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4
    },
    tabBarButtonTwo: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#fff",
        borderLeftWidth: 0,
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4
    },
  });
  
  export {TabView};