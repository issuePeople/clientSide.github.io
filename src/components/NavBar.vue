<template>
    <nav style="display: flex; justify-content: space-between; margin-top: 10px; margin-left: 10px; margin-right: 10px;">
        <RouterLink to="/list">
          <img src="./icons/imatge/logo.jpeg" width="40" height="40" />
        </RouterLink>
        
        <RouterLink :to="'/usuari/'+getidCookie()+'/edit'">
          <img src="foto_perfil" width="40" height="40" />
        </RouterLink>
    </nav>
</template>
  
<script>

import {ref} from 'vue';
import {simpleFetch} from '@/utils/utils';
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

export default {
    name: "NavBar",
    setup() {

        function getidCookie() {
            let name = "id=";
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

        return {
            getidCookie,
        }
    }
}
  
</script>

<style scoped>

</style>