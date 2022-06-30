import { View, Text, Image, StyleSheet } from "react-native";

import React, { Component } from 'react';

class StartText extends Component {
    state = {}
    render() {
        let { viewTextStyle, textStyle } = Styles;
        return (
            <View>
                <Image
                    source={{ uri: "https://wowslider.com/sliders/demo-80/data1/images/sheet546475_1920.jpg" }}
                    style={{ width: '100%', height: 400}}
                    resizeMode="cover"
                />
                <View style={viewTextStyle}>
                    <Text style={textStyle}>
                        {'Prueba de demostración'}
                    </Text>
                </View>
            </View>
        );
    }
}

const Styles = StyleSheet.create({
    viewTextStyle: {
        position: "absolute",
        justifyContent: "flex-start"
    },
    textStyle: {
        fontSize: 23,
        fontWeight: 'bold',
        color: 'white'
    }

})



export default StartText;