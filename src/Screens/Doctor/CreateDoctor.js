import React, { useState } from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import { Button, IconButton, Modal, Portal, TextInput } from 'react-native-paper'
import * as ImagePicker from "expo-image-picker"
import { Picker } from '@react-native-picker/picker';
import PageWrapper from '../../components/PageWrapper';
import EducationBox from '../../components/EducationBox';
import EducationShows from '../../components/EducationShows';


function CreateDoctor(props) {
    const [image, setImage] = useState({});
    const [openChemberMode, setOpenChemberMode] = useState(false)
    const [selectedLanguage, setSelectedLanguage] = useState("মেডিসিন বিশেষজ্ঞ");
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
        doctorType: ""
    })

    function handleCencel() {

    }

    function handletextChange(fieldName, text) {
        setDoctorData((prev) => ({ ...prev, [fieldName]: text }))
    }
    async function handleSave() {

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
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0]);
        }
    };

    return (
        <PageWrapper >
            <View style={{ margin: "auto", position: "relative", marginBottom: 10 }}>
                <View style={{ width: 200, height: 200, borderWidth: 1, overflow: 'hidden', borderColor: "black", borderRadius: "100%" }}>
                    {
                        image && <Image source={{ uri: image.uri }} style={{ width: "100%", height: "100%" }} />
                    }
                </View>
                <IconButton style={{ position: "absolute", bottom: 0, right: 0, backgroundColor: "pink" }} iconColor='white' size={40} icon={"camera"} onPress={pickImage}></IconButton>
            </View>
            <TextInput value={doctorData.name} onChangeText={text => handletextChange("name", text)} key={'name'} mode='outlined' label={"ডাক্টারের নাম"} cursorColor='black' />
            <Picker
                placeholder='Type of Doctor'
                selectedValue={selectedLanguage}
                mode='dropdown'
                onValueChange={(itemValue, itemIndex) =>
                    setSelectedLanguage(itemValue)
                }
                style={{ marginTop: 10 }}

            >
                {
                    doctorTypes.map((item, index) => <Picker.Item key={index} label={`${item.main}`} value={`${item.main}`} />)
                }
            </Picker>
            {
                doctorData.educations.map((item, index) => <EducationShows key={index} edu={item} handleDeleteEdu={handleDeleteEdu} />)
            }
            <EducationBox returnData={returnData} />
            <TextInput value={doctorData.presentworkplace} onChangeText={text => handletextChange("presentworkplace", text)} label={'ভর্তমান কর্মসংস্থান'} mode='outlined' />
            {/* <TextInput value={treatment} onChangeText={text => handletextChange(text)} mode='outlined' label={'যে যে রোগের চিকিৎসা করেন'} multiline={true} numberOfLines={6} ></TextInput> */}

            <Button onPress={() => setOpenChemberMode(true)} mode='outlined' style={{ borderRadius: 10, marginTop: 4 }}>চেম্বার</Button>
            <TextInput value={doctorData.description} onChangeText={text => handletextChange("description", text)} label={'ডিস্ক্রিপশন'} mode='outlined' cursorColor='black' multiline={true} numberOfLines={6} />
            <Portal>
                <Modal visible={openChemberMode} onDismiss={() => setOpenChemberMode(false)} contentContainerStyle={{ backgroundColor: 'white', borderRadius: 15 }} style={{ padding: 20, }} >
                    <ChemberBox returnData={returnData} setOpenChemberMode={setOpenChemberMode} />
                </Modal>
            </Portal>

            <View style={{ width: "100%", marginTop: 10, display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                <Button onPress={handleCencel} mode='outlined' style={{ width: "49%", borderRadius: 10 }} >বাতিল করুন </Button>
                <Button onPress={handleSave} mode='contained' style={{ width: "49%", borderRadius: 10 }} >পোষ্ট করুন</Button>
            </View>
        </PageWrapper>
    )
}

export default CreateDoctor

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
            <TextInput value={chemberData.chemberName} onChangeText={text => handletextChange("chemberName", text)} mode='outlined' label={'চেম্বারের নাম'}></TextInput>
            <TextInput value={chemberData.chemberDay} onChangeText={text => handletextChange("chemberDay", text)} mode='outlined' label={'কি কি বারে'}></TextInput>
            <TextInput value={chemberData.startToEnd} onChangeText={text => handletextChange("startToEnd", text)} mode='outlined' label={'কয়টা থেকে কয়টা'}></TextInput>
            <TextInput value={chemberData.phone} onChangeText={text => handletextChange("phone", text)} mode='outlined' label={'ফোন নাম্বার'}></TextInput>
            <TextInput value={chemberData.remark} onChangeText={text => handletextChange("remark", text)} mode='outlined' label={'note'}></TextInput>
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