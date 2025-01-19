import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import PageWrapper from '../../components/PageWrapper'
import { Icon, IconButton } from 'react-native-paper'
import axios from 'axios'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import api from '../../api/api'

function UserHome() {
    const [userInfo,setUserInfo] = useState({})
    const navigation = useNavigation();


    
    useEffect(() => {
        (async () => {
            const token = await AsyncStorage.getItem("token")
            if (token != null && token.startsWith("Bearer")) {
                const {data} = await api.get("/user-get", {headers: {Authorization:token}})
                if (data.mission === false) {
                    navigation.popTo("User-RegLog")
                }
                return setUserInfo(data)
            } else {
                navigation.popTo("User-RegLog")
            }
            navigation.popTo("User-RegLog")
        })()

        // (async () => {
        //     const token = await AsyncStorage.getItem("token")
        //     if (token != null && token.startsWith("Bearer")) {
        //         const {data} = await api.get("/user-get")
        //         if (data.mission === false) {
        //             navigation.popTo("User-RegLog")
        //         }
        //         setUserInfo(data)
        //     } else {
        //         navigation.popTo("User-RegLog")
        //     }
        // })()
        
    },[])
    return (
        <PageWrapper isYouWantToNavigationBar={[true,"User"]}>
            <View>            
            {/* <View style={{width:150,height:150,borderRadius:"100%",margin:"auto",marginTop:10,position:"relative"}}>
                <View style={{ width: 150, height: 150, borderRadius: 150, borderWidth: 0.2 }}>
                    
                </View>
                <IconButton icon={'account-edit-outline'} style={{position:"absolute",bottom:0,right:-10,borderWidth:0.2}} />
            </View> */}
            <View style={{width:"100%",height:400,backgroundColor:"gray",borderBottomLeftRadius:20,borderBottomRightRadius:20,marginBottom:10}}>

            </View>
            <View style={{marginTop:10,display:"flex",flexDirection:"row",alignItems:"center"}}>
                <Icon source={'account'} size={30} />
                <Text style={{ fontSize: 20,marginLeft:10}}>{userInfo.username}</Text>
            </View>
            <View style={{marginTop:10,display:"flex",flexDirection:"row",alignItems:"center"}}>
                <Icon source={'email-open-outline'} size={30} />
                <Text style={{ fontSize: 20,marginLeft:10}}>{userInfo.email}</Text>
            </View>
            </View>
        </PageWrapper>
  )
}

export default UserHome
