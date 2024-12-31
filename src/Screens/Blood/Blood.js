import React from 'react'
import { View } from 'react-native'
import PageWrapper from '../../components/PageWrapper'
import TourismBox from '../../Elements/TourismBox'

function Blood(props) {
    return (
        <PageWrapper isYouWantToNavigationBar={[true, props.route.name]} isYouWantToFloatButton={[true, "Create Blood", "plus"]} >
            <View style={{ display: "flex", gap: 10 }}>

                <TourismBox isBlood={true} />
                <TourismBox isBlood={true} />
                <TourismBox isBlood={true} />
                <TourismBox isBlood={true} />
                <TourismBox isBlood={true} />
                <TourismBox isBlood={true} />
                <TourismBox isBlood={true} />
                <TourismBox isBlood={true} />
                <TourismBox isBlood={true} />
                <TourismBox isBlood={true} />
                <TourismBox isBlood={true} />
                <TourismBox isBlood={true} />
                <TourismBox isBlood={true} />
                <TourismBox isBlood={true} />
                <TourismBox isBlood={true} />
                <TourismBox isBlood={true} />
                <TourismBox isBlood={true} />
                <TourismBox isBlood={true} />
                <TourismBox isBlood={true} />
                <TourismBox isBlood={true} />
                <TourismBox isBlood={true} />
                <TourismBox isBlood={true} />
                <TourismBox isBlood={true} />
                <TourismBox isBlood={true} />
                <TourismBox isBlood={true} />
                <TourismBox isBlood={true} />
                <TourismBox isBlood={true} />
            </View>
        </PageWrapper>
    )
}

export default Blood