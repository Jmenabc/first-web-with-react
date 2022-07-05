import { Text, Image, StyleSheet, View } from "react-native";
import React, { Component } from 'react';

class CircularImage extends Component {
    state = {}
    render() {
        return (
            <View style={{backgroundColor: 'grey'}}>
                <Image
                    source={{ uri: '' }}
                    borderRadius={16}

                />
                <Text style={{color:'black'}}>aaaaaa</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({

})

export default CircularImage;