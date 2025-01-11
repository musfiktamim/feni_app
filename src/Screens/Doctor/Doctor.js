import React, { useEffect, useState } from 'react'
import { Alert, Image, PixelRatio, StyleSheet } from 'react-native'
import { ScrollView, View } from 'react-native'
import { Button, Chip, IconButton, Modal, Portal, Text, ToggleButton } from 'react-native-paper'
import DoctorBox from '../../Elements/DoctorBox'
import PageWrapper from '../../components/PageWrapper'
import { useNavigation } from '@react-navigation/native'
import { getDoctorAll } from '../../api/api'

function Doctor(props) {
    const [openModel, setOpenModel] = useState(false)
    const [modelFilter, setModelFilter] = useState([])

    const [doctors, setDoctors] = useState([]);



    useEffect(() => {
        (async () => {
            const res = await getDoctorAll()
            if (res.mission) {
                setDoctors((prev) => [...prev, ...res.data])
            } else {
                Alert.alert("something wrong", res.message)
            }
        })()
    }, [])

    const navigation = useNavigation()

    function handlChipModel(name) {
        // console.log(name)
        const is = modelFilter.findIndex((item) => item == name)
    }
    return (
        <PageWrapper isYouWantToNavigationBar={[true, props.route.name]} isYouWantToFloatButton={[true, "Create Doctor", "plus"]} >
            <View style={styles.topBar}>
                <IconButton onPress={() => { setOpenModel(true) }} icon={"filter"}></IconButton>
                <Portal>
                    <Modal visible={openModel} onDismiss={() => setOpenModel(false)} contentContainerStyle={{ backgroundColor: 'white' }} style={{ padding: 20, }} >
                        <View style={{ width: "100%", display: "flex", flexDirection: "row", flexWrap: "wrap", gap: 3, padding: 10 }}>
                            {
                                [1, 2, 3, 4].map((item, index) => <Chip icon={item.selected ? "check" : "plus"} key={index}>{item.title}</Chip>)
                            }
                        </View>
                    </Modal>
                </Portal>
            </View>
            <ScrollView style={{ marginTop: 10, display: "flex", paddingHorizontal: 5, paddingBottom: 10 }}>
                {
                    doctors.map((item, index) => <DoctorBox navigation={navigation} key={index} item={item} />)
                }
            </ScrollView>
        </PageWrapper>
    )
}

export default Doctor

const styles = StyleSheet.create(
    {
        topBar: {
            width: "100%",
            height: 40,
            backgroundColor: "white",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
            elevation: 5
        }
    }
)