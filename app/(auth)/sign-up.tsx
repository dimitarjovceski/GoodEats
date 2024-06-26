import Button from "@/components/Button";
import { Link, Stack } from "expo-router";
import { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const SignUpScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Sign Up" }} />

      <Text style={styles.label}>Email</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        style={styles.input}
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        style={styles.input}
        secureTextEntry
      />

      <Button text="Sign Up" />
      <Link href={"/sign-in"} style={styles.textButton}>
        Already have an account? Login
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex:1,
      justifyContent:"center",
      padding: 20
    },
    label: {},
    input: {
      backgroundColor:"white",
      borderRadius: 5,
      padding: 10,
      marginTop: 10,
      marginBottom: 10    
    },
    textButton:{
      alignSelf:"center",
      marginTop:5,
      color:"orange",
      fontWeight: "500",
      fontSize: 16
    }
  });
  

export default SignUpScreen;
