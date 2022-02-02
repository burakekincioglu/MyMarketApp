import React from 'react';
import {Text , View} from 'react-native';

const Header = (props) => { 
    const {textStyle} = styles;
    return (
        <View style={styles.viewStyle}>
        <Text style={textStyle}> {props.headerText} </Text>
        </View>
    );
};

const styles = { //method
    textStyle: {
        fontSize: 20
    },
    viewStyle: {
        backgroundColor: 'red',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.6,

    }
};

export default Header;