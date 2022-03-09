import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_2_15}>
        <View style={styles.View_2_16}>
          <Text style={styles.Text_2_16}>Lorem ipsum</Text>
        </View>
        <View style={styles.View_2_17}>
          <Text style={styles.Text_2_17}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo
            amet et ridiculus purus, ac.
          </Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/93ac/2e1b/92f4a63132c41554ca8eab430a67c7c8"
        }}
        style={styles.ImageBackground_2_18}
      />
      <View style={styles.View_2_22}>
        <Text style={styles.Text_2_22}>Skip</Text>
      </View>
      <View style={styles.View_2_23}>
        <View style={styles.View_2_24} />
        <View style={styles.View_2_25}>
          <Text style={styles.Text_2_25}>Continue</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("122%") },
  View_2_15: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("69%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_16: {
    flexGrow: 1,
    width: wp("60%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_16: {
    color: "rgba(10, 31, 49, 1)",
    fontSize: 34,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_17: {
    flexGrow: 1,
    width: wp("86%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_2_17: {
    color: "rgba(10, 31, 49, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_18: {
    width: wp("9%"),
    height: hp("1%"),
    top: hp("100%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%")
  },
  View_2_22: {
    width: wp("8%"),
    top: hp("114%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    justifyContent: "flex-start"
  },
  Text_2_22: {
    color: "rgba(10, 31, 49, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_23: {
    width: wp("74%"),
    height: hp("7%"),
    top: hp("105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_24: {
    flexGrow: 1,
    width: wp("74%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_2_25: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_2_25: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
