import { View, Text, FlatList, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native"

import ArrowWhite from '../../../assets/Arrows/Arrow-White.svg'
import ArrowOrange from '../../../assets/Arrows/Arrow-Orange.svg'

import { styles } from './styles'
import { useEffect, useState } from "react"

export default function AvailableEvents() {
	const MAX_LENGTH = 150

	const [events, setEvents] = useState()
	
	const navigation = useNavigation()

	useEffect(() => {
		fetch("https://dev-meet-backend.herokuapp.com/events")
			.then(response => response.json())
			.then((response) => setEvents(response.splice(0, 2)))
	}, [])

	return (
		<View style={styles.global}>
			<View style={styles.header}>
				<View>
					<Text style={styles.title}>Eventos {`\n`}Disponíveis</Text>
					<Text style={styles.subtitle}>
						Selecione o evento desejado {`\n`}
						e espere sua data!
					</Text>
				</View>

				<View style={styles.buttonContainer}>
					<TouchableOpacity
						style={styles.button}
						onPress={() => navigation.goBack()}	
					>
						<ArrowWhite />
						<Text style={styles.buttonText}>Voltar</Text>
					</TouchableOpacity>
				</View>
			</View>

			<View>
				<FlatList
					data={events}
					renderItem={({ item }: EventProps) => (
						<View style={styles.card}>
							<Text style={styles.cardDate}>
								<Text style={{ ...styles.orangeText, ...styles.bold }}>{
									new DateParser(item.dataInicio).getDayAndMonth}
								</Text>
								<Text style={{ color: "#000" }}>&nbsp;-&nbsp;</Text>
								<Text style={{ ...styles.orangeText }}>{new DateParser(item.dataInicio).getTime}</Text>
							</Text>
							
							<Text style={styles.cardTitle}>{item.titulo}</Text>
							<Text style={styles.cardDescription}>
								{
									item.descricao.length > MAX_LENGTH
									? <Text>{item.descricao.substring(0, MAX_LENGTH)}...</Text>
									: <Text>{item.descricao}</Text>
								}
							</Text>

							<View style={styles.cardFooter}>
								<View>
									<Text style={styles.cardOrg}>
										Organizado por: <Text style={styles.bold}>{item.organizador}</Text>
									</Text>

									<Text style={styles.cardLink}>
										Link do Evento: <Text style={styles.bold}>{item.link}</Text>
									</Text>
								</View>

								<TouchableOpacity style={styles.cardButton}>
									<ArrowOrange />
								</TouchableOpacity>
							</View>
						</View>
					)}
					keyExtractor={event => event.id}
				/>
			</View>
		</View>
	)
}

class DateParser {
	dateObject: Date
	date: string 

	constructor(date: string) {
		this.date = date
		this.dateObject = new Date(this.date)
	}

	get getReadableDate(): string {
		return this.dateObject.toLocaleString()
	}

	get getDayAndMonth(): string {
		let months = [
			"Jan.", "Fev.", "Mar.",
			"Abr.", "Maio", "Jun.",
			"Jul.", "Ago.", "Set.",
			"Out.", "Nov.", "Dez."
		]

		return `${this.dateObject.getUTCDate()} ${months[this.dateObject.getMonth()]}`
	}

	get getTime(): string {
		return `${this.dateObject.getHours()}:${this.dateObject.getMinutes()}`
	}
}

interface EventProps {
    item: {
		id: string,
		tipoId: Number,
		dataInicio: string,
		dataPublicacao: string,
		descricao: string,
		link: string,
		organizador: string,
		titulo: string
	}
}