import { View, Text, Image, StyleSheet, Button } from "react-native";
import { Row, Col } from "react-bootstrap";
import React, { Component } from 'react';

export class AppBar extends Component {
    state = {}
    render() {
        let { rowStyle, appBarImg, upText } = styles;
        return (
            <Row style={rowStyle}>
                <Image
                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png' }}
                    style={appBarImg}
                />
                <Text
                    style={upText}
                    onPress={window.location.href = '#'}
                >
                    Home
                </Text>
                <Text
                    style={upText}
                    onPress={window.location.href = '#'}
                >
                    Settings
                </Text>
                <Text
                    style={upText}
                    onPress={window.location.href = '#'}
                >
                    Profile
                </Text>
            </Row>
        );
    }
}

const styles = StyleSheet.create({
    rowStyle: {
        backgroundColor: 'grey',
        height: 60
        // marginBottom: 10
    },
    appBarImg: {
        width: 40,
        height: 40,
        marginLeft: 32,
        marginTop: 10
    },
    upText: {
        color: 'white',
        marginTop: 18,
        marginHorizontal: 18,
        fontSize: 16
    }
})

export default AppBar;