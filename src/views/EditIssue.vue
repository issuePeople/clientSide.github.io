<template>
    <div>
        Edit Issue
        <v-btn @click="btnClik()"> Fa algo</v-btn>
        <v-btn @click="changeData()"> Canvai data</v-btn>


        <button class="btn-small">es la clase que toca</button>

    </div>
</template>

<script setup>
    import { onMounted, ref } from 'vue';
    import {simpleFetch} from '../utils/utils';


    let endPoint = "/issues";
    
    //ref es fa saervir per tal que les variable s'actualitzin automaticament a l'hora de pintar-ho
    let data = ref('data');


    function btnClik() {
        console.log("btn click");
    }

    function changeData() {
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
    onMounted(() => {
        simpleFetch(endPoint, "GET", "").then((data) => console.log(data))
    })

</script>

<style scoped>
    
</style>


