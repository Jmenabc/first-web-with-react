import { Text, Image, StyleSheet, View } from "react-native";
import React, { Component } from 'react';

class CircularImage extends Component {
    state = {}
    render() {
        return (
            <View style={{backgroundColor: 'black'}}>
                <Image
                    source={{ uri: 'https://cdn.shopify.com/s/files/1/0229/0839/files/bancos_de_imagenes_gratis.jpg?v=1630420628&width=1024' }}
                    borderRadius={16}

                />
            </View>
        );
    }
}

const styles = StyleSheet.create({

})

export default CircularImage;