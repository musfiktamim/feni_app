import React from 'react'
import { Alert, Image, Linking, ScrollView, Text, View } from 'react-native'
import PageWrapper from "../../components/PageWrapper"
import image1 from "../../../assets/images/bijoysinghIMages.jpg"
import { Button, IconButton } from 'react-native-paper'

function DetailesToLet() {
    return (
        <PageWrapper>
            <View style={{ width: "100%", height: "auto" }}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flex: 1, display: "flex", paddingVertical: 6 }}>
                    {
                        [1, 2, 3, 4, 5].map((item) => <Image key={item} source={image1} style={{ height: 300, width: 340, marginHorizontal: 4, borderRadius: 10 }} />)
                    }
                </ScrollView>
            </View>
            <View style={{ height: "auto", width: "100%" }}>
                <Text style={{ fontSize: 30, fontWeight: 500, fontStyle: "normal", fontFamily: "roboto" }}>মুশফিকের ঘর</Text>
            </View>
            <Text style={{ fontSize: 25, color: "#DE1976", width: "100%", borderBottomWidth: 2, borderBottomColor: "#DE1976" }}>স্থান</Text>
            <View style={{ marginTop: 10 }}>
                <Text style={{ fontSize: 17 }}>মহিপাল ট্রাফিক পয়েন্ট হয়ে দক্ষিণ- পশ্চিম দিকে সার্কিট হাউজ রোডের সার্কিট হাউজের পার্শ্বে অবস্থিত।</Text>
            </View>
            <Text style={{ fontSize: 25, color: "#DE1976", width: "100%", borderBottomWidth: 2, borderBottomColor: "#DE1976", marginTop: 10 }}>বিস্তারিত</Text>
            <View>
                <Text style={{ fontSize: 17, marginTop: 10 }}>রুম কয়টিঃ ৪টি </Text>
                <Text style={{ fontSize: 17, marginTop: 10 }}>রুমের দৈর্ঘ্যঃ ১২০ </Text>
                <Text style={{ fontSize: 17, marginTop: 10 }}>রুমের প্রস্থঃ ১২০ </Text>
                <Text style={{ fontSize: 17, marginTop: 10 }}>রান্নাঘর আছেঃ হ্যা </Text>
                <Text style={{ fontSize: 17, marginTop: 10 }}>ড্রয়িং রুম আছেঃ হ্যা </Text>
                <Text style={{ fontSize: 17, marginTop: 10 }}>বারান্ধা আছেঃ হ্যা </Text>
                <Text style={{ fontSize: 17, marginTop: 10 }}>টয়লেট আছেঃ হ্যা </Text>
            </View>
            <Text style={{ fontSize: 25, color: "#DE1976", width: "100%", borderBottomWidth: 2, borderBottomColor: "#DE1976", marginTop: 10 }}>যেমন মানুষকে ভাড়া দিতে চাই</Text>
            <View>
                <Text style={{ fontSize: 17, marginTop: 10 }}>রাজা বিজয় সিংহের নামানুসারে দীঘিটির নামকরণ করা হয়েছে।</Text>
            </View>
            <Text style={{ fontSize: 25, color: "#DE1976", width: "100%", borderBottomWidth: 2, borderBottomColor: "#DE1976", marginTop: 10 }}>বিবরন</Text>
            <View>
                <Text style={{ fontSize: 17, marginTop: 10 }}>রাজা বিজয় সিংহের নামানুসারে দীঘিটির নামকরণ করা হয়েছে।</Text>
            </View>
            <Text style={{ fontSize: 25, color: "#DE1976", width: "100%", borderBottomWidth: 2, borderBottomColor: "#DE1976", marginTop: 10 }}>ভাড়া</Text>
            <View>
                <Text style={{ fontSize: 17, marginTop: 10 }}>দৈনিকঃ ১২০০ টাকা </Text>
                <Text style={{ fontSize: 17, marginTop: 10 }}>মাসিকঃ ১২০০০ টাকা</Text>
            </View>
            <View style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <Button mode='contained' style={{ width: "80%", borderRadius: 10 }}>01855241666</Button>
                <IconButton onPress={() => Alert.alert("কল করতে চান?", "আপনি কি নিশ্চিত আপনি বাড়ির মালিককে কল করতে চান?", [{ text: "হ্যাঁ", onPress: () => { Linking.openURL("tel:01855241666") } }, { text: "না" }, { text: 'সরান' }])} icon={"phone"} mode='contained' style={{ width: "15%", borderRadius: 10 }} />
            </View>
        </PageWrapper >
    )
}

export default DetailesToLet