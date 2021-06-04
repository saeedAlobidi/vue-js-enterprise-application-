import axios from 'axios'
import progress from 'nprogress'


export default ({ publicToken}) => {


    const apiClient = axios.create({
        baseURL: 'https://some-domain.com/api/',
        timeout: 1000000,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'X-P-T': publicToken
        }
    });

    apiClient.interceptors.request.use(function (config) {
        !progress.isStarted()?progress.start():progress.isStarted()
        

        const publicToken=window.sessionStorage.getItem("X-P-T");
        const userToken=window.sessionStorage.getItem("X-U-T");
        config.headers['X-P-T'] = publicToken==null?"not authorized :(":publicToken;
         config.headers['X-U-T'] = userToken==null?"not authentication :(":userToken;
        return config;
    });



    apiClient.interceptors.response.use(function (response) {
        
        progress.isStarted()?progress.done():progress.isStarted()

        const publicToken=response.headers['X-P-T'];
        const userToken=response.headers['X-U-T'];
        window.sessionStorage.setItem("X-P-T", publicToken==null?"not authentication :(":publicToken);
        window.sessionStorage.setItem("X-U-T", userToken==null?"not authentication :(":userToken);

        return response;
    });


    return apiClient;

}



