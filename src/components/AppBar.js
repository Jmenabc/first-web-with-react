import { Text, Image, StyleSheet } from "react-native";
import { Row } from "react-bootstrap";
import React, { Component } from 'react';
import { Link, BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import App from "../App";
export class AppBar extends Component {
    state = {}
    render() {
        let { rowStyle, appBarImg, upText,linkStyle } = styles;
        return (
            <Router>
                <Row style={rowStyle}>
                    <Image
                        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png' }}
                        style={appBarImg}
                    />

                    <Text style={upText}>
                        <Link to="/Home" style={linkStyle}>
                            Home
                        </Link>
                    </Text>
                    <Text
                        style={upText}
                        onPress={window.location.href = '#'}
                    >
                        Profile
                    </Text>
                </Row>
                <Routes>
                    <Route path="/Home" element={App} />
                </Routes>
            </Router>
        );
    }
}


const styles = StyleSheet.create({
    rowStyle: {
        backgroundColor: 'grey',
        height: 60
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
    },
    linkStyle: {
        color: 'white',
        marginTop: 18,
        marginHorizontal: 18,
        fontSize: 16,
    }
})


export default AppBar;