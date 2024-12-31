import React, { useEffect, useState } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import image1 from "../../../assets/images/bijoysinghIMages.jpg"
import { Icon, IconButton, TextInput } from 'react-native-paper'
import PageWrapper from '../../components/PageWrapper'

function DetailesToursim(props) {
    console.log(props.route.params.links)
    const [review, setReviews] = useState("")
    const ratings = [11, 12, 13, 15, 20]
    function sums(array) {
        let mulTifSum = 0;
        let arraySum = 0;
        array.map((item, index) => mulTifSum += item * (index + 1));
        array.map((item) => arraySum += item)
        const clacRate = (mulTifSum / arraySum).toFixed(1);
        return ({ "MultiflyOfSumIncludingRatings": mulTifSum, "SumOfArray": arraySum, "RateOfArray": clacRate })

    }
    return (
        <PageWrapper >

            <ScrollView showsVerticalScrollIndicator={false} style={{ paddingHorizontal: 2, paddingVertical: 5 }}>
                <View style={{ width: "100%", height: "auto" }}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flex: 1, display: "flex", paddingVertical: 6 }}>
                        {
                            [1, 2, 3, 4, 5].map((item) => <Image key={item} source={image1} style={{ height: 300, width: 340, marginHorizontal: 4, borderRadius: 10 }} />)
                        }
                    </ScrollView>
                </View>
                <View style={{ height: "auto", width: "100%" }}>
                    <Text style={{ fontSize: 30, fontWeight: 500, fontStyle: "normal", fontFamily: "roboto" }}>বিজয় সিংহ দীঘি</Text>
                </View>
                <Text style={{ fontSize: 25, color: "#DE1976", width: "100%", borderBottomWidth: 2, borderBottomColor: "#DE1976" }}>স্থান</Text>
                <View style={{ marginTop: 10 }}>
                    <Text style={{ fontSize: 17 }}>মহিপাল ট্রাফিক পয়েন্ট হয়ে দক্ষিণ- পশ্চিম দিকে সার্কিট হাউজ রোডের সার্কিট হাউজের পার্শ্বে অবস্থিত।</Text>
                </View>
                <Text style={{ fontSize: 25, color: "#DE1976", width: "100%", borderBottomWidth: 2, borderBottomColor: "#DE1976", marginTop: 10 }}>বর্ণনা</Text>
                <View>
                    <Text style={{ fontSize: 17, marginTop: 10 }}>এ দীঘি ফেনী শহরের প্রায় ২ কি.মি. পশ্চিমে বিজয় সিংহ গ্রামে ফেনী সার্কিট হাউজের সামনে অবস্থিত। এ দীঘির আয়তন ৩৭.৫৭ একর। দিঘীর চৌপাড় খুব উঁচু ও বৃক্ষ শোভিত। ১৯৯৫ সালে বৃক্ষ চারা রোপন করে বর্তমান এ পরিবেশের সৃষ্টি করেন।</Text>
                </View>
                <Text style={{ fontSize: 25, color: "#DE1976", width: "100%", borderBottomWidth: 2, borderBottomColor: "#DE1976", marginTop: 10 }}>নামকরণ</Text>
                <View>
                    <Text style={{ fontSize: 17, marginTop: 10 }}>রাজা বিজয় সিংহের নামানুসারে দীঘিটির নামকরণ করা হয়েছে।</Text>
                </View>
                <Text style={{ fontSize: 25, color: "#DE1976", width: "100%", borderBottomWidth: 2, borderBottomColor: "#DE1976", marginTop: 10 }}>রেটিংস <Text style={{ fontSize: 17 }}>{sums(ratings).SumOfArray} টি</Text></Text>
                <View>
                    <View style={{ marginTop: 10, display: "flex", flexDirection: "row", alignItems: "center" }}>
                        <Text style={{ fontSize: 20, marginRight: 10, color: "gray" }}>এভারেজ {sums(ratings).RateOfArray}/</Text>
                        {[1, 2, 3, 4, 5].map((item, index) => <Icon key={index} source={`${item <= sums(ratings).RateOfArray ? "star" : "star-outline"}`} color='#F7B800' size={40} />)}
                    </View>
                    <View style={{ display: "flex", gap: 8 }}>
                        {
                            ratings.map((item, index) => <View key={index} style={{ width: "90%", display: "flex", flexDirection: "row", gap: 3, alignItems: "center" }}>
                                <Text style={{ fontSize: 15 }}>{index + 1}</Text>
                                <View style={{ width: `${(sums(ratings).SumOfArray / 100) * ratings[index]}%`, height: 20, backgroundColor: "#F7B800" }}>

                                </View>
                                <Text style={{ fontSize: 15 }}>{ratings[index]}</Text>
                            </View>)
                        }

                    </View>
                </View>
                <Text style={{ fontSize: 25, color: "#DE1976", width: "100%", borderBottomWidth: 2, borderBottomColor: "#DE1976", marginTop: 10 }}>রিভিউ <Text style={{ fontSize: 17 }}>{sums(ratings).SumOfArray} টি</Text></Text>
                <View style={{ height: 100, width: "100%" }}>

                </View>
            </ScrollView>
            <View style={{ width: "100%", backgroundColor: "white", height: "auto", display: "flex", flexDirection: "row", gap: 10, justifyContent: "center", alignItems: "center", position: "absolute", bottom: 0 }}>
                <TextInput onChangeText={text => setReviews(text)} style={{ width: "85%", backgroundColor: "white", borderRadius: 10, borderWidth: 1 }} />
                <TouchableOpacity disabled onPress={() => review && alert(review)}>
                    <Icon source={'send'} size={45} color='blue' />
                </TouchableOpacity>
            </View>
        </PageWrapper >
    )
}

export default DetailesToursim