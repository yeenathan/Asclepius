import { createStackNavigator } from '@react-navigation/stack';
import { AddScreen } from "@/app/pages/addMed/addmed.component"
import { ScanScreen } from "@/app/pages/addMed/scanscreen.component"
import { ManualScreen } from "@/app/pages/addMed/manualscreen.component"

const Stack = createStackNavigator();

export const MedNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Add Med" component={AddScreen}/>
      <Stack.Screen name="Scan" component={ScanScreen}/>
      <Stack.Screen name="Manual" component={ManualScreen}/>
    </Stack.Navigator>
  )
}