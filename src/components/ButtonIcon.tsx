import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { TouchableOpacity } from "react-native";

interface IButtonIcon {
  buttonIconName: string;
  onPress?: () => void;
}

const ButtonIcon: React.FC<IButtonIcon> = ({ buttonIconName, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon name={buttonIconName} size={20} color={"red"} />
    </TouchableOpacity>
  );
};

export default ButtonIcon;
