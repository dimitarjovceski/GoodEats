import { View, Text, StyleSheet, TextInput, Image, Alert } from "react-native";
import React, { useState } from "react";
import Button from "@/components/Button";
import { defaultPizzaImage } from "@/components/ProductListItem";
import * as ImagePicker from "expo-image-picker";
import { Stack, useLocalSearchParams } from "expo-router";

const CreateProductScreen = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [errors, setErrors] = useState("");
  const [image, setImage] = useState<string | null>(null);

  const { id } = useLocalSearchParams();
  const isUpdating = !!id;

  const resetHandler = () => {
    setName("");
    setPrice("");
  };

  const validateInputs = () => {
    if (!name) {
      setErrors("Name is required");
      return false;
    }

    if (!price) {
      setErrors("Price is required");
      return false;
    }

    if (isNaN(parseFloat(price))) {
      setErrors("Price is not a number");
      return false;
    }

    return true;
  };

  const createHandler = () => {
    if (!validateInputs()) {
      return;
    }
    // Create product into databse later

    resetHandler();
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const onDelete = () => {
    console.warn("Delete")
  }

  const confirmDelete = () => {
    Alert.alert("Confirm", "Are you sure you want to delete this product?", [
        {
            text: "Cancel"
        },
        {
            text:"Delete",
            style:"destructive",
            onPress: onDelete
        }
    ])
  }

  return (
    <View style={styles.container}>
        <Stack.Screen options={{title: isUpdating ? "Update" : "Create"}} />

      <Image style={styles.image} source={{ uri: defaultPizzaImage }} />

      <Text onPress={pickImage} style={styles.text}>
        Select Image
      </Text>

      <Text style={styles.label}>Name</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        style={styles.input}
        placeholder="Name"
      />
      <Text style={styles.label}>Price ($)</Text>
      <TextInput
        value={price}
        onChangeText={setPrice}
        style={styles.input}
        placeholder="99.99"
      />

      <Text style={{ color: "red" }}>{errors}</Text>
      <Button text={isUpdating ? "Update" : "Create"} onPress={createHandler} />
      {isUpdating && (
        <Text onPress={confirmDelete} style={styles.textDelete}>Delete</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  image: {
    width: "50%",
    aspectRatio: 1,
    borderRadius: 50,
    alignSelf: "center",
    marginBottom: 20,
  },
  text: {
    alignSelf: "center",
    fontWeight: "bold",
    color: "orange",
    marginVertical: 10,
  },
  label: { fontSize: 16 },
  input: {
    padding: 10,
    marginTop: 10,
    backgroundColor: "white",
    borderRadius: 5,
    marginBottom: 10,
  },
  textDelete:{
    color: "orange",
    alignSelf:"center",
    marginTop: 8,
    fontSize: 16,
    fontWeight: "500"
  }
});

export default CreateProductScreen;
