import { Modal, Text } from "@ui-kitten/components";
import { View } from "react-native";

export function Overlay(props) {
    return(
        <Modal
            visible={props.visible}
            backdropStyle={{backgroundColor: "rgba(0, 0, 0, 0.5)"}}
            onBackdropPress={props.toggleVisible}
        >
            <View>
                <Text category="h1">Hello</Text>
            </View>
        </Modal>
    )
}