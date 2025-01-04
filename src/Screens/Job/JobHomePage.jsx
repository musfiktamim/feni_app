import React from 'react'
import { Text, View } from 'react-native'
import PageWrapper from '../../components/PageWrapper'

function JobHomePage(props) {
    return (
        <PageWrapper isYouWantToNavigationBar={[true, props.route.name]} isYouWantToFloatButton={[true, "Create Job", "plus"]} >
            <Text>Job home page</Text>
        </PageWrapper>
    )
}

export default JobHomePage