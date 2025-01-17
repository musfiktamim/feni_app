import React, { useState } from 'react'
import { Alert, Image, Linking, Pressable, ScrollView, Text, View } from 'react-native'
import PageWrapper from '../../components/PageWrapper'
import { Button, IconButton } from 'react-native-paper'

function DetailesDoctor({ navigation, route }) {
    console.log(navigation)
    console.log(route)
    const [shows, setShows] = useState({
        descriptionShow: false
    })

    const { name, picture, doctor_type, educations, chembers, description,present_workplace } = route.params.item

    return (
        <ScrollView>
            <View style={{ width: "100%", height: 250, borderWidth: 1 }}>
                <Image source={{ uri: picture.url }} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </View>
            <View style={{ width: "98%", margin: "auto" }}>
                <View style={{ display: "flex", flexDirection: "row", width: "100%", alignItems: "center" }}>
                    <Text style={{ fontSize: 25, color: "#DE1976", position: "relative" }}>{name}<Text style={{ fontSize: 16, color: "gray", position: "absolute", top: 0 }}>...({doctor_type} )</Text></Text>
                </View>
                <Text style={{fontSize:14,color:"gray"}}>{present_workplace}</Text>
                <View style={{ width: "100%", marginTop: 10 }}>
                    <Text style={{ width: "100%", fontSize: 22, color: "#DE1976", marginBottom: 5, borderBottomWidth: 3, borderBottomColor: "#DE1976" }}>শিক্ষা</Text>
                    {educations.length != 0 ?
                        educations.map((item, index) => (
                            <View key={index}>
                                <Text>
                                    {item.exam} : {item.institute} - {item.year}
                                </Text>
                            </View>
                        ))
                        : null}
                    <Text style={{ width: "100%", fontSize: 22, color: "#DE1976", marginBottom: 5, borderBottomWidth: 3, borderBottomColor: "#DE1976" }}>চেম্বার</Text>
                    {chembers.length != 0 ?
                        chembers.map((item, index) => (
                            <View key={index} style={{ width: "98%", borderRadius: 5, borderWidth: 0.2, paddingHorizontal: 5, paddingVertical: 2 }} >
                                <Text style={{ fontSize: 17 }}>চেম্বারের নামঃ {item.chemberName}</Text>
                                <Text style={{ fontSize: 17 }}>দিনঃ {item.chemberDay}</Text>
                                <Text style={{ fontSize: 17 }}>সময়ঃ {item.startToEnd}</Text>
                                <Text style={{ fontSize: 17 }}>চেম্বারের নাম্বারঃ {item.phone}</Text>
                                {item.remark && <Text style={{ fontSize: 17 }}>জানাতে চায়ঃ {item.remark}</Text>}
                                <View style={{ width: "100%", margin: "auto", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                    <Button style={{ width: "85%", borderRadius: 10, height: 40 }} buttonColor='#DE1976' mode='contained'>{item.phone}</Button>
                                    <IconButton icon={"phone"} iconColor='white' style={{ borderRadius: 10 }} containerColor='green' onPress={() => Alert.alert("call", `আপনি কি ${item.chemberName} চেম্বারে কল করতে চান`, [{ text: "হ্যাঁ!", onPress: () => { Linking.openURL(`tel:${item.phone}`) } }, { text: "না!", onPress: () => { } }])} />
                                </View>
                                <View style={{ width: "90%", margin: "auto", marginTop: 5 }}></View>
                            </View>
                        ))
                        : null}

                    <Text style={{ width: "100%", fontSize: 22, color: "#DE1976", marginBottom: 5, borderBottomWidth: 3, borderBottomColor: "#DE1976" }}>বিবরনী</Text>
                    <Pressable onPress={() => setShows((prev) => ({ ...prev, descriptionShow: !prev.descriptionShow }))}>
                        {description && <Text>{description}</Text>}
                    </Pressable>
                </View>
            </View>
        </ScrollView>
    )
}

export default DetailesDoctor