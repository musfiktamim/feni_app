import React from 'react'
import { Button, Text, View } from 'react-native'

function About({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>About</Text>
            <Button onPress={() => navigation.popTo("Home")} title='Home'></Button>

        </View>
    )
}

export default About
