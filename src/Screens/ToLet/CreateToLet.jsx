import React, { useState } from 'react'
import { Alert, Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import PageWrapper from '../../components/PageWrapper'
import { Button, Checkbox, Icon, IconButton, RadioButton, TextInput } from 'react-native-paper'
import * as ImagePicker from "expo-image-picker"

function CreateToLet(props) {
    const [image, setImage] = useState([])

    const [textingDatas, setTextingDatas] = useState({
        name: "",
        contact: "",
        rooms: "",
        roomsHeight: "",
        roomsWidth: "",
        peopleType: "",
        location: "",
        description: "",
    })

    const [homeExtra, setHomeExtra] = useState({ "cook": false, 'drowing': false, "toylet": false, "coridor": false })
    const [pricing, setPricing] = useState("daily")
    const [price, setPrice] = useState({ daily: "", monthly: "" })

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
            setImage((prev) => prev ? [...prev, ...result.assets] : [...result.assets]);
        }
    };

    function handleInfo() {
        Alert.alert("info", "আপনি যেই পিকচারটি প্রথম সিলেক্ট করবেন সেটিই পোষ্টার হিসেবে ব্যাবহৃত হবে!")
    }

    function handleCheckingExtraData(data) {
        setHomeExtra((prev) => ({ ...prev, [data]: !homeExtra[data] }))
    }

    function handleTextChange(fieldName, text) {
        setTextingDatas((prev) => ({ ...prev, [fieldName]: text }))
    }

    function handlePricingBoxes(fieldName, text) {
        setPrice((prev) => ({ ...prev, [fieldName]: text }))
    }
    console.log(image)

    function handleSave() {

        const Detailes = {
            ...textingDatas,
            ...homeExtra,
            ...price,
            images: [...image]
        }
        console.log(Detailes)
    }

    function handleCencelImages(fileNames) {
        const filtered = image.filter((item) => item.fileName != fileNames)
        setImage(filtered);
    }

    function handleCencel() {
        setImage([]);
        setTextingDatas({
            name: "",
            contact: "",
            rooms: "",
            roomsHeight: "",
            roomsWidth: "",
            peopleType: "",
            location: "",
            description: "",
        });
        setHomeExtra({ "cook": false, 'drowing': false, "toylet": false, "coridor": false });
        setPrice({ daily: "", monthly: "" });
        setPricing("daily")
    }

    return (
        <PageWrapper >
            <View style={styles.imageInputContainer}>
                <ScrollView showsHorizontalScrollIndicator={false} horizontal style={{ flex: 1 }}>
                    {
                        image && image.map((item, index) => <View key={index} style={styles.imageShowContainer}>
                            <Image source={{ uri: item.uri }} style={{ height: "100%", width: "100%" }} />
                            <IconButton onPress={() => handleCencelImages(item.fileName)} icon={"delete"} style={{ position: "absolute", right: 0, top: 0 }} iconColor='white' />
                        </View>)
                    }
                    <Pressable onPress={pickImage} style={styles.imageInputBox}>
                        <Icon source={'file-document-multiple-outline'} size={50} />
                        <IconButton onPress={handleInfo} icon={"information"} iconColor='gray' style={styles.informationIconInInpuButton} />
                    </Pressable>
                </ScrollView>
            </View >
            <View style={styles.textsInputContainer}>
                <TextInput value={textingDatas.name} onChangeText={text => handleTextChange("name", text)} mode='outlined' label={"ঘরের নাম"} />
                <TextInput value={textingDatas.contact} onChangeText={text => handleTextChange("contact", text)} mode='outlined' label={"যোগাযোগ"} />
                <View style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <TextInput value={textingDatas.rooms} onChangeText={text => handleTextChange("rooms", text)} mode='outlined' label={"রুম কয়টি"} style={{ width: "48%" }} />
                    <View style={{ width: "48%", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <TextInput value={textingDatas.roomsWidth} onChangeText={text => handleTextChange("roomsWidth", text)} mode='outlined' label={"দৈর্ঘ্য"} style={{ width: "49%" }} />
                        <TextInput value={textingDatas.roomsHeight} onChangeText={text => handleTextChange("roomsHeight", text)} mode='outlined' label={"প্রস্থ"} style={{ width: "49%" }} />
                    </View>
                </View>
                <View style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                            <Checkbox onPress={() => handleCheckingExtraData("cook")} status={homeExtra.cook ? "checked" : "unchecked"} />
                            <Text>রান্না ঘর আচে?</Text>
                        </View>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                            <Checkbox onPress={() => handleCheckingExtraData("drowing")} status={homeExtra.drowing ? "checked" : "unchecked"} />
                            <Text>ড্রয়িং রুম আছে?</Text>
                        </View>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                            <Checkbox onPress={() => handleCheckingExtraData("toylet")} status={homeExtra.toylet ? "checked" : "unchecked"} />
                            <Text>পায়খানা আছে?</Text>
                        </View>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                            <Checkbox onPress={() => handleCheckingExtraData("coridor")} status={homeExtra.coridor ? "checked" : "unchecked"} />
                            <Text>বারান্ধা আছে?</Text>
                        </View>
                    </ScrollView>
                </View>
                <TextInput value={textingDatas.peopleType} onChangeText={text => handleTextChange("peopleType", text)} mode='outlined' label={"কেমন মানুষকে ভাড়া দিতে চান"} />
                <TextInput value={textingDatas.location} onChangeText={text => handleTextChange("location", text)} mode='outlined' label={"কোন স্থানে"} />
                <TextInput value={textingDatas.description} onChangeText={text => handleTextChange("description", text)} mode='outlined' label={"বর্ননা"} multiline={true} numberOfLines={3} />
                <Text>ভাড়া যেভাবে দিতে চান</Text>
                <View style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
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
                            <TextInput label={'দৈনিক ভাড়া'} value={price.daily} onChangeText={text => handlePricingBoxes("daily", text)} mode='outlined' /> : null
                    }
                    {
                        pricing == "monthly" || pricing == "both" ?
                            <TextInput label={'মাসিক ভাড়া'} mode='outlined' value={price.monthly} onChangeText={text => handlePricingBoxes("monthly", text)} /> : null
                    }
                </View>
                <View style={{ width: "95%", margin: "auto" }}>
                    <Button onPress={handleSave} style={{ width: "100%", borderRadius: 10, marginTop: 5 }} mode='contained'>সেভ করুন</Button>
                    <Button onPress={handleCencel} style={{ width: "100%", borderRadius: 10, marginTop: 5 }} mode='outlined'>বাতিল করুন</Button>
                </View>
            </View>
        </PageWrapper >
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