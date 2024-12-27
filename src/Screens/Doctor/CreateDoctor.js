import React, { useState } from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import { Button, IconButton, Modal, Portal, TextInput } from 'react-native-paper'
import * as ImagePicker from "expo-image-picker"
import { Picker } from '@react-native-picker/picker';
function CreateDoctor() {
    const [image, setImage] = useState(null);
    const [openChemberMode, setOpenChemberMode] = useState(false)
    const [selectedLanguage, setSelectedLanguage] = useState();
    console.log(selectedLanguage)
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


    const [name, setName] = useState("")
    const [education, setEducation] = useState("")
    const [presentworkplace, setPresentworkplace] = useState("")
    const [treatment, setTreatment] = useState("")
    const [description, setDescription] = useState("")


    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });


        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    return (
        <ScrollView>
            <View style={{ marginTop: 20, paddingHorizontal: 10 }}>
                <View style={{ margin: "auto", position: "relative", marginBottom: 10 }}>
                    <View style={{ width: 200, height: 200, borderWidth: 1, overflow: 'hidden', borderColor: "black", borderRadius: "100%" }}>
                        {
                            image && <Image source={{ uri: image }} style={{ width: "100%", height: "100%" }} />
                        }
                    </View>
                    <IconButton style={{ position: "absolute", bottom: 0, right: 0, backgroundColor: "pink" }} iconColor='white' size={40} icon={"camera"} onPress={pickImage}></IconButton>
                </View>
                <TextInput value={name} onChangeText={text => setName(text)} key={'name'} mode='outlined' label={"ডাক্টারের নাম"} cursorColor='black' />
                <Picker
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
                <TextInput value={education} onChangeText={text => setEducation(text)} label={'শিক্ষা'} mode='outlined' cursorColor='black' multiline={true} numberOfLines={6} />
                <TextInput value={presentworkplace} onChangeText={text => setPresentworkplace(text)} label={'ভর্তমান কর্মসংস্থান'} mode='outlined' cursorColor='black' />
                <TextInput value={treatment} onChangeText={text => setTreatment(text)} mode='outlined' label={'যে যে রোগের চিকিৎসা করেন'} multiline={true} numberOfLines={6} ></TextInput>
                <Button onPress={() => setOpenChemberMode(true)} mode='outlined' style={{ borderRadius: 10, marginTop: 4 }}>চেম্বার</Button>
                <TextInput value={description} onChangeText={text => setDescription(text)} label={'ডিস্ক্রিপশন'} mode='outlined' cursorColor='black' multiline={true} numberOfLines={6} />
                <Portal>
                    <Modal visible={openChemberMode} onDismiss={() => setOpenChemberMode(false)} contentContainerStyle={{ backgroundColor: 'white', borderRadius: 15 }} style={{ padding: 20, }} >
                        <View style={{ paddingHorizontal: 10, paddingVertical: 10 }}>
                            <TextInput mode='outlined' label={'চেম্বারের নাম'}></TextInput>
                            <TextInput mode='outlined' label={'কি কি বারে'}></TextInput>
                            <TextInput mode='outlined' label={'কয়টা থেকে কয়টা'}></TextInput>
                            <TextInput mode='outlined' label={'ফোন নাম্বার'}></TextInput>
                            <View style={{ display: "flex", marginTop: 10, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                                <Button mode='outlined' onPress={() => setOpenChemberMode(false)} style={{ width: "49%", borderRadius: 10 }}>সেভ করুণ</Button>
                                <Button mode='contained' style={{ width: "49%", borderRadius: 10 }}>বাতিল করুণ</Button>
                            </View>
                        </View>
                    </Modal>
                </Portal>

            </View>
        </ScrollView>
    )
}

export default CreateDoctor