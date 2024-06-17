import { API_SERVER_CONFIG,LOCAL_STORAGE } from "@/config/API_config";
import axios from 'axios'
import { PRODUCTS2 } from "@/data/data";
export default async function fetcher(url:string){
    try {
        let res = await axios.get(url);
        let data = await res.data
        console.log(data)
        return data
    } catch (error) {
        console.error(error)
        return  PRODUCTS2
    }
}