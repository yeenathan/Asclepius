import { AppNavigator } from "@/app/navigators/appnavigator.component"
import { MedNavigator } from "@/app/navigators/mednavigator.component"

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export const MainNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home Stack" component={AppNavigator} options={{headerShown: false}}/>
            <Stack.Screen name="Med Stack" component={MedNavigator} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}