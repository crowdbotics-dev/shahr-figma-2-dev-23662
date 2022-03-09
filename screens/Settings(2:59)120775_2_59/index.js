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
      <View style={styles.View_2_60}>
        <View style={styles.View_2_61} />
        <View style={styles.View_2_62}>
          <Text style={styles.Text_2_62}>Save</Text>
        </View>
      </View>
      <View style={styles.View_2_63}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/adb6/c39d/74694ff0cb5498bdddb13c565f911504"
          }}
          style={styles.ImageBackground_2_64}
        />
      </View>
      <View style={styles.View_2_66}>
        <Text style={styles.Text_2_66}>Invite Friends</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/08f9/1fe4/fe51a8ba847a839689ad654846562c6f"
        }}
        style={styles.ImageBackground_2_67}
      />
      <View style={styles.View_2_74}>
        <View style={styles.View_2_75} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/edad/7962/b4850ace87c3030e6cb6fe99779ed95b"
          }}
          style={styles.ImageBackground_2_76}
        />
      </View>
      <View style={styles.View_2_77}>
        <View style={styles.View_2_78} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/edad/7962/b4850ace87c3030e6cb6fe99779ed95b"
          }}
          style={styles.ImageBackground_2_79}
        />
      </View>
      <View style={styles.View_2_80}>
        <View style={styles.View_2_81}>
          <Text style={styles.Text_2_81}>FAQ’s</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/df19/08c7/1f7e737d397c48c73e3e1d3fdd574a52"
          }}
          style={styles.ImageBackground_2_82}
        />
      </View>
      <View style={styles.View_2_84}>
        <View style={styles.View_2_85}>
          <Text style={styles.Text_2_85}>Email Support</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8e5a/0ed8/ea082b4effd2e7aa6ffa4584c72f323f"
          }}
          style={styles.ImageBackground_2_86}
        />
      </View>
      <View style={styles.View_2_87}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4324/0095/d7be0ef179058c0f8a6fb80001b5b438"
          }}
          style={styles.ImageBackground_2_88}
        />
      </View>
      <View style={styles.View_2_91}>
        <View style={styles.View_2_92}>
          <Text style={styles.Text_2_92}>Auto Updates</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1d88/9e1f/604463c4a09bf6f9a15f8d5d5d78cfdf"
          }}
          style={styles.ImageBackground_2_93}
        />
      </View>
      <View style={styles.View_2_94}>
        <View style={styles.View_2_95}>
          <Text style={styles.Text_2_95}>About Us</Text>
        </View>
        <View style={styles.View_2_96}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ab0b/d19f/eedff1dd05fab645aad841c5392444cd"
            }}
            style={styles.ImageBackground_2_97}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2a52/d7b8/d5680b963ab7ca6b5913c02b3f8d2188"
            }}
            style={styles.ImageBackground_2_98}
          />
        </View>
      </View>
      <View style={styles.View_2_101}>
        <View style={styles.View_2_102}>
          <Text style={styles.Text_2_102}>Push Notifications</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6979/6616/3e880cc0ef26e931bef2c68f8d4191fa"
          }}
          style={styles.ImageBackground_2_103}
        />
      </View>
      <View style={styles.View_2_104}>
        <Text style={styles.Text_2_104}>Settings</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("122%") },
  View_2_60: {
    width: wp("74%"),
    height: hp("7%"),
    top: hp("110%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_61: {
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
  View_2_62: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_2_62: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_63: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_2_64: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2_66: {
    width: wp("23%"),
    top: hp("41%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    justifyContent: "flex-start"
  },
  Text_2_66: {
    color: "rgba(35, 31, 32, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_67: {
    width: wp("83%"),
    height: hp("45%"),
    top: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  View_2_74: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("58%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_75: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(230, 230, 230, 1)"
  },
  ImageBackground_2_76: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%")
  },
  View_2_77: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("49%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_78: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(230, 230, 230, 1)"
  },
  ImageBackground_2_79: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%")
  },
  View_2_80: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("22%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_81: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_81: {
    color: "rgba(35, 31, 32, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_82: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2_84: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("31%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_85: {
    flexGrow: 1,
    width: wp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_85: {
    color: "rgba(35, 31, 32, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_86: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2_87: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_2_88: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2_91: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("58%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_92: {
    flexGrow: 1,
    width: wp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_92: {
    color: "rgba(35, 31, 32, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_93: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2_94: {
    width: wp("26%"),
    minWidth: wp("26%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("67%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_95: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_95: {
    color: "rgba(35, 31, 32, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_96: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_2_97: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_2_98: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_2_101: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("49%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_102: {
    flexGrow: 1,
    width: wp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_102: {
    color: "rgba(35, 31, 32, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_103: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2_104: {
    width: wp("20%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    justifyContent: "flex-start"
  },
  Text_2_104: {
    color: "rgba(35, 31, 32, 1)",
    fontSize: 18,
    fontWeight: "500",
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
