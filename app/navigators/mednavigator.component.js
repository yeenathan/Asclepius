import { createStackNavigator } from '@react-navigation/stack';
import { AddScreen } from "@/app/pages/addMed/addmed.component"
import { ScanScreen } from "@/app/pages/addMed/scanscreen.component"
import { MedNameEdit, MedIntervalEdit } from "@/app/pages/addMed/manualscreen.component"
import { MedLibraryScreen, InfoScreen, EditInfoScreen, EditReminderScreen } from "@/app/pages/medLibrary.component"

const Stack = createStackNavigator();

export const MedNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Add Med" component={AddScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Scan" component={ScanScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Manual" component={MedNameEdit} options={{headerShown: false}}/>
      <Stack.Screen name="Interval Edit" component={MedIntervalEdit} options={{headerShown: false}}/>

      <Stack.Screen name="Edit Info" component={EditInfoScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Edit Reminder" component={EditReminderScreen} options={{headerShown: false}}/>
    </Stack.Navigator>
  )
}