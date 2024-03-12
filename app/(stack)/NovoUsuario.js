import { useState } from "react";
import { View } from "react-native";
// IMPORTAÇÃO DE COMPONENTES
import { Input, Password } from "../../src/components/Inputs";
import { Btn } from "../../src/components/Btn";
// ESTILOS E CORES
import { LoginStyles } from "../../src/styles/LoginStyles";

export default function NovoUsuario() {
    const [nome, setNome] = useState()
    const [sobrenome, setSobrenome] = useState()
    const [email, setEmail] = useState()
    const [senha, setSenha] = useState()
    const [confirmaSenha, setConfirmaSenha] = useState()

    const ConfirmarUSuario = () => {
        alert(`${nome} - ${sobrenome} - ${email} - ${senha} - ${confirmaSenha}`)
        return(
            setNome(''), setSobrenome(''), setEmail(''), setSenha(''), setConfirmaSenha('')
        )
    }

    return (
        <View style={{
            flex: 1, alignItems: 'center', justifyContent: "space-evenly"
        }}>
            <View style={LoginStyles.containerInput}>
                <Input
                    placeholder={'Digite seu Nome'} value={nome}
                    dados={(txt) => setNome(txt)}
                    />
            </View>

            <View style={LoginStyles.containerInput}>
                <Input
                    placeholder={'Digite seu Sobrenome'} value={sobrenome}
                    dados={(txt) => setSobrenome(txt)}
                    />
            </View>

            <View style={LoginStyles.containerInput}>
                <Input
                    placeholder={'Digite seu e-mail'} value={email}
                    dados={(txt) => setEmail(txt)}
                    />
            </View>

            <View style={LoginStyles.containerInput}>
                <Password
                    placeholder={'Digite sua Senha'} value={senha}
                    dados={(txt) => setSenha(txt)}
                    />
            </View>

            <View style={LoginStyles.containerInput}>
                <Password
                    placeholder={'Confirmar Senha'} value={confirmaSenha}
                    dados={(txt) => setConfirmaSenha(txt)}
                />
            </View>

            <Btn titulo={'Cadastrar'} funcao={ConfirmarUSuario}/>
        </View>
    )
}