import { View } from "react-native"
import { Text, Input, Button } from "@ui-kitten/components"
import { useState } from "react"

import { styles } from "@/app/stylesheet"

const SuggestionContainer = ({handleFill}) => {
  const suggestions = [
    "Lisinopril",
    "Lidocaine-Menthol",
    "Lipoc Acid",
    "Lidopro",
    "Lipase Concentrate-Hp",
    "Lidozengel",
    "Lipitor"
  ]
  return (
    suggestions.map((suggestion, index) => (
      <Button
        key={index}
        onPress={() => handleFill(suggestion)}
        style={{backgroundColor: "#ffffff", justifyContent: "flex-start", ...styles.blackBorder}}
        children={
          <View>
            <Text category="p2">{suggestion}</Text>
          </View>
        }
      />
    ))
  )
}

export const SuggestionSearch = (props) => {
  const [visible, setVisible] = useState(false);

  function handleInput(e) {
    if (e) {
      props.setValue(e);
      setVisible(true);
    }
    else setVisible(false);
  }

  function handleFill(value) {
    props.setValue(value);
    setVisible(false);
  }

  return (
    <View>
      <Input
        placeholder="Input field" onChangeText={(e) => handleInput(e)} value={props.value}
        style={{width: "100%", paddingVertical: 3.2}}
      />
      {
        visible ?
        <SuggestionContainer handleFill={handleFill} />
        :
        null
      }
    </View>
  )
}

