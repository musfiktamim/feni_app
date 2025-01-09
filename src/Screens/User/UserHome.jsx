import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import PageWrapper from '../../components/PageWrapper'
import { IconButton } from 'react-native-paper'
import axios from 'axios'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

function UserHome() {
    const [userInfo,setUserInfo] = useState({})
    const navigation = useNavigation();


    
    useEffect(() => {
        (async () => {
            const token = await AsyncStorage.getItem("token")
            if (token != null && token.startsWith("Bearer")) {
                const {data} = await axios.get("http://192.168.10.195:9000/user-get", {headers: {Authorization:token}})
                if (data.mission === false) {
                    navigation.popTo("User-RegLog")
                }
                setUserInfo(data)
            } else {
                navigation.popTo("User-RegLog")
            }
        })()
    },[])
    return (
        <PageWrapper isYouWantToNavigationBar={[true,"User"]}>
            <View style={{width:150,height:150,margin:"auto",borderRadius:"100%",position:"relative"}}>
                <View style={{ width: 150, height: 150, borderRadius: 150, borderWidth: 0.2 }}>
                    
                </View>
                <IconButton icon={'account-edit-outline'} style={{position:"absolute",bottom:0,right:-10,borderWidth:0.2}} />
            </View>
            <View style={{margin:"auto",marginTop:10}}>
                <Text style={{ fontSize: 17, textAlign: "center" }}>{userInfo.username}</Text>
            </View>
        </PageWrapper>
  )
}

export default UserHome
