import { useState } from "react";
import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import { Entypo } from '@expo/vector-icons';

export const Input = ({bg, placeholder, value, txtFont, txtColor, teclado, dados}) => {
    return(
        <View style={styles.container}>
            <TextInput 
                style={styles.input} placeholder={placeholder}
                value={value} onChangeText={dados}
                keyboardType='number-pad'
                // keyboardType={teclado}
            />
        </View>
    )
}

export const Password = ({bg, placeholder, value, txtFont, txtColor, dados}) => {

    const [seguranca, setSeguranca] = useState(true)
    const [verSenha, setVerSenha] = useState('eye-with-line')

    const VerificarSenha = () => {
        verSenha == 'eye-with-line' ? setVerSenha('eye') : setVerSenha('eye-with-line')
        seguranca == true ? setSeguranca(false) : setSeguranca(true)
    }

    return(
        <View style={styles.container}>
            <TextInput
                style={styles.input} placeholder={placeholder}
                value={value} secureTextEntry={seguranca}
                onChangeText={dados}
            />
            <TouchableOpacity style={styles.btnIcone} onPress={VerificarSenha} >
                <Entypo name={verSenha} size={40}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 60,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    input: {
        width: '100%',
        height: '100%',
        paddingHorizontal: 15,
        fontSize: 30,
        textAlign: 'center'
    },
    btnIcone: {
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        right: 15
    }
})