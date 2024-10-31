import { StyleSheet } from "react-native"
import {default as colorTheme} from "@/custom-theme.json"

export const styles = StyleSheet.create({
    masterLayout: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16, paddingBottom: "0", backgroundColor: colorTheme['silver-white']},
    masterLayoutNoNav: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16, backgroundColor: colorTheme['silver-white'], gap: 16},
    rowContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 16,
        width: "100%"
    },
    container: {
        width: "100%"
    },
    orangeButton: {
        backgroundColor: colorTheme["hunyadi-yellow"],
        borderColor: colorTheme["hunyadi-yellow"],
    },
    orangerButton: {
        backgroundColor: colorTheme["princeton-orange"],
        borderColor: colorTheme["princeton-orange"],
    },
    invisBorder: {
        border: "transparent",
        borderTopColor: "transparent",
        borderBottomColor: "transparent",
        borderLeftColor: "transparent",
        borderRightColor: "transparent"
    },
    blackBorder: {
        borderColor: "#00000050",
        // borderTopColor: "#00000050",
        // borderBottomColor: "#00000050",
        // borderLeftColor: "#00000050",
        // borderRightColor: "#00000050"
    },
    orangeBorder: {
        borderColor: colorTheme["princeton-orange"],
        // borderTopColor: colorTheme["princeton-orange"],
        // borderBottomColor: colorTheme["princeton-orange"],
        // borderLeftColor: colorTheme["princeton-orange"],
        // borderRightColor: colorTheme["princeton-orange"]
    },
    baseBigButton: {
        width: "100%",
        borderRadius: 16
    }
});