import React, { useEffect, useState } from 'react'
import { Alert, FlatList, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import PageWrapper from '../../components/PageWrapper'
import TourismBox from '../../Elements/TourismBox'
import axios from 'axios'

function Blood(props) {
    const [blood, setBlood] = useState([])
    const [page,setPage] = useState(0)
    

    useEffect(() => {
        (async () => {
            const { data } = await axios.get(`http://192.168.10.195:9000/get-blood-chunk/?page=${page}`);
            if (data.mission) {
                setBlood((prev) => [...prev, ...data.data])
            } else {
                Alert.alert("error", data.message)
            }
        })()
    }, [page])


    return (
        <PageWrapper isYouWantToNavigationBar={[true, props.route.name]} isYouWantToFloatButton={[true, "Create Blood", "plus"]} >
            <View style={{ display: "flex", gap: 10 }}>
                {
                    blood.map((item, index) => <TourismBox item={item} key={index} isBlood={true} />)
                }
            </View>
        </PageWrapper>
    )
}

export default Blood