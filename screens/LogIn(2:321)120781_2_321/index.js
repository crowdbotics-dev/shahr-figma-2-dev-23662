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
      <View style={styles.View_2_322} />
      <View style={styles.View_2_323}>
        <View style={styles.View_2_324}>
          <View style={styles.View_2_325} />
          <View style={styles.View_2_326}>
            <Text style={styles.Text_2_326}>Log In</Text>
          </View>
        </View>
        <View style={styles.View_2_327}>
          <View style={styles.View_2_328} />
          <View style={styles.View_2_329}>
            <Text style={styles.Text_2_329}>Log In</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_2_330}>
        <View style={styles.View_2_331}>
          <Text style={styles.Text_2_331}>Or</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bce1/3c85/9c8925fc28210d469e23def0535b1d46"
          }}
          style={styles.ImageBackground_2_332}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bce1/3c85/9c8925fc28210d469e23def0535b1d46"
          }}
          style={styles.ImageBackground_2_333}
        />
      </View>
      <View style={styles.View_2_334}>
        <Text style={styles.Text_2_334}>Don’t have an account? Sign Up</Text>
      </View>
      <View style={styles.View_2_335}>
        <View style={styles.View_2_336}>
          <View style={styles.View_2_337}>
            <View style={styles.View_2_338} />
            <View style={styles.View_2_339} />
            <View style={styles.View_2_340}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4f3e/630a/1cde7c484b7ba3f94223b1bfe28a059a"
                }}
                style={styles.ImageBackground_2_341}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_2_344}>
          <View style={styles.View_2_345}>
            <View style={styles.View_2_346} />
            <View style={styles.View_2_347} />
            <View style={styles.View_2_348}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ba90/1de6/198c4ff7d24d11c42859412ea971161c"
                }}
                style={styles.ImageBackground_2_349}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_2_354}>
          <View style={styles.View_2_355}>
            <View style={styles.View_2_356} />
            <View style={styles.View_2_357} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aab7/a9eb/218fc917282087b37aa7bdce4c606ed8"
            }}
            style={styles.ImageBackground_2_358}
          />
        </View>
      </View>
      <View style={styles.View_2_360}>
        <Text style={styles.Text_2_360}>Log in</Text>
      </View>
      <View style={styles.View_2_361}>
        <Text style={styles.Text_2_361}>Forgot Password?</Text>
      </View>
      <View style={styles.View_2_362}>
        <View style={styles.View_2_363}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0204/ff46/1efbb3aa72d60d7e819a502684098087"
            }}
            style={styles.ImageBackground_2_364}
          />
        </View>
        <View style={styles.View_2_367}>
          <Text style={styles.Text_2_367}>Remember me</Text>
        </View>
      </View>
      <View style={styles.View_2_368}>
        <View style={styles.View_2_369}>
          <Text style={styles.Text_2_369}>Email address</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6aaf/ae9d/354363ee14fb4e4b819b8da86a70d8bc"
          }}
          style={styles.ImageBackground_2_370}
        />
        <View style={styles.View_2_371}>
          <Text style={styles.Text_2_371}>user@gmail.com</Text>
        </View>
      </View>
      <View style={styles.View_2_372}>
        <View style={styles.View_2_373}>
          <Text style={styles.Text_2_373}>Password</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b8f7/07f2/ad831f6632d0e751135154071ae321ad"
          }}
          style={styles.ImageBackground_2_374}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6aaf/ae9d/354363ee14fb4e4b819b8da86a70d8bc"
          }}
          style={styles.ImageBackground_2_375}
        />
        <View style={styles.View_2_376}>
          <Text style={styles.Text_2_376}> </Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("122%") },
  View_2_322: {
    width: wp("247%"),
    minWidth: wp("247%"),
    height: hp("140%"),
    minHeight: hp("140%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_2_323: {
    width: wp("74%"),
    minWidth: wp("74%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("67%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_324: {
    flexGrow: 1,
    width: wp("74%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2_325: {
    width: wp("74%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_2_326: {
    width: wp("9%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    justifyContent: "flex-start"
  },
  Text_2_326: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_327: {
    flexGrow: 1,
    width: wp("74%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2_328: {
    width: wp("74%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_2_329: {
    width: wp("11%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    justifyContent: "flex-start"
  },
  Text_2_329: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_330: {
    width: wp("74%"),
    minWidth: wp("74%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("81%")
  },
  View_2_331: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_331: {
    color: "rgba(35, 31, 32, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_332: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_2_333: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    top: hp("1%")
  },
  View_2_334: {
    width: wp("52%"),
    minWidth: wp("52%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("114%"),
    justifyContent: "flex-start"
  },
  Text_2_334: {
    color: "rgba(35, 31, 32, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_335: {
    width: wp("63%"),
    minWidth: wp("63%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("90%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_336: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2_337: {
    width: wp("14%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2_338: {
    width: wp("14%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_2_339: {
    width: wp("10%"),
    height: hp("6%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_2_340: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_2_341: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2_344: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("0%")
  },
  View_2_345: {
    width: wp("14%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2_346: {
    width: wp("14%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_2_347: {
    width: wp("10%"),
    height: hp("6%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_2_348: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_2_349: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2_354: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("0%")
  },
  View_2_355: {
    width: wp("14%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2_356: {
    width: wp("14%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_2_357: {
    width: wp("10%"),
    height: hp("6%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_2_358: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_2_360: {
    width: wp("32%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    justifyContent: "flex-start"
  },
  Text_2_360: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 34,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_361: {
    width: wp("38%"),
    top: hp("58%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%"),
    justifyContent: "flex-start"
  },
  Text_2_361: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_362: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("58%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_363: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_2_364: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_2_367: {
    flexGrow: 1,
    width: wp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_367: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_368: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("33%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_369: {
    flexGrow: 1,
    width: wp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_369: {
    color: "rgba(10, 31, 49, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_370: {
    flexGrow: 1,
    width: wp("90%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%")
  },
  View_2_371: {
    flexGrow: 1,
    width: wp("49%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_2_371: {
    color: "rgba(181, 181, 181, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_372: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("47%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_373: {
    flexGrow: 1,
    width: wp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_373: {
    color: "rgba(10, 31, 49, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_374: {
    flexGrow: 1,
    width: wp("90%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%")
  },
  ImageBackground_2_375: {
    flexGrow: 1,
    width: wp("90%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%")
  },
  View_2_376: {
    flexGrow: 1,
    width: wp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_2_376: {
    color: "rgba(181, 181, 181, 1)",
    fontSize: 13,
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
