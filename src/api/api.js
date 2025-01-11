import axios from "axios";

export async function getDoctorAll() {
    try {
        const { data } = await axios.get("http://192.168.10.195:9000/doctor-get");
        if (data) {
            return data
        }
    } catch (err) {
        return { mission: false, message: err.message }
    }
}