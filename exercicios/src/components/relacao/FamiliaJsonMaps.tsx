import React from "react";
import { Text } from "react-native";
import Membro from "./Membro";
import Padrao from "../../estilos/Padrao";

interface FamiliaProps {
    membros: { nome: string; sobreNome: string}[];
}

function getMembros(registros: FamiliaProps){
    return registros.membros.map((membro, index) => (
    <Membro key={index} nome={membro.nome} sobreNome={membro.sobreNome} />)
    );
}

const FamiliaMaps: React.FC<FamiliaProps> = (props) => (
 <>
    <Text style={Padrao.textoVermelho}>Membros da Familia</Text>
    {getMembros(props)}
 </>
);


export default FamiliaMaps;