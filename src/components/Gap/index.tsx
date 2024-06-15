import { View } from "react-native";

export function VerticalGap({ h }: { h: number }) {
 return (
  <View style={{ height: h }}>
  </View >
 );
}

export function HorizontalGap({ w }: { w: number }) {
 return (
  <View style={{ width: w, flexDirection: 'row' }}>
  </View >
 );
}