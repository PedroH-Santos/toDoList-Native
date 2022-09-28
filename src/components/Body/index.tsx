import {  View  } from "react-native";
import { style } from "./style";


interface BodyProps  { 
    children: any,
}


export function Body({ children } : BodyProps) {
    return (
        <View style={style.container}>
            {children}
        </View>
    )
}