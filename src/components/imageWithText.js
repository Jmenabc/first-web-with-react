import { View, Text, Image, StyleSheet } from "react-native";
import { Row, Col } from "react-bootstrap";
import React, { Component } from 'react';

class ImageWithText extends Component {
    state = {}
    render() {
        let { imageContainer, textContainer } = styles;
        return (

            <Row>

                <Image
                    source={{ uri: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' }}
                    style={imageContainer} />

                <View style={textContainer}></View>
            </Row>


        );
    }
}

const styles = StyleSheet.create({
    imageContainer: {
        width: '60%',
        height: 500,
        marginTop: 30,
        marginHorizontal: 70,
        borderRadius: 16
    },

    textContainer: {
        backgroundColor: 'black',
        marginTop: 30,
        width: '30%',
        height: 500,

    }

})

export default ImageWithText;

