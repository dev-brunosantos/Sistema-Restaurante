import { useState } from "react";
import { View, Text } from "react-native";
import { useRouter } from 'expo-router'
import { Input, Password } from "../../src/components/Inputs";
// ESTILOS E CORES
import { LoginStyles } from "../../src/styles/LoginStyles";
import { Btn } from "../../src/components/Btn";

export default function Login() {

    const router = useRouter()

    const [usuario, setUsuario] = useState()
    const [senha, setSenha] = useState()

    const [novoUsuario, setNovoUsuario] = useState(0)

    const ValidarUsuario = () => {
        // if (usuario != 'Bruno' || senha != '1234') {
        //     return setNovoUsuario(1)
        // }
        // return (
        //     alert('Vc poderá logar no sistema...'),
        //     router.push('/(drawer)'),
        //     setNovoUsuario(0)
        // )
        router.push('/EscolherMesa')
    }

    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "space-evenly" }}>
            <View style={LoginStyles.form}>
                <Text style={LoginStyles.label}>Usuario</Text>
                <View style={LoginStyles.containerInput}>
                    <Input
                        placeholder={'Digite seu usuario'}
                        value={usuario}
                        dados={(txt) => setUsuario(txt)}
                    />
                </View>

                <Text style={LoginStyles.label}>Senha</Text>
                <View style={LoginStyles.containerInput}>
                    <Password
                        placeholder={'Digite sua senha'}
                        value={senha}
                        dados={(txt) => setSenha(txt)}
                    />
                </View>

                <View style={[LoginStyles.containerAlerta, { opacity: novoUsuario }]}>
                    <Text style={LoginStyles.alerta}>Usuário não encontrado</Text>
                    <Btn titulo={'Cadastre-se'} funcao={() => router.push('/(stack)/NovoUsuario')} />
                </View>
            </View>

            <View style={{ flexDirection: "row", width: '90%', alignItems: "center", justifyContent: "space-evenly" }}>
                <Btn titulo={'Entrar'} funcao={ValidarUsuario} />
                <Btn titulo={'Sair'} funcao={() => router.back()} />
            </View>
        </View>
    )
}
