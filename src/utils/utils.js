let token = '959f71f16d42c05c267153f4ce64e822bb829df7';

export function setToken(value) {
    token = value;
}

export async function simpleFetch(endPoint, method, bodyData) {
    console.log("tokenValue: ", token);
    console.log("endPoint: ", endPoint);

    let host = 'http://issuepeople-env.eba-bhtdckwp.us-west-2.elasticbeanstalk.com/api/';
    console.log("url: ", host+endPoint);

    let data;
    
    if (method === "GET" || method === "HEAD") {
        try {
            const response = await fetch(host+endPoint, {
                method: method,
                headers: {
                    "Content-Type": "application/json",
                    'Accept': 'application/json',
                    'Authorization': 'Token '+ token, 
                },
            });
            data = await response.json();
        } catch (error) {
            console.error('Error en el fetch, resposta derror:', error);
        }
    }
    else {
        try {
            const response = await fetch(host+endPoint, {
                method: method,
                headers: {
                    "Content-Type": "application/json",
                    'Accept': 'application/json',
                    'Authorization': 'Token '+ token, 
                },
                body: JSON.stringify(bodyData),
            });
            data = await response.json();
        } catch (error) {
            console.error('Error en el fetch, resposta derror:', error);
        }
    }

    console.log("data: ", data);
    return data;    
}