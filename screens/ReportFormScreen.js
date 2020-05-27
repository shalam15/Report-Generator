import * as React from "react";
import { StyleSheet, View, TouchableHighlight, Text } from "react-native";
import PatrolForms from "../components/PatrolForm";
import { Actions } from "react-native-router-flux";

export default class ReportFormScreen extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Text style={[{ fontSize: 20, margin: 10 }, { textAlign: "center" }]}>
					Check each for affirmation of actions
				</Text>

				<PatrolForms
					formData={this.props.formData}
					formColor={this.props.color}
					formIndex={this.props.formIndex}
				></PatrolForms>


				
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		marginTop:50,
		marginBottom:50,
		flex: 1,
		backgroundColor: "#fff",
	},

	submit1: {
		marginRight: 100,
		marginLeft: 100,
		marginTop: 5,
		marginBottom: 5,
		paddingTop: 10,
		paddingBottom: 15,
		backgroundColor: "#fff200",
		borderRadius: 50,
		borderWidth: 1,
		borderColor: "#fff",
	},
	submit2: {
		marginRight: 100,
		marginLeft: 100,
		marginTop: 5,
		marginBottom: 5,
		paddingTop: 10,
		paddingBottom: 15,
		backgroundColor: "blue",
		borderRadius: 50,
		borderWidth: 1,
		borderColor: "#fff",
	},
	submitText: {
		fontSize: 20,
		color: "#000",
		textAlign: "center",
	},
	submitText2: {
		fontSize: 20,
		color: "#fff",
		textAlign: "center",
	},
});
