import React, { useState } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { Button, IconButton, TextInput } from 'react-native-paper'
import * as ImagePicker from "expo-image-picker"
import { TouchableOpacityComponent } from 'react-native'
import PageWrapper from '../../components/PageWrapper'

function CreateTourism(props) {
    const [image, setImage] = useState([])

    const [textingDatas, setTextingDatas] = useState(
        {
            title: "",
            location: "",
            naming: "",
            description: ""
        }
    )

    function handleTextChange(fieldName, text) {
        setTextingDatas((prev) => ({ ...prev, [fieldName]: text }))
    }

    function handleCencel() {
        setImage([]);
        setTextingDatas({
            title: "",
            location: "",
            naming: "",
            description: ""
        })
    }
    function handleSave() {
        const detaies = {
            ...textingDatas,
            images: [...image]
        }
    }


    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
            allowsMultipleSelection: true
        });


        if (!result.canceled) {
            setImage((prev) => prev ? [...result.assets, ...prev] : [...result.assets]);
        }
    };

    function handleCencelImages(fileNames) {
        const filtered = image.filter((item) => item.fileName != fileNames)
        setImage(filtered)
    }

    return (
        <PageWrapper >
            <View style={{ width: "100%", height: 200, marginTop: 5 }} >
                <ScrollView showsHorizontalScrollIndicator={false} horizontal style={{ flexGrow: 1, gap: 4, display: "flex", flexDirection: "row", paddingVertical: 2, paddingHorizontal: 2, paddingRight: 200 }}>
                    {
                        image && image.map((item, index) => <View key={index} style={{ height: "100%", width: 200, borderRadius: 10, marginLeft: 10, overflow: "hidden" }}>
                            <Image style={{ width: "100%", height: "100%" }} source={{ uri: item.uri }} />
                            <IconButton onPress={() => handleCencelImages(item.fileName)} icon={"delete"} style={{ position: "absolute", right: 0, top: 0 }} iconColor='white' />
                        </View>)
                    }
                    <TouchableOpacity style={{ width: 200, height: "100%", borderRadius: 10, borderWidth: 3 }} onPress={pickImage}>
                        <View style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <IconButton icon={'file-multiple-outline'} size={50}></IconButton>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </View>
            <TextInput onChangeText={text => handleTextChange("title", text)} value={textingDatas.title} label='টাইটেল' mode='outlined' />
            <TextInput onChangeText={text => handleTextChange("location", text)} value={textingDatas.location} label='অবস্থান' mode='outlined' />
            <TextInput onChangeText={text => handleTextChange("naming", text)} value={textingDatas.naming} label='নাম করণ' mode='outlined' />
            <TextInput onChangeText={text => handleTextChange("description", text)} value={textingDatas.description} label='ডিস্ক্রিপশন' mode='outlined' />
            <View style={{ width: "95%", margin: "auto" }}>
                <Button onPress={handleSave} style={{ width: "100%", borderRadius: 10, marginTop: 5 }} mode='contained'>সেভ করুন</Button>
                <Button onPress={handleCencel} style={{ width: "100%", borderRadius: 10, marginTop: 5 }} mode='outlined'>বাতিল করুন</Button>
            </View>
        </PageWrapper >
    )
}

export default CreateTourism