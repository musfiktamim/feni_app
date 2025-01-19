import React, { useEffect, useState } from 'react'
import { Alert, FlatList, Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import PageWrapper from '../../components/PageWrapper'
import TourismBox from '../../Elements/TourismBox'
import EmptyImage from "../../../assets/images/Empty.jpeg"
import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import { getBloodChunk } from '../../api/api'
import { MD3Colors, ProgressBar } from 'react-native-paper'
import ProgressBarForTop from '../../components/ProgressBarForTop'

function Blood(props) {
    const bloodGroups = [`All`,`A+`,`A-`,`B+`,`B-`,`O+`,`O-`,`AB+`,`AB-`]
    const [selectedGroups,setSelectedGroups] = useState(`All`)

    const {data,isLoading,fetchNextPage,isError,error,hasNextPage,refetch,isPending} = useInfiniteQuery({
        queryKey:['bloodget',selectedGroups],
        queryFn:()=>getBloodChunk(selectedGroups),
        getNextPageParam:(lastpage,allpage)=>{
            if(lastpage.length === 0) return undefined
            return allpage.length + 1
        }
    })

    const dataArra = data?.pages.map((page)=>page).flat();
    return (
        <>        
        {
            isLoading &&
                <ProgressBarForTop isLoad={true} />
        }
        <PageWrapper isYouWantToNavigationBar={[true, props.route.name]} isYouWantToFloatButton={[true, "Create Blood", "plus"]} >
            <View>
                <FlatList 
                data={bloodGroups}
                horizontal
                style={{marginTop:5}}
                showsHorizontalScrollIndicator={false}
                renderItem={({item})=><Pressable onPress={()=>setSelectedGroups(item)} style={{width:60,height:35,backgroundColor:item===selectedGroups?"black":"white",borderRadius:5,borderWidth:0.2,marginLeft:4,display:"flex",alignItems:"center",justifyContent:"center"}}>
                    <Text style={{fontSize:18,color:item===selectedGroups?"white":"black"}}>{item}</Text>
                </Pressable>}
             />
            </View>
            {
                dataArra && dataArra.length >= 1 ?
                <FlatList
                data={dataArra}
                renderItem={({item})=><TourismBox item={item} isBlood={true} />}
                onEndReached={()=>{
                    if(hasNextPage && !isLoading && dataArra.length % 10 == 0  ){
                        fetchNextPage()
                    }

                }}
                onEndReachedThreshold={.5}
                />:<View style={{width:"100%",flex:1,alignItems:"center",justifyContent:"center",position:"relative"}}>
                        <Image source={EmptyImage} style={{position:"absolute",height:"100%",width:"100%"}} />
                    </View>
            }
            {
                isLoading && <Text>Loading...</Text>
            }
        </PageWrapper>
        </>
    )
}

export default Blood