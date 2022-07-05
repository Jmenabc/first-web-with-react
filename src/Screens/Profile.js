import { Text, Image, StyleSheet, View } from "react-native";
import AppBar from "../components/AppBar";
import React, { Component } from 'react';
import circularImage from "../components/profileComponents/circularImage";

export class Profile extends Component {
    state = {}
    render() {
        return (
            <View style={styles.viewStyle}>
                <AppBar />
                <circularImage/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewStyle: {

    }
})

export default Profile