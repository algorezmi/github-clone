import React from "react"
import { Image, View } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import { showMessage } from "@github/utils"
import { Text } from "@github-shared"
import { ICardItemProps } from "./card-item.props"
import { styles } from "./card-item.style"

const CardItem = (props: ICardItemProps) => {
  // console.log("image :"+props.name)
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
