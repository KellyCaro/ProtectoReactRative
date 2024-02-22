import { StyleSheet,View,Button, Text ,TextInput} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as React from "react"



const Home = () => {
    
  
    return (
        <View style={styles.container}>
           
            <Text style={styles.titulo}>Cerveceria</Text>
            <Text style={styles.subtitulo}>Ingresa a tu cuenta</Text>
            <TextInput placeholder='Digita tu usuario'
            style={styles.textInput}></TextInput>
            <TextInput 
            placeholder='Digita tu Contraseña'
            style={styles.textInput}></TextInput>
            
            <Button
                style={styles.button}
                title="Press me"
                onPress={() => Alert.alert('Simple Button pressed')}
            />
            <StatusBar style='auto'></StatusBar>
        </View>
    )
    
}



const styles =StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'auto',
        marginVertical:'40%'
    },
    titulo:{
        fontSize:50,
        color:'#5B3A29',
        fontWeight:'bold',
        marginVertical:30
    },
    subtitulo:{

        fontSize:20,
        color:'#5B3A29',

    },
    textInput:{
        borderColor:'#5B3A29',
        borderWidth:2,
        borderRadius:30,
        padding:5,
        marginTop:15, 
        width:'80%'
    },
    button:{
        borderRadius:10,
        padding:5,
        marginTop:15
    }
});

export default Home;