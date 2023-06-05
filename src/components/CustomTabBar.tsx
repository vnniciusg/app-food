import React from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

interface ICustomTabBar {
  focused: boolean;
  iconFocused: string;
  iconNotFocused: string;
  name: string;
}

const CustomTabBar: React.FC<ICustomTabBar> = ({
  focused,
  iconFocused,
  iconNotFocused,
  name,
}) => {
  return (
    <View className="flex justify-center items-center">
      <Icon
        name={focused ? iconFocused : iconNotFocused}
        size={25}
        color={focused ? "#19A7CE" : "#AFD3E2"}
      />
      <Text className={focused ? "text-white text-xs" : "text-color2 text-ts"}>
        {name}
      </Text>
    </View>
  );
};

export default CustomTabBar;
