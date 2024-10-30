import { suggestions } from "@/app/data/addMedData"
import { View } from "react-native"
import { Text, Input, Button } from "@ui-kitten/components"
import { useState } from "react"

import { styles } from "@/app/stylesheet"

const SuggestionContainer = ({handleFill}) => {
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

export const SuggestionSearch = () => {
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState("");

  function handleInput(e) {
    if (e.target.value) {
      setValue(e.target.value);
      setVisible(true);
    }
    else setVisible(false);
  }

  function handleFill(value) {
    setValue(value);
    setVisible(false);
  }

  return (
    <View>
      <Input
        placeholder="Input field" onChange={handleInput} value={value}
        style={{width: "100%,", paddingVertical: 3.2}}
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

