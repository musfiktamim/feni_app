import React from 'react'
import { Image, PixelRatio, Text, View } from 'react-native'
import doctorp from "../../assets/images/doctorpng.png"
import { Button } from 'react-native-paper';

function DoctorBox({ item, navigation }) {
    const pixelRatios = PixelRatio.getFontScale();
    const getFontSize = size => size / pixelRatios
    return (
        <View style={{ width: "100%", marginTop: 10, paddingTop: 5, paddingBottom: 10, display: 'flex', flexDirection: "column", backgroundColor: "white", height: "auto", elevation: 5, borderRadius: 10 }}>
            <View style={{ display: "flex", flexDirection: "row" }}>
                <View style={{ width: 170, height: 170, padding: 5, borderRadius: 10, overflow: "hidden" }}>
                    <Image source={{ uri: item.picture.url }} style={{ width: "100%", height: "100%" }} />
                </View>
                <View style={{ display: "flex", justifyContent: "center", borderBlockColor: "black", width: "63%" }}>
                    <Text style={{ fontSize: getFontSize(20) }}>{item.name ? item.name : null}</Text>
                    <View style={{ flexDirection: "row", }}>
                        <Text style={{ fontSize: getFontSize(15), flexWrap: "wrap", flex: 1 }}>বিশেষজ্ঞঃ {item.doctor_type ? item.doctor_type : null}</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ fontSize: getFontSize(15), flexWrap: "wrap", flex: 1 }}>শিক্ষাঃ {item.educations.length > 0 ? item.educations.map((item) => `${item.exam} ,`) : null}</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ fontSize: getFontSize(15), flexWrap: "wrap", flex: 1 }}>sex {item.gender}</Text>
                    </View>
                </View>
            </View>
            <View style={{ width: "100%", height: "auto", flexDirection: "row" }}>
                <Text>
                    {item.description ? item.description : null}
                </Text>
            </View>
            <View style={{ display: "flex", paddingHorizontal: 4, justifyContent: "space-between", alignItems: "center", flexDirection: "row" }}>
                <Button onPress={() => navigation.navigate("Doctor Detailes", { item, item })} style={{ width: "100%", borderRadius: 8, backgroundColor: "blue" }} mode='contained' >More</Button>
            </View>
        </View>
    )
}

export default DoctorBox