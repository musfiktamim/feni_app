import React, { useState } from 'react'
import { Image, Pressable, ScrollView, Text, ToastAndroid, View } from 'react-native'
import PageWrapper from "../../components/PageWrapper"
import * as ImagePicker from 'expo-image-picker';
import { Button, IconButton, Modal, Portal, RadioButton, TextInput } from 'react-native-paper';
import EducationBox from '../../components/EducationBox';
import EducationShows from '../../components/EducationShows';
import { useMutation } from '@tanstack/react-query';
import ProgressBarForTop from '../../components/ProgressBarForTop';
import { createWorker } from '../../api/api';


function CreateWorker() {

    const [advanceMode, setAdvanceMode] = useState(false)
    const [data, setData] = useState({
        name: "",
        description: "",
        address: "",
        educations: [],
        skils: [],
        portpolio:"",
        contacts: [],
        resume:"",
        image:""
    })


    const pickImage = async (fieldName, allowEdit = false, allowAspect = false) => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            allowsEditing: allowEdit,
            aspect: allowAspect ? [4, 3] : [1, 1],
            quality: 1,
            base64:true
        });

        if (!result.canceled) {
            setData((prev)=>({...prev,[fieldName]:result.assets[0].base64}))
        }
    };

    function returnData(name, education) {
        setData((prev) => ({ ...prev, [name]: [...prev[name], education] }))
    }

    const {mutate,isPending} = useMutation({
        mutationFn: (data)=>createWorker(data),
        onSuccess:(res)=>{
            if(res.mission){
                ToastAndroid.show(res.message,1000)
                handleCence()
            }else{
                ToastAndroid.show(res.message,1000)
            }
        },
        onError:(err)=>{
            ToastAndroid.show(err.message,1000)
        }
    })
    

    function handleDeleteEdu(institute) {
        setData((prev) => ({ ...prev, educations: prev.educations.filter(edu => edu.institute !== institute) }))
    }

    function handleSave(){
        if(data.name && data.address && data.image && data.contacts.length > 0 && data.skils.length>0){
            if(advanceMode){
                if(data.educations.length>0 && data.resume){
                    mutate({...data,advanceMode})
                }else{

                    ToastAndroid.show("please fill the advanced required fields",1000)
                }
            }else{
                const datasSplit = {name:data.name,image:data.image,contacts:data.contacts,skils:data.skils,address:data.address}
                mutate({...datasSplit,advanceMode})
            }
        }else{
            ToastAndroid.show("please fill the required fields",1000)
        }
        console.log(data)
    }

    function handleCence(){
        setData({
            name: "",
            description: "",
            address: "",
            educations: [],
            skils: [],
            portpolio:"",
            contacts: [],
            resume:"",
            image:""
        })
    }


    function handleChange(fieldName,text){
        setData((prev)=>({...prev,[fieldName]:text}))
    }

    function handleDeleteSkil(name) {
        setData((prev) => ({ ...prev, skils: prev.skils.filter(skil => skil !== name) }))
    }
    function handleDeleteContact(name) {
        setData((prev) => ({ ...prev, contacts: prev.contacts.filter(contact => contact !== name) }))
    }


    return (
        <>
            <ProgressBarForTop isLoad={isPending} />
        
            <PageWrapper>
                <ScrollView showsVerticalScrollIndicator={false}>

                <Pressable onPress={() => pickImage("image", true, true)} style={{ width: "100%", height: 300, borderRadius: 10, position: "relative", borderWidth: data.image ? 0 : 1 }}>
                    {
                        data.image &&
                        <Image source={{ uri: `data:image/jpeg;base64,${data.image}` }} style={{ height: "100%", width: "100%", borderRadius: 10 }} />
                    }
                    {
                        data.image &&
                        <IconButton onPress={() => setData((prev)=>({...prev,image:""}))} icon={'delete'} style={{ position: "absolute", top: -15, right: -15 }} />
                    }
                    {
                        !data.image &&
                        <IconButton icon={"plus"} style={{ position: "absolute", width: "100%", height: "100%" }} />
                    }
                </Pressable>
                <View style={{ width: "100%", height: "auto", display: "flex", flexDirection: "column", gap: 4 }}>
                    <Pressable onPress={() => setAdvanceMode(!advanceMode)} style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                        <RadioButton onPress={() => setAdvanceMode(!advanceMode)} status={advanceMode ? "checked" : "unchecked"} />
                        <Text>Advance Mode</Text>
                    </Pressable>
                    <TextInput value={data.name} onChangeText={(text)=>handleChange('name',text)} label="নাম" mode='outlined' inputMode='text' />
                    <TextInput value={data.description} onChangeText={(text)=>handleChange('description',text)} label="বর্ননা" mode='outlined' inputMode='text' multiline numberOfLines={3} />
                    <TextInput value={data.address} onChangeText={(text)=>handleChange('address',text)} label="ঠিকানা" mode='outlined' inputMode='text' multiline numberOfLines={2} />
                    {
                        advanceMode &&
                        <TextInput value={data.portpolio} onChangeText={(text)=>handleChange('portpolio',text)} label="পোর্ট পোলিও লিঙ্ক" mode='outlined' inputMode='url'  multiline numberOfLines={2} />
                    }
                    {
                        data.skils.length > 0 && data.skils.map((skil, index) => (
                            <Pressable key={index} style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", borderWidth: 1, borderRadius: 10, padding: "2%", marginVertical: "2%" }}>
                                <Text style={{ width: "90%" }}>{skil}</Text>
                                <IconButton onPress={() => handleDeleteSkil(skil)} icon={'delete'} iconColor='red' style={{ width: "10%" }} />
                            </Pressable>
                            ))
                        }
                        <SkilsBox returnData={returnData} />
                    {
                        advanceMode && <>

                            <View>
                                {advanceMode && 
                                    data.educations.map((edu, index) => (<EducationShows edu={edu} handleDeleteEdu={handleDeleteEdu} key={index} />))
                                }
                            </View>

                            <EducationBox returnData={returnData} />
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
                    <Pressable onPress={() => pickImage("resume", false, false)} style={{ marginTop: 10, width: "100%", maxHeight: 700, display: "flex", justifyContent: "center", alignItems: "center", borderRadius: 10, overflow: "hidden", borderWidth: data.resume ? 0 : 1 }}>
                        {
                            data.resume && <Image source={{ uri: `data:image/jpeg;base64,${data.resume}` }} style={{ height: "100%", width: "100%", objectFit: "scale-down" }} />
                        }
                        {
                            !data.resume && <IconButton icon={'plus'} style={{ width: "100%", height: "100%" }} />
                        }
                    </Pressable>
                }
                <View style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <Button mode='outlined' onPress={handleCence} style={{ width: "49%", borderRadius: 10, marginVertical: 10 }}>পরিষ্কার করুন</Button>
                    <Button loading={isPending} disabled={isPending} mode='contained' onPress={handleSave} style={{ width: "49%", borderRadius: 10, marginVertical: 10 }}>সেভ করুন</Button>
                </View>
                </ScrollView>
            </PageWrapper>
        </>
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