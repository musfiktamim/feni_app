import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { Alert, ToastAndroid } from "react-native";

const api =  axios.create({
    baseURL:"http://192.168.10.195:9000"
})

// create

export async function createDoctor(data) {
    try{
        const res = await api.post("/create-doctor", data,{headers:{
            Authorization: await AsyncStorage.getItem('token')
        }}) 
        if(res.status===200){
            if(res.data.mission ==false,res.data.mission==undefined ){
                Alert.alert("err",res.data.message)
            }else{
                return res.data;
            }
        }
    }catch (err){
        return err.message;
    }
}

export async function createBlood(data){
    try{
        const res = await api.post("/blood-create",data,{headers:{Authorization:await AsyncStorage.getItem("token")}})
        if(res.status==200 && res.data.mission) return res.data
        throw new Error(res.data.message)
    }catch(err){
        throw new Error(err.message)
    }
}

export async function createToLet(data) {
    try{
        const res = await api.post("/tolet-create",data,{
            headers:{
                Authorization: await AsyncStorage.getItem("token")
            }
        })
        if(res.status==200 && res.data.mission) return res.data
        throw new Error(res.data.message)
    }catch(err){
        throw new Error(err.message)
    }
}


export async function createRentCar(data){
    try{
        const res = await api.post('/create-car-rent',data,{
            headers:{
                Authorization:await AsyncStorage.getItem("token")
            }
        })
        if(res.data.mission){
            return res.data
        }else{
            throw new Error(res.data.message)
        }
    }catch(err){
        throw new Error(err)
    }
}

export async function createTourism(data){
    try{
        const res = await api.post('/create-tourism',data,{headers:{Authorization:await AsyncStorage.getItem("token")}})
        if(res.status == 200 && res.data.mission) return res.data.message
        ToastAndroid.show(res.data.message,1000)
    }catch(err){
        throw new Error(err.message)
    }
} 

export async function createWorker(data){
    try{
        const res = await api.post('/create-worker',data,{headers:{Authorization:await AsyncStorage.getItem("token")}})
        if(res.status == 200) return res.data

    }catch(err){
        throw new Error(err.message)
    }
} 


export async function createNews(data) {
    try{
        const res = await api.post('/create-news',data,{headers:{Authorization:await AsyncStorage.getItem("token")}})
        if(res.status == 200) return res.data

    }catch(err){
        throw new Error(err.message)
    }
}

// get

export async function getDoctorChunk(doctorTypes=`All`,pageParams=0) {
    try {
        const res = await api.get(`/doctor-get?page=${pageParams}&&doctor_type=${doctorTypes}`);
        if(res.status===200 && res.data.mission == undefined || res.data.mission != false) return res.data
        
        return []
    } catch (err) {
        throw new Error(err.message)
        return []
    }
}

export async function getBloodChunk (blood_Group=`All`,pageParams=0){
    try{
        const res = await api.get(`/get-blood-chunk?page=${pageParams}&&blood_group=${blood_Group}`);
        if(res.status===200 && res.data.mission == undefined || res.data.mission != false) return res.data
        return []
    }catch (err){
        return []
    }
}

export async function getRentCar(acNonAc=`All`,pageParams=0){
    try{
        const res = await api.get(`/get-car-rent/?page=${pageParams}&&acNonAc=${acNonAc}`)
        if(res.status==200 && res.data.mission == undefined || res.data.mission != false ) return res.data
        return []
    }catch(err){
        return []
    }
}

export async function getTolate(pageParams=0){
    try{
       const res = await api.get(`/get-tolet/?page=${pageParams}`) 
       if(res.status == 200 && res.data.mission) return res.data.data
       ToastAndroid.show(res.data.message)
       return []
    }catch(err){
        ToastAndroid.show(err.message,1000)
        return[]
    }
}

export async function getTourism(pageParams=0){
    try{
       const res = await api.get(`/get-tourism/?page=${pageParams}`) 
       if(res.status == 200 && res.data.mission) return res.data.data
       ToastAndroid.show(res.data.message)
       return []
    }catch(err){
        ToastAndroid.show(err.message,1000)
        return[]
    }
}

export async function getWorker(pageParams=0){
    try{
        const res = await api.get(`/get-worker/?page=${pageParams}`) 
        if(res.status == 200 && res.data.mission) return res.data.data
        ToastAndroid.show(res.data.message)
        return []
     }catch(err){
         ToastAndroid.show(err.message,1000)
         return[]
     }
}


export default api