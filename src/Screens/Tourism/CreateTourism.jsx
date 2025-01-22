import React, { useState } from 'react'
import { Image, ScrollView, Text, ToastAndroid, TouchableOpacity, View } from 'react-native'
import { Button, IconButton, TextInput } from 'react-native-paper'
import * as ImagePicker from "expo-image-picker"
import { TouchableOpacityComponent } from 'react-native'
import PageWrapper from '../../components/PageWrapper'
import { useMutation } from '@tanstack/react-query'
import { createTourism } from '../../api/api'
import ProgressBarForTop from '../../components/ProgressBarForTop'

function CreateTourism(props) {
    const [tourismData, setTourismData] = useState(
        {
            title: "",
            location: "",
            naming: "",
            description: "",
            image:[]
        }
    )

    function handleTextChange(fieldName, text) {
        setTourismData((prev) => ({ ...prev, [fieldName]: text }))
    }

    function handleCencel() {
        setTourismData({
            title: "",
            location: "",
            naming: "",
            description: "",
            image:[]
            
        })
    }
    const {mutate,isPending,data} = useMutation({
        mutationFn:(data)=> createTourism(data),
        onSuccess:(data)=>{
            ToastAndroid.show(data,1000)
            handleCencel()
        }
    })
    function handleSave() {
        const {description,image,location,naming,title} = tourismData
        if(image.length>0 && title && naming && location && description){
            mutate(tourismData)
        }else{
            ToastAndroid.show("please field all required",1000)
        }
        // console.log(tourismData)
    }


    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
            allowsMultipleSelection: true,
            base64:true
        });


        if (!result.canceled) {
            const newImages = result?.assets.map((asets)=>asets.base64).flat()
            // setTourismData((prev) =>( {...prev ,image: [ prev.image ? [...newImages, ...prev] : [...newImages]]}));
            setTourismData((prev)=>({...prev,image: prev.image.length!=0?[...newImages,...prev.image]:[...newImages]}))
        }
    };

    function handleCencelImages(itemID) {
        const filtered = tourismData.image.filter((item) => item != itemID)
        setTourismData((prev)=>({...prev, image:filtered}))
    }

    return (
        <>
        <ProgressBarForTop isLoad={isPending} />
            <PageWrapper >
                <View style={{ width: "100%", height: 200, marginTop: 5 }} >
                    <ScrollView showsHorizontalScrollIndicator={false} horizontal style={{ flexGrow: 1, gap: 4, display: "flex", flexDirection: "row", paddingVertical: 2, paddingHorizontal: 2, paddingRight: 200 }}>
                        {
                            tourismData.image && tourismData.image.map((item, index) => <View key={index} style={{ height: "100%", width: 200, borderRadius: 10, marginLeft: 10, overflow: "hidden" }}>
                                <Image style={{ width: "100%", height: "100%" }} source={{ uri: `data:image/jpeg;base64,${item}` }} />
                                <IconButton onPress={() => handleCencelImages(item)} icon={"delete"} style={{ position: "absolute", right: 0, top: 0 }} iconColor='white' />
                            </View>)
                        }
                        <TouchableOpacity style={{ width: 200, height: "100%", borderRadius: 10, borderWidth: 3 }} onPress={pickImage}>
                            <View style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <IconButton icon={'file-multiple-outline'} size={50}></IconButton>
                            </View>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
                <TextInput onChangeText={text => handleTextChange("title", text)} value={tourismData.title} label='টাইটেল' mode='outlined' />
                <TextInput onChangeText={text => handleTextChange("location", text)} value={tourismData.location} label='অবস্থান' mode='outlined' />
                <TextInput onChangeText={text => handleTextChange("naming", text)} value={tourismData.naming} label='নাম করণ' mode='outlined' />
                <TextInput onChangeText={text => handleTextChange("description", text)} value={tourismData.description} label='ডিস্ক্রিপশন' mode='outlined' />
                <View style={{ width: "95%",marginHorizontal:"auto",marginTop:5}}>
                    <Button loading={isPending} disabled={isPending} onPress={handleSave} style={{ width: "100%", borderRadius: 10, marginTop: 5 }} mode='contained'>সেভ করুন</Button>
                    <Button onPress={handleCencel} style={{ width: "100%", borderRadius: 10, marginTop: 5 }} mode='outlined'>বাতিল করুন</Button>
                </View>
            </PageWrapper >
        </>
    )
}

export default CreateTourism