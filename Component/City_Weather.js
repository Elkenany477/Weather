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
import { LocalImage } from '../Src/Styles/Constants';


const City_Weather = (props) => {
    //  Data For ForCast Transfer

    const [Paylod, setPayload] = React.useState({});
    console.log(Paylod)

    const GetData = () => {
        const Params = props.route.params.Data
        setPayload(Params)
    }

    const Naviagation = useNavigation()
    React.useEffect(() => {
        GetData();
    }, [])

    const Deatile = [
        {
            id: 1,
            img: require('../Src/assest/Img/wind.png'),
            Titl: Paylod.wind_degree
        },
        {
            id: 2,
            img: require('../Src/assest/Img/drop.png'),
            Titl: Paylod.Storm_Dir
        },
        {
            id: 3,
            img: require('../Src/assest/Img/-sun.png'),
            Titl: Paylod.Sun_Time
        },
    ];

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
                    <Text style={Styles.TxtLoc}>{Paylod.City_Nam}</Text>
                </View>
                {/* setction For Tempreture & Deatiles */}
                <View style={GlobalStyle.CityStauts}>
                    <Image source={LocalImage[Paylod.icon]}
                        style={Styles.Satuts} />
                </View>
                {/* section for Degree && Satuts Txt */}
                <View style={GlobalStyle.Degree}>
                    <Text style={Styles.TxDegree}>{Paylod.wind_degree}°</Text>
                    <Text style={Styles.SatutTxt}>{Paylod.text}</Text>
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
        fontSize: 25,
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


export default City_Weather;