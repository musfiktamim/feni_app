import React from 'react'
import { Alert, FlatList, Image, Linking, Pressable, ScrollView, Text, View } from 'react-native'
import PageWrapper from '../../components/PageWrapper'
import image1 from "../../../assets/images/bijoysinghIMages.jpg"
import ToletBox from '../../Elements/ToletBox'
import { MD3Colors, ProgressBar } from 'react-native-paper'
import ProgressBarForTop from '../../components/ProgressBarForTop'
import { useInfiniteQuery } from '@tanstack/react-query'
import { getTolate } from '../../api/api'

function ToLetHome(props) {

    const {data,hasNextPage,fetchNextPage,isLoading,isPending,refetch,isError,error} = useInfiniteQuery({
        queryKey:["tolate"],
        queryFn:getTolate,
        getNextPageParam:(lastpage,allpage)=>{
            if(lastpage.length===0) return undefined
            return allpage.length + 1
        },
    })

    async function handleLongPress() {
        const respo = Alert.alert("নিশ্চিত?", "আপনি কি নিশ্চিত? আপনি তাকে কল করতে চান।", [{ text: "হ্যা", onPress: () => { Linking.openURL("tel:01855241666") } }, { text: "না", onPress: () => { } }, { text: "সরান", onPress: () => { } }])
    }

    const dataArr = data?.pages.map((page)=>page).flat()

    return (
        <>        
            {
                <ProgressBarForTop isLoad={isLoading} />
            }
        
            <PageWrapper isYouWantToNavigationBar={[true, props.route.name]} isYouWantToFloatButton={[true, "Create To Let", "plus"]} >
                    <View style={{ display: "flex", justifyContent: "space-between", flexDirection: "row", flexWrap: "wrap", alignItems: "center" }}>
                        <FlatList
                        data={dataArr}
                        renderItem={({item},index)=><ToletBox key={index} item={item} />}
                        onEndReached={()=>{
                            if(hasNextPage && !isLoading &&  dataArr.length % 10 == 0){
                                fetchNextPage()
                            }
                        }}
                        onEndReachedThreshold={.5}
                        />
                    </View>
            </PageWrapper >
        </>
    )
}

export default ToLetHome