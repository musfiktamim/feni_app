import React from 'react'
import { Image, Text, View } from 'react-native'
import PageWrapper from '../../components/PageWrapper'
import NewsCard from '../../Elements/NewsCard'

function NewsHome() {
    return (
        <PageWrapper isYouWantToNavigationBar={[true, "News"]} isYouWantToFloatButton={[true, "Create News", "plus"]} >


            
            
            {/* <View style={{ display: "flex", flexDirection: "column", rowGap: 15 }}>
                
                <NewsCard />
                <NewsCard />
            </View> */}
        </PageWrapper>
    )
}

export default NewsHome