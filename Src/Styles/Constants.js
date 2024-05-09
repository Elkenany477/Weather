import { StyleSheet } from "react-native"

export const GlobalStyle = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#FFF"
    },
    Header: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        height: 100,
        marginTop: 30,
        alignItems: "center"
    },
    CityStauts: {
        width: "100%",
        height: 300,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
        alignSelf: "center",
    },
    Degree: {
        width: "100%",
        height: 100,
        justifyContent: 'center',
        alignItems: "center",

        alignSelf: "center"
    }
}) 
