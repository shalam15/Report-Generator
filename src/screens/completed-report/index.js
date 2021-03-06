import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  TouchableHighlight,
  Text,
} from "react-native";
import { Table, TableWrapper, Row, Rows } from "react-native-table-component";
import { connect } from "react-redux";

class CompletedReport extends Component {
  componentDidMount() {
    console.log(this.props.initialData.formData.length);
    console.log(this.props.initialData.formData);
  }
  constructor(props) {
    super(props);
    console.log(props.initialData.forData);
    this.state = {
      officerNameAndDate: [
        ["Name: ", this.props.officerName],
        ["Date: ", this.props.reportDate],
      ],
      siteNameAndTime: [
        ["Site: ", this.props.reportSiteLocation],
        ["Time: ", this.props.reportTime],
      ],
      tableHead: ["Time", "Entry"],

      officerSignature: [["Signature: " + this.props.officerName]],
    };
  }

  render() {
    const state = this.state;
    return (
      <View style={styles.container}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri:
              "https://i.pinimg.com/originals/3e/19/2a/3e192a828893f058e5ebcf9522358b14.jpg",
          }}
        />
        <Table borderStyle={{ borderColor: "#000" }}>
          <View style={styles.container2}>
            <Row
              data={state.officerNameAndDate}
              flexArr={[2, 2]}
              style={styles.head}
              textStyle={styles.infoText}
            />
            <Row
              data={state.siteNameAndTime}
              flexArr={[2, 2]}
              style={styles.head}
              textStyle={styles.infoText}
            />
          </View>
        </Table>

        <ScrollView>
          <View style={styles.container2}>
            <Table
              borderStyle={{
                borderWidth: 1,
                borderColor: "#000",
              }}
            >
              <Row
                data={state.tableHead}
                flexArr={[1, 4]}
                style={styles.head}
                textStyle={styles.headText}
              />
              {this.props.initialData.formData.map((item, key) => (
                <Row
                  data={[
                    item.timeSlotName,
                    item.patrolState + "," + item.lockedDoorNotes,
                  ]}
                  flexArr={[1, 4]}
                  style={styles.head}
                  textStyle={styles.headText}
                />
              ))}
              <Rows
                data={state.officerSignature}
                flexArr={[1, 4]}
                textStyle={{
                  fontSize: 20,
                  padding: 10,
                  fontWeight: "bold",
                }}
              />
            </Table>
          </View>
        </ScrollView>

        <TouchableHighlight
          style={styles.print}
          onPress={() => handlePrintJob()}
          underlayColor="#fff"
        >
          <Text style={styles.submitText2}>Print</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const handlePrintJob = () => {
  console.log("Printing...");
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
  container2: {
    flex: 1,
    marginBottom: 100,
    backgroundColor: "#fff",
  },
  head: {
    height: 40,
    backgroundColor: "#fafafa",
  },

  wrapper: {
    flexDirection: "row",
  },
  title: {
    flex: 1,
    backgroundColor: "#fafa",
  },
  headText: {
    textAlign: "center",
  },
  infoText: {
    textAlign: "left",
    marginLeft: 30,
    borderBottomColor: "#000",
    fontWeight: "bold",
  },
  text: {
    textAlign: "left",
    margin: 10,
    fontSize: 10,
  },
  tinyLogo: {
    width: 300,
    height: 70,
    marginLeft: 50,
    alignItems: "center",
  },
  submitText2: {
    fontSize: 20,
    color: "#fff",
    textAlign: "center",
  },
  print: {
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
  exit: {
    marginRight: 100,
    marginLeft: 100,
    marginTop: 5,
    marginBottom: 5,
    paddingTop: 10,
    paddingBottom: 15,
    backgroundColor: "red",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#fff",
  },
});

const mapStateToProps = (state) => {
  return {
    officerName: state.officer.officerName,
    reportDate: state.officer.reportDate,
    reportTime: state.officer.reportTime,
    reportSiteLocation: state.officer.reportSiteLocation,

    initialData: state.timeslot.initialData,
  };
};
export default connect(mapStateToProps)(CompletedReport);
