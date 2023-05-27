
<template>
  <div class="master" style="width: 100%; display: grid; place-content: center;">
    <section class="main user-profile">
        <header>
            <header>
                <h1 style="color: #1e96b1;">Configuració d'usuari</h1>
            </header>
        </header>
    </section>
  </div>
</template>

<script>
  //imports
  import { ref } from 'vue';
  import {simpleFetch} from '@/utils/utils'; 
    

  export default {
    name: "UsuariPerfil",
    setup() {
      
      //Per obtenir la url
      let url = window.location.href;
      console.log("Url: ",url);
      //Separar la url per '/'
      let directories = url.split("/");
      let idUser = ref(directories[(directories.length - 1)]);
      
      let userLogged = ref([]);

      return {
        userLogged
      }
    },

    mounted() {
      //Per obtenir la url
      let url = window.location.href;
      //Separar la url per '/'
      let directories = url.split("/");
      let userId = directories[(directories.length - 1)];
      
      //Obtengo el usuario loggeado
      simpleFetch("usuaris/"+1+"/", "GET", "").then((data) => this.userLogged = data);
      console.log("Logged user: ", this.userLogged);
    }
  }


</script>

<style scoped>
  @media (min-width: 1024px) {
    .about {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }
</style>
  