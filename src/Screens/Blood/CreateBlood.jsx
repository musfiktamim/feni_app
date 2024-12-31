import React, { useState } from 'react'
import { Image, ScrollView, View } from 'react-native'
import PageWrapper from '../../components/PageWrapper'
import { Button, IconButton, TextInput } from 'react-native-paper'
import * as ImagePicker from "expo-image-picker"

function CreateBlood(props) {
    const [image, setImage] = useState({})
    const [blood, setBlood] = useState("A+")

    const bloodGroups = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"]

    const [textingDatas, setTextingDatas] = useState(
        {
            name: "",
            himoglobin: "",
            contact: "",
            last: "",
            doned: "",
            remark: ""

        }
    )


    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });


        // console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0]);
        }
    };

    function handleCencel() {
        setImage({})
        setBlood("A+")
        setTextingDatas({
            name: "",
            himoglobin: "",
            contact: "",
            last: "",
            doned: "",
            remark: ""

        })
    }

    function handleTextChange(feildName, text) {
        setTextingDatas((prev) => ({ ...prev, [feildName]: text }))
    }

    return (
        <PageWrapper >
            <View style={{ position: "relative", width: 150, height: 150, borderWidth: 1, margin: "auto" }}>
                {image && <Image source={{ uri: image.uri }} style={{ width: "100%", height: "100%" }} />}
                <IconButton icon={"camera"} style={{ position: "absolute", bottom: -25, borderWidth: 1, right: -25, backgroundColor: "gray" }} iconColor='white' onPress={pickImage} />
            </View>

            <View style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: 30 }}>
                <View style={{ width: "95%", display: "flex", flexDirection: "row" }}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {
                            bloodGroups.map((item, index) => <Button key={index} onPress={() => setBlood(item)} mode={item === blood ? "contained" : 'outlined'} style={{ borderRadius: 10, marginLeft: 5 }} >{item}</Button>)
                        }
                    </ScrollView>
                </View>
                <TextInput onChangeText={text => handleTextChange("name", text)} value={textingDatas.name} style={{ width: "95%" }} mode='outlined' label={"Name"} />
                <TextInput onChangeText={text => handleTextChange("himoglobin", text)} value={textingDatas.himoglobin} style={{ width: "95%" }} mode='outlined' label={"Himoglobin"} />
                <TextInput onChangeText={text => handleTextChange("contact", text)} value={textingDatas.contact} style={{ width: "95%" }} mode='outlined' label={"Contact"} />
                <TextInput onChangeText={text => handleTextChange("last", text)} value={textingDatas.last} style={{ width: "95%" }} mode='outlined' label={"Last"} />
                <TextInput onChangeText={text => handleTextChange("doned", text)} value={textingDatas.doned} style={{ width: "95%" }} mode='outlined' label={"Doned"} keyboardType='numeric' />
                <TextInput onChangeText={text => handleTextChange("remark", text)} value={textingDatas.remark} style={{ width: "95%" }} mode='outlined' label={"Remark"} multiline={true} numberOfLines={3} />
            </View>
            <View style={{ width: "95%", margin: "auto", display: "flex", justifyContent: "space-between", flexDirection: "row", marginTop: 10 }}>
                <Button onPress={handleCencel} style={{ width: "49%", borderRadius: 10 }} mode='outlined'>Cencel</Button>
                <Button style={{ width: "49%", borderRadius: 10 }} mode='contained'>Save</Button>
            </View>
        </PageWrapper>
    )
}

export default CreateBlood