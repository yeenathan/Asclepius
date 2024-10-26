import { Button, Text } from "@ui-kitten/components"

export const MyButton = ({text, press, styles}) => {
  return(
    <Button
      size="giant"
      onPress={press}
      style={styles}
      children={() => (
        <Text category="h2">{text}</Text>
      )}
    />
  )
}