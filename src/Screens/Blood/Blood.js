import React, { useEffect, useState } from 'react'
import { Alert, View } from 'react-native'
import PageWrapper from '../../components/PageWrapper'
import TourismBox from '../../Elements/TourismBox'
import axios from 'axios'

function Blood(props) {
    const [blood, setBlood] = useState([])

    useEffect(() => {
        (async () => {
            const { data } = await axios.get("http://192.168.10.195:9000/get-blood-chunk");
            if (data.mission) {
                setBlood((prev) => [...prev, ...data.data])
            } else {
                Alert.alert("error", "geting error")
            }
        })()
    }, [])

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