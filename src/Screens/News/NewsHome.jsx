import React from 'react'
import { Image, Text, View } from 'react-native'
import PageWrapper from '../../components/PageWrapper'
import NewsCard from '../../Elements/NewsCard'

function NewsHome() {
    return (
        <PageWrapper isYouWantToNavigationBar={[true, "News"]} isYouWantToFloatButton={[true, "Create News", "plus"]} >
            {/* <View style={{ width: "100%", height: 400, backgroundColor: "#DE1976", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center", borderRadius: 10, elevation: 10 }}>
                <View style={{ width: "100%", height: "60%", borderBottomWidth: 2, borderBottomColor: "gray", backgroundColor: "#E8F7F7" }}>
                    <Image source={MyImage} style={{ height: "100%", width: "100%", objectFit: "contain" }} />
                </View>
                <View style={{ maxHeight: "30%", paddingHorizontal: 2, overflow: "hidden" }}>
                    <Text style={{ fontSize: 31, color: "white", textAlign: "center" }}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio quo rem quasi est enim numquam aliquid placeat cum consectetur. Incidunt eius quam illo doloribus tempore, fuga accusamus harum quisquam alias. Aliquam deleniti quos excepturi, minima cum consequuntur beatae, sequi ducimus ratione suscipit aperiam et vel non vitae fugiat ea quia placeat. Ipsam, praesentium deleniti. Non recusandae, dignissimos maiores expedita, vitae quod vero dolore quos at animi molestiae unde officiis ullam eaque! Neque consequuntur provident suscipit! Perferendis odit voluptate, possimus reprehenderit, optio architecto sequi in ex porro et, officia illum necessitatibus alias maxime repellendus? In pariatur corrupti fugiat et, recusandae rerum!
                    </Text>
                </View>
                <View style={{ width: "100%", height: "10%", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 10 }}>
                    <Text style={{ color: "white", fontSize: 18 }}>12-12-2022</Text>
                    <Text style={{ color: "white", fontSize: 17 }}>Musfik</Text>
                </View>
            </View> */}
            <View style={{ display: "flex", flexDirection: "column", rowGap: 15 }}>
                <NewsCard />
                <NewsCard />
            </View>
        </PageWrapper>
    )
}

export default NewsHome