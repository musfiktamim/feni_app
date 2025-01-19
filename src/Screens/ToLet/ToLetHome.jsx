import React from 'react'
import { Alert, Image, Linking, Pressable, ScrollView, Text, View } from 'react-native'
import PageWrapper from '../../components/PageWrapper'
import image1 from "../../../assets/images/bijoysinghIMages.jpg"
import ToletBox from '../../Elements/ToletBox'
import { MD3Colors, ProgressBar } from 'react-native-paper'
import ProgressBarForTop from '../../components/ProgressBarForTop'

function ToLetHome(props) {
    async function handleLongPress() {
        const respo = Alert.alert("নিশ্চিত?", "আপনি কি নিশ্চিত? আপনি তাকে কল করতে চান।", [{ text: "হ্যা", onPress: () => { Linking.openURL("tel:01855241666") } }, { text: "না", onPress: () => { } }, { text: "সরান", onPress: () => { } }])
    }
    return (
        <>        
            {
                <ProgressBarForTop isLoad />
            }
        
            <PageWrapper isYouWantToNavigationBar={[true, props.route.name]} isYouWantToFloatButton={[true, "Create To Let", "plus"]} >
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ display: "flex", justifyContent: "space-between", flexDirection: "row", flexWrap: "wrap", alignItems: "center" }}>
                        <ToletBox />
                        <ToletBox />
                        <ToletBox />
                        <ToletBox />
                        <ToletBox />
                        <ToletBox />
                    </View>
                </ScrollView>
            </PageWrapper >
        </>
    )
}

export default ToLetHome