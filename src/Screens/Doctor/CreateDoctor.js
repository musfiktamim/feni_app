import React, { useEffect, useState } from 'react'
import { Alert, Image, Pressable, ScrollView, Text, ToastAndroid, View } from 'react-native'
import { Button, Icon, IconButton, MD3Colors, Modal, Portal, ProgressBar, RadioButton, TextInput } from 'react-native-paper'
import * as ImagePicker from "expo-image-picker"
import { Picker } from '@react-native-picker/picker';
import PageWrapper from '../../components/PageWrapper';
import EducationBox from '../../components/EducationBox';
import EducationShows from '../../components/EducationShows';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useMutation } from '@tanstack/react-query';
import { createDoctor } from '../../api/api';
import ProgressBarForTop from '../../components/ProgressBarForTop';


function CreateDoctor(props) {
    const [shows, setShows] = useState({ education: false, chembers: false })
    // const [disableSaveButton,setDisableSaveButton] = useState(false)
    const [openChemberMode, setOpenChemberMode] = useState(false)
    const [doctorTypes, setDoctorTypes] = useState([
        {
            main: "মেডিসিন বিশেষজ্ঞ",
        },
        {
            main: "কার্ডিওলজিস্ট",
        },
        {
            main: "নিউরোলজিস্ট",
        },
        {
            main: "অঙ্কোলজিস্ট",
        },
        {
            main: "গ্যাস্ট্রোলজি ডাক্তার",
        },
        {
            main: "কান, নাক, গলা (ENT) বিশেষজ্ঞ",
        },
        {
            main: "লিভার হজম সিস্টেম এবং মেডিসিন বিশেষজ্ঞ",
        },
        {
            main: "ডার্মাটোলজিস্ট",
        },
        {
            main: "সার্জারি বিশেষজ্ঞ",
        },
        {
            main: "রিউমাটোলজি-পেইন বিশেষজ্ঞ",
        },
        {
            main: "শিশু বিশেষজ্ঞ",
        },
        {
            main: "অর্থোপেডিক্স বিশেষজ্ঞ এবং সার্জন",
        },
        {
            main: "মনোরোগ বিশেষজ্ঞ মস্তিষ্ক এবং নিউরোলজিস্ট",
        },
        {
            main: "বক্ষ রোগ অ্যাজমা এবং টিবি বিশেষজ্ঞ",
        },
        {
            main: "গাইনোকোলজিস্ট",
        },
        {
            main: "চক্ষু বিশেষজ্ঞ",
        },
        {
            main: "হরমোন বিশেষজ্ঞ",
        },
        {
            main: "ডেন্টিস্ট"
        }
    ])







    const [doctorData, setDoctorData] = useState({
        name: "",
        educations: [],
        presentworkplace: "",
        treatments: [],
        chembers: [],
        description: "",
        contact: "",
        doctorType: "মেডিসিন বিশেষজ্ঞ",
        gender: "male",
        image: ""
    })

    function handleCencel() {
        setDoctorData({
            name: "",
            educations: [],
            presentworkplace: "",
            chembers: [],
            description: "",
            contact: "",
            doctorType: "মেডিসিন বিশেষজ্ঞ",
            gender: "male",
            image: ""
        });
    }

    function handletextChange(fieldName, text) {
        setDoctorData((prev) => ({ ...prev, [fieldName]: text }))
    }

    const {mutate,isPending,isError,error} = useMutation({
        mutationFn:(data)=>createDoctor(data),
        onSuccess:(res)=>{
            if(res.mission){
                Alert.alert("doctor posted", res.message, [{
                    text: "OK!", onPress: () => {
                        setDoctorData({
                            name: "",
                            educations: [],
                            presentworkplace: "",
                            chembers: [],
                            description: "",
                            contact: "",
                            doctorType: "মেডিসিন বিশেষজ্ঞ",
                            gender: "male",
                            image: ""
                        });
                    }
                },
                 { text: "Go Home", onPress: () => 
                    props.navigation.navigate("Home")
                 },
                 { text: "Go Doctor", onPress: () =>
                     props.navigation.navigate("Doctor") 
                }])
            }else{
                Alert.alert("doctor posted", res.message)
            }
        },
        onError:(err)=>{
            Alert.alert("wrong",err.message)
        },
    })

    async function handleSave() {
        if(doctorData.name && doctorData.contact && doctorData.doctorType && doctorData.image && doctorData.gender && doctorData.educations.length > 0){
            mutate(doctorData)
        }else{
            ToastAndroid.show('plz fill all required fields',500)
        }
    }

    function returnData(name, education) {
        setDoctorData((prev) => ({ ...prev, [name]: [...prev[name], education] }))
    }

    function handleDeleteEdu(institute) {
        setDoctorData((prev) => ({ ...prev, educations: prev.educations.filter(edu => edu.institute !== institute) }))
    }

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            allowsEditing: true,
            aspect: [4, 3],
            base64: true,

        });

        if (!result.canceled) {
            setDoctorData((prev) => ({ ...prev, image: result.assets[0].base64 }));

        }
    };

    return (
        <>
            {
                isPending &&
                    <ProgressBarForTop isLoad={true} />
            }        
        <PageWrapper >
            <View style={{ margin: "auto", position: "relative", marginBottom: 10 }}>
                <View style={{ width: 200, height: 200, borderWidth: 1, overflow: 'hidden', borderColor: "black", borderRadius: "100%" }}>
                    {
                        doctorData.image && <Image source={{ uri: `data:image/jpeg;base64,${doctorData.image}` }} style={{ width: "100%", height: "100%" }} />
                    }
                </View>
                <IconButton style={{ position: "absolute", bottom: 0, right: 0, backgroundColor: "pink" }} iconColor='white' size={40} icon={"camera"} onPress={pickImage}></IconButton>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>

            <TextInput value={doctorData.name} onChangeText={text => handletextChange("name", text)} key={'name'} mode='outlined' label={"ডাক্টারের নাম"} cursorColor='black' />
            <View style={{ width: "100%", borderWidth: 0.2, borderColor: "gray", marginVertical: 10 }}>

                <Picker

                    selectedValue={doctorData.doctorType}
                    mode='dropdown'
                    onValueChange={(itemValue, itemIndex) =>
                        handletextChange("doctorType", itemValue)
                    }
                >
                    {
                        doctorTypes.map((item, index) => <Picker.Item key={index} label={`${item.main}`} value={`${item.main}`} />)
                    }
                </Picker>
            </View>

            <View style={{ width: "100%", display: "flex", flexDirection: "row", alignItems: "center", gap: 2 }}>
                <Text>Gender: </Text>
                <Pressable onPress={() => setDoctorData((prev) => ({ ...prev, gender: "male" }))} style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                    <RadioButton onPress={() => setDoctorData((prev) => ({ ...prev, gender: "male" }))} value='male' status={doctorData.gender == "male" ? "checked" : "unchecked"} />
                    <Text>Male</Text>
                </Pressable>
                <Pressable onPress={() => setDoctorData((prev) => ({ ...prev, gender: "female" }))} style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                    <RadioButton onPress={() => setDoctorData((prev) => ({ ...prev, gender: "female" }))} value='female' status={doctorData.gender == "female" ? "checked" : "unchecked"} />
                    <Text>Female</Text>
                </Pressable>

            </View>

            <Pressable onPress={() => setShows((prev) => ({ ...prev, education: !prev.education }))} style={{ width: "100%", display: "flex", flexDirection: "row", position: "relative", alignItems: "center" }}>
                <View style={{ width: "100%", position: "absolute", borderWidth: 0.2 }}></View>
                <Text style={{ backgroundColor: "white" }}>Educations {doctorData.educations.length} <Icon source={shows.education ? "arrow-up" : "arrow-down"} /> </Text>
            </Pressable>
            {
                shows.education && doctorData.educations.map((item, index) => <EducationShows key={index} edu={item} handleDeleteEdu={handleDeleteEdu} />)
            }
            <EducationBox returnData={returnData} />
            <TextInput value={doctorData.presentworkplace} onChangeText={text => handletextChange("presentworkplace", text)} label={'ভর্তমান কর্মসংস্থান'} mode='outlined' />

            <Pressable onPress={() => setShows((prev) => ({ ...prev, chembers: !prev.chembers }))} style={{ width: "100%", display: "flex", flexDirection: "row", position: "relative", alignItems: "center" }}>
                <View style={{ width: "100%", position: "absolute", borderWidth: 0.2 }}></View>
                <Text style={{ backgroundColor: "white" }}>Chembers {doctorData.chembers.length} <Icon source={shows.chembers ? "arrow-up" : "arrow-down"} /> </Text>
            </Pressable>

            {
                shows.chembers && doctorData.chembers && doctorData.chembers.map((item, index) => <ShowChemberBox data={doctorData.chembers} setData={setDoctorData} item={item} key={index} />)
            }
            <Button onPress={() => setOpenChemberMode(true)} mode='outlined' style={{ borderRadius: 10, marginTop: 4 }}>চেম্বার</Button>
            <TextInput value={doctorData.contact} onChangeText={text => handletextChange("contact", text)} label={'যোগাযোগ'} mode='outlined' cursorColor='black' inputMode='tel' />
            <TextInput value={doctorData.description} onChangeText={text => handletextChange("description", text)} label={'ডিস্ক্রিপশন'} mode='outlined' cursorColor='black' multiline={true} numberOfLines={6} />

            <Portal>
                <Modal visible={openChemberMode} onDismiss={() => setOpenChemberMode(false)} contentContainerStyle={{ backgroundColor: 'white', borderRadius: 15 }} style={{ padding: 20, }} >
                    <ChemberBox returnData={returnData} setOpenChemberMode={setOpenChemberMode} />
                </Modal>
            </Portal>

            <View style={{ width: "100%", marginTop: 10, display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                <Button onPress={handleCencel} mode='outlined' style={{ width: "49%", borderRadius: 10 }} >বাতিল করুন </Button>
                <Button disabled={isPending} onPress={handleSave} mode='contained' style={{ width: "49%", borderRadius: 10 }} >পোষ্ট করুন</Button>
            </View>
            </ScrollView>
        </PageWrapper>
        </>
    )
}

export default CreateDoctor

function ShowChemberBox({ setData, data, item }) {
    const [show, setShow] = useState(false);
    function handleDelete() {
        const filtered = data.filter((items) => items.chemberName !== item.chemberName)
        setData((prev) => ({ ...prev, chembers: filtered }))
    }
    return (
        <Pressable onPress={() => setShow(!show)} style={{ width: "100%", height: "auto", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
            <View style={{ width: "80%", height: "auto" }}>
                <Text>{item.chemberName}</Text>
                {
                    show &&
                    <>
                        <Text>{item.chemberDay}</Text>
                        <Text>{item.startToEnd}</Text>
                        <Text>{item.phone}</Text>
                        <Text>{item.remark}</Text>
                    </>
                }
            </View>
            <IconButton icon={'delete'} onPress={handleDelete} />
        </Pressable>
    )
}



function ChemberBox({ returnData, setOpenChemberMode }) {
    const [chemberData, setChemberData] = useState({
        chemberName: "",
        chemberDay: "",
        startToEnd: "",
        phone: "",
        remark: ""
    })

    function handletextChange(fieldName, text) {
        setChemberData((prev) => ({ ...prev, [fieldName]: text }))
    }

    return (
        <View style={{ paddingHorizontal: 10, paddingVertical: 10 }}>
            <TextInput value={chemberData.chemberName} onChangeText={text => handletextChange("chemberName", text)} inputMode='text' mode='outlined' label={'চেম্বারের নাম'}></TextInput>
            <TextInput value={chemberData.chemberDay} onChangeText={text => handletextChange("chemberDay", text)} inputMode='text' mode='outlined' label={'কি কি বারে'}></TextInput>
            <TextInput value={chemberData.startToEnd} onChangeText={text => handletextChange("startToEnd", text)} inputMode='text' mode='outlined' label={'কয়টা থেকে কয়টা'}></TextInput>
            <TextInput value={chemberData.phone} onChangeText={text => handletextChange("phone", text)} inputMode='text' mode='outlined' label={'ফোন নাম্বার'}></TextInput>
            <TextInput value={chemberData.remark} onChangeText={text => handletextChange("remark", text)} inputMode='text' mode='outlined' label={'note'}></TextInput>
            <View style={{ display: "flex", marginTop: 10, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <Button mode='outlined' onPress={() => {
                    setOpenChemberMode(false)
                    setChemberData({ chemberName: "", chemberDay: "", startToEnd: "", phone: "", remark: "" })
                }} style={{ width: "49%", borderRadius: 10 }}>বাতিল করুন</Button>
                <Button onPress={() => {
                    if (chemberData.chemberName && chemberData.chemberDay && chemberData.startToEnd && chemberData.phone) {
                        returnData("chembers", chemberData)
                        setOpenChemberMode(false)
                    } else {
                        alert("Please fill all the fields")
                    }
                }} mode='contained' style={{ width: "49%", borderRadius: 10 }}>সেভ করুন</Button>
            </View>
        </View>
    )
}