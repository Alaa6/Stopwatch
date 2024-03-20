import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

type Props = {};

const Stopwatch = ({}: Props) => {
  const [count, setCount] = useState(0);
  console.log("🚀 ~ Stopwatch ~ count:", count)
//   let count =0

 const onChangeText =(value)=>{
    setCount(value)  
}

 setInterval(()=>{ DownCount()} , [])
 
  const DownCount = ()=>{
    // if(count ===0) return ;
    // let _count = count -1
    // console.log("🚀 ~ DownCount ~ _count:", _count)
    setCount(count-1)

  }
  return (
    <View>
      <Text>{count}</Text>
      <TextInput value ={count} onChangeText={(value)=>onChangeText(value)} />
      <Button title="Start" onPress={DownCount}  />
    </View>
  );
};

export default Stopwatch;
