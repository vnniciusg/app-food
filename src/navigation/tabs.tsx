import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Login from '../screens/Login'
import Register from '../screens/Register'
import MealHistory from '../screens/MealHistory'
import CustomTabBar from '../components/CustomTabBar'
import AddFood from '../screens/AddFood'


const Tab = createBottomTabNavigator()

const Tabs = () =>{
    return(
        <Tab.Navigator  
        screenOptions={{
            tabBarShowLabel : false,
            tabBarStyle:{
                position:'absolute',
                bottom : 25,
                left : 20,
                right : 20,
                backgroundColor: '#0f4571',
                borderRadius : 15,
                height: 70,
                elevation: 0,
                
            }
        }}>
            <Tab.Screen
                    name='Login'
                    component={Login}
                    options={{
                        headerShown:false,
                        tabBarIcon: ({ focused }) => (<CustomTabBar focused={focused} iconFocused='person' iconNotFocused='person-outline' name='Login' />
                        ),
                    }}
            />
            <Tab.Screen
                    name='Register'
                    component={Register}
                    options={{
                        headerShown:false,
                        tabBarIcon: ({ focused }) => (<CustomTabBar focused={focused} iconFocused='home' iconNotFocused='home-outline' name='Registro' />
                        ),
                    }}
            />
            <Tab.Screen
                    name='Historico de Refeições'
                    component={MealHistory}
                    options={{
                        headerShown:false,
                        tabBarIcon: ({ focused }) => (<CustomTabBar focused={focused} iconFocused='restaurant' iconNotFocused='restaurant-outline' name='Historico' />
                        ),
                    }}
            />
            <Tab.Screen
                    name='Registro de refeiçoes'
                    component={AddFood}
                    options={{
                        headerShown:false,
                        tabBarIcon: ({ focused }) => (<CustomTabBar focused={focused} iconFocused='fast-food' iconNotFocused='fast-food-outline' name='Cadastrar Alimentos' />
                        ),
                    }}
            />
        </Tab.Navigator>
    )
}

export default Tabs;