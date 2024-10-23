import { StyleSheet } from "react-native"
import {default as colorTheme} from "@/custom-theme.json"

export const styles = StyleSheet.create({
    rowContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: "1rem",
        width: "100%"
    },
    container: {
        width: "100%"
    },
    
    orangeButton: {
        backgroundColor: colorTheme["hunyadi-yellow"],
        borderColor: colorTheme["hunyadi-yellow"],
    }
});