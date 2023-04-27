<template>
    <div>
        Edit Issue
        <v-btn @click="btnClik()"> Fa algo</v-btn>
        <v-btn @click="changeData()"> Canvai data</v-btn>


        <button class="btn-small">es la clase que toca</button>

    </div>
</template>

<script >
    import { onMounted, ref } from 'vue';
    import {simpleFetch} from '../utils/utils';


    export default {
        setup() {
            let endPoint = "issues/";
    
            //ref es fa saervir per tal que les variable s'actualitzin automaticament a l'hora de pintar-ho
            let data = ref('data');


            function btnClik() {
                console.log("btn click");
                
                fetch('http://deploy-env.eba-6a6b2amf.us-west-2.elasticbeanstalk.com/usuaris/sign_in/google-oauth2', {
                        method: "POST",
                        mode: "no-cors",
                        
                        
                        headers: {
                            'Accept': 'application/json',
                            "Content-Type": "application/json",
                        },
                        
                        body: JSON.stringify({access_token: 'eyJhbGciOiJSUzI1NiIsImtpZCI6Ijg2OTY5YWVjMzdhNzc4MGYxODgwNzg3NzU5M2JiYmY4Y2Y1ZGU1Y2UiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI3NzA3NTc1MTA0MjYtMmxuaWFxYWxmY2pqazMzdGwxbGJpNzV1MzJzYmMydDAuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI3NzA3NTc1MTA0MjYtMmxuaWFxYWxmY2pqazMzdGwxbGJpNzV1MzJzYmMydDAuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMTYxNDc3NzYzOTI3Njk5MzU3MzAiLCJlbWFpbCI6ImNoZW5vYS5jYW1wZGVsYWNyZXUxM0BnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwibm9uY2UiOiIzZGMwNmVkY2ViNzA5ZDVkYmFjN2MyZGQ2MTdmNWU1YTc2MmI4MGVkNGJkNmUxODI3MmViNWY1Y2Q4MzJhYjdjIiwibmFtZSI6IkNoZW5vYSBDYW1wZGVsYWNyZXUgSnVhbmVzIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FHTm15eFl0dmoxdTRKd2RQdEhnS2hhYmZuZTQ0ZHZGTU1rcTlQbnVJY2JkPXM5Ni1jIiwiZ2l2ZW5fbmFtZSI6IkNoZW5vYSIsImZhbWlseV9uYW1lIjoiQ2FtcGRlbGFjcmV1IEp1YW5lcyIsImxvY2FsZSI6ImNhIiwiaWF0IjoxNjgyMTc1MzQ0LCJleHAiOjE2ODIxNzg5NDQsImp0aSI6ImJkNzgxOWNjZGU1YTg5NjRkODhkMDljMzg5NTFkMmZhZmIwNGY4YjUifQ.iSPVcEfcIWw0AJ0E0dXaLESsE-tbJ75J80AFvq7mVtNi4eFPK392AJ390MOZRC8kL-lKZEC1WxQrPKz46CrdT_6RtSFSRAbxCDjub1TvzFaMjr3YoJZFgnJskZRC5cwNR9XVTtvph-wnstNmRYUNHzVar5GnBKcIt66RLy0KhVl6o3FD5aaNsOU7VWuIz0rOQm_Mn5eEu1d7_YA5nqi21TdINWqWXwhVWZvHoqgtI5wdlLfl1s7E_hbjUiB4Ti1RMi8eEMkNkkX7qdDXRa6CpcGrZ-KOgrBv5ni5iMKjO-xIuWnENFS-CKSzEV6sk96to2OkYDMOjcIU0ZBvqDDLtA'}),
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                        })
                        .catch(console.error)
                
            }

            async function changeData() {
                
                console.log("before change data: ", data.value);
                data.value = 'newvalue';
                console.log("after change data: ", data.value);
               

                
            }


            /*
                la funcio onMounted serveix pk s'executi tot just abans de que es pinti tot, 
                aixo ens permet tindre les dades abans que fem el render sinos patara.

                la funcio simpleFetch, fa un fetch i retorna les dades, nomes cal passarli els seguents parametres:
                    endpoint: es tot allo despres del host/
                    methoda: GET POST PUT..
                    dataBody: nomes cal en cas de put o get, normalment cal passar un objecta
            */
            return {
                btnClik,
                changeData
            }
        },
        onMounted() {
            //simpleFetch("xats/", "GET", "").then((data) => console.log(data))  
            console.log("mounted")
        }
    }

    

</script>

<style scoped>
    
</style>


