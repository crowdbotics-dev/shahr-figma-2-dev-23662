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
      <View style={styles.View_2_234}>
        <Text style={styles.Text_2_234}>Sign up</Text>
      </View>
      <View style={styles.View_2_235}>
        <Text style={styles.Text_2_235}>I don’t have an account. Login</Text>
      </View>
      <View style={styles.View_2_236}>
        <View style={styles.View_2_237}>
          <Text style={styles.Text_2_237}>Email address</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b8f7/07f2/ad831f6632d0e751135154071ae321ad"
          }}
          style={styles.ImageBackground_2_238}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6aaf/ae9d/354363ee14fb4e4b819b8da86a70d8bc"
          }}
          style={styles.ImageBackground_2_239}
        />
        <View style={styles.View_2_240}>
          <Text style={styles.Text_2_240}>user@gmail.com</Text>
        </View>
      </View>
      <View style={styles.View_2_241}>
        <View style={styles.View_2_242}>
          <Text style={styles.Text_2_242}>Confirm password</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6aaf/ae9d/354363ee14fb4e4b819b8da86a70d8bc"
          }}
          style={styles.ImageBackground_2_243}
        />
      </View>
      <View style={styles.View_2_244}>
        <View style={styles.View_2_245}>
          <Text style={styles.Text_2_245}>Password</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b8f7/07f2/ad831f6632d0e751135154071ae321ad"
          }}
          style={styles.ImageBackground_2_246}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6aaf/ae9d/354363ee14fb4e4b819b8da86a70d8bc"
          }}
          style={styles.ImageBackground_2_247}
        />
        <View style={styles.View_2_248}>
          <Text style={styles.Text_2_248}> </Text>
        </View>
      </View>
      <View style={styles.View_2_249}>
        <View style={styles.View_2_250}>
          <View style={styles.View_2_251} />
          <View style={styles.View_2_252}>
            <Text style={styles.Text_2_252}>Log In</Text>
          </View>
        </View>
        <View style={styles.View_2_253}>
          <View style={styles.View_2_254} />
          <View style={styles.View_2_255}>
            <Text style={styles.Text_2_255}>Sign up</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_2_256}>
        <View style={styles.View_2_257}>
          <Text style={styles.Text_2_257}>Or</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bce1/3c85/9c8925fc28210d469e23def0535b1d46"
          }}
          style={styles.ImageBackground_2_258}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bce1/3c85/9c8925fc28210d469e23def0535b1d46"
          }}
          style={styles.ImageBackground_2_259}
        />
      </View>
      <View style={styles.View_2_260}>
        <View style={styles.View_2_261}>
          <View style={styles.View_2_262}>
            <View style={styles.View_2_263} />
            <View style={styles.View_2_264} />
            <View style={styles.View_2_265}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4f3e/630a/1cde7c484b7ba3f94223b1bfe28a059a"
                }}
                style={styles.ImageBackground_2_266}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_2_269}>
          <View style={styles.View_2_270}>
            <View style={styles.View_2_271} />
            <View style={styles.View_2_272} />
            <View style={styles.View_2_273}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ba90/1de6/198c4ff7d24d11c42859412ea971161c"
                }}
                style={styles.ImageBackground_2_274}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_2_279}>
          <View style={styles.View_2_280}>
            <View style={styles.View_2_281} />
            <View style={styles.View_2_282} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aab7/a9eb/218fc917282087b37aa7bdce4c606ed8"
            }}
            style={styles.ImageBackground_2_283}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("122%") },
  View_2_234: {
    width: wp("35%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    justifyContent: "flex-start"
  },
  Text_2_234: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 34,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_235: {
    width: wp("62%"),
    top: hp("114%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    justifyContent: "flex-start"
  },
  Text_2_235: {
    color: "rgba(109, 116, 119, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_236: {
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
  View_2_237: {
    flexGrow: 1,
    width: wp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_237: {
    color: "rgba(10, 31, 49, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_238: {
    flexGrow: 1,
    width: wp("90%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%")
  },
  ImageBackground_2_239: {
    flexGrow: 1,
    width: wp("90%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%")
  },
  View_2_240: {
    flexGrow: 1,
    width: wp("49%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_2_240: {
    color: "rgba(181, 181, 181, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_241: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("60%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_242: {
    flexGrow: 1,
    width: wp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_242: {
    color: "rgba(10, 31, 49, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_243: {
    flexGrow: 1,
    width: wp("90%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%")
  },
  View_2_244: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("46%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_245: {
    flexGrow: 1,
    width: wp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_245: {
    color: "rgba(10, 31, 49, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_246: {
    flexGrow: 1,
    width: wp("90%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%")
  },
  ImageBackground_2_247: {
    flexGrow: 1,
    width: wp("90%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%")
  },
  View_2_248: {
    flexGrow: 1,
    width: wp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_2_248: {
    color: "rgba(181, 181, 181, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_249: {
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
  View_2_250: {
    flexGrow: 1,
    width: wp("74%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2_251: {
    width: wp("74%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_2_252: {
    width: wp("9%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    justifyContent: "flex-start"
  },
  Text_2_252: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_253: {
    flexGrow: 1,
    width: wp("74%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2_254: {
    width: wp("74%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_2_255: {
    width: wp("13%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    justifyContent: "flex-start"
  },
  Text_2_255: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_256: {
    width: wp("74%"),
    height: hp("3%"),
    top: hp("90%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  View_2_257: {
    width: wp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    justifyContent: "flex-start"
  },
  Text_2_257: {
    color: "rgba(35, 31, 32, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_258: {
    width: wp("28%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_2_259: {
    width: wp("28%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%")
  },
  View_2_260: {
    width: wp("63%"),
    height: hp("8%"),
    top: hp("99%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_261: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2_262: {
    width: wp("14%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2_263: {
    width: wp("14%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_2_264: {
    width: wp("10%"),
    height: hp("6%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_2_265: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_2_266: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2_269: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("0%")
  },
  View_2_270: {
    width: wp("14%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2_271: {
    width: wp("14%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_2_272: {
    width: wp("10%"),
    height: hp("6%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_2_273: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_2_274: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2_279: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("0%")
  },
  View_2_280: {
    width: wp("14%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2_281: {
    width: wp("14%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(247, 247, 247, 1)"
  },
  View_2_282: {
    width: wp("10%"),
    height: hp("6%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_2_283: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
