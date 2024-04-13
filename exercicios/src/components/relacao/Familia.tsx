import React from "react";
import Membro from "./Membro";
import { Text } from "react-native";
import Padrao from "../../estilos/Padrao";

export default (props: any) => (
    <>
        <Text style={Padrao.textoVermelho}>Membros da Familia</Text>
        {props.children}
    </>
)