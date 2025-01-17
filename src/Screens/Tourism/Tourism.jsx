import React from 'react'
import { Image, ScrollView, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import image1 from "../../../assets/images/bijoysinghIMages.jpg"
import { IconButton } from 'react-native-paper'
import TourismBox from '../../Elements/TourismBox'
import PageWrapper from '../../components/PageWrapper'
import { useNavigation } from '@react-navigation/native'

function Tourism(props) {
    const tourismItems = Array.from({ length: 100 }, (_, i) => i + 1);
    const navigation = useNavigation()
    return (
        <PageWrapper isYouWantToFloatButton={[true, "Create Tourism", "plus"]} isYouWantToNavigationBar={[true, props.route.name]} style={{ marginTop: 10, paddingHorizontal: 5, flex: 1, position: "relative" }} >
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ display: "flex", gap: 10 }}>
                    {tourismItems.map((item) => (
                        <TourismBox key={item} item={item} navigationId={item.toString()} naviationLiks={"Tourism Detailes"} />
                    ))}
                </View>
            </ScrollView>
        </PageWrapper >
    )
}

export default Tourism