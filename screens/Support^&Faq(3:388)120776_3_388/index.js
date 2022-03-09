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
      <View style={styles.View_2_105}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/adb6/c39d/74694ff0cb5498bdddb13c565f911504"
          }}
          style={styles.ImageBackground_2_106}
        />
      </View>
      <View style={styles.View_2_108}>
        <Text style={styles.Text_2_108}>FAQ Information</Text>
      </View>
      <View style={styles.View_2_109}>
        <View style={styles.View_2_110}>
          <View style={styles.View_2_111} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ee61/ee51/7d3886c300d6c1378f29624d9a64f3d0"
            }}
            style={styles.ImageBackground_2_112}
          />
          <View style={styles.View_2_114}>
            <Text style={styles.Text_2_114}>Search here</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_2_115}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3517/f257/b9a36a57c5bf873972b5b14e82c1fbc0"
          }}
          style={styles.ImageBackground_2_116}
        />
      </View>
      <View style={styles.View_2_118}>
        <View style={styles.View_2_119}>
          <View style={styles.View_2_120} />
          <View style={styles.View_2_121}>
            <Text style={styles.Text_2_121}>Diam proin at.</Text>
          </View>
          <View style={styles.View_2_122}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ef66/182c/17cc617a630dd5a71922f566148a630f"
              }}
              style={styles.ImageBackground_2_123}
            />
          </View>
        </View>
        <View style={styles.View_2_125}>
          <View style={styles.View_2_126} />
          <View style={styles.View_2_127}>
            <Text style={styles.Text_2_127}>Aliquam ut habitant.</Text>
          </View>
          <View style={styles.View_2_128}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ef66/182c/17cc617a630dd5a71922f566148a630f"
              }}
              style={styles.ImageBackground_2_129}
            />
          </View>
        </View>
        <View style={styles.View_2_131}>
          <View style={styles.View_2_132} />
          <View style={styles.View_2_133}>
            <Text style={styles.Text_2_133}>Eget nibh massa.</Text>
          </View>
          <View style={styles.View_2_134}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ef66/182c/17cc617a630dd5a71922f566148a630f"
              }}
              style={styles.ImageBackground_2_135}
            />
          </View>
        </View>
        <View style={styles.View_2_137}>
          <View style={styles.View_2_138} />
          <View style={styles.View_2_139}>
            <Text style={styles.Text_2_139}>Interdum ut cursus.</Text>
          </View>
          <View style={styles.View_2_140}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ef66/182c/17cc617a630dd5a71922f566148a630f"
              }}
              style={styles.ImageBackground_2_141}
            />
          </View>
        </View>
        <View style={styles.View_2_143}>
          <View style={styles.View_2_144} />
          <View style={styles.View_2_145}>
            <Text style={styles.Text_2_145}>Enim elit urna ut.</Text>
          </View>
          <View style={styles.View_2_146}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ef66/182c/17cc617a630dd5a71922f566148a630f"
              }}
              style={styles.ImageBackground_2_147}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_2_149}>
        <View style={styles.View_2_150}>
          <Text style={styles.Text_2_150}>Varius tincidunt.</Text>
        </View>
        <View style={styles.View_2_151}>
          <Text style={styles.Text_2_151}>Volutpat euismod ut tempus.</Text>
        </View>
        <View style={styles.View_2_152}>
          <Text style={styles.Text_2_152}>Et nulla quis nullam dui.</Text>
        </View>
        <View style={styles.View_2_153}>
          <Text style={styles.Text_2_153}>Eget gravida tellus molestie.</Text>
        </View>
        <View style={styles.View_2_154}>
          <Text style={styles.Text_2_154}>Quam mus facilisi sed vitae.</Text>
        </View>
        <View style={styles.View_2_155}>
          <Text style={styles.Text_2_155}>Diam adipiscing tempor porta.</Text>
        </View>
        <View style={styles.View_2_156}>
          <Text style={styles.Text_2_156}>Egestas purus at porta donec.</Text>
        </View>
        <View style={styles.View_2_157}>
          <Text style={styles.Text_2_157}>Tincidunt urna id enim rhoncus.</Text>
        </View>
        <View style={styles.View_2_158}>
          <View style={styles.View_2_159}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd96/b823/30da31ead50b70d7ba62ea2f970d69ba"
              }}
              style={styles.ImageBackground_2_160}
            />
          </View>
        </View>
        <View style={styles.View_2_162}>
          <View style={styles.View_2_163}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd96/b823/30da31ead50b70d7ba62ea2f970d69ba"
              }}
              style={styles.ImageBackground_2_164}
            />
          </View>
        </View>
        <View style={styles.View_2_166}>
          <View style={styles.View_2_167}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd96/b823/30da31ead50b70d7ba62ea2f970d69ba"
              }}
              style={styles.ImageBackground_2_168}
            />
          </View>
        </View>
        <View style={styles.View_2_170}>
          <View style={styles.View_2_171}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd96/b823/30da31ead50b70d7ba62ea2f970d69ba"
              }}
              style={styles.ImageBackground_2_172}
            />
          </View>
        </View>
        <View style={styles.View_2_174}>
          <View style={styles.View_2_175}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd96/b823/30da31ead50b70d7ba62ea2f970d69ba"
              }}
              style={styles.ImageBackground_2_176}
            />
          </View>
        </View>
        <View style={styles.View_2_178}>
          <View style={styles.View_2_179}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd96/b823/30da31ead50b70d7ba62ea2f970d69ba"
              }}
              style={styles.ImageBackground_2_180}
            />
          </View>
        </View>
        <View style={styles.View_2_182}>
          <View style={styles.View_2_183}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd96/b823/30da31ead50b70d7ba62ea2f970d69ba"
              }}
              style={styles.ImageBackground_2_184}
            />
          </View>
        </View>
        <View style={styles.View_2_186}>
          <View style={styles.View_2_187}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd96/b823/30da31ead50b70d7ba62ea2f970d69ba"
              }}
              style={styles.ImageBackground_2_188}
            />
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c790/c694/5fd305935b60da4958d9975bb6070fcf"
        }}
        style={styles.ImageBackground_2_190}
      />
      <View style={styles.View_2_191}>
        <Text style={styles.Text_2_191}>Support &amp; FAQ</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("122%") },
  View_2_105: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_2_106: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2_108: {
    width: wp("28%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    justifyContent: "flex-start"
  },
  Text_2_108: {
    color: "rgba(35, 31, 32, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_109: {
    width: wp("69%"),
    height: hp("6%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_110: {
    flexGrow: 1,
    width: wp("69%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2_111: {
    width: wp("69%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(246, 246, 246, 1)"
  },
  ImageBackground_2_112: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_2_114: {
    width: wp("18%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    justifyContent: "flex-start"
  },
  Text_2_114: {
    color: "rgba(35, 31, 32, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_115: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%")
  },
  ImageBackground_2_116: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2_118: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("42%"),
    minHeight: hp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("66%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_119: {
    flexGrow: 1,
    width: wp("83%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2_120: {
    width: wp("83%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_2_121: {
    width: wp("24%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_2_121: {
    color: "rgba(35, 31, 32, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_122: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%")
  },
  ImageBackground_2_123: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2_125: {
    flexGrow: 1,
    width: wp("83%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%")
  },
  View_2_126: {
    width: wp("83%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_2_127: {
    width: wp("35%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_2_127: {
    color: "rgba(35, 31, 32, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_128: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%")
  },
  ImageBackground_2_129: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2_131: {
    flexGrow: 1,
    width: wp("83%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("17%")
  },
  View_2_132: {
    width: wp("83%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_2_133: {
    width: wp("30%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_2_133: {
    color: "rgba(35, 31, 32, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_134: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%")
  },
  ImageBackground_2_135: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2_137: {
    flexGrow: 1,
    width: wp("83%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("26%")
  },
  View_2_138: {
    width: wp("83%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_2_139: {
    width: wp("34%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_2_139: {
    color: "rgba(35, 31, 32, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_140: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%")
  },
  ImageBackground_2_141: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2_143: {
    flexGrow: 1,
    width: wp("83%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("35%")
  },
  View_2_144: {
    width: wp("83%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_2_145: {
    width: wp("29%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_2_145: {
    color: "rgba(35, 31, 32, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_146: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%")
  },
  ImageBackground_2_147: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2_149: {
    width: wp("47%"),
    minWidth: wp("47%"),
    height: hp("32%"),
    minHeight: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("31%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_150: {
    flexGrow: 1,
    width: wp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_150: {
    color: "rgba(35, 31, 32, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_151: {
    flexGrow: 1,
    width: wp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_2_151: {
    color: "rgba(35, 31, 32, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_152: {
    flexGrow: 1,
    width: wp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_2_152: {
    color: "rgba(35, 31, 32, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_153: {
    flexGrow: 1,
    width: wp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("12%"),
    justifyContent: "flex-start"
  },
  Text_2_153: {
    color: "rgba(35, 31, 32, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_154: {
    flexGrow: 1,
    width: wp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("16%"),
    justifyContent: "flex-start"
  },
  Text_2_154: {
    color: "rgba(35, 31, 32, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_155: {
    flexGrow: 1,
    width: wp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("20%"),
    justifyContent: "flex-start"
  },
  Text_2_155: {
    color: "rgba(35, 31, 32, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_156: {
    flexGrow: 1,
    width: wp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("24%"),
    justifyContent: "flex-start"
  },
  Text_2_156: {
    color: "rgba(35, 31, 32, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_157: {
    flexGrow: 1,
    width: wp("41%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("28%"),
    justifyContent: "flex-start"
  },
  Text_2_157: {
    color: "rgba(35, 31, 32, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_158: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_2_159: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_2_160: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2_162: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_2_163: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_2_164: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2_166: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_2_167: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_2_168: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2_170: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_2_171: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_2_172: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2_174: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("17%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_2_175: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_2_176: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2_178: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("21%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_2_179: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_2_180: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2_182: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("25%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_2_183: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_2_184: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2_186: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("28%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_2_187: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_2_188: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_2_190: {
    width: wp("83%"),
    height: hp("0%"),
    top: hp("65%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  View_2_191: {
    width: wp("35%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    justifyContent: "flex-start"
  },
  Text_2_191: {
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
