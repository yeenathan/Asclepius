import { StyleSheet, View } from "react-native";
import { Button, Text } from "@ui-kitten/components";
import { default as colorTheme } from "@/custom-theme.json"

export function ModalContainer(props) {
    return(
        <View style={{backgroundColor: "#ffffff", alignItems: "center", padding: 32, borderRadius: 32 }}>
            <Text category="h2">{props.title}</Text>
            {props.body}
            <View style={{width: "100%"}}>
                <Button onPress={props.toggleOverlayVisible} size="giant" style={{...style.button, backgroundColor: colorTheme["princeton-orange"]}} children={() => <Text category="p2">I understand</Text>}/>
                <Button onPress={props.toggleOverlayVisible} size="giant" style={{...style.button, backgroundColor: "ffffff"}} children={() => <Text category="p2">Remind me later</Text>}/>               
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    button: {
        width: "100%",
        marginVertical: 3.2,
        borderRadius: 16,
        borderColor: colorTheme["princeton-orange"],
        color: "#000000"
    }
})