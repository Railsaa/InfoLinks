import { View, Text} from "react-native"

import {styles} from "./styles"


//Export default é o metodo usado para dizer ao ExporRouter que esse componente é uma Rota.
export default function Index () {
    return (
        //Componente Text sendo usando para Renderizar um texto na tela
       
       <View style={styles.container}>

            <Text style= {styles.title}> Eu sou o millior!!!</Text>
            <Text style= {styles.title2} >Railsa de Andrade Fonseca</Text>
            <Text style= {styles.title3}>Técnico em Informática</Text>
            <Text style= {styles.title4}>Sou estudante do 3° periodo</Text>
            <Text style= {styles.title5}>A vida não é um morango</Text>
            <Text style= {styles.title6}>Atualizando os testes</Text>

        </View>

    );
    
} 
