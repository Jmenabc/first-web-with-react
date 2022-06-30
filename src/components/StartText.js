import { View, Text, Image, StyleSheet } from "react-native";

import React, { Component } from 'react';

class StartText extends Component {
    state = {}
    render() {
        let { viewTextStyle, textStyleHeaderText, image, textStyleSubHeaderText } = Styles;
        return (
            <View>
                <Image
                    source={{ uri: "https://wowslider.com/sliders/demo-80/data1/images/sheet546475_1920.jpg" }}
                    style={image}
                    resizeMode="cover"
                />
                <View style={viewTextStyle}>
                    <Text style={textStyleHeaderText}>
                        {'Prueba de demostración'}
                    </Text>

                    <Text style={textStyleSubHeaderText}>
                        {'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
                    </Text>

                    <Text style={textStyleSubHeaderText}>
                        {'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
                    </Text>

                    <Text style={textStyleSubHeaderText}>
                        {'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
                    </Text>
                </View>
            </View>
        );
    }
}

const Styles = StyleSheet.create({
    viewTextStyle: {
        position: "absolute",
        justifyContent: "flex-start",
        paddingLeft: 80,
    },
    image: {
        width: '100%',
        height: 400,
        maxWidth: '100%',
        paddingHorizontal: 100,
        paddingVertical: 100
    },
    textStyleHeaderText: {
        fontSize: 44,
        fontWeight: 'bold',
        color: 'white',
        paddingTop: 60,
    },
    textStyleSubHeaderText: {
        fontSize: 30,
        color: 'white',
        paddingTop: 10,
        fontWeight: 'bold'

    }

})



export default StartText;