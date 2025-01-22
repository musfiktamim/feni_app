import React from 'react'
import { Alert, Image, Linking, ScrollView, Text, View } from 'react-native'
import PageWrapper from "../../components/PageWrapper"
import image1 from "../../../assets/images/bijoysinghIMages.jpg"
import { Button, Icon, IconButton } from 'react-native-paper'
import ProgressBarForTop from '../../components/ProgressBarForTop'

function DetailesToLet(props) {
    const item = props?.route?.params?.item

    return (
        <>
        <ScrollView showsVerticalScrollIndicator={false} style={{paddingHorizontal:5}}>
            <View style={{ width: "100%", height: "auto" }}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flex: 1, display: "flex", paddingVertical: 6 }}>
                    {
                        item.picture.map((item,index) => <Image key={index} source={{uri:item.url}} style={{ height: 300, width: 340, marginHorizontal: 4, borderRadius: 10 }} />)
                    }
                </ScrollView>
            </View>
            <View style={{ height: "auto", width: "100%" }}>
                <Text style={{ fontSize: 30, fontWeight: 500, fontStyle: "normal", fontFamily: "roboto" }}>{item.name}</Text>
            </View>
            {
                item.home_location &&<>
                    <Text style={{ fontSize: 25, color: "#DE1976", width: "100%", borderBottomWidth: 2, borderBottomColor: "#DE1976" }}>স্থান</Text>
                    
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ fontSize: 17 }}>{item.home_location}</Text>
                    </View>
                </>
            }
            {
                item.room &&
                <Text style={{ fontSize: 25, color: "#DE1976", width: "100%", borderBottomWidth: 2, borderBottomColor: "#DE1976", marginTop: 10 }}>বিস্তারিত</Text>
            }
                <View>
                    {
                        item.room && item.room_height && item.room_width &&<>
                            <Text style={{ fontSize: 17, marginTop: 10 }}><Icon source={'disc'} /> রুম কয়টিঃ {item.room}টি </Text>
                            <Text style={{ fontSize: 17, marginTop: 10 }}><Icon source={'disc'} /> রুমের দৈর্ঘ্যঃ {item.room_width} </Text>
                            <Text style={{ fontSize: 17, marginTop: 10 }}><Icon source={'disc'} /> রুমের প্রস্থঃ {item.room_height} </Text>
                        </>
                    }
                    {
                        item.room_info_data &&
                        <>
                            <Text style={{ fontSize: 17, marginTop: 10 }}><Icon source={'disc'} /> রান্নাঘর আছেঃ {item.room_info_data.cook?"ha":"na"}</Text>
                            <Text style={{ fontSize: 17, marginTop: 10 }}><Icon source={'disc'} /> ড্রয়িং রুম আছেঃ {item.room_info_data.drowing?"ha":"na"} </Text>
                            <Text style={{ fontSize: 17, marginTop: 10 }}><Icon source={'disc'} /> বারান্ধা আছেঃ {item.room_info_data.coridor?"ha":"na"}</Text>
                            <Text style={{ fontSize: 17, marginTop: 10 }}><Icon source={'disc'} /> টয়লেট আছেঃ {item.room_info_data.toylet?"ha":"na"} </Text>
                        </>
                    }
                </View>
            {
                item.extra_benefits && item.extra_benefits.length>0 &&
                <Text style={{ fontSize: 25, color: "#DE1976", width: "100%", borderBottomWidth: 2, borderBottomColor: "#DE1976", marginTop: 10 }}>Extra benifits</Text>
            }
            {
                item.extra_benefits &&
                <View>
                    {
                        item?.extra_benefits?.map((benefit,index)=><Text key={index} style={{ fontSize: 17, marginTop: 10 }}><Icon source={'disc'} /> {benefit} </Text>)
                    }
                </View>
            }

            {
                item.types_of_people &&<>
                    <Text style={{ fontSize: 25, color: "#DE1976", width: "100%", borderBottomWidth: 2, borderBottomColor: "#DE1976", marginTop: 10 }}>যেমন মানুষকে ভাড়া দিতে চাই</Text>
                    <View>
                        <Text style={{ fontSize: 17, marginTop: 10 }}>{item.types_of_people}</Text>
                    </View>
                </>
            }
            {
                item.description &&
                <>
                    <Text style={{ fontSize: 25, color: "#DE1976", width: "100%", borderBottomWidth: 2, borderBottomColor: "#DE1976", marginTop: 10 }}>বিবরন</Text>
                    <View>
                        <Text style={{ fontSize: 17, marginTop: 10 }}>{item.description}</Text>
                    </View>
                </>
            }
            {
                item.price && <>
                    <Text style={{ fontSize: 25, color: "#DE1976", width: "100%", borderBottomWidth: 2, borderBottomColor: "#DE1976", marginTop: 10 }}>ভাড়া</Text>
                    <View>
                        {
                            item.price.daily &&
                                <Text style={{ fontSize: 17, marginTop: 10 }}>দৈনিকঃ {item.price.daily} টাকা </Text>
                        }
                        {
                            item.price.monthly &&
                                <Text style={{ fontSize: 17, marginTop: 10 }}>মাসিকঃ {item.price.monthly} টাকা</Text>
                        }
                    </View>
                </>
            }
            {
                item.contact &&
                <View style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <Button mode='contained' style={{ width: "80%", borderRadius: 10 }}>{item.contact}</Button>
                    <IconButton onPress={() => Alert.alert("কল করতে চান?", "আপনি কি নিশ্চিত আপনি বাড়ির মালিককে কল করতে চান?", [{ text: "হ্যাঁ", onPress: () => { Linking.openURL(`tel:${item.contact}`) } }, { text: "না" }, { text: 'সরান' }])} icon={"phone"} mode='contained' style={{ width: "15%", borderRadius: 10 }} />
                </View>
            }
        </ScrollView>
        </>
    )
}

export default DetailesToLet