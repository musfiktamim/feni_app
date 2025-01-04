import React, { useState } from 'react'
import PageWrapper from '../../components/PageWrapper'
import { Image, Pressable, ScrollView, View } from 'react-native'
import { Button, Icon, TextInput } from 'react-native-paper'
import * as ImagePicker from "expo-image-picker"

function CreateNews() {
    const [image, setImage] = useState([])
    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            allowsEditing: true,
            quality: 1,
            allowsMultipleSelection: true
        });


        if (!result.canceled) {
            setImage((prev) => prev ? [...result.assets, ...prev] : [...result.assets]);
        }
    };

    return (
        <PageWrapper>
            <View style={{ width: "100%", height: 250 }}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flex: 1, display: "flex", paddingVertical: 6, gap: 5 }}>
                    <Pressable onPress={pickImage} style={{ width: 350, marginLeft: 5, height: "100%", borderRadius: 10, borderWidth: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Icon source={'file-multiple-outline'} size={45} />
                    </Pressable>
                    {
                        image.map((item, index) => (
                            <Image key={index} source={{ uri: item.uri }} style={{ objectFit: "contain", width: 350, height: "100%", borderRadius: 10, marginLeft: 5, borderWidth: 0.2 }} />
                        ))
                    }
                </ScrollView>
            </View>
            <View style={{ marginTop: 10, width: "100%", display: "flex", flexDirection: "column", gap: 5 }}>
                <TextInput mode='outlined' label={'title'} multiline numberOfLines={2} />
                <TextInput mode='outlined' label={'detailes'} multiline numberOfLines={10} />
            </View>
            <View style={{ width: "100%", display: "flex", marginTop: 10, flexDirection: "row", justifyContent: "space-between" }}>
                <Button style={{ width: "49%", borderRadius: 10 }} mode='outlined'>বাতিল করুন</Button>
                <Button style={{ width: "49%", borderRadius: 10 }} mode='contained'>সেভ করুন</Button>
            </View>
        </PageWrapper>
    )
}

export default CreateNews