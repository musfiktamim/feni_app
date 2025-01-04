import React from 'react'
import PageWrapper from '../../components/PageWrapper'
import { Image, Text, View } from 'react-native'
import MyImage from '../../../assets/images/myImage.jpg'
import resume from '../../../assets/images/resume.jpg'
import { Button, IconButton } from 'react-native-paper'

function WorkerDetailes() {
    return (
        <PageWrapper>
            <View style={{ width: "100%", height: 300, borderRadius: 10, overflow: "hidden" }}>
                <Image source={MyImage} style={{ width: "100%", height: "100%" }} />
            </View>
            <View style={{ height: "auto", width: "100%" }}>
                <Text style={{ fontSize: 30, fontWeight: 500, fontStyle: "normal", fontFamily: "roboto" }}>মোশফিকুর রহামান তামিম</Text>
            </View>
            <View>
                <Text style={{ fontSize: 17 }}>ফাজিলপুর ফেনী- সাদর ফেনী</Text>
            </View>
            <Text style={{ fontSize: 25, color: "#DE1976", width: "100%", borderBottomWidth: 2, borderBottomColor: "#DE1976" }}>ঠিকানা</Text>
            <View style={{ marginTop: 10 }}>
                <Text style={{ fontSize: 17 }}>ফাজিলপুর ফেনী- সাদর ফেনী</Text>
            </View>
            <Text style={{ fontSize: 25, color: "#DE1976", width: "100%", borderBottomWidth: 2, borderBottomColor: "#DE1976" }}>শিক্ষা</Text>
            <View style={{ marginTop: 10, width: "100%", height: "auto" }}>
                <Text style={{ fontSize: 17 }}>কুইন আইডিয়াল ইনফ্যান্ট একাডেমী</Text>
                <Text style={{ fontSize: 17 }}>ফাজিলপুর ডাব্লিউ বী কাদরী উচ্চ বিদ্যালয়</Text>
                <Text style={{ fontSize: 17 }}>ইনস্টিটিউট অব কম্পিউটার সাইন্স অ্যান্ড টেকনোলোজি</Text>
            </View>
            <Text style={{ fontSize: 25, color: "#DE1976", width: "100%", borderBottomWidth: 2, borderBottomColor: "#DE1976", marginTop: 10 }}>দক্ষতা</Text>
            <View>
                <Text style={{ fontSize: 17, marginTop: 10 }}>ওয়েভ ডেভেলপমেন্ট</Text>
                <Text style={{ fontSize: 17, marginTop: 10 }}>অ্যাপ ডেভেলপমেন্ট</Text>
                <Text style={{ fontSize: 17, marginTop: 10 }}>ডেস্কটপ অ্যাপ ডেভেলপমেন্ট</Text>
            </View>
            <Text style={{ fontSize: 25, color: "#DE1976", width: "100%", borderBottomWidth: 2, borderBottomColor: "#DE1976", marginTop: 10 }}>পোর্ট পলিও</Text>
            <View>
                <Text style={{ fontSize: 17, marginTop: 10 }}>facebook.com</Text>
            </View>
            <Text style={{ fontSize: 25, color: "#DE1976", width: "100%", borderBottomWidth: 2, borderBottomColor: "#DE1976", marginTop: 10 }}>যোগাযোগ</Text>
            <View>
                <Text style={{ fontSize: 17, marginTop: 10 }}>musfiktamim@gmail.com</Text>
                <Text style={{ fontSize: 17, marginTop: 10 }}>01855241666</Text>
            </View>

            <Text style={{ fontSize: 25, color: "#DE1976", width: "100%", borderBottomWidth: 2, borderBottomColor: "#DE1976", marginTop: 10 }}>রেজুমে</Text>
            <View style={{ marginTop: 10, width: "100%", maxHeight: 700, display: "flex", justifyContent: "center", alignItems: "center", borderRadius: 10, overflow: "hidden" }}>
                <Image source={resume} style={{ height: "100%", width: "100%", objectFit: "scale-down" }} />
            </View>
        </PageWrapper >
    )
}

export default WorkerDetailes