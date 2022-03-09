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
      <View style={styles.View_2_286}>
        <Text style={styles.Text_2_286}>Token</Text>
      </View>
      <View source={{ uri: "null" }} style={styles.View_2_287} />
      <View style={styles.View_2_288}>
        <View style={styles.View_2_289}>
          <View style={styles.View_2_290} />
          <View style={styles.View_2_291}>
            <Text style={styles.Text_2_291}>Log In</Text>
          </View>
        </View>
        <View style={styles.View_2_292}>
          <View style={styles.View_2_293} />
          <View style={styles.View_2_294}>
            <Text style={styles.Text_2_294}>Submit</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_2_295}>
        <View style={styles.View_2_296}>
          <Text style={styles.Text_2_296}> </Text>
        </View>
        <View style={styles.View_2_297} />
        <View style={styles.View_2_298} />
        <View style={styles.View_2_299} />
        <View style={styles.View_2_300} />
        <View style={styles.View_2_301}>
          <Text style={styles.Text_2_301}>3</Text>
        </View>
      </View>
      <View style={styles.View_2_302}>
        <View style={styles.View_2_303}>
          <Text style={styles.Text_2_303}>Verification</Text>
        </View>
        <View style={styles.View_2_304}>
          <View style={styles.View_2_305}>
            <Text style={styles.Text_2_305}>
              4 digits PIN has been sent to your mail. Enter the code below to
              continue
            </Text>
          </View>
          <View style={styles.View_2_306}>
            <Text style={styles.Text_2_306}>Resend Code?</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("122%") },
  View_2_286: {
    width: wp("32%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    justifyContent: "flex-start"
  },
  Text_2_286: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 34,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_287: {
    width: wp("101%"),
    height: hp("4%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1%")
  },
  View_2_288: {
    width: wp("74%"),
    minWidth: wp("74%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("76%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_289: {
    flexGrow: 1,
    width: wp("74%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2_290: {
    width: wp("74%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_2_291: {
    width: wp("9%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    justifyContent: "flex-start"
  },
  Text_2_291: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_292: {
    flexGrow: 1,
    width: wp("74%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2_293: {
    width: wp("74%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_2_294: {
    width: wp("12%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    justifyContent: "flex-start"
  },
  Text_2_294: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_295: {
    width: wp("71%"),
    minWidth: wp("71%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("47%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_296: {
    flexGrow: 1,
    width: wp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_2_296: {
    color: "rgba(181, 181, 181, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_297: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_2_298: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(51, 51, 51, 1)",
    borderWidth: 1
  },
  View_2_299: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(51, 51, 51, 1)",
    borderWidth: 1
  },
  View_2_300: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(51, 51, 51, 1)",
    borderWidth: 1
  },
  View_2_301: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_2_301: {
    color: "rgba(35, 31, 32, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_302: {
    width: wp("62%"),
    minWidth: wp("62%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("35%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_303: {
    flexGrow: 1,
    width: wp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_303: {
    color: "rgba(35, 31, 32, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_304: {
    flexGrow: 1,
    width: wp("62%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%")
  },
  View_2_305: {
    width: wp("55%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_305: {
    color: "rgba(35, 31, 32, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_306: {
    width: wp("19%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    justifyContent: "flex-start"
  },
  Text_2_306: {
    color: "rgba(35, 31, 32, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
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
