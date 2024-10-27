import { createStackNavigator } from '@react-navigation/stack';
import { AddScreen } from "@/app/pages/addMed/addmed.component"
import { ScanScreen } from "@/app/pages/addMed/scanscreen.component"
import { ManualNameEdit, ManualIntervalEdit } from "@/app/pages/addMed/manualscreen.component"
import { ConfirmScan } from "@/app/pages/addMed/scanconfirm.component"
import { EditScreen } from "@/app/pages/addMed/editmed.component"
import { MedLibraryScreen, InfoScreen, EditInfoScreen, EditReminderScreen } from "@/app/pages/medLibrary.component"
import { SetTime } from "@/app/pages/addMed/addtimeinterval.component"
import { DosePerTime } from "@/app/pages/addMed/dosepertime.component"


const Stack = createStackNavigator();

export const MedNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Add Med" component={AddScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Scan" component={ScanScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Manual Name" component={ManualNameEdit} options={{headerShown: false}}/>
      <Stack.Screen name="Manual Interval" component={ManualIntervalEdit} options={{headerShown: false}}/>
      <Stack.Screen name="Confirm Med" component={ConfirmScan} options={{headerShown: false}}/>
      <Stack.Screen name="Edit Med" component={EditScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Med Time" component={SetTime} options={{headerShown: false}} />
      <Stack.Screen name="Dose Time" component={DosePerTime} options={{headerShown: false}} />

      <Stack.Screen name="Edit Info" component={EditInfoScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Edit Reminder" component={EditReminderScreen} options={{headerShown: false}}/>
    </Stack.Navigator>
  )
}