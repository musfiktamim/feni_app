import React from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import {Icon} from 'react-native-paper'

function WorkerDetailes(props) {
    const item = props.route.params.item
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{paddingHorizontal:5}}>
            <View style={{ width: "100%", height: 300, borderRadius: 10, overflow: "hidden" }}>
                <Image source={{uri:item.picture.url}} style={{ width: "100%", height: "100%" }} />
            </View>
            <View style={{ height: "auto", width: "100%" }}>
                <Text style={{ fontSize: 30, fontWeight: 500, fontStyle: "normal", fontFamily: "roboto" }}>{item.name}</Text>
            </View>
            <View>
                <Text style={{ fontSize: 17 }}>{item.skils[0]}</Text>
            </View>
            <Text style={{ fontSize: 25, color: "#DE1976", width: "100%", borderBottomWidth: 2, borderBottomColor: "#DE1976" }}>ঠিকানা</Text>
            <View style={{ marginTop: 10 }}>
                <Text style={{ fontSize: 17 }}>{item.address}</Text>
            </View>
            {
                item.educations.length>0 &&<>
                    <Text style={{ fontSize: 25, color: "#DE1976", width: "100%", borderBottomWidth: 2, borderBottomColor: "#DE1976" }}>শিক্ষা</Text>
                    <View style={{ marginTop: 10, width: "100%", height: "auto" }}>
                        {
                            item.educations.map((education,index)=>(
                                <Text key={index} style={{ fontSize: 17 }}> <Icon source={'disc'} /> {education?.exam} - {education?.institute} - {education?.year}</Text>
                            ))
                        }
                    </View>
                </>
            }
            {
                item.skils.length>0 && <>
                    <Text style={{ fontSize: 25, color: "#DE1976", width: "100%", borderBottomWidth: 2, borderBottomColor: "#DE1976", marginTop: 10 }}>দক্ষতা</Text>
                    <View>
                        {
                            item.skils.map((skil,index)=>(
                                <Text style={{ fontSize: 17, marginTop: 10 }} key={index}> <Icon source={'disc'} /> {skil}</Text>
                            ))
                        }
                        {/* <Text style={{ fontSize: 17, marginTop: 10 }}>ওয়েভ ডেভেলপমেন্ট</Text>
                        <Text style={{ fontSize: 17, marginTop: 10 }}>অ্যাপ ডেভেলপমেন্ট</Text>
                        <Text style={{ fontSize: 17, marginTop: 10 }}>ডেস্কটপ অ্যাপ ডেভেলপমেন্ট</Text> */}
                    </View>
                </>
            }
            {
                item.portpolio && <>
                    <Text style={{ fontSize: 25, color: "#DE1976", width: "100%", borderBottomWidth: 2, borderBottomColor: "#DE1976", marginTop: 10 }}>পোর্ট পলিও</Text>
                    <View>
                        <Text style={{ fontSize: 17, marginTop: 10 }}>{item.portpolio}</Text>
                    </View>
                </>
            }
            {
                item.contacts.length>0 &&<>
                    <Text style={{ fontSize: 25, color: "#DE1976", width: "100%", borderBottomWidth: 2, borderBottomColor: "#DE1976", marginTop: 10 }}>যোগাযোগ</Text>
                    <View>
                        {
                            item.contacts.map((contact,index)=><Text style={{ fontSize: 17, marginTop: 10 }}> <Icon source={'disc'} /> {contact}</Text>)
                        }
                        
                    </View>
                </>
            }
            {
                item.resume && item.resume.url &&<>
                    <Text style={{ fontSize: 25, color: "#DE1976", width: "100%", borderBottomWidth: 2, borderBottomColor: "#DE1976", marginTop: 10 }}>রেজুমে</Text>
                    <View style={{ marginTop: 10, width: "100%", maxHeight: 700, display: "flex", justifyContent: "center", alignItems: "center", borderRadius: 10, overflow: "hidden" }}>
                        <Image source={{uri:item.resume.url}} style={{ height: "100%", width: "100%", objectFit: "scale-down" }} />
                    </View>
                </>
            }
        </ScrollView >
    )
}

export default WorkerDetailes