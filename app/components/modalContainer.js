import { StyleSheet, View } from "react-native";
import { Button, Text } from "@ui-kitten/components";
import { default as colorTheme } from "@/custom-theme.json"

export function ModalContainer(props) {
    return(
        <View style={{backgroundColor: "#ffffff", alignItems: "center", padding: "2rem", borderRadius: "2rem"}}>
            <Text category="h2">{props.title}</Text>
            <Text category="p1">{props.body}</Text>
            <View style={{marginTop: "4rem"}}>
                <Button onPress={props.toggleOverlayVisible} size="giant" style={{...style.button, backgroundColor: colorTheme["princeton-orange"]}} children={() => <Text category="p2">I understand</Text>}/>
                <Button onPress={props.toggleOverlayVisible} size="giant" style={{...style.button, backgroundColor: "ffffff"}} children={() => <Text category="p2">Remind me later</Text>}/>               
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    button: {
        minWidth: "18rem",
        marginVertical: ".2rem",
        borderRadius: "1rem",
        borderColor: colorTheme["princeton-orange"],
        color: "#000000"
    }
})