import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,

    },
    input: {

        color: "#FFFFFF",
        backgroundColor: "#262626",
        height: 56,
        width: "60%",
        borderRadius: 2,
        padding: 8,
           

    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#1E6F9F',
        alignItems: 'center',
        justifyContent: 'center'
    },   
    buttonText: {
        color: '#FFF',
        fontSize: 24
    }, 

    information: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 30,
        borderBottomColor: "#333333",
        borderBottomWidth: 2,
    },
    created: { 
        color: "#4EA8DE",
        fontSize: 20,
    },
    finished: {
        color: "#8284FA",
        fontSize: 20,
    }

})