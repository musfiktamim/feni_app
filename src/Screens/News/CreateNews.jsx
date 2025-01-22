import React, { useState } from 'react'
import PageWrapper from '../../components/PageWrapper'
import { Image, Pressable, ScrollView, ToastAndroid, View } from 'react-native'
import { Button, Icon, IconButton, RadioButton, Text, TextInput } from 'react-native-paper'
import * as ImagePicker from "expo-image-picker"
import { useMutation } from '@tanstack/react-query'
import { createNews } from '../../api/api'
import ProgressBarForTop from '../../components/ProgressBarForTop'

function CreateNews() {
    const [newsData,setNewsData] = useState({
        mainTitle:"",
        allPera:[]
    }) 

    const {mutate,isPending} = useMutation({
        mutationFn:(data)=>createNews(data),
        onSuccess:(res)=>{
            if(res.mission){
                ToastAndroid.show(res.message,1000)
                handleCencel()
            }else{
                ToastAndroid.show(res.message,1000)
            }
        },
        onError:(err)=>{
            ToastAndroid.show(err.message,1000)
        }
    })

    const [shows,setShows] = useState({preview:false})

    function handlePeraSaved(data){
        setNewsData((prev)=>({...prev,allPera:[...prev.allPera,data]}))
    }

    function DeletePera(item){
        const filtered = newsData.allPera.filter((pera)=>pera.title != item)
        setNewsData((prev)=>({...prev,allPera:filtered}))
    }

    function handleSave(){
        if(newsData.mainTaitle && newsData.mainTaitle){
            mutate(newsData)
        }else{
            ToastAndroid.show("plz required field fill",1000)
        }
    }

    function handleCencel(){
        setNewsData({
            mainTaitle:"",
            allPera:[]
        })
    }

    return (
        <>
            <ProgressBarForTop  isLoad={isPending}/>
            <ScrollView showsVerticalScrollIndicator={false} style={{paddingHorizontal:5}}>
                <TextInput mode='outlined' onChangeText={text=>setNewsData((prev)=>({...prev,mainTaitle:text}))} label='main title' />

                <NewsPeraInputs peraSaved={handlePeraSaved} />
                
                <View style={{ width: "100%", display: "flex", marginTop: 10, flexDirection: "row", justifyContent: "space-between" }}>
                    <Button onPress={handleCencel} style={{ width: "49%", borderRadius: 10 }} mode='outlined'>বাতিল করুন</Button>
                    <Button onPress={handleSave} style={{ width: "49%", borderRadius: 10 }} mode='contained'>সেভ করুন</Button>
                </View>
                <View style={{width:"100%",paddingHorizontal:5,marginTop:10,paddingVertical:10,borderWidth:0.4,borderRadius:10}}>
                    <Pressable style={{display:"flex",flexDirection:"row",alignItems:"center"}} onPress={()=>setShows((prev)=>({...prev,preview:!prev.preview}))}>
                        <RadioButton onPress={()=>setShows((prev)=>({...prev,preview:!prev.preview}))} status={shows.preview?"checked":"unchecked"} />
                        <Text style={{fontSize:18}}>Preview News</Text>
                    </Pressable>
                    {
                        shows.preview && <View >
                            <Text style={{fontSize:20,fontWeight:600}}>{newsData.mainTitle}</Text>
                            <View>
                                {
                                    newsData.allPera.map((item,index)=><NewsBoxesShow deletePera={DeletePera} item={item} key={index} /> )
                                }
                            </View>
                        </View>
                    }
                </View>
                
            </ScrollView>
        </>
    )
}

export default CreateNews

function NewsBoxesShow({item,deletePera}){
    const [shows,setShows] = useState({detailesShows:false})

    return <View style={{borderWidth:0.4,paddingHorizontal:5,paddingVertical:5,marginTop:5,borderRadius:6,position:"relative"}}>
        {
            item.image.length>0 &&
                <View style={{ width: "100%", height: 250 }}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flex: 1, display: "flex", paddingVertical: 6, gap: 5 }}>
                        {
                            item.image.map((imag, index) => (
                                <Image key={index} source={{ uri: `data:image/jpeg;base64,${imag}` }} style={{ objectFit: "contain", width: 350, height: "100%", borderRadius: 10, marginLeft: 5, borderWidth: 0.2 }} />
                            ))
                        }
                    </ScrollView>
                </View>
        }
    <View>
        <Text style={{fontSize:20,fontWeight:600}}>{item.title}</Text>
    </View> 
    <Pressable onPress={()=>setShows((prev)=>({...prev,detailesShows:!prev.detailesShows}))}>
        <Text style={{fontSize:14,fontWeight:300}}>
            {item.detailes.length>300? !shows.detailesShows? item.detailes.slice(0,300) :item.detailes:item.detailes  }
        </Text>
    </Pressable>
    <IconButton style={{position:"absolute",top:0,right:0}} onPress={()=>deletePera(item.title)} icon={'delete'} iconColor='red' />
    </View>
}


function NewsPeraInputs({peraSaved}){

    const [peraData,setPeraData] = useState({
        image:[],
        title:"",
        detailes:""

    })

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            allowsEditing: true,
            quality: 1,
            allowsMultipleSelection: true,
            base64:true
        });


        if (!result.canceled) {
            const newResultArray = result.assets.map((asset)=>asset.base64)
            // setImage((prev) => prev ? [...result.assets, ...prev] : [...result.assets]);
            setPeraData((prev)=>({...prev,image:[...prev.image,...newResultArray]}))
        }
    };

    function handleCencel(){
        setPeraData({
            image:[],
            title:"",
            detailes:""
    
        })
    }

    function handleChange(fieldName,text){
        setPeraData((prev)=>({...prev,[fieldName]:text}))
    }
    
    return <>
            <View style={{ width: "100%", height: 250 }}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flex: 1, display: "flex", paddingVertical: 6, gap: 5 }}>
                    {
                         peraData.image.map((imag, index) => (<View key={index} style={{position:"relative"}}>
                            <Image source={{ uri: `data:image/jpeg;base64,${imag}` }} style={{ objectFit: "contain", width: 350, height: "100%", borderRadius: 10, marginLeft: 5, borderWidth: 0.2 }} />
                            <IconButton onPress={()=>{
                                const filtered = peraData.image.filter((im)=>im != imag)
                                setPeraData((prev)=>({...prev,image:filtered}))
                            }} icon={'delete'} iconColor='red' style={{position:"absolute",right:0,top:0}} />
                         </View>
                        ))
                    }
                    <Pressable onPress={pickImage} style={{ width: 350, marginLeft: 5, height: "100%", borderRadius: 10, borderWidth: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Icon source={'file-multiple-outline'} size={45} />
                    </Pressable>
                </ScrollView>
            </View>
            <View style={{ marginTop: 10, width: "100%", display: "flex", flexDirection: "column", gap: 5 }}>
                <TextInput value={peraData.title} onChangeText={text=>handleChange('title',text)} mode='outlined' label={'title'} multiline numberOfLines={2} />
                <TextInput value={peraData.detailes} onChangeText={text=>handleChange('detailes',text)} mode='outlined' label={'detailes'} multiline numberOfLines={10} />
            </View>
            
            <View style={{ width: "100%", display: "flex", marginTop: 10, flexDirection: "row", justifyContent: "space-between" }}>
                <Button onPress={handleCencel} style={{ width: "49%", borderRadius: 10 }} mode='outlined'>clear pera</Button>
                <Button onPress={()=>{
                    if(peraData.title && peraData.detailes){
                        peraSaved(peraData)
                        handleCencel()
                    }else{
                        ToastAndroid.show("please fill all required filds",1000)
                    }
                }} style={{ width: "49%", borderRadius: 10 }} mode='contained'>add on pera</Button>
            </View>
    </>
}