import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

class Evento extends React.Component {
    state = {
        input: ''
    }

    render() {
        return (
            <View>
                <Text style={styles.font30}>{this.state.input}</Text>
                <TextInput 
                    style={styles.input} 
                    value={this.state.input} 
                    onChangeText={(input) => this.setState({input})}>

                </TextInput>
            </View>
        )
    }
}

export default Evento;

const styles = StyleSheet.create({
    input: {
        height: 50,
        width: 300,
        fontSize: 30,
        borderWidth: 1,
        borderColor: 'black',
    },
    font30: {
        fontSize: 30
    }
})