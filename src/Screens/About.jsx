import React from 'react'
import { Button, Text, View } from 'react-native'
import PageWrapper from '../components/PageWrapper'
import { useNavigation } from '@react-navigation/native'

function About(props) {
    const navigation = useNavigation()
    return (
        <PageWrapper isYouWantToNavigationBar={[true, props.route.name]}>
            <Text>About</Text>
            <Button onPress={() => navigation.popTo("Home")} title='Home'></Button>

        </PageWrapper>
    )
}

export default About
