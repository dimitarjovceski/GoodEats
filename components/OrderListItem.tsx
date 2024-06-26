import { Order } from "@/types";
import dayjs from "dayjs";
import { Link, useSegments } from "expo-router";
import { View, Text, Pressable, StyleSheet } from "react-native";

type OrderProps = {
    order: Order
}

const OrderListItem = ({order}: OrderProps) => {

  const segments = useSegments();

  return <Link href={`/${segments[0]}/orders/${order.id}`} asChild>
    <Pressable style={styles.container}>
        <View>
            <Text style={styles.title}>Order #{order.id}</Text>
            <Text style={styles.time}>{order.created_at}</Text>
        </View>

        <Text style={styles.status}>{order.status}</Text>
    </Pressable>
  </Link>;
};

const styles = StyleSheet.create({
    container: {
        backgroundColor:"white",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        alignItems: "center",
        borderRadius: 10
    },
    title: {
        fontWeight:"bold",
        marginBottom: 5,
    },
    time:{
        color:"gray"
    },
    status: {
        fontWeight:"bold",
        color:"orange"
    }
})

export default OrderListItem;
