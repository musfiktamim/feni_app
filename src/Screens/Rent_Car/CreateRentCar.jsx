import React, { useState } from 'react'
import { Alert, Image, Platform, ScrollView, ToastAndroid, View } from 'react-native'
import PageWrapper from '../../components/PageWrapper'
import { Button, IconButton, MD3Colors, ProgressBar, TextInput } from 'react-native-paper';
import * as ImagePicker from "expo-image-picker"
import { Picker } from '@react-native-picker/picker';
import { useMutation } from '@tanstack/react-query';
import { createRentCar } from '../../api/api';
import ProgressBarForTop from '../../components/ProgressBarForTop';

function CreateRentCar(props) {
    const [isLoad,setIsLoad] = useState(false)
    const [inData,setInData] = useState({
        image:'',
        name:"",
        contact:"",
        carCode:"",
        nidNo:"",
        sits:"",
        IsAc:"Non AC"
    })
    

    function handleCencel() {
        setInData({
            image:'',
            name:"",
            contact:"",
            carCode:"",
            nidNo:"",
            sits:"",
            IsAc:"Non AC"
        })
    }

    const {mutate,isError,error,isPending,isSuccess} = useMutation({
        mutationKey:['create-car'],
        mutationFn:(data)=>createRentCar(data),
        onSuccess:(data)=>{
            Alert.alert("success",data.message,[{text:"OK!",onPress:()=>setInData({
                image:'',
                name:"",
                contact:"",
                carCode:"",
                nidNo:"",
                sits:"",
                IsAc:"Non AC"
            })}])
            setInData({
                image:'',
                name:"",
                contact:"",
                carCode:"",
                nidNo:"",
                sits:"",
                IsAc:"Non AC"
            })
        },onError:(error)=>{
            Alert.alert("error",error.message)
            // console.log(error.message)
        }
    })


    function handleSave() {
        if (inData.name && inData.contact && inData.carCode && inData.nidNo && inData.IsAc && inData.sits && inData.image) {
            mutate(inData)
        } else {
            ToastAndroid.show("সব কয়টি ইনপুট পূর্ন করুণ", 200)
        }
    }


    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            allowsEditing:true,
            aspect:[3,4],
            quality: 1,
            base64:true
        });

        if (!result.canceled) {
            setInData((prev)=>({...prev,image:result.assets[0].base64}));
        }
    };

    function handleChangeText(fieldName,text){
        setInData((prev)=>({...prev,[fieldName]:text}))
    }

    return (
        <>
        
            {
                isPending &&
                    <ProgressBarForTop isLoad={true} />
            }
            <ScrollView >
                <View style={{ position: "relative",marginTop:10, width: 150, height: 150, borderWidth: 1, margin: "auto" }}>
                    {inData.image && <Image source={{ uri: `data:image/jpeg;base64,${inData.image}` }} style={{ width: "100%", height: "100%" }} />}
                    <IconButton icon={"camera"} style={{ position: "absolute", bottom: -25, borderWidth: 1, right: -25, backgroundColor: "gray" }} iconColor='white' onPress={pickImage} />
                </View>
                <View style={{ marginTop: 25, width: "100%", paddingHorizontal: 5, gap: 5 }}>
                    <TextInput value={inData.name} onChangeText={text => handleChangeText('name',text)} mode='outlined' label={'Name'} />
                    <TextInput value={inData.contact} onChangeText={text => handleChangeText('contact',text)} mode='outlined' keyboardType='phone-pad' label={'Contact'} />
                    <View style={{ width: "100%", display: "flex", flexDirection: "row" }}>
                        <TextInput value={inData.carCode} onChangeText={text => handleChangeText('carCode',text)} mode='outlined' style={{ width: "50%" }} label={'Car Code'} />

                        <Picker
                            placeholder='Type of Doctor'
                            selectedValue={inData.IsAc}
                            mode='dropdown'
                            onValueChange={(itemValue, itemIndex) =>
                                handleChangeText('IsAc',itemValue)
                            }
                            style={{ width: "50%" }}
                        >
                            <Picker.Item value={"AC"} label='AC' />
                            <Picker.Item value={"Non AC"} label='Non AC' />
                        </Picker>

                    </View>
                    <View style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                        <TextInput value={inData.nidNo} onChangeText={text => handleChangeText('nidNo',text)} mode='outlined' keyboardType='numeric' style={{ width: "73%" }} label='Nid No' />
                        <TextInput value={inData.sits} onChangeText={text => handleChangeText('sits',text)} mode='outlined' keyboardType='numeric' style={{ width: "25%" }} label='Sits' />
                    </View>

                    <View style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                        <Button onPress={handleCencel} mode='outlined' style={{ width: "49%", borderRadius: 10 }} >Cencel</Button>
                        <Button loading={isPending} disabled={isPending} onPress={handleSave} mode='contained' style={{ width: "49%", borderRadius: 10 }} >
                            Save
                        </Button>
                    </View>

                </View>
            </ScrollView>
        </>
    )
}

export default CreateRentCar