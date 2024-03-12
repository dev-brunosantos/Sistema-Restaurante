import { StyleSheet } from "react-native";
import { Cores } from "./Cores";

export const LoginStyles = StyleSheet.create({
    form: {
        width: '100%',
        height: 500,
        paddingVertical: 15,
        alignItems: "center",
        justifyContent: "space-evenly"
    },
    containerInput: {
        width: '90%',
        height: 60,
        borderWidth: 1,
        borderRadius: 10,
        overflow: "hidden"
    },
    label: {
        color: Cores.azul,
        fontSize: 40,
        fontWeight: "bold"
    },
    containerAlerta: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    alerta: {
        color: 'red',
        fontSize: 25,
        margin: 15
    }
})