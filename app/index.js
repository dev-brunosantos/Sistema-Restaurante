import { View, Text, TouchableOpacity, Image } from "react-native";
import { useRouter } from 'expo-router';
import * as Animatable from 'react-native-animatable';
import { Cores } from '../src/styles/Cores'

export default function Inicio() {

    const router = useRouter()

    return (
        <View style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "space-evenly",
            backgroundColor: Cores.azul
        }}>
            <Animatable.View
                animation={'fadeIn'} delay={700}   
                style={{
                    width: 450, height: 450, borderRadius: 10, overflow: 'hidden',
                    alignItems: "center", justifyContent: "center", position: 'relative'
                }}
            >
                <Image source={require('../assets/logo.jpg')} style={{
                    width: '100%', height: '100%', position: 'absolute'
                }} />
            </Animatable.View>
            
            <Animatable.View
            animation='fadeInUp' delay={1500}
                style={{
                    width: '80%', height: 150, position: 'absolute', padding: 5,
                    alignItems: "center", justifyContent: "space-evenly",
                    bottom: 0, borderWidth: 1, borderTopLeftRadius: 30, borderTopRightRadius: 30,
                    backgroundColor: '#fafafaa5'
                }}
            >
                <Text style={{textAlign: "center", fontSize: 34, fontWeight: 'bold', color: Cores.azul}}>Seja bem vindo</Text>
                <TouchableOpacity
                    style={{
                        width: '80%', padding: 10, alignItems: "center", justifyContent: "center",
                        borderRadius: 10, backgroundColor: Cores.azul
                    }}
                    onPress={() => router.push('/(stack)/login')}
                >
                    <Text style={{fontSize: 24, fontWeight: "bold", textAlign: "center", color: Cores.branco}}>Login</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    )
}

