import React from 'react'
import { Image, Linking, ScrollView, Text, View } from 'react-native'
import PageWrapper from '../../components/PageWrapper'
import { IconButton } from 'react-native-paper'

function DetailesDoctor({ navigation, route }) {
    console.log(navigation)
    console.log(route)

    const { name, picture, doctor_type, educations, chembers } = route.params.item

    return (
        <ScrollView>
            <View style={{ width: "100%", height: 250, borderWidth: 1 }}>
                <Image source={{ uri: picture.url }} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </View>
            <View style={{ width: "98%", margin: "auto" }}>
                <View style={{ display: "flex", flexDirection: "row", width: "100%", alignItems: "center" }}>
                    <Text style={{ fontSize: 25, color: "#DE1976", position: "relative" }}>{name}<Text style={{ fontSize: 16, color: "gray", position: "absolute", top: 0 }}>...({doctor_type} )</Text></Text>
                </View>
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
                            <View key={index} >
                                <View style={{ marginBottom: 10, borderBottomWidth: 1, width: "85%", borderBottomColor: "#DE1976", margin: "auto" }}>
                                    <Text style={{ fontSize: 20, color: "#DE1976" }}>{index + 1}. {item.chemberName}</Text>
                                </View>
                                <Text style={{ fontSize: 16 }}>{item.chemberDay}</Text>
                                <Text style={{ fontSize: 16 }}>{item.startToEnd}</Text>
                                <Text style={{ fontSize: 16 }}>{item.phone}</Text>
                                <Text style={{ fontSize: 16 }}>{item.remark}</Text>
                                <View style={{ margin: "auto", borderBottomWidth: 1, borderBlockColor: "#DE1976" }}>
                                    <IconButton icon={"phone"} iconColor='white' style={{ borderRadius: 10 }} containerColor='green' onPress={() => Linking.openURL(`tel:${item.phone}`)} />
                                </View>
                                <View style={{ width: "90%", margin: "auto", borderBottomWidth: 1, borderBlockColor: "#DE1976", marginTop: 5 }}></View>
                            </View>
                        ))
                        : null}
                </View>
            </View>
        </ScrollView>
    )
}

export default DetailesDoctor