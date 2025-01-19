import React from 'react'
import { Image, PixelRatio, Text, View } from 'react-native'
import { Button } from 'react-native-paper';

function DoctorBox({ item, navigation }) {
    const pixelRatios = PixelRatio.getFontScale();
    const getFontSize = size => size / pixelRatios
    return (
        <View style={{ width: "100%", marginTop: 10, paddingTop: 5, paddingBottom: 10,borderWidth:0.2, display: 'flex', flexDirection: "column", height: "auto", borderRadius: 5,backgroundColor:"white",elevation:1}}>
            <View style={{ display: "flex", flexDirection: "row" }}>
                <View style={{ width: 170, height: 170, padding: 5, borderRadius: 10, overflow: "hidden",shadowColor:"black",shadowOpacity:1,shadowOffset:{width:10,height:20},shadowRadius:10}}>
                    { item && item.picture && item.picture.url && <Image source={{ uri: item?.picture?.url }} style={{ width: "100%", height: "100%",borderRadius:10}} />}
                </View>
                <View style={{ display: "flex", justifyContent: "center", borderBlockColor: "black", width: "63%" }}>
                    {
                        item && item.name &&
                        <Text style={{ fontSize: getFontSize(20) }}>{item.name ? item.name : null}</Text>
                    }
                    <View style={{ flexDirection: "row", }}>
                        {
                         item && item.doctor_type &&   <Text style={{ fontSize: getFontSize(15), flexWrap: "wrap", flex: 1 }}>বিশেষজ্ঞঃ {item.doctor_type ? item.doctor_type : null}</Text>
                        }
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        {
                            item && item.educations &&
                            <Text style={{ fontSize: getFontSize(15), flexWrap: "wrap", flex: 1 }}>শিক্ষাঃ { item && item.educations && item.educations.length > 0 ? item.educations.map((item) => `${item.exam} ,`) : null}</Text>
                        }
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        {
                            item && item.gender &&
                                <Text style={{ fontSize: getFontSize(15), flexWrap: "wrap", flex: 1 }}>sex {item.gender}</Text>
                        }
                    </View>
                </View>
            </View>
            <View style={{ width: "100%", height: "auto", flexDirection: "row" }}>
                <Text style={{paddingHorizontal:5}}>
                    {item.description ? item.description : null}
                </Text>
            </View>
            <View style={{ display: "flex", paddingHorizontal: 4, justifyContent: "space-between", alignItems: "center", flexDirection: "row" }}>
                <Button disabled={item.name?false:true} onPress={() => navigation.navigate("Doctor Detailes", { item, item })} style={{ width: "100%", borderRadius: 8, backgroundColor: item.name && "#DE1976" , }} mode={item.name?"contained":"outlined"} textColor='white' >More</Button>
            </View>
        </View>
    )
}

export default DoctorBox