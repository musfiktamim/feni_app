import React from 'react'
import { Pressable, ScrollView, Text, View } from 'react-native'
import PageWrapper from '../components/PageWrapper'
import { Icon } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

function MyAllDocuMents() {

    const navigation = useNavigation()

    const [createData, setCreateData] = React.useState([
        {
            "link": "Create Doctor",
            "icon": "doctor"
        },
        {
            "link": "Create Tourism",
            "icon": "select-place"
        },
        {
            "link": "Create To Let",
            "icon": "home-city"
        },
        {
            "link": "Create Blood",
            "icon": "blood-bag"
        },
        {
            "link": "Create Rent Car",
            "icon": "car"
        },
        {
            "link": "Create Worker",
            "icon": "watchman-monitoring"
        },
        {
            "link": "Create News",
            "icon": "newspaper"
        },

    ])

    return (
        <PageWrapper isYouWantToNavigationBar={[true, "Activity"]}>
            <Text style={{ fontSize: 20, color: "#DE1976" }}>Create #</Text>
            <View style={{ width: "100%", height: 170, display: "flex", flexDirection: "row" }}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {
                        createData.map((item, index) => (
                            <Pressable onPress={() => navigation.navigate(item.link)} key={index} style={{ width: 180, height: "100%", borderRadius: 10, marginLeft: 5, borderWidth: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: "#DE1976", color: "white" }}>
                                <Icon source={item.icon} size={50} color='white' />
                                <Text style={{ fontSize: 20, color: "white" }}>{item.link}</Text>
                            </Pressable>
                        ))
                    }
                </ScrollView>
            </View>
            <Text style={{ fontSize: 20, color: "#DE1976" }}>Created #</Text>
            <View style={{ width: "100%", height: 170, display: "flex", flexDirection: "row" }}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {
                        createData.map((item, index) => (
                            <Pressable onPress={() => navigation.navigate(item.link)} key={index} style={{ width: 180, height: "100%", borderRadius: 10, marginLeft: 5, borderWidth: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: "#DE1976", color: "white" }}>
                                <Text style={{ color: "white", fontSize: 20 }}>Doctor</Text>
                                <Text style={{ color: "white" }}>Musfikur Rahman Tamim</Text>
                            </Pressable>
                        ))
                    }
                </ScrollView>
            </View>
        </PageWrapper>
    )
}

export default MyAllDocuMents