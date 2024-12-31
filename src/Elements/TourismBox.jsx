import React from 'react'
import { Image, Text, TouchableOpacity, View, Linking } from 'react-native'
import image1 from "../../assets/images/bijoysinghIMages.jpg"
import { useNavigation } from '@react-navigation/native'
// import image1 from "../../assets/imagesbijoysinghIMages.jpg"

function TourismBox({ naviationLiks, navigationId, isBlood = false, isCar }) {
    const navigation = useNavigation()
    return (
        <TouchableOpacity onPress={() => !isBlood ? navigation.navigate(naviationLiks, { links: "musfik" }) : null} onLongPress={() => Linking.openURL('tel:01855231666')}>
            <View style={{ width: "100%", height: 150, display: "flex", flexDirection: "row", justifyContent: "flex-end", position: "relative", alignItems: "center" }}>
                <View style={{ width: "85%", height: "100%", elevation: 6, display: "flex", justifyContent: "center", paddingLeft: "17%", backgroundColor: "white", borderRadius: 5 }}>
                    <Text style={{ fontSize: 20 }}>Bijoy Singh Dighi</Text>
                    {
                        isBlood ? <View style={{ width: "100%" }}>
                            <Text>
                                <Text>Group: <Text style={{ color: "#DE1976" }}>A+</Text> </Text>
                                <Text>Himoglobin: <Text style={{ color: "#DE1976" }}>9</Text> </Text>
                            </Text>
                            <Text>Contact: <Text style={{ color: "#DE1976" }}>01855241666</Text> </Text>
                            <Text>Doned: <Text style={{ color: "#DE1976" }}>10</Text> </Text>
                            <Text style={{ flexShrink: 1 }}>
                                <Text>Last: <Text style={{ color: "#DE1976" }}>12/10</Text> </Text>
                                <Text>  Can: <Text style={{ color: "#DE1976" }}>No</Text> </Text>
                            </Text>
                            <Text>Remark: <Text style={{ color: "#DE1976" }}>lorem10</Text></Text>
                        </View> : isCar ? <View style={{ width: "100%" }} >
                            <Text>Car Code: <Text style={{ color: "#DE1976" }}>123456</Text></Text>
                            <Text>AC: <Text style={{ color: "#DE1976" }}>Yes</Text></Text>
                            <Text>sits: <Text style={{ color: "#DE1976" }}>10</Text></Text>
                            <Text>Contact: <Text style={{ color: "#DE1976" }}>01855241666</Text></Text>
                            <Text>Remark: <Text style={{ color: "#DE1976" }}>lorem10</Text></Text>
                        </View> :
                            <Text style={{ fontSize: 15, color: "#DE1976" }}> <Text style={{ textDecorationLine: "underline" }}>Ratings 4.5</Text> | <Text style={{ textDecorationLine: "underline" }}>20 Reviews</Text> </Text>
                    }
                </View>
                <View style={{ width: "30%", elevation: 5, position: "absolute", height: "90%", backgroundColor: "white", left: 0, borderRadius: "20%", overflow: "hidden" }}>
                    <Image source={image1} style={{ width: "100%", height: "100%" }} />
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default TourismBox