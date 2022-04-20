import { TouchableOpacity, Text, StyleSheet, Dimensions } from "react-native-web"; 
//para tener botones customizados, el de Button es uno genérico
//le mandamos hijos
import React from 'react';

const screen = Dimensions.get('window');

const buttonWidth = screen.width / 4;

const styles = StyleSheet.create({
    button : {
        flex: 1,
        backgroundColor: "#333333",
        height: Math.floor(buttonWidth - 10),
        alignItems: "center",
        margin: 5,
        justifyContent: "center",
    },

    text:{
        color: "#fff",
        fontSize: 25,
    },
    textSecondary: {
        color:"#060606"
    },
    buttonDouble:{
        width: screen.width /2 - 10,
        flex:0,
        alignItems: "flex-start",
        paddingLeft: 40,
    },

    buttonSecondary: {
        backgroundColor: "#a6a6a6",
    },

    buttonAccent:{
        backgroundColor: "#f09a36",
    },

});

const Button = ({text, theme, size, onPress}) => {
    const stylesButton = [styles.button];
    const stylesText = [styles.text];

    if(theme === "secondary"){
        stylesButton.push(styles.buttonSecondary);
        stylesText.push(styles.textSecondary);
    }

    if(theme === "accent"){
        stylesButton.push(styles.buttonAccent);
        stylesText.push(styles.textAccent);
    }



    return (
    <TouchableOpacity onPress={onPress} style={stylesButton}>
        <Text style = {stylesText}>{text}</Text>
    </TouchableOpacity>
    );
};

export default Button;
