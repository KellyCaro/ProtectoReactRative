import { StyleSheet,
    View,
    Button,
    Text ,
    TextInput,
    TouchableOpacity,
     Alert} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as React from "react"
import { Redirect } from 'expo-router';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';




const Home = () => {
    
  
    return (
        <View style={styles.container}>
           
            <Text style={styles.titulo}>Cerveceria</Text>
            <Text style={styles.subtitulo}>Ingresa a tu cuenta</Text>
            <TextInput placeholder='Digita tu usuario'
            style={styles.textInput}></TextInput>
            <TextInput 
            placeholder='Digita tu ggContraseña'
            style={styles.textInput}></TextInput>
                    
            <Button
                
                title="Press me"
                onPress={() => Alert.alert('Simple Button pressed')}
                style={styles.buttonL}
            />
            <StatusBar style='auto'></StatusBar>
        </View>
    )
    
}

function SettingsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
  
  const Tab = createBottomTabNavigator();


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
    buttonL:{
        borderRadius:10,
        padding:5,
        marginTop:15,
        backgroundColor:Redirect,
    }
});

export default Home
  