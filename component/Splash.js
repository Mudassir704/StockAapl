import React, { Component } from 'react'
import { View, Image , ImageBackground } from 'react-native'

var bg = require("../shared/logo.jpg");
var logo = require("../shared/bg.png");

export default class Splash extends Component{
    constructor(props){
        super(props);
        setTimeout(() => {
            this.props.navigation.navigate("Stock");
        },3000)
    }
    render() {
    return (
        <ImageBackground
            source={bg}
            style={{ height:'100%' , width: "100%" }}
        >
            <View style={{flex: 1,justifyContent: "center", alignItems: "center" }}>
                <Image source={logo} style={{ height: "25%" , width: "50%" }} ></Image>
            </View>

        </ImageBackground>
    );
    }
}
