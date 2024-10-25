import { StyleSheet } from "react-native"
import {default as colorTheme} from "@/custom-theme.json"

export const styles = StyleSheet.create({
    masterLayout: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: "2.5rem", paddingBottom: "0", backgroundColor: colorTheme['silver-white']},
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
    },
    invisBorder: {
        border: "none",
        borderTopColor: "none",
        borderBottomColor: "none",
        borderLeftColor: "none",
        borderRightColor: "none"
    },
    blackBorder: {
        borderTopColor: "#000000",
        borderBottomColor: "#000000",
        borderLeftColor: "#000000",
        borderRightColor: "#000000"
    }
});