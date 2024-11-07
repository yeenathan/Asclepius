import { Button, Text } from "@ui-kitten/components"

export const MyButton = ({text, press, styles}) => {
  return(
<Button
  size="giant"
  onPress={press}
  style={styles} // Ensure styles apply to the button itself
>
  <Text category="h2" style={{ color: 'black' }}>{text}</Text> {/* Apply color here */}
</Button>
  )
}