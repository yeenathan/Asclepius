import { Button } from "@ui-kitten/components"
import { Image, View } from "react-native"
import { styles } from "@/app/stylesheet";
import { NavButton } from "@/assets/svgExports"

export const AddMedButton = ({navigation}) => {
  const size = 80;
  return (
    <View style={{alignItems: "center", position: "absolute", bottom: 20, width: "100%"}}>
      <Button
        onPress={() => navigation.navigate("Med Stack", { screen: "Add Med" })}
        style={{...styles.invisBorder, backgroundColor: "transparent", padding: "0", borderColor: "0", maxWidth: size}}
        // children={() => {NavButton}}  
      >
        {NavButton}</Button>
    </View>
    
  )
}