import React from "react";
import { Text } from "react-native";
import Padrao from "../estilos/Padrao";
import ValidaUsuario from "./ValidaUsuario";

export default (props: any)=> {

    const values = props.usuario || {};

    return (
        <>

        <ValidaUsuario valido={values && values.nome && values.email}>
            <Text style={Padrao.textoVermelho}>
                Usuário Logado
            </Text>
            <Text style={Padrao.textoGrande}>
                {values.nome} - {values.email}
            </Text>
        </ValidaUsuario>
        </>
    )
}