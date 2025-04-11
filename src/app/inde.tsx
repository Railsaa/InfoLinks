import { View, Text, StyleSheet } from "react-native"

//Export default é o metodo usado para dizer ao ExporRouter que esse componente é uma Rota.
export default function Index () {
    return (
        //Componente Text sendo usando para Renderizar um texto na tela
        <View>
            
            <Text style= {styles.title}> Eu sou o millior!!!</Text>
            <Text style= {styles.title2} >Railsa de Andrade Fonseca</Text>
            <Text style= {styles.title3}>Técnico em Informática</Text>
            <Text style= {styles.title4}>Sou estudante do 3° periodo</Text>
            <Text style= {styles.title5}>A vida não é um morango</Text>
            <Text style= {styles.title6}>Atualizando os testes</Text>
        </View>

    );
    
} //Personalização do código
const styles = StyleSheet.create({

    container:{
        flex:1, // considera toda a area util da tela para os componetes
        justifyContent:"center", //justificar todo o texto
        alignItems:"center", // centralizar os elementos no centro da tela
        flexDirection:"row", // alinha o texto

    },
    title: {
        color: "red",
        fontSize: 22,
    },
    title2: {
        color: "blue",
        fontSize: 22, 
    },
    title3: {
        color: "pink",
        fontSize: 22, 
    },
    title4: {
        color: "yellow",
        fontSize: 22, 
    },
    title5: {
        color: "orange",
        fontSize: 22, 
    },
    title6: {
        color: "green",
        fontSize: 22, 
    },

})

