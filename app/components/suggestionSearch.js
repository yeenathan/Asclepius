import { suggestions } from "@/app/data/addMedData"
import { View } from "react-native"
import { Text } from "@ui-kitten/components"
import { Input } from "@ui-kitten/components"
import { useState } from "react"

const SuggestionContainer = () => {
  return (
    suggestions.map((suggestion, index) => (
      <View>
        <Text key={index} category="p2">{suggestion}</Text>
      </View>
    ))
  )
}

export const SuggestionSearch = () => {
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState(null);

  function handleInput(e) {
    if (e.target.value) setVisible(true);
    else setVisible(false);
  }

  return (
    <View>
      <Input placeholder="Input field" onChange={handleInput}/>
      {
        visible ?
        <SuggestionContainer />
        :
        null
      }
    </View>
  )
}