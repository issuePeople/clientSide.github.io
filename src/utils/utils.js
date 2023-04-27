let token = '959f71f16d42c05c267153f4ce64e822bb829df7';

export function setToken(value) {
    token = value;
}

export async function simpleFetch(endPoint, method, bodyData) {
    console.log("tokenValue: ", token);
    console.log("endPoint: ", endPoint);

    let host = 'http://issuepeople-env.eba-bhtdckwp.us-west-2.elasticbeanstalk.com/api/';
    console.log("url: ", host+endPoint);

    
    let result;
    if (method === "GET" || method === "HEAD") {
        result = await fetch(host+endPoint,  {   
            method: method,
            mode: 'no-cors',
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                'Accept': 'application/json',
            },
        })
    }
    else {
        result = await fetch(host+endPoint,  {   
            method: method,
            //mode: 'no-cors',
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                'Accept': 'application/json',
                'Authorization': 'Basic '+ token, 
            },
            body: JSON.stringify(bodyData),
        })
    }

    let resultJson = await result.json();

    console.log("finalResult: ", resultJson);
    
    return 'resultJson';    
}