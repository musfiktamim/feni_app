import React, { useEffect, useState } from 'react'
import { Alert, Image, ScrollView, ToastAndroid, View } from 'react-native'
import PageWrapper from '../../components/PageWrapper'
import { Button, IconButton, MD3Colors, ProgressBar, TextInput } from 'react-native-paper'
import * as ImagePicker from "expo-image-picker"
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useMutation } from '@tanstack/react-query'
import { createBlood } from '../../api/api'
import ProgressBarForTop from '../../components/ProgressBarForTop'

function CreateBlood(props) {
    const [blood, setBlood] = useState("A+")
    const [disableSaveButton,setDisableSaveButton] = useState(false)

    const bloodGroups = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"]

    const [bloodData, setBloodData] = useState(
        {
            image: "",
            donner_name: "",
            contact: "",
            date_of_birth: "",
            height: "",
            Weight: "",
            blood_group: "A+",
            hemoglobin: "",
            last: "",
            doned: "",
            description: "",
            remark: "",
        }
    )


    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            base64: true,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });


        // console.log(result);

        if (!result.canceled) {
            setBloodData((prev) => ({ ...prev, image: result.assets[0].base64 }));
        }
    };

    function handleCencel() {
        setBloodData({
            image: "",
            donner_name: "",
            contact: "",
            date_of_birth: "",
            height: "",
            Weight: "",
            blood_group: "A+",
            hemoglobin: "",
            last: "",
            doned: "",
            description: "",
            remark: "",
        })
    }

    const {mutate,isPending,isSuccess,isError,error} = useMutation({
        mutationFn:(data)=>createBlood(data),
        onSuccess:(res)=>{
            if(res.mission){
                ToastAndroid.show(res.message,1000)
                handleCencel()
                
            }else{
                ToastAndroid.show(res.message,1000)
            }
        },
        onError:(error)=>{
            ToastAndroid.show(error.message,100)
        },
    })

    async function handleSave(e) {

        mutate(bloodData)
        // if(bloodData.donner_name && bloodData.contact && bloodData.blood_group && bloodData.image){
        // }else{
        //     ToastAndroid.showWithGravityAndOffset("flz filed all fileds",1000,1000,100,100)
            
        // }
    }


    function handleTextChange(feildName, text) {
        setBloodData((prev) => ({ ...prev, [feildName]: text }))
    }

    return (
        <>
        
            {
                isPending &&
                <ProgressBarForTop isLoad={true} />
            }
        <ScrollView showsVerticalScrollIndicator={false} >
            <View style={{ position: "relative", marginTop:10,width: 150, height: 150, borderWidth: 1, margin: "auto" }}>
                {bloodData.image && <Image source={{ uri: `data:image/jpeg;base64,${bloodData.image}` }} style={{ width: "100%", height: "100%" }} />}
                <IconButton icon={"camera"} style={{ position: "absolute", bottom: -25, borderWidth: 1, right: -25, backgroundColor: "gray" }} iconColor='white' onPress={pickImage} />
            </View>
            <View style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: 30 }}>
                <View style={{ width: "95%", display: "flex", flexDirection: "row" }}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {
                            bloodGroups.map((item, index) => <Button key={index} onPress={() => setBloodData((prev) => ({ ...prev, blood_group: item }))} mode={item === bloodData.blood_group ? "contained" : 'outlined'} style={{ borderRadius: 10, marginLeft: 5 }} >{item}</Button>)
                        }
                    </ScrollView>
                </View>
                

               
                <TextInput onChangeText={text => handleTextChange("donner_name", text)} value={bloodData.donner_name} style={{ width: "95%" }} mode='outlined' label={"Name"} />
                <TextInput onChangeText={text => handleTextChange("date_of_birth", text)} value={bloodData.date_of_birth} style={{ width: "95%" }} mode='outlined' label={"day-month-year"} />
                <TextInput onChangeText={text => handleTextChange("contact", text)} value={bloodData.contact} style={{ width: "95%" }} mode='outlined' label={"Contact"} />
                <TextInput onChangeText={text => handleTextChange("hemoglobin", text)} value={bloodData.hemoglobin} style={{ width: "95%" }} mode='outlined' label={"Himoglobin"} />
                <TextInput onChangeText={text => handleTextChange("last", text)} value={bloodData.last} style={{ width: "95%" }} mode='outlined' label={"Last"} />
                <TextInput onChangeText={text => handleTextChange("doned", text)} value={bloodData.doned} style={{ width: "95%" }} mode='outlined' label={"Doned"} keyboardType='numeric' />
                <View style={{ width: "95%", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    <TextInput onChangeText={text => handleTextChange("height", text)} value={bloodData.height} style={{ width: "48%" }} mode='outlined' label={"height"} />
                    <TextInput onChangeText={text => handleTextChange("Weight", text)} value={bloodData.Weight} style={{ width: "48%" }} mode='outlined' label={"weight"} />
                </View>
                <TextInput onChangeText={text => handleTextChange("description", text)} value={bloodData.description} style={{ width: "95%" }} mode='outlined' label={"description"} multiline={true} numberOfLines={3} />
                <TextInput onChangeText={text => handleTextChange("remark", text)} value={bloodData.remark} style={{ width: "95%" }} mode='outlined' label={"Remark"} multiline={true} numberOfLines={3} />
            </View>
            <View style={{ width: "95%", margin: "auto", display: "flex", justifyContent: "space-between", flexDirection: "row", marginTop: 10 }}>
                <Button onPress={handleCencel} style={{ width: "49%", borderRadius: 10 }} mode='outlined'>Cencel</Button>
                <Button loading={isPending} disabled={isPending} onPress={handleSave} style={{ width: "49%", borderRadius: 10 }} mode='contained'>Save</Button>
            </View>
        </ScrollView>
        </>
    )
}

export default CreateBlood