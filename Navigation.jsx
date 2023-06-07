import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Timer } from "../Pages/Timer";
import { MainPages } from "../Pages/Main";
import { Notes } from '../Pages/Notes';
import { Shedule } from '../Pages/Shedule/Shedule'
import { Teachers } from '../Pages/Teachers'
import { Assets } from '../Pages/Assets'

const Stack = createNativeStackNavigator();

export const Navigation = () =>{
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="MainPages" component={MainPages} options={{headerShown: false}}/>
                <Stack.Screen name="Timer" component={Timer} options={{headerShown: false}}/>
                <Stack.Screen name="Notes" component={Notes} options={{headerShown: false}}/>
                <Stack.Screen name="Shedule" component={Shedule} options={{headerShown: false}}/>
                <Stack.Screen name="Teachers" component={Teachers} options={{headerShown: false}}/>
                <Stack.Screen name="Assets" component={Assets} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}