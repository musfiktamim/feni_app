import { LinearGradient } from 'expo-linear-gradient'
import React, { useState } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image, Pressable } from 'react-native'
import { Button } from 'react-native-paper'
import PageWraper from '../components/PageWrapper'
import { useNavigation } from '@react-navigation/native'

function Home(props) {
    const [showTopPage, setShowTopPage] = useState(false)
    const navigation = useNavigation()

    const serv = [
        {
            title: "Doctor",
            ico: require("../../assets/images/doctor.png"),
        },
        {
            title: "Hospital",
            ico: require("../../assets/images/hospital.png"),

        },
        {
            title: "Bus Schedule",
            ico: require("../../assets/images/bus-school.png"),

        },
        {
            title: "Train Schedule",
            ico: require("../../assets/images/train.png")
        },
        {
            title: "Tourism",
            ico: require("../../assets/images/tour-guide.png")
        },
        {
            title: "To Let",
            ico: require("../../assets/images/office-building.png")
        },
        {
            title: "Shoping",
            ico: require("../../assets/images/shop.png")
        },
        {
            title: "Fire Fighter",
            ico: require("../../assets/images/fire-truck.png")
        },
        {
            title: "Courier Service",
            ico: require("../../assets/images/delivery-bike.png")
        },
        {
            title: "Police",
            ico: require("../../assets/images/policeman.png")
        },
        {
            title: "Website",
            ico: require("../../assets/images/ux.png")
        },
        {
            title: "Electricity",
            ico: require("../../assets/images/idea.png")
        },
        {
            title: "Diagonstic",
            ico: require("../../assets/images/medical-report.png")
        },
        {
            title: "Blood",
            ico: require("../../assets/images/blood.png")
        },
        {
            title: "Hotel",
            ico: require("../../assets/images/5-stars.png")
        },
        {
            title: "Rent Car",
            ico: require("../../assets/images/car-wash.png")
        },
        {
            title: "Bus Service",
            ico: require("../../assets/images/car-wash.png")
        },
        {
            title: "Worker",
            ico: require("../../assets/images/man.png")
        },
        {
            title: "Hot-Line",
            ico: require("../../assets/images/call-center-service.png")
        },
        {
            title: "Job",
            ico: require("../../assets/images/job-search.png")
        },
        {
            title: "Entrepreneur",
            ico: require("../../assets/images/success.png")
        },
        {
            title: "News",
            ico: require("../../assets/images/success.png")
        },

    ]
    return (
        <PageWraper isYouWantToNavigationBar={[true, props.route.name]} >

            <View style={{ width: "100%", height: "auto",marginTop:5, display: "flex", position: "relative", alignItems: "center", borderBottomWidth: 5, borderBottomColor: "#DE1976" }}>
                <View style={[styles.pageTop, showTopPage ? { paddingBottom: 5 } : { height: 250 }]}>
                    {
                        serv.map((item, index) => <Pressable  onPress={() => navigation.navigate(item.title)} style={{ width: "23%",marginTop:4,borderWidth:0.2,borderColor:"gray",borderRadius:10}} key={index}>
                            <View style={styles.servicesBox}>
                                <Image style={{ height: "50%", width: "50%" }} source={item.ico} />
                                <Text>{item.title}</Text>
                            </View>
                        </Pressable>
                        )
                    }
                    {/* <View style={styles.shadowing}></View> */}
                    {
                        showTopPage ? null :
                            <LinearGradient style={styles.shadowing} colors={["rgba(255,255,255, 0)", "rgba(8, 5, 1, 0.35)"]}>

                            </LinearGradient>
                    }
                </View>
                <Button onPress={() => setShowTopPage(!showTopPage)} mode='contained' icon={showTopPage ? "arrow-up" : "arrow-down"} style={styles.bottomButton}>See More</Button>
            </View>
        </PageWraper>
    )
}

export default Home

const styles = StyleSheet.create({
    pageTop: {
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor:"",
        overflow: "hidden",
        position: "relative",
        alignSelf:"center"
    },
    sectionTitle: {
        fontSize: 25,
        color: "#DE1976"
    },
    servicesBox: {
        width: "100%",
        height: 100,
        marginTop:6,
        elevation:5,
        display: "flex",
        rowGap: 2,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderColor: "gray",
        backgroundColor: "white",
        borderRadius:6,
    },
    bottomButton: {
        position: "absolute",
        bottom: -20,
        backgroundColor: "#DE1976",
        color: "white",
    },
    shadowing: {
        position: "absolute",
        width: "100%",
        height: 20,
        bottom: 0
    }
})