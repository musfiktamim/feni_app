import React, { useState } from 'react'
import { FlatList, Image, Pressable, Text, View } from 'react-native'
import PageWrapper from '../../components/PageWrapper'
import TourismBox from '../../Elements/TourismBox'
import EmptyImage from "../../../assets/images/Empty.jpeg"
import { IsRestoringProvider, useInfiniteQuery, useQuery } from '@tanstack/react-query'
import { getRentCar } from '../../api/api'
import ProgressBarForTop from '../../components/ProgressBarForTop'

function RentCar(props) {
    const [acNonAc,setAcNonAc] = useState("All")
    const acNonACA = ["All","AC","Non AC"]
    const {data,hasNextPage,isLoading,fetchNextPage,isError,error} = useInfiniteQuery({
        queryKey:['rent-car',acNonAc],
        queryFn:()=>getRentCar(acNonAc),
        getNextPageParam:(lastpage,allpage)=>{
            if(lastpage.length === 0) return undefined
            return allpage.length + 1
        }
    })

    const dataArr = data?.pages.map((page)=>page).flat();
    
    return (
        <>
            {
                isLoading && <ProgressBarForTop isLoad={isLoading} />
            }
            <PageWrapper isYouWantToNavigationBar={[true, props.route.name]} isYouWantToFloatButton={[true, "Create Rent Car", "plus"]} >
                <View style={{width:"100%",height:40,marginTop:10,display:"flex",flexDirection:"row",alignItems:"center"}}>
                    <View style={{width:"50%",height:"100%",display:"flex",justifyContent:"center"}}>
                        <FlatList
                        horizontal
                            data={acNonACA}
                            renderItem={({item})=><Pressable onPress={()=>setAcNonAc(item)} style={{width:"auto",height:35,paddingHorizontal:10,backgroundColor:item===acNonAc?"black":"white",borderRadius:5,borderWidth:0.2,marginLeft:4,display:"flex",alignItems:"center",justifyContent:"center"}}>
                                                <Text style={{fontSize:18,color:item===acNonAc?"white":"black"}}>{item}</Text>
                                            </Pressable>}
                        />
                    </View>
                    <View style={{width:"50%",height:"100%",display:"flex",justifyContent:"center"}}>
                        
                    </View>
                </View>
                {/* {
                    isError && <Text>{error.message}</Text>
                } */}
                {
                    dataArr && dataArr.length >= 1?
                    <FlatList
                        data={dataArr&&dataArr}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        renderItem={({item})=><TourismBox isCar={true} item={item} />}
                        onEndReached={()=>{
                            if(hasNextPage && !isLoading && dataArr.length % 10 == 0  ){
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

export default RentCar