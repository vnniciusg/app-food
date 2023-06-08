import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import MealHistory from "../screens/MealHistory";
import CustomTabBar from "../components/CustomTabBar";
import UserProfileScreen from "../screens/Profile";

const Tab = createBottomTabNavigator();

const AppStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 25,
          left: 20,
          right: 20,
          backgroundColor: "#0f4571",
          borderRadius: 15,
          height: 70,
          elevation: 0,
        },
      }}
    >
      <Tab.Screen
        name="Profile"
        component={UserProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <CustomTabBar
              focused={focused}
              iconFocused="person"
              iconNotFocused="person-outline"
              name="Profile"
            />
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={MealHistory}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <CustomTabBar
              focused={focused}
              iconFocused="restaurant"
              iconNotFocused="restaurant-outline"
              name="Historico"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppStack;
