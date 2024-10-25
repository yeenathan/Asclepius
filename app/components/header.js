import { TopNavigation, TopNavigationAction, Icon } from "@ui-kitten/components"
import { default as colorTheme } from "@/custom-theme.json"

export const Header = ({navigation}) => {
  return (
    <TopNavigation accessoryLeft= {
      <TopNavigationAction
        onPress={() => navigation.goBack()}
        icon={<Icon name="arrow-back"/>}
      />
    }
      style={{width: "100%", backgroundColor: colorTheme["silver-white"]}}
    />
  )
}