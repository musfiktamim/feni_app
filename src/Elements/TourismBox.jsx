import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import image1 from "../../assets/images/bijoysinghIMages.jpg"
import { useNavigation } from '@react-navigation/native'
// import image1 from "../../assets/imagesbijoysinghIMages.jpg"

function TourismBox({ naviationLiks }) {
    const navigation = useNavigation()
    return (
        <TouchableOpacity onPress={() => navigation.navigate(naviationLiks)}>
            <View style={{ width: "100%", height: 150, display: "flex", flexDirection: "row", justifyContent: "flex-end", position: "relative", alignItems: "center" }}>
                <View style={{ width: "85%", height: "100%", elevation: 6, display: "flex", justifyContent: "center", paddingLeft: "17%", backgroundColor: "white", borderRadius: 5 }}>
                    <Text style={{ fontSize: 20 }}>Bijoy Singh Dighi</Text>
                    <Text style={{ fontSize: 15, color: "#DE1976" }}> <Text style={{ textDecorationLine: "underline" }}>Ratings 4.5</Text> | <Text style={{ textDecorationLine: "underline" }}>20 Reviews</Text> </Text>
                </View>
                <View style={{ width: "30%", elevation: 5, position: "absolute", height: "90%", backgroundColor: "white", left: 0, borderRadius: "20%", overflow: "hidden" }}>
                    <Image source={image1} style={{ width: "100%", height: "100%" }} />
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default TourismBox