import React from 'react'
import { FlatList, ScrollView,View } from 'react-native'
import TourismBox from '../../Elements/TourismBox'
import PageWrapper from '../../components/PageWrapper'
import { useNavigation } from '@react-navigation/native'
import ProgressBarForTop from '../../components/ProgressBarForTop'
import { getTourism } from '../../api/api'
import { useInfiniteQuery } from '@tanstack/react-query'

function Tourism(props) {
    const tourismItems = Array.from({ length: 100 }, (_, i) => i + 1);
    // const navigation = useNavigation()

    const {data,hasNextPage,fetchNextPage,isLoading,isPending,refetch,isError,error} = useInfiniteQuery({
        queryKey:["tourism"],
        queryFn:getTourism,
        getNextPageParam:(lastpage,allpage)=>{
            if(lastpage.length===0) return undefined
            return allpage.length + 1
        },
    })
    const dataArr = data?.pages.map((page)=>page).flat()
    return (
        <>
            {
                <ProgressBarForTop isLoad={isLoading} />
            }
            <PageWrapper isYouWantToFloatButton={[true, "Create Tourism", "plus"]} isYouWantToNavigationBar={[true, props.route.name]} style={{ marginTop: 10, paddingHorizontal: 5, flex: 1, position: "relative" }} >
                {/* <ScrollView showsVerticalScrollIndicator={false}> */}
                    <View style={{ display: "flex", gap: 10 }}>


                    <FlatList
                        data={dataArr}
                        style={{paddingBottom:10}}
                        renderItem={({item},index)=><TourismBox naviationLiks={'Tourism Detailes'} key={index} item={item} />}
                        onEndReached={()=>{
                            if(hasNextPage && !isLoading &&  dataArr.length % 10 == 0){
                                fetchNextPage()
                            }
                        }}
                        onEndReachedThreshold={.5}
                        />
                        
                        {/* {tourismItems.map((item) => ( */}
                            {/* <TourismBox key={item} item={item} navigationId={item.toString()} naviationLiks={"Tourism Detailes"} /> */}
                        {/* ))} */}
                    </View>
                {/* </ScrollView> */}
            </PageWrapper >
        </>
    )
}

export default Tourism