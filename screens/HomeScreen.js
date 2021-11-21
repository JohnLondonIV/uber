import React from 'react'
import { StyleSheet, Text, SafeAreaView, StatusBar, View, Image} from 'react-native'
import { LearnMoreLinks } from 'react-native/Libraries/NewAppScreen';
import tw from 'tailwind-react-native-classnames'
import NavOptions from '../components/NavOptions';


const HomeScreen = () => {
    return (
        <SafeAreaView style={(styles.container, tw`bg-white h-full`)}>
            <View style={tw`p-5`}>
                <Image  
                style={{width: 100, height: 100, resizeMode:"contain"}} 
                source={{uri: "https://res.cloudinary.com/jinkit/image/upload/v1637349816/ybruamqf2nhltjgn05vr.png"}}>
                </Image>
                <NavOptions />
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
container: {
    flex: 1,
    marginTop: StatusBar.currentHeight
}

})
