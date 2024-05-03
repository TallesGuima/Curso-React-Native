import React from "react";
import { Button, Text } from "react-native";
import Separador from "./Separador";
import Padrao from "../estilos/Padrao";


class Botao extends React.Component {
    state = {
        numero: 0
    }

    render() {
        return (
            <>
            <Button 
                title="Adicionar 1"
                onPress={() => 
                    this.setState({ numero: this.state.numero + 1 })}
            />

            <Separador />

            <Button 
                title="Subtrair 1"
                onPress={() => 
                    this.setState({ numero: this.state.numero - 1 })}
            />

            <Text style={Padrao.textoGrande}>{this.state.numero}</Text>
            </>
        )
    }
}


export default Botao;
