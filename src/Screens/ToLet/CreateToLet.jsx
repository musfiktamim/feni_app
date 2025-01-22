import React, { useState } from 'react'
import { Alert, Image, Pressable, ScrollView, StyleSheet, Text, ToastAndroid, View } from 'react-native'
import PageWrapper from '../../components/PageWrapper'
import { Button, Checkbox, Icon, IconButton, MD3Colors, ProgressBar, RadioButton, TextInput } from 'react-native-paper'
import * as ImagePicker from "expo-image-picker"
import ProgressBarForTop from '../../components/ProgressBarForTop'
import { useMutation } from '@tanstack/react-query'
import { createToLet } from '../../api/api'

function CreateToLet(props) {
    // const [image, setImage] = useState([])

    const [shows,setShows] = useState({benifits:false})

    const [toletData, setToletData] = useState({
        image:[],
        name: "",
        contact: "",
        rooms: "",
        roomsHeight: "",
        roomsWidth: "",
        peopleType: "",
        location: "",
        description: "",
        extraBenifits:[],
        homeInfoData:{ "cook": false, 'drowing': false, "toylet": false, "coridor": false },
        price:{daily:"",monthly:""}
    })
    const [pricing, setPricing] = useState("daily")

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
            setToletData((prev)=>({...prev,image:[...prev.image,...result.assets.map(item=>item.base64)]}))
        }
    };

    function handleCheckingExtraData(data) {
        setToletData((prev) => ({ ...prev, homeInfoData:{...prev.homeInfoData,[data]:!prev.homeInfoData[data]} }))
    }

    function handleTextChange(fieldName, text) {
        setToletData((prev) => ({ ...prev, [fieldName]: text }))
    }

    function handlePricingBoxes(fieldName, text) {
        setToletData((prev) => ({ ...prev,price:{...prev.price,[fieldName]: text} }))
    }
    // console.log(image)



    function handleCencelImages(item) {
        const filtered = toletData.image.filter((items) => items != item)
        setToletData((prev)=>({...prev,image:filtered}));
    }

    function handleCencel() {
        
        setToletData({
            image:[],
            name: "",
            contact: "",
            rooms: "",
            roomsHeight: "",
            roomsWidth: "",
            peopleType: "",
            location: "",
            description: "",
            extraBenifits:[],
            homeInfoData:{ "cook": false, 'drowing': false, "toylet": false, "coridor": false },
            price:{daily:"",monthly:""}
        });
        setPricing("daily")
    }

    const [extraBenifit,setExtraBenifit] = useState("")

    const {mutate,isPending} = useMutation({
        mutationFn:(data)=>createToLet(data),
        onSuccess:(res)=>{
            ToastAndroid.show(res.message,300)
            handleCencel()
        },
        onError:(err)=>{
            ToastAndroid.show(err.message,300)
        }
    })
    function handleSave() {
        const {name,contact,description,extraBenifits,homeInfoData,image,location,peopleType,price ,rooms,roomsHeight,roomsWidth} = toletData
        const {daily,monthly} = price
        if(name && contact && location && rooms && roomsHeight && roomsWidth && image.length != 0 && price )
        {
            mutate({...toletData,pricing:pricing})
        }
        else
        {
            ToastAndroid.show("please field require fields",300)
        }
    }

    return (
        < >
            {
                <ProgressBarForTop isLoad={isPending} />
            }
            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={styles.imageInputContainer}>
                    <ScrollView showsHorizontalScrollIndicator={false} horizontal style={{ flex: 1 }}>
                        {
                            toletData?.image && toletData?.image.map((item, index) => <View key={index} style={styles.imageShowContainer}>
                                <Image source={{ uri: `data:image/jpeg;base64,${item}` }} style={{ height: "100%", width: "100%" }} />
                                <IconButton onPress={() => handleCencelImages(item)} icon={"delete"} style={{ position: "absolute", right: 0, top: 0 }} iconColor='white' />
                            </View>)
                        }
                        <Pressable onPress={pickImage} style={styles.imageInputBox}>
                            <Icon source={'file-document-multiple-outline'} size={50} />
                            <IconButton onPress={()=>Alert.alert("info", "আপনি যেই পিকচারটি প্রথম সিলেক্ট করবেন সেটিই পোষ্টার হিসেবে ব্যাবহৃত হবে!")} icon={"information"} iconColor='gray' style={styles.informationIconInInpuButton} />
                        </Pressable>
                    </ScrollView>
                </View >
                <View style={styles.textsInputContainer}>
                    <TextInput value={toletData.name} onChangeText={text => handleTextChange("name", text)} mode='outlined' label={"ঘরের নাম"} />
                    <TextInput value={toletData.contact} onChangeText={text => handleTextChange("contact", text)} mode='outlined' label={"যোগাযোগ"} />
                    <View style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <TextInput value={toletData.rooms} onChangeText={text => handleTextChange("rooms", text)} mode='outlined' label={"রুম কয়টি"} style={{ width: "48%" }} />
                        <View style={{ width: "48%", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                            <TextInput value={toletData.roomsWidth} onChangeText={text => handleTextChange("roomsWidth", text)} mode='outlined' label={"দৈর্ঘ্য"} style={{ width: "49%" }} />
                            <TextInput value={toletData.roomsHeight} onChangeText={text => handleTextChange("roomsHeight", text)} mode='outlined' label={"প্রস্থ"} style={{ width: "49%" }} />
                        </View>
                    </View>
                    <View style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                                <Checkbox onPress={() => handleCheckingExtraData("cook")} status={toletData.homeInfoData.cook ? "checked" : "unchecked"} />
                                <Text>রান্না ঘর আচে?</Text>
                            </View>
                            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                                <Checkbox onPress={() => handleCheckingExtraData("drowing")} status={toletData.homeInfoData.drowing ? "checked" : "unchecked"} />
                                <Text>ড্রয়িং রুম আছে?</Text>
                            </View>
                            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                                <Checkbox onPress={() => handleCheckingExtraData("toylet")} status={toletData.homeInfoData.toylet ? "checked" : "unchecked"} />
                                <Text>পায়খানা আছে?</Text>
                            </View>
                            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                                <Checkbox onPress={() => handleCheckingExtraData("coridor")} status={toletData.homeInfoData.coridor ? "checked" : "unchecked"} />
                                <Text>বারান্ধা আছে?</Text>
                            </View>
                        </ScrollView>
                    </View>

                    <Pressable onPress={() => setShows((prev) => ({ ...prev, benifits: !prev.benifits }))} style={{ width: "100%", display: "flex", flexDirection: "row", position: "relative", alignItems: "center" }}>
                        <View style={{ width: "100%", position: "absolute", borderWidth: 0.2 }}></View>
                        <Text style={{ backgroundColor: "white" }}>Extra Benifits {toletData.extraBenifits.length} <Icon source={shows.benifits ? "arrow-up" : "arrow-down"} /> </Text>
                    </Pressable>

                    {
                        shows.benifits && toletData.extraBenifits.map((item)=>(
                            <Pressable onPress={()=>{
                                const filtered = toletData.extraBenifits.filter((ins)=>ins!=item)
                                setToletData((prev)=>({...prev,extraBenifits:filtered}))
                            }} style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                                <View style={{display:"flex",flexDirection:"row",alignItems:"center",width:"90%"}}>
                                    <Icon source={'disc'} />  <Text style={{fontSize:17,paddingLeft:5,overflow:"hidden"}}>{item}</Text>
                                </View>
                                <IconButton onPress={()=>{
                                    const filtered = toletData.extraBenifits.filter((ins)=>ins!=item)
                                    setToletData((prev)=>({...prev,extraBenifits:filtered}))
                                }
                                } icon={'delete'} />
                            </Pressable>
                        ))
                    }
                    <View style={{width:"100%",height:50,display:"flex",flexDirection:"row",alignItems:"center",justifyContent:'space-between'}}>
                        <TextInput mode='outlined' onChangeText={text=>setExtraBenifit(text)} value={extraBenifit} style={{width:"88%",height:"90%"}} label={'extra benifits'} />
                        <IconButton onPress={()=>{
                            setToletData((prev)=>({...prev,extraBenifits:[...prev.extraBenifits,extraBenifit]}))
                            setExtraBenifit("")
                        }} icon={'plus'} style={{borderWidth:0.5,borderRadius:2,height:"90%",width:'12%'}} />
                    </View>
                    
                    <TextInput value={toletData.peopleType} onChangeText={text => handleTextChange("peopleType", text)} mode='outlined' label={"কেমন মানুষকে ভাড়া দিতে চান"} />
                    <TextInput value={toletData.location} onChangeText={text => handleTextChange("location", text)} mode='outlined' label={"কোন স্থানে"} />
                    <TextInput value={toletData.description} onChangeText={text => handleTextChange("description", text)} mode='outlined' label={"বর্ননা"} multiline={true} numberOfLines={3} />
                    <Text>ভাড়া যেভাবে দিতে চান</Text>
                    <View style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <ScrollView horizontal showsHorizontaleScrollIndicator={false}>
                            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                                <RadioButton onPress={() => setPricing("daily")} status={pricing == "daily" ? "checked" : "unchecked"} />
                                <Text>দৈনিক</Text>
                            </View>
                            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                                <RadioButton onPress={() => setPricing("monthly")} status={pricing == "monthly" ? "checked" : "unchecked"} />
                                <Text>মাসিক</Text>
                            </View>
                            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                                <RadioButton onPress={() => setPricing("both")} status={pricing == "both" ? "checked" : "unchecked"} />
                                <Text>উভয়</Text>
                            </View>
                        </ScrollView>
                    </View>
                    <View>

                        {
                            pricing == "daily" || pricing == "both" ?
                                <TextInput label={'দৈনিক ভাড়া'} value={toletData.price.daily} onChangeText={text => handlePricingBoxes("daily", text)} mode='outlined' /> : null
                        }
                        {
                            pricing == "monthly" || pricing == "both" ?
                                <TextInput label={'মাসিক ভাড়া'} mode='outlined' value={toletData.price.monthly} onChangeText={text => handlePricingBoxes("monthly", text)} /> : null
                        }
                    </View>
                    <View style={{ width: "95%", margin: "auto" }}>
                        <Button loading={isPending} disabled={isPending} onPress={handleSave} style={{ width: "100%", borderRadius: 10, marginTop: 5 }} mode='contained'>সেভ করুন</Button>
                        <Button onPress={handleCencel} style={{ width: "100%", borderRadius: 10, marginTop: 5 }} mode='outlined'>বাতিল করুন</Button>
                    </View>
                </View>
            </ScrollView>
        </ >
    )
}

export default CreateToLet


const styles = StyleSheet.create({
    imageInputContainer: {
        width: "100%",
        height: 200,
        paddingVertical: 5,
        paddingHorizontal: 5,
    },
    imageInputBox: {
        width: 180,
        height: '100%',
        borderWidth: 1,
        marginLeft: 4,
        borderRadius: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
    },
    informationIconInInpuButton: {
        position: "absolute",
        right: 0,
        top: 0
    },
    imageShowContainer: {
        width: 180,
        height: '100%',
        borderRadius: 10,
        marginLeft: 4,
        overflow: "hidden",
        position: "relative"
    },
    textsInputContainer: {
        width: "95%",
        margin: "auto",
        marginTop: 10,
        display: "flex",
        flexDirection: "column",
        gap: 5
    }
})