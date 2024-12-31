import React, { useState } from 'react'
import { Image, PixelRatio, StyleSheet } from 'react-native'
import { ScrollView, View } from 'react-native'
import { Button, Chip, IconButton, Modal, Portal, Text, ToggleButton } from 'react-native-paper'
import DoctorBox from '../../Elements/DoctorBox'
import PageWrapper from '../../components/PageWrapper'
import { useNavigation } from '@react-navigation/native'

function Doctor(props) {
    const [openModel, setOpenModel] = useState(false)
    const [hellos, setHelos] = useState([
        { title: "All", selected: false },
        { title: "Dr. Smith", selected: false },
        { title: "Dr. Johnson", selected: false },
        { title: "Dr. Williams", selected: false },
        { title: "Dr. Brown", selected: false },
        { title: "Dr. Jones", selected: false }
    ])
    const [modelFilter, setModelFilter] = useState([])

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
                                hellos.map((item, index) => <Chip icon={item.selected ? "check" : "plus"} key={index}>{item.title}</Chip>)
                            }
                        </View>
                    </Modal>
                </Portal>
            </View>
            <ScrollView style={{ marginTop: 10, display: "flex", paddingHorizontal: 5 }}>
                {
                    hellos.map((item, index) => <DoctorBox key={index} item={item} />)
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