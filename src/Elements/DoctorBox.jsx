import React from 'react'
import { Image, PixelRatio, Text, View } from 'react-native'
import doctorp from "../../assets/images/doctorpng.png"
import { Button } from 'react-native-paper';

function DoctorBox({ item }) {
    const pixelRatios = PixelRatio.getFontScale();
    const getFontSize = size => size / pixelRatios
    return (
        <View style={{ width: "100%", marginTop: 10, paddingTop: 5, paddingBottom: 10, display: 'flex', flexDirection: "column", backgroundColor: "white", height: "auto", elevation: 5, borderRadius: 10 }}>
            <View style={{ display: "flex", flexDirection: "row" }}>
                <View style={{ width: 170, height: 170, backgroundColor: "black" }}>
                    <Image source={doctorp} style={{ width: "100%", height: "100%" }} />
                </View>
                <View style={{ display: "flex", justifyContent: "center", borderBlockColor: "black", width: "63%" }}>
                    <Text style={{ fontSize: getFontSize(20) }}>মোশফিকুর রহমান</Text>
                    <View style={{ flexDirection: "row", }}>
                        <Text style={{ fontSize: getFontSize(15), flexWrap: "wrap", flex: 1 }}>বিশেষজ্ঞঃ নিউরোলজিস্ট অ্যান্ড চরমো রোগ বিশেষজ্ঞ</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ fontSize: getFontSize(15), flexWrap: "wrap", flex: 1 }}>শিক্ষাঃ ঢাকা বিশ্ব-বিদ্বালয়</Text>
                    </View>
                </View>
            </View>
            <View style={{ width: "100%", height: "auto", flexDirection: "row" }}>
                <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis esse consequatur sequi repudiandae dicta odit labore ex dolorem mollitia, quae non temporibus repellat, quis nostrum! Facere rerum corporis iusto itaque sit iure culpa aliquam ipsam libero placeat quod laborum expedita dignissimos fugiat obcaecati minima commodi ullam, officia voluptatum eligendi sunt nulla sequi quas? Incidunt distinctio atque, est blanditiis dolores cumque nisi explicabo, beatae eveniet odit officiis, quibusdam sunt natus! Facere dolore, fugit doloremque sed quaerat nobis illum sit provident harum? Provident voluptatem officia, asperiores nisi minus, expedita facilis itaque impedit odit blanditiis distinctio libero debitis deserunt tenetur fuga, possimus sit.
                </Text>
            </View>
            <View style={{ display: "flex", paddingHorizontal: 4, justifyContent: "space-between", alignItems: "center", flexDirection: "row" }}>
                <Button style={{ width: "49%", borderRadius: 8, borderWidth: 0.2, borderColor: "black", backgroundColor: "white" }} mode='contained' textColor='black' >Map</Button>
                <Button style={{ width: "49%", borderRadius: 8, backgroundColor: "blue" }} mode='contained' >More</Button>
            </View>
        </View>
    )
}

export default DoctorBox