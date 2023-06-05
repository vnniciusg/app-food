import React from "react";
import { View, SafeAreaView } from "react-native";

import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from "react-native-paper";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import TextButton from "../components/textButton";

const UserProfileScreen = () => {
  return (
    <SafeAreaView className="flex flex-col bg-color1 py-[100px] px-2">
      <View className="px-[30px] mb-2 h-auto">
        <View className="flex flex-col mt-[15px] items-center">
          <Avatar.Image
            source={{
              uri: "https://api.adorable.io/avatars/80/abott@adorable.png",
            }}
            size={120}
          />
          <View className="flex flex-col justify-center items-center">
            <Title className="text-base font-bold mt-[15px] mb-[5px] text-color4">
              John Doe
            </Title>
            <Caption className="font-medium text-sm k">@j_doe</Caption>
          </View>
        </View>
      </View>
      <View className="py-1 px-2 my-2 mx-1">
        <View className="flex flex-row m-1 gap-6">
          <Icon name="map-marker-radius" color={"black"} size={20} />
          <Text>Brasil, MG</Text>
        </View>
        <View className="flex flex-row m-1 gap-6">
          <Icon name="email" color={"black"} size={20} />
          <Text>john_doe@email.com</Text>
        </View>
      </View>
      <View className="flex flex-row">
        <View className="w-1/3 flex items-center justify-center">
          <Title className="text-color3">Meta Calorica</Title>
          <View className="flex flex-row items-center gap-3">
            <Caption>Jonh Doe</Caption>
            <FontAwesome name="edit" />
          </View>
        </View>
        <View className="w-1/3 flex items-center justify-center">
          <Title className="text-color3">Peso</Title>
          <View className="flex flex-row items-center gap-3">
            <Caption>Jonh Doe</Caption>
            <FontAwesome name="edit" />
          </View>
        </View>
        <View className="w-1/3 flex items-center justify-center">
          <Title className="text-color3">Altura</Title>
          <View className="flex flex-row items-center gap-3">
            <Caption>Jonh Doe</Caption>
            <FontAwesome name="edit" />
          </View>
        </View>
      </View>
      <View className="mt-[20px]">
        <TouchableRipple onPress={() => {}}>
          <View className="flex flex-row my-3 px-1">
            <Icon name="account-edit-outline" color="#146C94" size={25} />
            <Text className="ml-[20px] font-medium text-sm text-black">
              Edite seu perfil
            </Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View className="flex flex-row my-3 px-1">
            <Icon name="share-outline" color="#146C94" size={25} />
            <Text className="ml-[20px] font-medium text-sm text-black">
              Compartilhar com seus amigos
            </Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View className="flex flex-row my-3 px-1">
            <Icon name="account-check-outline" color="#146C94" size={25} />
            <Text className="ml-[20px] font-medium text-sm text-black">
              Support
            </Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View className="flex flex-row my-3 px-1">
            <Icon name="logout" color="#146C94" size={25} />
            <Text className="ml-[20px] font-medium text-sm text-black">
              Logout
            </Text>
          </View>
        </TouchableRipple>
      </View>
    </SafeAreaView>
  );
};

export default UserProfileScreen;
