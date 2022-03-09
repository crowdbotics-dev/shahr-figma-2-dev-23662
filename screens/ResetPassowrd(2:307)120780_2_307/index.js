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
      <View style={styles.View_2_308}>
        <View style={styles.View_2_309}>
          <Text style={styles.Text_2_309}>
            Set new password for your account.
          </Text>
        </View>
      </View>
      <View style={styles.View_2_310}>
        <View style={styles.View_2_311}>
          <Text style={styles.Text_2_311}>Password</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6aaf/ae9d/354363ee14fb4e4b819b8da86a70d8bc"
          }}
          style={styles.ImageBackground_2_312}
        />
      </View>
      <View style={styles.View_2_313}>
        <View style={styles.View_2_314}>
          <Text style={styles.Text_2_314}>Confirm password</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6aaf/ae9d/354363ee14fb4e4b819b8da86a70d8bc"
          }}
          style={styles.ImageBackground_2_315}
        />
      </View>
      <View style={styles.View_2_316}>
        <Text style={styles.Text_2_316}>Back</Text>
      </View>
      <View style={styles.View_2_317}>
        <View style={styles.View_2_318} />
        <View style={styles.View_2_319}>
          <Text style={styles.Text_2_319}>Reset password</Text>
        </View>
      </View>
      <View style={styles.View_2_320}>
        <Text style={styles.Text_2_320}>Reset password</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("122%") },
  View_2_308: {
    width: wp("69%"),
    minWidth: wp("69%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("34%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_309: {
    flexGrow: 1,
    width: wp("69%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_309: {
    color: "rgba(10, 31, 49, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_310: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("43%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_311: {
    flexGrow: 1,
    width: wp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_311: {
    color: "rgba(10, 31, 49, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_312: {
    flexGrow: 1,
    width: wp("90%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%")
  },
  View_2_313: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("57%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_314: {
    flexGrow: 1,
    width: wp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_314: {
    color: "rgba(10, 31, 49, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_315: {
    flexGrow: 1,
    width: wp("90%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%")
  },
  View_2_316: {
    width: wp("10%"),
    top: hp("88%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    justifyContent: "flex-start"
  },
  Text_2_316: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_317: {
    width: wp("74%"),
    height: hp("7%"),
    top: hp("76%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  View_2_318: {
    width: wp("74%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_2_319: {
    width: wp("28%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    justifyContent: "flex-start"
  },
  Text_2_319: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_320: {
    width: wp("46%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    justifyContent: "flex-start"
  },
  Text_2_320: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 34,
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
