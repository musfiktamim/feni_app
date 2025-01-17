import axios from "axios";

const api = axios.create({
    baseURL:"http://192.168.10.195:9000",

})


export async function getDoctorAll() {
    try {
        const res = await api.get("/doctor-get");
        if(res.status===200) return res.data
    } catch (err) {
        return { mission: false, message: err.message }
    }
}

export default api