import { Button } from "@ui-kitten/components"
import { Image } from "react-native"
import { styles } from "@/app/stylesheet";

export const AddMedButton = ({navigation}) => {
  const size = 80;
  return (
    <Button
      onPress={() => navigation.navigate("Med Stack", { screen: "Add Med" })}
      style={{...styles.invisBorder, position: "absolute", bottom: 16, backgroundColor: "none", zIndex: "1", padding: "0",
        left: "0", right: "0", margin: "auto", 
        maxWidth: size
      }}
      children={() => (
        <Image
          source={require("@/assets/icons/button.svg")}
          style={{minWidth: size, minHeight: size}}
        />
      )}  
    />
  )
}