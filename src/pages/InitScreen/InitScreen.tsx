import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { styles } from './styles'

import ArrowWhite from '../../../assets/Arrows/Arrow-White.svg'

export default function InitScreen() {
	const navigation = useNavigation()

	return (
		<View style={styles.global}>
			<View style={styles.header}>
				<Text style={styles.title}>
					Olá, Dev <Text style={styles.exclamationMark}>!</Text> 
				</Text>

				<Text style={styles.subtitle}>
					Encontre o seu {`\n`}
					<Text style={styles.backContrast}>próximo</Text> evento de {`\n`}
					programação
				</Text>
			</View>

			<Image source={require('../../../assets/person.png')} style={styles.image}/>

			<TouchableOpacity
				style={styles.button}
				onPress={() => navigation.navigate("Events" as never)}	
			>
				<ArrowWhite />
			</TouchableOpacity>
		</View>
	)
}