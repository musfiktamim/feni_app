import React, { useState } from 'react'
import PageWrapper from '../../components/PageWrapper'
import { Alert, View } from 'react-native'
import { Button, TextInput } from 'react-native-paper'
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

function User_Reg_Log() {
    const navigation = useNavigation()
    const [isLogOrTeg, setIsLogOrTeg] = useState(true);
    const [formdata, setFormdata] = useState({
        username: "",
        email: "",
        phone: "",
        password: "",
        confirm_password:"",
    })
    
    function handleTextChange(fieldName,text) {
        setFormdata((prev)=>({...prev,[fieldName]:text}))
    }

    async function handelReq() {
        if (isLogOrTeg && formdata.email && formdata.password) {
            const {data} = await axios.post("http://192.168.10.195:9000/v1/user/user-post-login", formdata)
            if (data.mission) {
                await AsyncStorage.setItem("token", data.token)
                navigation.popTo("User")
            } else {
                Alert.alert("incorrect password",data.message)
            }
        } else if (!isLogOrTeg && formdata.username && formdata.email && formdata.phone && formdata.password && formdata.confirm_password) {
            if (formdata.password === formdata.confirm_password) {
                if (formdata.password.length>=8) {
                    const { data } = await axios.post("http://192.168.10.195:9000/v1/user/user-post", formdata)
                    if (data.mission) {
                        await AsyncStorage.setItem("token", data.token);
                        Alert.alert("user created",data.message,[{text:"!ok go to profile",onPress:()=>navigation.popTo("User")},{text:"Home",onPress:()=>navigation.popTo("Home")}])
                    } else {
                        Alert.alert("user create",data.message)
                    }
                } else {
                    Alert.alert("password","password must be grater then 8 charecter")
                }
            } else {
                Alert.alert("password never matching","plz password or confirm password must be same")
            }
        } else {
            Alert.alert("fill","flease field all fields")
        }
        // console.log(formdata)
    }
  return (
    <PageWrapper isYouWantToNavigationBar={[true,"User-RegLog"]}>
        <View style={{ width: "95%", margin: "auto", height: "auto" }}>
            {!isLogOrTeg && <TextInput onChangeText={text=>handleTextChange("username",text)} value={formdata.username} mode='outlined' label={"username"} role='dialog' />}
            <TextInput onChangeText={text=>handleTextChange("email",text)} value={formdata.email} mode='outlined' label={"email"} />
            {!isLogOrTeg && <TextInput mode='outlined' onChangeText={text=>handleTextChange("phone",text)} value={formdata.phone} label={"phone"} role='' />}
            <TextInput mode='outlined' onChangeText={text=>handleTextChange("password",text)} value={formdata.password} label={"password"} role='' />
            {!isLogOrTeg&&<TextInput onChangeText={text=>handleTextChange("confirm_password",text)} value={formdata.confirm_password} mode='outlined' label={"confirm password"} textColor={ formdata.confirm_password == formdata.password?"black":"red"} role='' />}
            <View style={{ marginTop: 10, display: "flex", flexDirection: "column", gap: 3 }}>
                <Button mode='contained' onPress={handelReq} buttonColor='#0664FF' style={{ borderRadius: 5 }}>{isLogOrTeg?"Log In":"Save or Login"}</Button>
                <Button mode='outlined' onPress={()=>setIsLogOrTeg(!isLogOrTeg)} style={{ borderRadius: 5 }}>{isLogOrTeg?"i don't have any account":"i have account"}</Button>
            </View>
        </View>
    </PageWrapper>
  )
}

export default User_Reg_Log
