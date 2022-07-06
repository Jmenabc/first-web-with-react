import { Text, Image, StyleSheet, View, Container } from "react-native";
import AppBar from "../components/AppBar";
import React, { Component } from 'react';
import { Row, Col } from "react-bootstrap";
import LinearGradient from 'react-native-web-linear-gradient';


export function Profile() {
    return (
        <View style={styles.viewStyle}>
            <LinearGradient colors={['#026136', '#038047', '#05A35B', '#06DA7A']}>
                <AppBar />
                <Row>
                    <Image
                        style={styles.img}
                        source={{ uri: 'https://capturetheatlas.com/wp-content/uploads/2020/07/original.jpg' }}
                    />
                    <Text style={styles.textColHeader}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget egestas quam.
                        Cras quis lorem tristique, ultricies mi et, lobortis felis. Sed interdum semper consequat. Donec ut elit est.
                        Nam non magna vitae diam varius venenatis ac quis sem. Aenean id libero laoreet, tristique quam quis, bibendum felis. Nullam tellus nisl,
                        maximus eget feugiat ac, dignissim quis enim. Nam nulla felis, porttitor id orci sed, gravida pharetra leo. Proin ut ornare ex. Quisque iaculis leo in suscipit
                        ultrices. Quisque vulputate sem id commodo faucibus. Quisque ut ex hendrerit, interdum lacus ac, blandit elit. Vivamus vulputate eros velit, nec volutpat lacus
                        placerat ut. Sed cursus nisi vitae ex bibendum mollis.
                        Nullam et ipsum eleifend, placerat erat sit amet, viverra risus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                    </Text>
                </Row>
            </LinearGradient>

        </View>
    );

}

const styles = StyleSheet.create({

    bannerBackground: {
        backgroundColor: 'blueGrey'
    },
    textColHeader: {
        marginTop: 35,
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        maxWidth: 1200,
    },

    img: {
        marginTop: 30,
        marginLeft: 100,
        marginRight: 75,
        marginBottom: 50,
        width: 200,
        height: 200,
        borderRadius: 400 / 2
    }


})

export default Profile