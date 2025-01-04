import { useState } from "react";
import { View } from "react-native";
import { IconButton, TextInput } from "react-native-paper";

function EducationBox({ returnData }) {
    const [education, setEducation] = useState({
        institute: "",
        exam: "",
        year: ""
    })


    function handleTextChange(fieldName, text) {
        setEducation((prev) => ({ ...prev, [fieldName]: text }))
    }

    return (
        <View style={{ borderWidth: 1, paddingHorizontal: "2%", paddingVertical: "2%", borderRadius: 10 }}>
            <TextInput value={education.institute} onChangeText={text => handleTextChange("institute", text)} label="প্রতিষ্ঠান" mode='outlined' inputMode='text' multiline numberOfLines={2} />
            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <TextInput value={education.exam} onChangeText={text => handleTextChange("exam", text)} label="পরিক্ষা" mode='outlined' inputMode='text' style={{ width: "45%" }} />
                <TextInput value={education.year} onChangeText={text => handleTextChange("year", text)} label="বছর" mode='outlined' inputMode='numeric' style={{ width: "45%" }} />
            </View>
            <IconButton onPress={() => {
                education.institute && education.exam && education.year &&
                    returnData("educations", education); setEducation({ institute: "", exam: "", year: "" })
            }} icon={'plus'} style={{ width: "100%", borderRadius: 10, margin: "auto", marginTop: 6 }} mode='outlined' />
        </View>
    )
}

export default EducationBox