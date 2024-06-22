import products from "@/assets/data/products";
import Button from "@/components/Button";
import { Stack, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";

const sizes = ["S", "M", "L", "XL"]

const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams();

  const [selectedSize, setSelectedSize] = useState("M");

  const product = products.find((p) => p.id.toString() === id);

  const addToCart = () => {
    console.warn("Added to card");
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Details" }} />

      <Image source={{ uri: product?.image }} style={styles.image} />

      <Text>Select size:</Text>

      <View style={styles.sizes}>
        {sizes.map(size => (
          <Pressable onPress={() => {setSelectedSize(size)}} key={size} style={[styles.size, {
            backgroundColor: selectedSize === size ? "orange" : "white"
          }]}>
            <Text style={[styles.sizeText, {
              color: selectedSize === size ? "white" : "gray"
            }]}>{size}</Text>  
          </Pressable>
        ))}
      </View>

      <Text style={styles.price}>${product?.price}</Text>

      <Button onPress={addToCart} text="Add to card" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    padding: 10,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  price: {
    fontWeight: "bold",
    fontSize: 20,
    marginTop: "auto"
  },
  sizes: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 12
  },
  size: {
    backgroundColor:"orange",
    width: 50,
    borderRadius: 25,
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  sizeText: {
    fontWeight: "500",
    fontSize: 18
  },
});

export default ProductDetailsScreen;
