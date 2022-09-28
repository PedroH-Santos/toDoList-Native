import { Image, View } from "react-native";
import { style } from "./style";


export function Logo() {
    return (
        <View style={style.container}>
            <View >
                <Image source={require('../../../assets/logo.png')} style={style.logo} />
            </View>
        </View>
    )
}