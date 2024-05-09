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
} from 'react-native';

// LogBox.ignoreAllLogs();

const { width, Height } = Dimensions.get('window');
import { useNavigation } from '@react-navigation/native';
import { GlobalStyle } from '../Src/Styles/Constants';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchQuery } from '../Redux/Actions/ActionFun';
import { fetchData } from '../Redux/Actions/DataMiddleware'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'



const Search_Screen = () => {


    const Data = useSelector(state => state.data.data);
    console.log(Data);
    const loading = useSelector(state => state.data.loading);
    const error = useSelector(state => state.data.error);
    const searchQuery = useSelector(state => state.data.searchQuery);

    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(fetchData());
    }, [dispatch])

    const HandleSearch = (Query) => {
        dispatch(setSearchQuery(Query))
        dispatch(fetchData)
    }

    const Datalist = ({ info }) => {
        const Datlist = info;
        console.log(Datlist)
        return (
            <View style={Styles.Datalist}>

            </View>
        )
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
                keyExtractor={(item) => item.id.toString()}
                renderItem={(item, index) => <Datalist indx={index} info={item} />}
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
        width: "80%",
        height: 60,
        backgroundColor: "#E7EFF2"
    }
})


export default Search_Screen;