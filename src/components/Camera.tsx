import React, { useState, useEffect, useRef } from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";
import { Camera, CameraType } from "expo-camera";

const CameraScreen = () => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [imageUri, setImageUri] = useState<string | null>(null);
  const cameraRef = useRef<Camera | null>(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef.current) {
      const { uri } = await cameraRef.current.takePictureAsync();
      setImageUri(uri);
    }
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>Sem acesso à câmera</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} type={CameraType.back} ref={cameraRef} />
      <TouchableOpacity onPress={takePicture}>
        {/* <Image
          source={require("./capture_button.png")}
          style={{ width: 50, height: 50 }}
        /> */}
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Enviar foto</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CameraScreen;
