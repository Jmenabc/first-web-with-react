import { View, Text, Image, StyleSheet } from "react-native";
import {Row,Col} from "react-bootstrap";
import React, { Component } from 'react';

class Cards extends Component {
    state = {}
    render() {
        let { card, cardText, cardRow, cardInfo, test } = styles;
        return (
            <Row>
                <Col>
                    <View style={card}></View>
                    <View style={test}></View>
                </Col>

                <Col>
                    <View style={card}></View>
                    <View style={test}></View>
                </Col>

                <Col>
                    <View style={card}></View>
                    <View style={test}></View>
                </Col>

                <Col>
                    <View style={card}></View>
                    <View style={test}></View>
                </Col>

                
            </Row>
        );
    }
}

const styles = StyleSheet.create({
    
    card: {
        height: 100,
        width: '70%',
        backgroundColor: 'black',
        marginHorizontal: 38,
        marginTop:24,
    },
    test: {
        height: 100,
        width: '70%',
        backgroundColor: 'red',
        marginHorizontal: 38,
        
    },
    cardText: {
        fontSize: 16,
        color: 'white'
    }

})
export default Cards;