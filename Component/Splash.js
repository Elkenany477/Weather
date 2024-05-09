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
    Dimensions
} from 'react-native';

LogBox.ignoreAllLogs();

const { width, Height } = Dimensions.get('window');
import { useSelector, useDispatch } from 'react-redux';
import { hideSplashScreen, showSplashScreen } from '../Redux/Actions/ActionFun';
import { GlobalStyle } from '../Src/Styles/Constants';
import { useNavigation } from '@react-navigation/native';

const Splash_Screen = () => {

    const dispatch = useDispatch();
    const visible = useSelector(state => state.splash.visible);
    const [isHiding, setIsHiding] = React.useState(false);
    const Naviagation = useNavigation()

    React.useEffect(() => {
        if (visible && !isHiding) {
            const timeoutId = setTimeout(() => {
                dispatch(hideSplashScreen());
                setIsHiding(true);
                Naviagation.navigate('Home')
            }, 3000); // Hide splash screen after 3 seconds

            // Cleanup function to clear timeout if component unmounts or re-renders
            return () => clearTimeout(timeoutId);
        }
    }, [visible, isHiding, dispatch]);


    return (
        <View style={GlobalStyle.Container} >
            <Image
                source={require('../Src/assest/Img/Splash.png')}
                style={Styles.Logo}
            />
        </View >
    )
}

const Styles = StyleSheet.create({
    Logo: {
        width: width * 0.7,
        height: 300,
        alignSelf: "center",
        resizeMode: "contain"
    }
})


export default Splash_Screen;