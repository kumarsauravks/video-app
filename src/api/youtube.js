import axios from 'axios';

const KEY='AIzaSyC5oOiEOWNL8tn_gd15yzOrTFBXXOnnmTk'

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:5,
        key:KEY
    }
})
