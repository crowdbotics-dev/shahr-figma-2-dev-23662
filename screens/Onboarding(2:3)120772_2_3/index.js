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
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/557c/13c5/125d71ad7b65e87ebd8da33fd3023b7c"
        }}
        style={styles.ImageBackground_2_4}
      />
      <View style={styles.View_2_8}>
        <View style={styles.View_2_9}>
          <Text style={styles.Text_2_9}>Lorem ipsum</Text>
        </View>
        <View style={styles.View_2_10}>
          <Text style={styles.Text_2_10}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo
            amet et ridiculus purus, ac.
          </Text>
        </View>
      </View>
      <View style={styles.View_2_11}>
        <View style={styles.View_2_12} />
        <View style={styles.View_2_13}>
          <Text style={styles.Text_2_13}>Continue</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("122%") },
  ImageBackground_2_4: {
    width: wp("9%"),
    height: hp("1%"),
    top: hp("99%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%")
  },
  View_2_8: {
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
  View_2_9: {
    flexGrow: 1,
    width: wp("60%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_9: {
    color: "rgba(10, 31, 49, 1)",
    fontSize: 34,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_10: {
    flexGrow: 1,
    width: wp("86%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_2_10: {
    color: "rgba(10, 31, 49, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_11: {
    width: wp("74%"),
    height: hp("7%"),
    top: hp("105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_12: {
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
  View_2_13: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_2_13: {
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
