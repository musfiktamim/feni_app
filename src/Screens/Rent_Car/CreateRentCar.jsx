import React, { useState } from 'react'
import { Alert, Image, Platform, ToastAndroid, View } from 'react-native'
import PageWrapper from '../../components/PageWrapper'
import { Button, IconButton, TextInput } from 'react-native-paper';
import * as ImagePicker from "expo-image-picker"
import { Picker } from '@react-native-picker/picker';

function CreateRentCar(props) {

    const [image, setImage] = useState({})
    const [name, setName] = useState("")
    const [contact, setContact] = useState("")
    const [carCode, setCarCode] = useState("")
    const [nidNo, setNidNo] = useState("")
    const [sits, setSits] = useState("")

    const [acNonAc, setAcNonAc] = useState("Non AC")

    function handleCencel() {
        console.log("hello")
        setName("")
        setContact("")
        setCarCode("")
        setAcNonAc("Non AC")
        setNidNo("")
        setSits("")
        setImage({})
    }

    function handleSave() {
        if (name && contact && carCode && nidNo && acNonAc && sits && image.uri) {

            ToastAndroid.show("সম্পর্ন", 200)
        } else {

            ToastAndroid.show("সব কয়টি ইনপুট পূর্ন করুণ", 200)
        }
    }


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


    return (
        <PageWrapper >

            <View style={{ position: "relative", width: 150, height: 150, borderWidth: 1, margin: "auto" }}>
                {image && <Image source={{ uri: image.uri }} style={{ width: "100%", height: "100%" }} />}
                <IconButton icon={"camera"} style={{ position: "absolute", bottom: -25, borderWidth: 1, right: -25, backgroundColor: "gray" }} iconColor='white' onPress={pickImage} />
            </View>
            <View style={{ marginTop: 25, width: "100%", paddingHorizontal: 5, gap: 5 }}>
                <TextInput value={name} onChangeText={text => setName(text)} mode='outlined' label={'Name'} />
                <TextInput value={contact} onChangeText={text => setContact(text)} mode='outlined' keyboardType='phone-pad' label={'Contact'} />
                <View style={{ width: "100%", display: "flex", flexDirection: "row" }}>
                    <TextInput value={carCode} onChangeText={text => setCarCode(text)} mode='outlined' style={{ width: "50%" }} label={'Car Code'} />

                    <Picker
                        placeholder='Type of Doctor'
                        selectedValue={acNonAc}

                        mode='dropdown'
                        onValueChange={(itemValue, itemIndex) =>
                            setAcNonAc(itemValue)
                        }
                        style={{ width: "50%" }}
                    >
                        <Picker.Item value={"AC"} label='AC' />
                        <Picker.Item value={"Non AC"} label='Non AC' />
                    </Picker>

                </View>
                <View style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                    <TextInput value={nidNo} onChangeText={text => setNidNo(text)} mode='outlined' keyboardType='numeric' style={{ width: "73%" }} label='Nid No' />
                    <TextInput value={sits} onChangeText={text => setSits(text)} mode='outlined' keyboardType='numeric' style={{ width: "25%" }} label='Sits' />
                </View>

                <View style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                    <Button onPress={handleCencel} mode='outlined' style={{ width: "49%", borderRadius: 10 }} >Cencel</Button>
                    <Button onPress={handleSave} mode='contained' style={{ width: "49%", borderRadius: 10 }} >Save</Button>
                </View>

            </View>
        </PageWrapper>
    )
}

export default CreateRentCar