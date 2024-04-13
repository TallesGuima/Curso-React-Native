import React from "react";
import { Text } from "react-native";
import Padrao from "../estilos/Padrao";

export default (props: any) => (
    <>
        <Text style={Padrao.textoGrande}>{props.titulo}</Text>
        <Text>{props.subTitulo}</Text>
    </>
)