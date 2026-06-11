import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

import Img from "../../assets/img.jpg";


export default function Registro({ navigation }) {

  const [email, setUsuario] = useState('');
  const [usuario, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarsenha, setConfirmarSenha] = useState('');

  return (

    <View style={estilos.container}>

      <View style={estilos.card}>


        <Image
          source={Img}
          style={estilos.logo}
          resizeMode="cover"
        />


        <Text style={estilos.titulo}>
          Estação Meteorológica
        </Text>


        <Text style={estilos.subtitulo}>
          Monitoramento inteligente do clima
        </Text>


        <TextInput
          style={estilos.input}
          placeholder="Usuário"
          placeholderTextColor="#ffffff"
          value={usuario}
          onChangeText={setUsuario}
        />

        <TextInput
          style={estilos.input}
          placeholder="E-mail"
          placeholderTextColor="#ffffff"
          value={usuario}
          onChangeText={setEmail}
        />


        <TextInput
          style={estilos.input}
          placeholder="Senha"
          placeholderTextColor="#ffffff"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />

        <TextInput
          style={estilos.input}
          placeholder="Confirmar Senha"
          placeholderTextColor="#ffffff"
          secureTextEntry
          value={confirmarsenha}
          onChangeText={setConfirmarSenha}
        />


        <TouchableOpacity
          style={estilos.botao}
          onPress={() => navigation.replace('Login')}
        >

          <Text style={estilos.botaoTexto}>
            Criar uma conta
          </Text>

        </TouchableOpacity>


        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
        >

          <Text style={estilos.criar}>
            Já tem uma conta? Entrar
          </Text>

        </TouchableOpacity>


      </View>

    </View>
  );
}



const estilos = StyleSheet.create({

container:{
  flex:1,
  backgroundColor:"#000000",
  justifyContent:"center",
  alignItems:"center",
  padding:20
},


card:{
  width:"100%",
  backgroundColor:"#272829",
  borderRadius:25,
  padding:30,

  shadowColor:"#d3d5d5",
  shadowOpacity:0.4,
  shadowRadius:15,
  elevation:10
},


logo:{
  width:150,
  height:150,
  borderRadius:80,
  alignSelf:"center",
  marginBottom:20,

  borderWidth:3,
  borderColor:"#ffffff"
},


titulo:{
  color:"#fff",
  fontSize:25,
  fontWeight:"bold",
  textAlign:"center",
},


subtitulo:{
  color:"#8fa3b8",
  textAlign:"center",
  marginBottom:30
},


input:{
  backgroundColor:"#838587",
  height:55,
  borderRadius:15,
  paddingHorizontal:18,
  color:"#fff",
  marginBottom:15,

  borderWidth:1,
  borderColor:"#444545"
},


botao:{
  backgroundColor:"#6d6d6d",
  height:55,
  borderRadius:15,

  justifyContent:"center",
  alignItems:"center",
  marginTop:10
},


botaoTexto:{
  color:"#ffffff",
  fontSize:18,
  fontWeight:"bold"
},


criar:{
  color:"#7a7b7b",
  textAlign:"center",
  marginTop:25
}

});