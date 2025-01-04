import React from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import MyImage from '../../assets/images/myImage.jpg'
import { useNavigation } from '@react-navigation/native'

function WorkerBox() {
    const navigation = useNavigation()
    return (
        <Pressable onPress={() => navigation.navigate("Worker Detailes")} style={styles.workerBoxContainer}>
            <View style={styles.WorkerImageBoxContainer}>
                <Image source={MyImage} style={{ width: "100%", height: "100%" }} />
            </View>
            <View style={{ width: "100%", height: "auto" }}>
                <View style={{ width: "100%", maxHeight: 50, overflow: "hidden" }}>
                    <Text style={{ fontSize: 18, fontWeight: "bold", color: "#DE1976" }}>মোশফিকুর রহমান তামিম</Text>
                </View>
                <View style={{ width: "100%", maxHeight: 40, overflow: "hidden" }}>
                    <Text style={{ fontSize: 14, fontWeight: "bold", color: "gray" }}>সফটওয়ার ইঞ্জিনিয়ার</Text>
                </View>
            </View>
        </Pressable>
    )
}

export default WorkerBox


const styles = StyleSheet.create({
    workerBoxContainer: {
        width: "49%",
        height: "auto",
        borderWidth: 0.4,
        marginTop: 8,
        paddingHorizontal: 3,
        borderBottomWidth: 0.4,
        borderBottomColor: "#DE1976",
    },
    WorkerImageBoxContainer: {
        width: "100%",
        height: 170,
    }
})