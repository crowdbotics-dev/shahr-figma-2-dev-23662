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
      <View style={styles.View_2_27}>
        <View style={styles.View_2_28} />
        <View style={styles.View_2_29}>
          <Text style={styles.Text_2_29}>Save</Text>
        </View>
      </View>
      <View style={styles.View_2_30}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e9b2/4d21/18de336cc7358f6169ee9c1b8bcb9660"
          }}
          style={styles.ImageBackground_2_31}
        />
        <View style={styles.View_2_32}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/acbd/4a46/2298b92694b450149b538bb352467202"
            }}
            style={styles.ImageBackground_2_33}
          />
        </View>
      </View>
      <View style={styles.View_2_37}>
        <View style={styles.View_2_38}>
          <Text style={styles.Text_2_38}>Jay Mahanga</Text>
        </View>
        <View style={styles.View_2_39}>
          <Text style={styles.Text_2_39}>jay@gmail.com</Text>
        </View>
      </View>
      <View style={styles.View_2_40}>
        <View style={styles.View_2_41}>
          <Text style={styles.Text_2_41}>Name</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b8f7/07f2/ad831f6632d0e751135154071ae321ad"
          }}
          style={styles.ImageBackground_2_42}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6aaf/ae9d/354363ee14fb4e4b819b8da86a70d8bc"
          }}
          style={styles.ImageBackground_2_43}
        />
      </View>
      <View style={styles.View_2_44}>
        <View style={styles.View_2_45}>
          <Text style={styles.Text_2_45}>Gender</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6aaf/ae9d/354363ee14fb4e4b819b8da86a70d8bc"
          }}
          style={styles.ImageBackground_2_46}
        />
      </View>
      <View style={styles.View_2_47}>
        <View style={styles.View_2_48}>
          <Text style={styles.Text_2_48}>Password</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6aaf/ae9d/354363ee14fb4e4b819b8da86a70d8bc"
          }}
          style={styles.ImageBackground_2_49}
        />
      </View>
      <View style={styles.View_2_50}>
        <View style={styles.View_2_51}>
          <Text style={styles.Text_2_51}>Email</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b8f7/07f2/ad831f6632d0e751135154071ae321ad"
          }}
          style={styles.ImageBackground_2_52}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6aaf/ae9d/354363ee14fb4e4b819b8da86a70d8bc"
          }}
          style={styles.ImageBackground_2_53}
        />
        <View style={styles.View_2_54}>
          <Text style={styles.Text_2_54}> </Text>
        </View>
      </View>
      <View style={styles.View_2_55}>
        <View style={styles.View_2_56}>
          <Text style={styles.Text_2_56}>Details</Text>
        </View>
        <View style={styles.View_2_57}>
          <Text style={styles.Text_2_57}>Delete Account</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c790/c694/5fd305935b60da4958d9975bb6070fcf"
          }}
          style={styles.ImageBackground_2_58}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("122%") },
  View_2_27: {
    width: wp("74%"),
    height: hp("7%"),
    top: hp("110%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_28: {
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
  View_2_29: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_2_29: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_30: {
    width: wp("26%"),
    height: hp("15%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_2_31: {
    flexGrow: 1,
    width: wp("26%"),
    height: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2_32: {
    flexGrow: 1,
    width: wp("10%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_2_33: {
    width: wp("9%"),
    height: hp("5%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_2_37: {
    width: wp("31%"),
    height: hp("6%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_38: {
    flexGrow: 1,
    width: wp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_38: {
    color: "rgba(28, 26, 25, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_39: {
    flexGrow: 1,
    width: wp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_2_39: {
    color: "rgba(28, 26, 25, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_40: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("49%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_41: {
    flexGrow: 1,
    width: wp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_41: {
    color: "rgba(10, 31, 49, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_42: {
    flexGrow: 1,
    width: wp("90%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%")
  },
  ImageBackground_2_43: {
    flexGrow: 1,
    width: wp("90%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%")
  },
  View_2_44: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("74%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_45: {
    flexGrow: 1,
    width: wp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_45: {
    color: "rgba(10, 31, 49, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_46: {
    flexGrow: 1,
    width: wp("90%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%")
  },
  View_2_47: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("86%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_48: {
    flexGrow: 1,
    width: wp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_48: {
    color: "rgba(10, 31, 49, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_49: {
    flexGrow: 1,
    width: wp("90%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%")
  },
  View_2_50: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("61%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_51: {
    flexGrow: 1,
    width: wp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_51: {
    color: "rgba(10, 31, 49, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_52: {
    flexGrow: 1,
    width: wp("90%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%")
  },
  ImageBackground_2_53: {
    flexGrow: 1,
    width: wp("90%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%")
  },
  View_2_54: {
    flexGrow: 1,
    width: wp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_2_54: {
    color: "rgba(181, 181, 181, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_55: {
    width: wp("85%"),
    minWidth: wp("85%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("35%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_56: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_56: {
    color: "rgba(35, 31, 32, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_57: {
    flexGrow: 1,
    width: wp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_57: {
    color: "rgba(255, 104, 72, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_58: {
    flexGrow: 1,
    width: wp("83%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
