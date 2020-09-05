import axios from 'axios'

{/* Function to get all video */}
export const getVideos = async (page, size) => {
    try{
        let url = "/videos?limit="+size+"&offset="+(page*size);
        let response  = await axios.get(url)
        return response.data
    }
    catch(error){
        throw error
    }     
}

{/* Function to get deatils of a  Video */}
export const getVideo = async (videoId) =>{
    try{
        let url = "/videos/"+videoId;
        let response  = await axios.get(url)
        return response.data
    }
    catch(error){
        throw error
    }    
}