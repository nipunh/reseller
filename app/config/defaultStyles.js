import colors from "../components/colors"
import { Platform } from "react-native"


export default {
    colors : colors,
    // 
    padding: 20,
    text:
    {
        fontSize: 18,
        color : colors.dark,
    ...Platform.select({
                ios: {
                    fontFamily: "Avenir"
                },
                android: {
                    fontFamily: "Roboto"
                }
            })
    }
}
