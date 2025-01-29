import { createStackNavigator } from '@react-navigation/stack';
import { AddScreen } from "@/app/pages/addMed/addmed.component"
import { ScanScreen } from "@/app/pages/addMed/scanscreen.component"
import { Onboarding } from '../pages/home.component';
import { SettingsScreen } from "@/app/pages/settings"


import { FormScreen } from "@/app/pages/new-hifi/FormScreen"
import { EditIcon, EditName, EditSchedule, EditFrequency, EditDuration, EditDose, EditStrength, EditNickname, EditDIN, EditQuantity } from "@/app/pages/new-hifi/EditScreens"


const Stack = createStackNavigator();

export const MedNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Add Med" component={AddScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Scan" component={ScanScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Settings" component={SettingsScreen} options={{headerShown: false}}/>

      <Stack.Screen name="Onboarding" component={Onboarding} options={{headerShown: false}}/>

      <Stack.Screen name="Form" component={FormScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Edit Name" component={EditName} options={{headerShown: false}}/>
      <Stack.Screen name="Edit Nickname" component={EditNickname} options={{headerShown: false}}/>
      <Stack.Screen name="Edit Schedule" component={EditSchedule} options={{headerShown: false}}/>
      <Stack.Screen name="Edit Frequency" component={EditFrequency} options={{headerShown: false}}/>
      <Stack.Screen name="Edit Duration" component={EditDuration} options={{headerShown: false}}/>
      <Stack.Screen name="Edit Icon" component={EditIcon} options={{headerShown: false}}/>
      <Stack.Screen name="Edit Dose" component={EditDose} options={{headerShown: false}}/>
      <Stack.Screen name="Edit Strength" component={EditStrength} options={{headerShown: false}}/>
      <Stack.Screen name="Edit DIN" component={EditDIN} options={{headerShown: false}}/>
      <Stack.Screen name="Edit Quantity" component={EditQuantity} options={{headerShown: false}}/>
      </Stack.Navigator>
  )
}