import { View, Text, Image, StyleSheet } from "react-native";
import {Row,Col} from "react-bootstrap";
import React, { Component } from 'react';

class ImageWithText extends Component {
    state = {  } 
    render() { 
        let {imageContainer} = styles;
        return (
            <Row>
                <View style={imageContainer}>
                    <Image/>
                </View>
            </Row>
        );
    }
}

const styles = StyleSheet.create({
    imageContainer: {

    }

})
 
export default ImageWithText;

