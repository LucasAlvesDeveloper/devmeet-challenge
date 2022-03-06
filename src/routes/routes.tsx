import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { useFonts, Epilogue_700Bold, Epilogue_400Regular } from '@expo-google-fonts/epilogue'
import AppLoading from 'expo-app-loading'

import InitScreen from "../pages/InitScreen/InitScreen"
import AvailableEvents from "../pages/AvailableEvents"

import { RootStackParamList } from '../@types/routes'

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function Stacks() {
	let [fontsLoaded] = useFonts({
		Epilogue_400Regular,
		Epilogue_700Bold
	})

	if (!fontsLoaded) return <AppLoading />

	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
				<Stack.Screen name="Home" component={InitScreen} />
				<Stack.Screen name="Events" component={AvailableEvents} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}