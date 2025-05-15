import {StyleSheet} from "react-native"

// importando as cores de dentro da pasta styles
import { colors } from "@/styles/colors"


export const styles = StyleSheet.create({

    container:{
        flex:1, // considera toda a area util da tela para os componetes
        justifyContent:"center", //justificar todo o texto
        alignItems:"center", // centralizar os elementos no centro da tela
        flexDirection:"column", // alinha o texto 

        //código para identificar as estremidades do cantainer
        borderColor: "red",
        borderWidth:5,

    },
    title: {
        color:  colors.green[900],
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