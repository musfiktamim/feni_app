import React, { useEffect, useState } from 'react'
import { Alert, Image, PixelRatio, StyleSheet } from 'react-native'
import { ScrollView, View } from 'react-native'
import { Button, Chip, IconButton, Modal, Portal, Text, ToggleButton } from 'react-native-paper'
import DoctorBox from '../../Elements/DoctorBox'
import PageWrapper from '../../components/PageWrapper'
import { useNavigation } from '@react-navigation/native'
import { getDoctorAll } from '../../api/api'
import { useQuery } from '@tanstack/react-query'

function Doctor(props) {
    const [openModel, setOpenModel] = useState(false)
    const [modelFilter, setModelFilter] = useState([])
    const [page,setPage] = useState(0)

    const {data,isError,error,isLoading} = useQuery({
        queryKey:["doctors",page],
        queryFn: getDoctorAll,
    })

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
                    isLoading?<Text>Loading</Text>:null
                }
                {
                    isError && <Text>{error.message}</Text>
                }
                {
                    data && data.data?.map((item, index) => <DoctorBox navigation={navigation} key={index} item={item} />)
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