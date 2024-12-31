import React from 'react'
import { View } from 'react-native'
import PageWrapper from '../../components/PageWrapper'
import TourismBox from '../../Elements/TourismBox'

function RentCar(props) {
    return (
        <PageWrapper isYouWantToNavigationBar={[true, props.route.name]} isYouWantToFloatButton={[true, "Create Rent Car", "plus"]} >
            <TourismBox naviationLiks={"Create Rent Car"} isCar={true} />
        </PageWrapper>
    )
}

export default RentCar