import React, { useState } from 'react'
import { Image, Pressable, Text, View } from 'react-native'
import PageWrapper from "../../components/PageWrapper"
import * as ImagePicker from 'expo-image-picker';
import { Button, IconButton, Modal, Portal, RadioButton, TextInput } from 'react-native-paper';
import EducationBox from '../../components/EducationBox';
import EducationShows from '../../components/EducationShows';


function CreateWorker() {
    const [image, setImage] = useState({})
    const [resume, setResume] = useState({})

    const [advanceMode, setAdvanceMode] = useState(false)
    const [data, setData] = useState({
        name: "",
        description: "",
        address: "",
        educations: [],
        skils: [],
        contacts: []
    })


    const pickImage = async (setState, allowEdit = false, allowAspect = false) => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            allowsEditing: allowEdit,
            aspect: allowAspect ? [4, 3] : [1, 1],
            quality: 1,
        });


        console.log(result);

        if (!result.canceled) {
            setState(result.assets[0]);
        }
    };

    function returnData(name, education) {
        setData((prev) => ({ ...prev, [name]: [...prev[name], education] }))
    }

    function handleDeleteEdu(institute) {
        setData((prev) => ({ ...prev, educations: prev.educations.filter(edu => edu.institute !== institute) }))
    }


    function handleDeleteSkil(name) {
        setData((prev) => ({ ...prev, skils: prev.skils.filter(skil => skil !== name) }))
    }
    function handleDeleteContact(name) {
        setData((prev) => ({ ...prev, contacts: prev.contacts.filter(contact => contact !== name) }))
    }


    return (
        <PageWrapper>
            <Pressable onPress={() => pickImage(setImage, true, true)} style={{ width: "100%", height: 300, borderRadius: 10, position: "relative", borderWidth: image.uri ? 0 : 1 }}>
                {
                    image.uri &&
                    <Image source={{ uri: image.uri }} style={{ height: "100%", width: "100%", borderRadius: 10 }} />
                }
                {
                    image.uri &&
                    <IconButton onPress={() => setImage({})} icon={'delete'} style={{ position: "absolute", top: -15, right: -15 }} />
                }
                {
                    !image.uri &&
                    <IconButton icon={"plus"} style={{ position: "absolute", width: "100%", height: "100%" }} />
                }
            </Pressable>
            <View style={{ width: "100%", height: "auto", display: "flex", flexDirection: "column", gap: 4 }}>
                <Pressable onPress={() => setAdvanceMode(!advanceMode)} style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                    <RadioButton onPress={() => setAdvanceMode(!advanceMode)} status={advanceMode ? "checked" : "unchecked"} />
                    <Text>Advance Mode</Text>
                </Pressable>
                <TextInput label="নাম" mode='outlined' inputMode='text' />
                <TextInput label="বর্ননা" mode='outlined' inputMode='text' multiline numberOfLines={3} />
                <TextInput label="ঠিকানা" mode='outlined' inputMode='text' multiline numberOfLines={2} />
                {
                    advanceMode &&
                    <TextInput label="পোর্ট পোলিও লিঙ্ক" mode='outlined' inputMode='text' multiline numberOfLines={2} />
                }
                {
                    advanceMode && <>

                        <View>
                            {
                                data.educations.map((edu, index) => (<EducationShows edu={edu} handleDeleteEdu={handleDeleteEdu} key={index} />))
                            }
                        </View>

                        <EducationBox returnData={returnData} />
                        {
                            data.skils.map((skil, index) => (
                                <Pressable key={index} style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", borderWidth: 1, borderRadius: 10, padding: "2%", marginVertical: "2%" }}>
                                    <Text style={{ width: "90%" }}>{skil}</Text>
                                    <IconButton onPress={() => handleDeleteSkil(skil)} icon={'delete'} iconColor='red' style={{ width: "10%" }} />
                                </Pressable>
                            ))
                        }
                        <SkilsBox returnData={returnData} />
                    </>
                }
                {
                    data.contacts.map((contact, index) => (
                        <Pressable key={index} style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", borderWidth: 1, borderRadius: 10, padding: "2%", marginVertical: "2%" }}>
                            <Text style={{ width: "90%" }}>{contact}</Text>
                            <IconButton onPress={() => handleDeleteContact(contact)} icon={'delete'} iconColor='red' style={{ width: "10%" }} />
                        </Pressable>
                    ))
                }
                <ContactsBox returnData={returnData} />
            </View>
            {
                advanceMode &&
                <Pressable onPress={() => pickImage(setResume, false, false)} style={{ marginTop: 10, width: "100%", maxHeight: 700, display: "flex", justifyContent: "center", alignItems: "center", borderRadius: 10, overflow: "hidden", borderWidth: resume.uri ? 0 : 1 }}>
                    {
                        resume.uri && <Image source={{ uri: resume.uri }} style={{ height: "100%", width: "100%", objectFit: "scale-down" }} />
                    }
                    {
                        !resume.uri && <IconButton icon={'plus'} style={{ width: "100%", height: "100%" }} />
                    }
                </Pressable>
            }
            <View style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <Button mode='outlined' onPress={() => {
                    setImage({});
                    setResume({});
                    setData({
                        name: "",
                        description: "",
                        address: "",
                        educations: [],
                        skils: [],
                        contacts: []
                    })
                }} style={{ width: "49%", borderRadius: 10, marginVertical: 10 }}>পরিষ্কার করুন</Button>
                <Button mode='contained' style={{ width: "49%", borderRadius: 10, marginVertical: 10 }}>সেভ করুন</Button>
            </View>
        </PageWrapper>
    )
}

export default CreateWorker



function SkilsBox({ returnData }) {
    const [skils, setSkils] = useState("")
    return (
        <View style={{ borderWidth: 1, paddingHorizontal: "2%", paddingVertical: "2%", borderRadius: 10 }}>
            <TextInput value={skils} onChangeText={text => setSkils(text)} label="দক্ষতা" mode='outlined' inputMode='text' multiline numberOfLines={2} />
            <IconButton onPress={() => {
                skils &&
                    returnData("skils", skils); setSkils("")
            }} icon={'plus'} style={{ width: "100%", borderRadius: 10, margin: "auto", marginTop: 6 }} mode='outlined' />
        </View>
    )
}

function ContactsBox({ returnData }) {
    const [contact, setContact] = useState("")
    return (
        <View style={{ borderWidth: 1, paddingHorizontal: "2%", paddingVertical: "2%", borderRadius: 10 }}>
            <TextInput value={contact} onChangeText={text => setContact(text)} label="যোগাযোগ" mode='outlined' inputMode={"text" || "numeric"} multiline numberOfLines={2} />
            <IconButton onPress={() => {
                contact &&
                    returnData("contacts", contact); setContact("")
            }} icon={'plus'} style={{ width: "100%", borderRadius: 10, margin: "auto", marginTop: 6 }} mode='outlined' />
        </View>
    )
}