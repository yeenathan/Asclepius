import { createStackNavigator } from '@react-navigation/stack';
import { AddScreen } from "@/app/pages/addMed/addmed.component"
import { ScanScreen } from "@/app/pages/addMed/scanscreen.component"
import { ManualScreen } from "@/app/pages/addMed/manualscreen.component"
import { ScanScreenTwo } from "./scan2.component"

const Stack = createStackNavigator();

export const MedNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Add Med" component={AddScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Scan" component={ScanScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Manual" component={ManualScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Scan 2" component={ScanScreenTwo} />
    </Stack.Navigator>
  )
}