import { Stack } from 'expo-router/stack'

export default function StackLayout() {
    return (
        <Stack>
            <Stack.Screen name='login'
                options={{ headerShown: false }}
            />
            <Stack.Screen name='NovoUsuario'
                options={{ headerShown: false }}
            />
            <Stack.Screen name='EscolherMesa' />
        </Stack>
    )
}