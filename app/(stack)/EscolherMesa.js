import { useState } from "react";
import { View } from "react-native";
import { useRouter } from 'expo-router';
import { Btn } from "../../src/components/Btn";
import { Input } from "../../src/components/Inputs";
import { LoginStyles } from "../../src/styles/LoginStyles";

export default function Hone() {

    const router = useRouter()

    const [mesa, setMesa] = useState()
    const ConfirmarMesa = () => {
        if(mesa <= 0) {
            return alert('Mesa não existe. Por Favor, escolha outra mesa.')
        }
        else if(mesa >= 200) {
            return alert('Erro! Não temos esse numero de mesa. Por Favor, escolha outra mesa')
        }
        else {
            return alert(`Mesa ${mesa} escolhida com sucesso`), setMesa(''),
            router.push('/(drawer)')
        }
    } 

    return (
        <View style={{
            flex: 1, alignItems: "center", justifyContent: "center"
        }}>
            <View style={[LoginStyles.containerInput, {marginVertical: 100}]}>
                <Input 
                    placeholder={'Nº da Mesa'} value={mesa}
                    dados={(txt) => setMesa(txt)} teclado={'numeric'} 
                />
            </View>

            <Btn titulo={'Continuar'} funcao={ConfirmarMesa}/>
        </View>
    )
}