import React from "react"
import { Dimensions, Image, StyleSheet, View } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import { showMessage } from "@github/utils"
import { Text } from "@github-shared"
import { ICardItemProps } from "./card-item.props"

const CardItem = (props: ICardItemProps) => {
  return (
    <TouchableOpacity style={styles.cardview} onPress={() => showMessage(props.image)}>
      <View style={styles.imagecontainer}>
        <Image
          resizeMode="cover"
          style={styles.cardimage}
          source={{
            uri: props.image,
          }}
        />
      </View>
      <View style={styles.cardinfo}>
        <Text style={styles.cardtitle}>{props.name}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default CardItem
// <View style={styles.cardtext}>
//         <Text style={styles.textdate}>{this.props.date}</Text>
//         <Text style={styles.texthour}>{this.props.hour}</Text>
//       </View>
const styles = StyleSheet.create({
  cardview: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "white",
    elevation: 3,
    maxHeight: 200,
    width: Dimensions.get("window").width - 20,
    margin: 1,
    marginTop: 10,
    borderRadius: 4,
  },
  imagecontainer: {
    flex: 7,
    height: 140,
    borderRadius: 4,
  },
  cardimage: {
    flex: 1,
    opacity: 0.8,
    height: 140,
    width: 140,
    backgroundColor: "#000",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  cardinfo: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  cardtitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: "bold",
  },
  cardtext: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  textdate: {
    color: "#5e5e71",
  },
  texthour: {
    color: "#5e5e71",
  },
})
