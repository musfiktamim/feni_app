import React from 'react'
import { Text, View } from 'react-native'
import { IconButton } from 'react-native-paper'

function EducationShows({ edu, handleDeleteEdu }) {
    return (
        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", borderWidth: 1, borderRadius: 10, padding: "2%", marginVertical: "2%" }}>
            <Text style={{ width: "90%" }}>{edu.year}: {edu.exam} - {edu.institute}</Text>
            <IconButton onPress={() => handleDeleteEdu(edu.institute)} icon={'delete'} iconColor='red' style={{ width: "10%" }} />
        </View>
    )
}

export default EducationShows