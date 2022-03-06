import { Epilogue_500Medium } from "@expo-google-fonts/epilogue"
import { StyleSheet } from "react-native"

import theme from '../../../theme.json'

export const styles = StyleSheet.create({
	global: {
		width: "100%",
		height: "100%",
		justifyContent: "center",
		backgroundColor: theme.colors.background
	},

	header: {
		flexDirection: "row",
		justifyContent: "center",
		marginBottom: 20,
	},

	title: {
		fontFamily: "Epilogue_700Bold", 
		color: theme.colors.text.primary,

		fontSize: 30,

		lineHeight: 27,
		
		marginBottom: 10,
	},

	subtitle: {
		fontFamily: "Epilogue_400Regular",
		fontSize: 18,
		color: theme.colors.text.secondary
	},

	buttonContainer: {
		alignItems: "center",
		marginHorizontal: -10,
	},

	button: {
		flexDirection: "row",
		alignItems: "center"
	},

	buttonText: {
		fontFamily: "Epilogue_400Regular",
		color: theme.colors.text.secondary,
		marginBottom: 3,
	},

	card: {
		fontFamily: "Epilogue_400Regular",

		backgroundColor: theme.colors.text.primary,
		borderRadius: 15,
		marginHorizontal: 20,
		marginTop: 20,

		paddingHorizontal: 20,
		paddingVertical: 15,
	},

	cardTitle: {
		fontFamily: "Epilogue_700Bold",
		fontSize: 25,
	},

	cardDescription: {
		opacity: .4,
		paddingVertical: 15,
	},

	cardFooter: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center"
	},

	cardOrg: {
		fontFamily: "Epilogue_400Regular",
		fontSize: 12,
		marginBottom: 15,
	},

	cardLink: {
		fontFamily: "Epilogue_400Regular",
		fontSize: 12,
		marginBottom: 8,
	},

	cardDate: {
		fontSize: 20,
	},

	cardButton: {

	},

	orangeText: {
		fontFamily: "Epilogue_400Regular",
		color: theme.colors.contrast
	},

	bold: {
		fontFamily: "Epilogue_700Bold",
	}
})