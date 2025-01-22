import React, { useEffect, useState } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import image1 from "../../../assets/images/bijoysinghIMages.jpg"
import { Icon, IconButton, TextInput } from 'react-native-paper'
import PageWrapper from '../../components/PageWrapper'

function DetailesToursim(props) {
    const item = props.route.params.item
    // const [review, setReviews] = useState("")
    // const ratings = [11, 12, 13, 15, 20]
    // function sums(array) {
    //     let mulTifSum = 0;
    //     let arraySum = 0;
    //     array.map((item, index) => mulTifSum += item * (index + 1));
    //     array.map((item) => arraySum += item)
    //     const clacRate = (mulTifSum / arraySum).toFixed(1);
    //     return ({ "MultiflyOfSumIncludingRatings": mulTifSum, "SumOfArray": arraySum, "RateOfArray": clacRate })

    // }
    return (
        <PageWrapper >

            <ScrollView showsVerticalScrollIndicator={false} style={{ paddingHorizontal: 2, paddingVertical: 5 }}>
                <View style={{ width: "100%", height: "auto" }}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flex: 1, display: "flex", paddingVertical: 6 }}>
                        {
                            item.pictures.map((item) => <Image key={item} source={{uri:item.url}} style={{ height: 300, width: 340, marginHorizontal: 4, borderRadius: 10 }} />)
                        }
                    </ScrollView>
                </View>
                <View style={{ height: "auto", width: "100%" }}>
                    <Text style={{ fontSize: 30, fontWeight: 500, fontStyle: "normal", fontFamily: "roboto" }}>
                        {item.name}
                    </Text>
                </View>
                <Text style={{ fontSize: 25, color: "#DE1976", width: "100%", borderBottomWidth: 2, borderBottomColor: "#DE1976" }}>স্থান</Text>
                <View style={{ marginTop: 10 }}>
                    <Text style={{ fontSize: 17 }}>
                        {/* মহিপাল ট্রাফিক পয়েন্ট হয়ে দক্ষিণ- পশ্চিম দিকে সার্কিট হাউজ রোডের সার্কিট হাউজের পার্শ্বে অবস্থিত। */}
                        {item.location}
                    </Text>
                </View>
                <Text style={{ fontSize: 25, color: "#DE1976", width: "100%", borderBottomWidth: 2, borderBottomColor: "#DE1976", marginTop: 10 }}>নামকরণ</Text>
                <View>
                    <Text style={{ fontSize: 17, marginTop: 10 }}>
                        {/* রাজা বিজয় সিংহের নামানুসারে দীঘিটির নামকরণ করা হয়েছে। */}
                        {item.naming}
                    </Text>
                </View>
                <Text style={{ fontSize: 25, color: "#DE1976", width: "100%", borderBottomWidth: 2, borderBottomColor: "#DE1976", marginTop: 10 }}>বর্ণনা</Text>
                <View>
                    <Text style={{ fontSize: 17, marginTop: 10 }}>
                        {/* এ দীঘি ফেনী শহরের প্রায় ২ কি.মি. পশ্চিমে বিজয় সিংহ গ্রামে ফেনী সার্কিট হাউজের সামনে অবস্থিত। এ দীঘির আয়তন ৩৭.৫৭ একর। দিঘীর চৌপাড় খুব উঁচু ও বৃক্ষ শোভিত। ১৯৯৫ সালে বৃক্ষ চারা রোপন করে বর্তমান এ পরিবেশের সৃষ্টি করেন। */}
                        {item.description}
                    </Text>
                </View>
  
            </ScrollView>
        </PageWrapper >
    )
}

export default DetailesToursim