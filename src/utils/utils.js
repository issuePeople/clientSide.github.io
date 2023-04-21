let token = '4399aea952484e30ad0208cd72bf64a083c9b8c4';

export function setToken(value) {
    token = value;
}

export async function simpleFetch(endPoint, method, bodyData) {
    console.log("tokenValue: ", token);
    console.log("endPoint: ", endPoint);

    let host = 'http://issuepeople-env.eba-bhtdckwp.us-west-2.elasticbeanstalk.com/';
    console.log("url: ", host+endPoint);

    let result;
    if (method === "GET" || method === "HEAD") {
        result = await fetch(host+endPoint,  {   
            method: method,
            mode: 'no-cors',
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json",
            },
        })
    }
    else {
        result = await fetch(host+endPoint,  {   
            method: method,
            mode: 'no-cors',
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json",
                'Authorization': 'Basic '+ token, 
            },
            body: JSON.stringify(bodyData),
        })
    }

    let resultJson = await result.json();

    console.log("finalResult: ", resultJson);
    return resultJson;    
}