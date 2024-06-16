import { View, Text } from "react-native";
import LottieView from 'lottie-react-native';
import React, { useRef, useEffect } from 'react';

type Props = {
 onCompleted: (status: boolean) => void;
}
export function SplashScreen({ onCompleted }: Props) {
 const animation = useRef(null);
 useEffect(() => {
 }, []);

 return (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
   <LottieView
    autoPlay
    loop={false}
    style={{
     width: 300,
     height: 300,
    }}
    source={
     require('../../../../assets/splash.json')
    }
    onAnimationFinish={
     () => { onCompleted(false) }
    }
   />
  </View>
 );
}