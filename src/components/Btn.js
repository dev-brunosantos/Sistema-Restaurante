import { TouchableOpacity, Text, View } from "react-native";
import { BtnStyles } from "../styles/BtnStyles";

export const Btn = ({titulo, bg, txtColor, funcao}) => {
    return(
        <TouchableOpacity
            style={[BtnStyles.container, {backgroundColor: bg}]}
            onPress={funcao}
        >
            <Text style={[BtnStyles.titulo, {color: txtColor}]}>
                {titulo}
            </Text>
        </TouchableOpacity>
    )
}

