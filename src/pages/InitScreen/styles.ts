import { StyleSheet } from 'react-native'

import theme from '../../../theme.json'

export const styles = StyleSheet.create({
	global: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: theme.colors.background,
	},

	header: {
		marginRight: 40,
		marginBottom: 20,		
	},

	title: {
		fontFamily: "Epilogue_700Bold",
		fontSize: 45,
		
		marginBottom: 10,

		color: theme.colors.text.primary
	},

	subtitle: {
		fontFamily: "Epilogue_400Regular",
		fontSize: 20,

		lineHeight: 30,

		justifyContent: "center",

		color: theme.colors.text.secondary
	},
	
	exclamationMark: {
		color: theme.colors.contrast,
	},

	backContrast: {
		color: theme.colors.text.primary,
		backgroundColor: theme.colors.contrast,
	},

	image: {
		width: 210,
		height: 380,

		alignSelf: "center", 
	},

	button: {
		marginTop: 20,

		backgroundColor: theme.colors.contrast,

		width: 50,
		height: 50,

		justifyContent: "center",
		alignItems: "center",

		borderRadius: 10,
	}
})