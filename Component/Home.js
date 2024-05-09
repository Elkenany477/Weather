import * as React from 'react';
import {
    Text,
    View,
    StyleSheet,
    StatusBar,
    TouchableOpacity,
    LogBox,
    Pressable,
    Image,
    Dimensions,
    ImageBackground
} from 'react-native';

const { width, Height } = Dimensions.get('screen')
import { useNavigation } from '@react-navigation/native';
import { GlobalStyle } from '../Src/Styles/Constants';
import Ionicons from 'react-native-vector-icons/Ionicons'


const Home_Screen = () => {
    // Static Data For ForCast
    const Deatile = [
        {
            id: 1,
            img: require('../Src/assest/Img/wind.png'),
            Titl: "22km"
        },
        {
            id: 2,
            img: require('../Src/assest/Img/drop.png'),
            Titl: "23%"
        },
        {
            id: 3,
            img: require('../Src/assest/Img/-sun.png'),
            Titl: "6:05 AM"
        },
    ];

    const Naviagation = useNavigation()

    return (
        <View style={{ flex: 1 }}>
            <StatusBar barStyle='light-content' backgroundColor='transparent' translucent={true} />
            <ImageBackground
                source={require('../Src/assest/Img/bg.png')}
                blurRadius={70}
                style={Styles.Full_Img}
            >
                {/* Section for Search Bar && Current Location  */}
                <View style={GlobalStyle.Header}>
                    <Text style={Styles.Title}>Weather</Text>
                    <TouchableOpacity onPress={() => { Naviagation.navigate('Search') }} activeOpacity={0.9}
                        style={Styles.SearchView}>
                        <Ionicons name="search" style={Styles.search} />
                    </TouchableOpacity>
                </View>
                {/* Section Of Location  */}
                <View style={Styles.LoctionViw}>
                    <Text style={Styles.TxtLoc}>Meet El Rakha,
                        <Text style={{ color: "#ccc" }}> Zefta, Al Gharbia</Text></Text>
                </View>
                {/* setction For Tempreture & Deatiles */}
                <View style={GlobalStyle.CityStauts}>
                    <Image source={require('../Src/assest/Img/partlycloudy.png')}
                        style={Styles.Satuts} />
                </View>
                {/* section for Degree && Satuts Txt */}
                <View style={GlobalStyle.Degree}>
                    <Text style={Styles.TxDegree}>23°</Text>
                    <Text style={Styles.SatutTxt}>Partly Cloud</Text>
                </View>
                {/* Last Section For Detailes in Wind and Sunny and Storm */}
                <View style={Styles.WeatrDetails}>

                    {
                        Deatile.map((item, index) => {
                            return (
                                <View key={index} style={{
                                    flexDirection: 'row',
                                    marginTop: 80,
                                    marginHorizontal: 15
                                }}>
                                    <Image source={item.img} style={Styles.ImgDetail} />
                                    <Text style={Styles.TitlDet}>{item.Titl}</Text>
                                </View>
                            )
                        })
                    }

                </View>
            </ImageBackground>
        </View>

    )
}

const Styles = StyleSheet.create({
    Full_Img: {
        flex: 1
    },
    Title: {
        fontSize: 20,
        color: "#CCC",
        width: "50%",
        marginLeft: 15,
        fontWeight: 'bold'
    },
    SearchView: {
        width: 35,
        height: 35,
        borderRadius: 17.5,
        borderWidth: 2,
        borderColor: "#fff",
        backgroundColor: "#FFF",
        marginRight: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    search: {
        fontSize: 20,
        color: "#000",

    },

    LoctionViw: {
        marginTop: 30,
        width: width,
        justifyContent: "center",
        alignItems: "center"
    },
    TxtLoc: {
        fontSize: 15,
        color: "#FFF",
        fontWeight: "900"
    },
    Satuts: {
        width: width * 0.70,
        height: 200,
        resizeMode: 'contain',
        alignSelf: "center"
    },
    TxDegree: {
        fontSize: 50,
        color: "#FFF",
        fontWeight: "bold",
        textAlign: "center"
    },
    SatutTxt: {
        fontSize: 18,
        color: "#CCC",
        textAlign: "center",
    },
    WeatrDetails: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 15,
        width: width
    },
    TitlDet: {
        fontSize: 15,
        marginLeft: 10
    },
    ImgDetail: {
        width: 20,
        height: 20,
    }

})


export default Home_Screen;