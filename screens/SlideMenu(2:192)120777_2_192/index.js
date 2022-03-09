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
      <View style={styles.View_2_193} />
      <View style={styles.View_2_194}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e9b2/4d21/18de336cc7358f6169ee9c1b8bcb9660"
          }}
          style={styles.ImageBackground_2_195}
        />
        <View style={styles.View_2_196}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/acbd/4a46/2298b92694b450149b538bb352467202"
            }}
            style={styles.ImageBackground_2_197}
          />
        </View>
      </View>
      <View style={styles.View_2_201} />
      <View style={styles.View_2_202}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e841/b90d/b13c9dca2440fd443a2b14dcfa259ad7"
          }}
          style={styles.ImageBackground_2_203}
        />
        <View style={styles.View_2_205}>
          <Text style={styles.Text_2_205}>Settings</Text>
        </View>
      </View>
      <View style={styles.View_2_206}>
        <View style={styles.View_2_207}>
          <Text style={styles.Text_2_207}>Terms and Conditions</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3166/36dd/e79fdb336dee24d6dc372eeba58a0dfe"
          }}
          style={styles.ImageBackground_2_208}
        />
      </View>
      <View style={styles.View_2_211}>
        <View style={styles.View_2_212}>
          <Text style={styles.Text_2_212}>Privacy policy</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/939f/6683/aaf1e8fd82ce1fa9ad3d16bd51940192"
          }}
          style={styles.ImageBackground_2_213}
        />
      </View>
      <View style={styles.View_2_215}>
        <View style={styles.View_2_216} />
        <View style={styles.View_2_217} />
        <View style={styles.View_2_218} />
        <View style={styles.View_2_219} />
        <View style={styles.View_2_220} />
      </View>
      <View style={styles.View_2_221}>
        <View style={styles.View_2_222}>
          <Text style={styles.Text_2_222}>Logout</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/95fb/4cc9/7b749f4ba9306c2429151131d17a4b16"
          }}
          style={styles.ImageBackground_2_223}
        />
      </View>
      <View style={styles.View_2_224}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/591c/621b/925f48c53c9629df298fadf5b0c718ba"
          }}
          style={styles.ImageBackground_2_225}
        />
      </View>
      <View style={styles.View_2_228}>
        <View style={styles.View_2_229}>
          <Text style={styles.Text_2_229}>Push notification preference</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6979/6616/3e880cc0ef26e931bef2c68f8d4191fa"
          }}
          style={styles.ImageBackground_2_230}
        />
        <View style={styles.View_2_231} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/edad/7962/b4850ace87c3030e6cb6fe99779ed95b"
          }}
          style={styles.ImageBackground_2_232}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(196, 196, 196, 1)" },
  View_2: { height: hp("122%") },
  View_2_193: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("122%"),
    minHeight: hp("122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 0
  },
  View_2_194: {
    width: wp("26%"),
    height: hp("15%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_2_195: {
    flexGrow: 1,
    width: wp("26%"),
    height: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2_196: {
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
  ImageBackground_2_197: {
    width: wp("9%"),
    height: hp("5%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_2_201: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%"),
    top: hp("34%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_2_202: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("42%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_2_203: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2_205: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_2_205: {
    color: "rgba(40, 71, 82, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_2_206: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("49%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_207: {
    flexGrow: 1,
    width: wp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_2_207: {
    color: "rgba(40, 71, 82, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  ImageBackground_2_208: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2_211: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("56%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_212: {
    flexGrow: 1,
    width: wp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_2_212: {
    color: "rgba(40, 71, 82, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  ImageBackground_2_213: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2_215: {
    width: wp("73%"),
    minWidth: wp("73%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("40%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_216: {
    flexGrow: 1,
    width: wp("70%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(216, 216, 216, 1)",
    opacity: 0.4000000059604645,
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_2_217: {
    flexGrow: 1,
    width: wp("70%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%"),
    backgroundColor: "rgba(216, 216, 216, 1)",
    opacity: 0.4000000059604645,
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_2_218: {
    flexGrow: 1,
    width: wp("70%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13%"),
    backgroundColor: "rgba(216, 216, 216, 1)",
    opacity: 0.4000000059604645,
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_2_219: {
    flexGrow: 1,
    width: wp("70%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("21%"),
    backgroundColor: "rgba(216, 216, 216, 1)",
    opacity: 0.4000000059604645,
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_2_220: {
    flexGrow: 1,
    width: wp("70%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("27%"),
    backgroundColor: "rgba(216, 216, 216, 1)",
    opacity: 0.4000000059604645,
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_2_221: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("63%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_222: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_2_222: {
    color: "rgba(40, 71, 82, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  ImageBackground_2_223: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2_224: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_2_225: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2_228: {
    width: wp("71%"),
    minWidth: wp("71%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("33%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_229: {
    flexGrow: 1,
    width: wp("41%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_2_229: {
    color: "rgba(40, 71, 82, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  ImageBackground_2_230: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2_231: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%"),
    top: hp("0%"),
    backgroundColor: "rgba(230, 230, 230, 1)"
  },
  ImageBackground_2_232: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("1%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
