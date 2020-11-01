import axios from 'axios';
const KEY = 'AIzaSyCFhAzoSS8VP_QXKCxJaz0fmHlIaAQm4WU';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    parms: { 
    part: 'snippet',
    maxResults: 5,
    key:KEY
}
}); 