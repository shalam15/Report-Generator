import { Ionicons } from "@expo/vector-icons";
import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Actions } from "react-native-router-flux";
import { RectButton, ScrollView } from "react-native-gesture-handler";

export default class ReportRecordScreen extends React.Component {
	render() {
		return (
			<ScrollView
				style={styles.container}
				contentContainerStyle={styles.contentContainer}
			>
				<OptionButton
					icon="md-book"
					label="Report On 05/11/2020"
					onPress={() => Actions.completedReport()}
				/>
				<OptionButton
					icon="md-book"
					label="Report On 05/12/2020"
					onPress={() => Actions.completedReport()}
					isLastOption
				/>
			</ScrollView>
		);
	}
}

function OptionButton({ icon, label, onPress, isLastOption }) {
	return (
		<RectButton
			style={[styles.option, isLastOption && styles.lastOption]}
			onPress={onPress}
		>
			<View style={{ flexDirection: "row" }}>
				<View style={styles.optionIconContainer}>
					<Ionicons name={icon} size={22} color="rgba(0,0,0,0.35)" />
				</View>
				<View style={styles.optionTextContainer}>
					<Text style={styles.optionText}>{label}</Text>
				</View>
			</View>
		</RectButton>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fafafa",
	},
	contentContainer: {
		paddingTop: 15,
	},
	optionIconContainer: {
		marginRight: 12,
	},
	option: {
		backgroundColor: "#fdfdfd",
		paddingHorizontal: 15,
		paddingVertical: 15,
		borderWidth: StyleSheet.hairlineWidth,
		borderBottomWidth: 0,
		borderColor: "#ededed",
	},
	lastOption: {
		borderBottomWidth: StyleSheet.hairlineWidth,
	},
	optionText: {
		fontSize: 15,
		alignSelf: "flex-start",
		marginTop: 1,
	},
});
