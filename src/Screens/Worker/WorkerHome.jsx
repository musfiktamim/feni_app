import React from 'react'
import { FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import PageWrapper from '../../components/PageWrapper'
import WorkerBox from '../../Elements/WorkerBox'
import { useInfiniteQuery } from '@tanstack/react-query'
import { getWorker } from '../../api/api'
import ProgressBarForTop from '../../components/ProgressBarForTop'

function WorkerHome() {

    const {data,hasNextPage,isLoading,isPending,fetchNextPage,isError,error} = useInfiniteQuery({
        queryKey:['worker'],
        queryFn:getWorker,
        getNextPageParam:(lastpage,allpage)=>{
            if(lastpage.length === 0) return undefined
            return allpage.length + 1
        }
    })

    const dataArr = data?.pages.map((page)=>page).flat()
    return (
        <>
            <ProgressBarForTop isLoad={isLoading || isPending} />
            <PageWrapper isYouWantToFloatButton={[true, 'Create Worker', "plus"]} isYouWantToNavigationBar={[true, 'Worker']}>
                <View style={{display:"flex",width:"100%",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                    <FlatList
                        key={2}
                        numColumns={2}
                        data={dataArr}
                        renderItem={({item},index)=> <WorkerBox key={index} item={item} />}
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

export default WorkerHome


const styles = StyleSheet.create({

})