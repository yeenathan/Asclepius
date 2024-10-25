import { Button } from "@ui-kitten/components"
import { Image } from "react-native"

export const AddMedButton = ({navigation}) => {
  const size = "5rem";
  return (
    <Button
      onPress={() => navigation.navigate("Med Stack", { screen: "Add Med" })}
      style={{position: "absolute", bottom: "1rem", backgroundColor: "none", zIndex: "1", padding: "0", border: "none",
        borderTopColor: "none", borderBottomColor: "none", borderLeftColor: "none", borderRightColor: "none",
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