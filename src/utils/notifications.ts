import { Alert, ToastAndroid } from "react-native"
import { Platform } from "@github/utils"
import { R } from "@github/res"

export const showMessage = (message: string) => {
  if (Platform.isAndroid) {
    ToastAndroid.show(message, ToastAndroid.SHORT)
  } else if (Platform.isIOS) {
    Alert.alert(R.string.shared.errorTitle, message)
  }
}
