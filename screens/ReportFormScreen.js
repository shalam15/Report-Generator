import * as React from "react";
import { StyleSheet, View, TouchableHighlight, Text } from "react-native";
import PatrolForms from "../components/PatrolForm";
import { Actions } from "react-native-router-flux";

export default class ReportFormScreen extends React.Component{
  render() {
    return (
      <View style={styles.container}>
        <Text style={[{ fontSize: 20, margin: 10 }, { textAlign: "center" }]}>
          Check each for affirmation of action{" "}
        </Text>
        <PatrolForms></PatrolForms>
        <View>
          <TouchableHighlight
            style={styles.submit1}
            onPress={() => Actions.pop()}
            underlayColor="#fff"
          >
            <Text style={styles.submitText}>Save As Incomplete </Text>
          </TouchableHighlight>
        </View>
        <View>
          <TouchableHighlight
            style={styles.submit2}
            onPress={() => Actions.pop()}
            underlayColor="#fff"
          >
            <Text style={styles.submitText2}>Save Hour</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
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