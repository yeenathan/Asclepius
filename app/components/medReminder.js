import {styles} from "@/app/stylesheet"
import { View } from "react-native"
import { Button, Text } from "@ui-kitten/components"

export function MedReminder() {
  return(
    <View style={styles.customShape}>
      <Text category="h2" style={{ color: 'white' }}>
        No Medications Added Yet.
      </Text>
      <Text category="c1" style={{ color: 'white'}}>
        Tap below to start managing your reminders.
      </Text>
      <View style={{width: "100%", alignItems: "flex-end"}}>
        <Button
          size="small"
          style={{
            ...styles.whiteButton,
            borderRadius: 16,
            maxWidth: "fit-content",
            position: "absolute",
            marginTop: 8
          }}
          onPress={() => navigation.navigate("Med Stack", {screen: "Add Med"})}
          children={() => <Text category="p3" style={{paddingHorizontal: 8}}>Add Medication</Text>}
        />
      </View>
    </View>
  )
}