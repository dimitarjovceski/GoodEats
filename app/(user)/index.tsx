import { Redirect, useSegments } from "expo-router";

export default function TabIndex() {
  const segments = useSegments()
  return <Redirect href={"/(user)/menu/"} />;
}
