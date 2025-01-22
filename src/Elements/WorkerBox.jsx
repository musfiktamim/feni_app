import React from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import MyImage from '../../assets/images/myImage.jpg'
import { useNavigation } from '@react-navigation/native'

function WorkerBox({item}) {
    const navigation = useNavigation()
    return (
        <Pressable onPress={() => navigation.navigate("Worker Detailes",{item:item})} style={styles.workerBoxContainer}>
            <View style={styles.WorkerImageBoxContainer}>
                {
                    item && item.picture &&
                        <Image source={{uri:item.picture.url && item.picture.url}} style={{ width: "100%", height: "100%" }} />
                }
            </View>
            <View style={{ width: "100%", height: "auto" }}>
                <View style={{ width: "100%", maxHeight: 50, overflow: "hidden" }}>
                    {
                        item && item.name &&
                            <Text style={{ fontSize: 18, fontWeight: "bold", color: "#DE1976" }}>{item.name}</Text>
                    }
                </View>
                <View style={{ width: "100%", maxHeight: 40, overflow: "hidden" }}>
                    {
                        item && item.skils &&
                            <Text style={{ fontSize: 14, fontWeight: "bold", color: "gray" }}>{item.skils[0]}</Text>
                    }
                </View>
            </View>
        </Pressable>
    )
}

export default WorkerBox


const styles = StyleSheet.create({
    workerBoxContainer: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,

        borderBottomWidth: 1,
        borderBottomColor: "#DE1976",
        width: "49%",
        marginTop: 10,
        paddingBottom: 5,
        flexShrink: 1,
        paddingHorizontal: 2,
        borderRadius: 5
    },
    WorkerImageBoxContainer: {
        width: "100%",
        height: 170,
    }
})