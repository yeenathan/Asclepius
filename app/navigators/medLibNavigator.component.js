import { createStackNavigator } from "@react-navigation/stack";
import {
  MedLibraryScreen,
  InfoScreen,
  EditInfoScreen,
  MedDescription,
} from "@/app/pages/medLibrary.component";

const Stack = createStackNavigator();

export const MedLibNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Med Library"
        component={MedLibraryScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Info"
        component={InfoScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};