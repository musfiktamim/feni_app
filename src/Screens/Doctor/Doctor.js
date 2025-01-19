import React, { useEffect, useState } from 'react'
import { Alert, FlatList, Image, PixelRatio, Pressable, StyleSheet } from 'react-native'
import { ScrollView, View } from 'react-native'
import { Button, Chip, IconButton, MD3Colors, Modal, Portal, ProgressBar, Text, ToggleButton } from 'react-native-paper'
import EmptyImage from "../../../assets/images/Empty.jpeg"
import DoctorBox from '../../Elements/DoctorBox'
import PageWrapper from '../../components/PageWrapper'
import { useNavigation } from '@react-navigation/native'
import { getDoctorChunk } from '../../api/api'
import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import ProgressBarForTop from '../../components/ProgressBarForTop'

function Doctor(props) {
    const [openModel, setOpenModel] = useState(false)
    const [selectedType,setSelectedType] = useState(`All`)

    const [doctorTypes, setDoctorTypes] = useState([
            {
                main: "All",
            },
            {
                main: "মেডিসিন বিশেষজ্ঞ",
            },
            {
                main: "কার্ডিওলজিস্ট",
            },
            {
                main: "নিউরোলজিস্ট",
            },
            {
                main: "অঙ্কোলজিস্ট",
            },
            {
                main: "গ্যাস্ট্রোলজি ডাক্তার",
            },
            {
                main: "কান, নাক, গলা (ENT) বিশেষজ্ঞ",
            },
            {
                main: "লিভার হজম সিস্টেম এবং মেডিসিন বিশেষজ্ঞ",
            },
            {
                main: "ডার্মাটোলজিস্ট",
            },
            {
                main: "সার্জারি বিশেষজ্ঞ",
            },
            {
                main: "রিউমাটোলজি-পেইন বিশেষজ্ঞ",
            },
            {
                main: "শিশু বিশেষজ্ঞ",
            },
            {
                main: "অর্থোপেডিক্স বিশেষজ্ঞ এবং সার্জন",
            },
            {
                main: "মনোরোগ বিশেষজ্ঞ মস্তিষ্ক এবং নিউরোলজিস্ট",
            },
            {
                main: "বক্ষ রোগ অ্যাজমা এবং টিবি বিশেষজ্ঞ",
            },
            {
                main: "গাইনোকোলজিস্ট",
            },
            {
                main: "চক্ষু বিশেষজ্ঞ",
            },
            {
                main: "হরমোন বিশেষজ্ঞ",
            },
            {
                main: "ডেন্টিস্ট"
            }
        ])



    // const {data,isLoading} = useInfiniteQuery({
    //     queryKey:["doctors"],
    //     queryFn:()=> getDoctorChunk(),
    // })

    const {data,hasNextPage,fetchNextPage,isLoading,isPending,refetch,isError,error} = useInfiniteQuery({
        queryKey:['doctor-get',selectedType],
        queryFn:()=>getDoctorChunk(selectedType),
        getNextPageParam:(lastpage,allpage)=>{
            if(lastpage.length===0) return undefined
            return allpage.length + 1
        },
    })

    const dataArr = data?.pages.map((page)=>page).flat();
    const navigation = useNavigation()

    function handlChipModel(name) {
        const is = modelFilter.findIndex((item) => item == name)
    }
    return (
        <>
        {
            isLoading &&
                <ProgressBarForTop isLoad={isLoading} />
        }
        <PageWrapper isYouWantToNavigationBar={[true, props.route.name]} isYouWantToFloatButton={[true, "Create Doctor", "plus"]} >
            <View style={styles.topBar}>
                <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={doctorTypes}
                renderItem={({item})=><Pressable onPress={()=>setSelectedType(item.main)} style={{width:"auto",height:40,borderWidth:0.5,paddingHorizontal:10,display:"flex",justifyContent:"center",alignItems:"center",marginLeft:5,borderRadius:5,backgroundColor:item.main==selectedType?"black":"white"}}>
                    <Text style={{fontSize:18,color:item.main==selectedType?"white":"black"}}>{item.main}</Text>
                </Pressable>}
                />
            </View>


            {
                dataArr && dataArr.length >= 1  ?
                <FlatList
                style={{paddingHorizontal:4}}
                showsVerticalScrollIndicator={false}
                data={dataArr}
                renderItem={({item})=><DoctorBox navigation={navigation} item={item} />}
                onEndReached={()=>{
                    if(hasNextPage && !isLoading &&  dataArr.length % 10 == 0){
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

export default Doctor

const styles = StyleSheet.create(
    {
        topBar: {
            width: "100%",
            height: 60,
            backgroundColor: "white",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
            elevation: 5
        }
    }
)