import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {

        justifyContent: "center",
        alignItems: "center",
    },

    task: {
        width: "90%",   
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#262626",
        marginTop: 10
    },
    text: {
        color: "#FFFFFF",
        marginRight: 10,
        marginLeft: 10,
        letterSpacing: 1,
    },
    textThrough: {
        color: "#FFFFFF",
        marginRight: 10,
        marginLeft: 10,
        letterSpacing: 1,
        textDecorationLine: "line-through",
    },
    listEmptyText: {
        color: "#808080",
        fontSize: 20,

        
    },
    imageEmptyText: {
        margin: "auto",
        alignself: "center"

    },
    containerEmptyText: {
        textAlign: "center",
        justifyContent: "center",
        height: '100%',
    },
}) 