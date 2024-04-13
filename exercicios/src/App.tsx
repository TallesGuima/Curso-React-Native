import React, { Component } from "react";
import {View, Text, StyleSheet} from 'react-native';
import Simples from "./components/Simples";
import Membro from "./components/relacao/Membro";
import Familia from "./components/relacao/Familia";


//Adiciona um membro
function setMembro(nome : string, sobreNome : string, key: number): JSX.Element{
  return <Membro key={key} nome={nome} sobreNome={sobreNome} />
}


/*Adiciona vários membros por meio de um array, você precisa selecionar uma key de entrada, 
  e ficar atento a passar nome primeiro e sobrenome em segundo, seguindo sempre essa ordem. 
  Ex.: nome_sobreNome["_MeuNome_", "_MeuSobreNome_"]*/
function setMembros(nome_sobreNome: string[], key: number): JSX.Element[]{
  let membros : Array<JSX.Element> = [];  

  for (let i = 0 ; i < nome_sobreNome.length ; i++) { 
     membros.push(<Membro key={key++} nome={nome_sobreNome[i++]} 
                    sobreNome={nome_sobreNome[i]} />);
  }

  return membros;
}


export default class App extends Component {
  render(){
    return (
      <View style={estilos.container}>
        {/*<Text style={estilos.fonte}>Olá mundo</Text>
          <Simples valor="Programando em react-native"/>*/}
      
        {/*<Frag titulo="Titulo" 
            subTitulo="sub Titulo"  />*/}
              
        {/*<Parimpar numero={11} />*/}

        <Familia>
          <Membro key={0} nome="Talles" sobreNome="Guimarães Neves Garcia" />
          {setMembro("Lucas", "Guimarães Neves Garcia", 1)}
          {setMembros(["Andresa", "Ap. Guimarães Garcia" 
                      , "Daniel", "Neves Garcia"
                      , "Mercia", "Neves"], 2)}
        </Familia>
 

      </View>
    );
  }
}

const estilos= StyleSheet.create({
  container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  },
  fonte: {
    fontSize: 40,
  }
})


