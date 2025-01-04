import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import PageWrapper from '../../components/PageWrapper'
import { IconButton } from 'react-native-paper'
import WorkerBox from '../../Elements/WorkerBox'

function WorkerHome() {
    return (
        <PageWrapper isYouWantToFloatButton={[true, 'Create Worker', "plus"]} isYouWantToNavigationBar={[true, 'Worker']}>
            <View style={{ width: "100%", height: 50, justifyContent: "flex-end", alignItems: "center", flexDirection: "row", borderBottomWidth: 0.4, borderBottomColor: "gray" }}>
                <IconButton icon="filter" size={30} color="#DE1976" />
            </View>
            <View style={{ width: "100%", height: "auto", display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between" }}>
                <WorkerBox />
                <WorkerBox />
                <WorkerBox />
                <WorkerBox />
            </View>
        </PageWrapper >
    )
}

export default WorkerHome


const styles = StyleSheet.create({

})