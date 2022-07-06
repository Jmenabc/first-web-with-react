import { Text, Image, StyleSheet } from "react-native";
import { Row } from "react-bootstrap";
import React, { Component } from 'react';
import { Link, BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import App from "../App";
import Profile from "../Screens/Profile";
import { AiOutlineUser } from "react-icons/ai";

const Spacer = require('react-spacer')

export class AppBar extends Component {
    state = {}
    render() {
        let { rowStyle, appBarImg, upText, linkStyle, icon } = styles;
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

                    <Text style={upText}>
                        <Link to="/Profile" style={linkStyle}>
                            Profile
                        </Link>
                    </Text>
                    <Spacer grow={0.96}/>
                    <AiOutlineUser style={icon} size={20}/>
                </Row>
                <Routes>
                    <Route path="/Home" element={<App />} />
                    <Route path="/Profile" element={<Profile />} />
                </Routes>
            </Router>
        );
    }
}


const styles = StyleSheet.create({

    icon: {
        color: 'white',
        marginTop: 18,
    },

    rowStyle: {
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