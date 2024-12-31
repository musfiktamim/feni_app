import React from 'react'
import { View } from 'react-native'
import { Text } from 'react-native-paper'
import PageWrapper from '../../components/PageWrapper'

function Hospital(props) {
    return (
        <PageWrapper isYouWantToNavigationBar={[true, props.route.name]}>
            <Text>Hospital</Text>
        </PageWrapper>
    )
}

export default Hospital