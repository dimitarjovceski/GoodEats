import { OrderItem } from "@/types";
import { Image, Text, View, StyleSheet } from "react-native";
import { defaultPizzaImage } from "./ProductListItem";

type OrderListItemProps = {
  item: OrderItem;
};

export default function OrderItemListItem({ item }: OrderListItemProps) {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: item.products.image || defaultPizzaImage }}
        style={styles.image}
        resizeMode="contain"
      />

      <View style={{flex:1}}>
        <Text style={styles.title}>{item.products.name}</Text>

        <View style={styles.subtitleContainer}>
          <Text style={styles.price}>${item.products.price}</Text>
          <Text style={styles.size}>Size: {item.size}</Text>
        </View>
      </View>
      <View style={styles.quantitySelector}>
        <Text style={styles.quantity}>{item.quantity}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 5,
    marginTop: 10,
    gap:5,
    flex:1,
    flexDirection: "row",
    alignItems:"center"
  },
  subtitleContainer:{
    flexDirection:"row",
    gap: 10,
  },
  title:{
    fontWeight:"bold",
    
  },
  image: {
    width: 75,
    aspectRatio: 1,
  },
  price: {
    fontWeight:"bold"
  },
  size: {
    color:"gray",
    fontWeight:"500"
  },
  quantitySelector: {},
  quantity: {},
});
