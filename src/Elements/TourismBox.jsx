import React from 'react'
import { Image, Text, TouchableOpacity, View, Linking } from 'react-native'
import image1 from "../../assets/images/bijoysinghIMages.jpg"
import { useNavigation } from '@react-navigation/native'
// import image1 from "../../assets/imagesbijoysinghIMages.jpg"

function TourismBox({ naviationLiks, navigationId, isBlood = false, isCar, item }) {
    const navigation = useNavigation()
    console.log(item)
    return (
        <TouchableOpacity onPress={() => !isBlood ? navigation.navigate(naviationLiks, { links: "musfik" }) : null} onLongPress={() => Linking.openURL('tel:01855231666')}>
            <View style={{ width: "100%", height: 150, display: "flex", flexDirection: "row", justifyContent: "flex-end", position: "relative", alignItems: "center" }}>
                <View style={{ width: "85%", height: "100%", elevation: 6, display: "flex", justifyContent: "center", paddingLeft: "17%", backgroundColor: "white", borderRadius: 5 }}>
                    <Text style={{ fontSize: 20 }}>{isBlood ? item.donner_name : "Bijoy singh dighi"}</Text>
                    {
                        isBlood ? <View style={{ width: "100%" }}>
                            <Text>
                                {
                                    item.blood_group &&
                                    <Text>Group: <Text style={{ color: "#DE1976" }}>{item.blood_group && item.blood_group}</Text> </Text>
                                }
                                {
                                    item.hemoglobin &&
                                    <Text>Himoglobin: <Text style={{ color: "#DE1976" }}>{item.hemoglobin && item.hemoglobin}</Text> </Text>
                                }
                            </Text>
                            <Text>
                                {
                                    item.height &&
                                    <Text>Height: <Text style={{ color: "#DE1976" }}>{item.height && item.height}</Text> </Text>
                                }
                                {
                                    item.Weight &&
                                    <Text>Weight: <Text style={{ color: "#DE1976" }}>{item.Weight && item.Weight}</Text> </Text>
                                }
                            </Text>

                            {
                                item.contact &&
                                <Text>Contact: <Text style={{ color: "#DE1976" }}>{item.contact && item.contact}</Text> </Text>
                            }
                            {
                                item.doned &&
                                <Text>Doned: <Text style={{ color: "#DE1976" }}>{item.doned && item.doned}</Text> </Text>
                            }
                            <Text style={{ flexShrink: 1 }}>
                                <Text>Last: <Text style={{ color: "#DE1976" }}>{item.last && item.last}</Text> </Text>
                            </Text>
                            <Text>Description: <Text style={{ color: "#DE1976" }}>{item.description && item.description.slice(0, 22)}</Text></Text>
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
                    <Image source={{ uri: item.url }} style={{ width: "100%", height: "100%" }} />
                </View>
            </View>
        </TouchableOpacity >
    )
}

export default TourismBox