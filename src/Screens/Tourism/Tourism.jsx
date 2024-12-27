import React from 'react'
import { Image, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import image1 from "../../../assets/images/bijoysinghIMages.jpg"
import { IconButton } from 'react-native-paper'
import TourismBox from '../../Elements/TourismBox'

function Tourism({ navigation }) {
    return (
        <View style={{ marginTop: 10, paddingHorizontal: 5, flex: 1, position: "relative" }} >

            <TourismBox key={1} naviationLiks={"Tourism Detailes"} />

            <IconButton icon={"plus"} onPress={() => navigation.navigate("Create Tourism")} style={{ backgroundColor: "white", elevation: 100, borderColor: "black", borderWidth: 1, position: "absolute", bottom: 10, right: 10 }} size={35} ></IconButton>


        </View >
    )
}

export default Tourism