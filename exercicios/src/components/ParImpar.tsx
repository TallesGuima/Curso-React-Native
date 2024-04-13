import React from "react";
import { Text } from "react-native";
import Padrao from "../estilos/Padrao";
import Teste from "./Teste01";


export default (props: { numero: number}) => (
    <>
        {// Código lógico = { }
            props.numero % 2 == 0
            ? <Teste texto="par" />
            : <Teste texto="impar" />
        }
    </>
)