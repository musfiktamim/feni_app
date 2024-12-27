import React, { useState } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { Button, IconButton, TextInput } from 'react-native-paper'
import * as ImagePicker from "expo-image-picker"
import { TouchableOpacityComponent } from 'react-native'

function CreateTourism() {
    const [image, setImage] = useState(null)
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

    return (
        <View style={{ flex: 1, paddingHorizontal: 10, justifyContent: "center" }}>
            <View style={{ width: "100%", height: 200, marginTop: 5 }} >
                <ScrollView showsHorizontalScrollIndicator={false} horizontal style={{ flexGrow: 1, gap: 4, display: "flex", flexDirection: "row", paddingVertical: 2, paddingHorizontal: 2, paddingRight: 200 }}>
                    {
                        image && image.map((item, index) => <Image key={index} style={{ height: "100%", width: 200, borderRadius: 10 }} source={{ uri: item.uri }} />)
                    }
                    <TouchableOpacity style={{ width: 200, height: "100%", borderRadius: 10, borderWidth: 3 }} onPress={pickImage}>
                        <View style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <IconButton icon={'file-multiple-outline'} size={50}></IconButton>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </View>
            <TextInput label='টাইটেল' mode='outlined' />
            <TextInput label='অবস্থান' mode='outlined' />
            <TextInput label='নাম করণ' mode='outlined' />
            <TextInput label='ডিস্ক্রিপশন' mode='outlined' />

        </View >
    )
}

export default CreateTourism