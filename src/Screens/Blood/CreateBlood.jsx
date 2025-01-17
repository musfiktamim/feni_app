import React, { useEffect, useState } from 'react'
import { Alert, Image, ScrollView, View } from 'react-native'
import PageWrapper from '../../components/PageWrapper'
import { Button, IconButton, TextInput } from 'react-native-paper'
import * as ImagePicker from "expo-image-picker"
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

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
            name: "",
            himoglobin: "",
            contact: "",
            last: "",
            doned: "",
            remark: "",
            blood_group: "A+",
            image: "",
        })
    }

    async function handleSave(e) {
        setDisableSaveButton(true)
        const { data } = await axios.post("http://192.168.10.195:9000/blood-create", bloodData, { headers: { Authorization: await AsyncStorage.getItem("token") } })
        if(!data.mission){
            Alert.alert("wrong",data.message)
        }else{
            await Alert.alert("OK!",data.message)
            setBloodData({
                name: "",
                himoglobin: "",
                contact: "",
                last: "",
                doned: "",
                remark: "",
                blood_group: "A+",
                image: "",
            })
        }
        setDisableSaveButton(false)
    }


    function handleTextChange(feildName, text) {
        setBloodData((prev) => ({ ...prev, [feildName]: text }))
    }

    return (
        <PageWrapper >
            <View style={{ position: "relative", width: 150, height: 150, borderWidth: 1, margin: "auto" }}>
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
                <TextInput onChangeText={text => handleTextChange("donner_name", text)} value={bloodData.name} style={{ width: "95%" }} mode='outlined' label={"Name"} />
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
                <Button disabled={disableSaveButton?true:false} onPress={handleSave} style={{ width: "49%", borderRadius: 10 }} mode='contained'>Save</Button>
            </View>
        </PageWrapper>
    )
}

export default CreateBlood