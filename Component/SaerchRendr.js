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
    TextInput,
    FlatList,
    SectionList
} from 'react-native';

// LogBox.ignoreAllLogs();

const { width, Height } = Dimensions.get('window');
import { useNavigation } from '@react-navigation/native';
import { GlobalStyle } from '../Src/Styles/Constants';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchQuery, fetchDataSuccess } from '../Redux/Actions/ActionFun';
import { fetchData } from '../Redux/Actions/DataMiddleware'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'



const Search_Screen = () => {

    const Navigation = useNavigation()


    const Data = useSelector(state => state.data.data);
    const loading = useSelector(state => state.data.loading);
    const error = useSelector(state => state.data.error);
    const searchQuery = useSelector(state => state.data.searchQuery);
    const FilteredData = useSelector(state => state.data.data)
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(fetchData());
    }, [dispatch])

    const HandleSearch = (Query) => {
        dispatch(setSearchQuery(Query))
    }



    return (
        <View style={{ marginTop: 80, backgroundColor: "#F8F8F8F8" }} >
            <StatusBar barStyle='dark-content' />
            <View style={Styles.SearHead}>
                <TextInput
                    placeholder="Search..."
                    value={searchQuery}
                    onChangeText={HandleSearch}
                    style={Styles.TxtinputView}
                />
                <Feather name="search" style={Styles.SerchIcon} />
            </View>
            <FlatList
                data={Data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    searchQuery != "" ? (
                        <FlatList data={item.Cites.filter(city => city.Govrn_Code == searchQuery)}
                            keyExtractor={(item) => item.City_Id}
                            renderItem={({ item: city, index }) => (

                                <TouchableOpacity onPress={() => {
                                    Navigation.navigate("City", {
                                        Data: city
                                    })
                                }} style={{
                                    width: "95%",
                                    height: 50,
                                    marginTop: 10,
                                    backgroundColor: "#E7EFF2",
                                    alignSelf: "center",
                                    marginLeft: 15,
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}>
                                    <Text style={{ fontSize: 18, color: "#000", fontWeight: 'bold' }}>{city.City_Nam}</Text>
                                </TouchableOpacity>


                            )}
                        />
                    ) : (
                        <FlatList data={item.Cites}
                            keyExtractor={(item) => item.City_Id}
                            renderItem={({ item: city, index }) => (

                                <TouchableOpacity onPress={() => {
                                    Navigation.navigate("City", {
                                        Data: city
                                    })
                                }} style={{
                                    width: "95%",
                                    height: 50,
                                    marginTop: 10,
                                    backgroundColor: "#E7EFF2",
                                    alignSelf: "center",
                                    marginLeft: 15,
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}>
                                    <Text style={{ fontSize: 18, color: "#000", fontWeight: 'bold' }}>{city.City_Nam}</Text>
                                </TouchableOpacity>


                            )}
                        />
                    )

                )}
            />
        </View >
    )
}

const Styles = StyleSheet.create({
    SearHead: {
        width: width * 0.9,
        height: 40,
        backgroundColor: "#CCC",
        alignSelf: "center",
        justifyContent: "space-around",
        alignItems: "center",
        borderRadius: 10,
        flexDirection: "row"

    },
    SerchIcon: {
        fontSize: 20,
        marginRight: 10,
        color: "#000"
    },
    TxtinputView: {
        width: "80%",
        height: 38,
        fontWeight: 'bold',
        color: "#eee"
    },
    Datalist: {
        width: "95%",
        height: 90,
        backgroundColor: "#ff0fff",
        marginVertical: 15,
        alignSelf: "center"
        //#E7EFF2
    }
})


export default Search_Screen;