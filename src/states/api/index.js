import axios from 'axios';



const apiCall = (useBaseUrl,url,method,data,token) => {

        let completeUrl;
        let headers;
        switch (useBaseUrl) {
            case 'apiNode':
                completeUrl = process.env.REACT_APP_BACKEND_URL + url;
                headers= {'Accept': 'application/json',}
                break;
            case 'apiPaljet':
                completeUrl = 'http://181.105.127.194:8080/' + url;
                //completeUrl = 'http://192.168.1.150:8080/' + url;
                headers = { 
                    'accept': 'application/json',
                    'EmpID': 1,
                    'authorization': 'Basic SVZBTjI6SVZBTklWQU4y'
                };
                break;
        
            default:
                completeUrl = url
                break;
        }

        if (token) {
            headers = { 'x-auth-token': token };
        }

        
        let options = {
            method: method,
            url: completeUrl,
            headers: headers,                    
            // headers: {
            //     'Accept': 'application/json',
            //     'Content-Type': 'application/json;charset=UTF-8'
            // },
            data: data
        };
        return (axios(options));
    
    
}
 
export default apiCall;

/*let url = 'https://someurl.com';
let options = {
            method: 'POST',
            url: url,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            data: {
                property_one: value_one,
                property_two: value_two
            }
        };
let response = await axios(options);
let responseOK = response && response.status === 200 && response.statusText === 'OK';
if (responseOK) {
    let data = await response.data;
    // do something with data
}*/