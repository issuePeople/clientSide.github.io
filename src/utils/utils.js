function getTokenCookie() {
    console.log("cookies: ", document.cookie);
    let name = "Token=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

export async function simpleFetch(endPoint, method, bodyData, type) {
    let token = getTokenCookie();
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
        console.log("data: ", data);
        return data;
    }
    else if (method === "DELETE") {
        try {
            const response = await fetch(host+endPoint, {
                method: method,
                headers: {
                    "Content-Type": "application/json",
                    'Accept': 'application/json',
                    'Authorization': 'Token '+ token,
                },
            });
        } catch (error) {
            console.error('Error en el fetch, resposta derror:', error);
        }
    }
    else if (type === "formData") {
        try {
            console.log("form appends: ");
            for (let key of bodyData.entries()) {
                console.log(key[0], " and ", key[1]);
            }
            const response = await fetch(host+endPoint, {
                method: method,
                headers: {
                    'Authorization': 'Token '+ token,
                },
                body: bodyData,
            });
            data = await response.json();
        } catch (error) {
            console.error('Error en el fetch, resposta derror:', error);
        }
        console.log("data: ", data);
        return data;
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
        console.log("data: ", data);
        return data;
    }


}