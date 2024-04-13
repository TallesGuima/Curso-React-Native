import React from "react";
import { Text } from "react-native";
import Padrao from "../../estilos/Padrao";


export default (props: {nome:string, sobreNome:string}, key:number) => (
        <Text style={Padrao.textoGrande} key={key}>{props.nome} {props.sobreNome}</Text>
)