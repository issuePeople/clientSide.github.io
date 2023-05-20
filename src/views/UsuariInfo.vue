<template>
    <div class="profile centered" style="margin-left: 50px;">
        <section class="profile-bar">
            <div>
                <img 
                :src=userLogged.avatar.url
                width="200"
                height="200"
                >
            </div>
        </section>
    </div>
    <p>a</p>
</template>

<script>
    //imports
    import { ref } from 'vue';
    import {simpleFetch} from '@/utils/utils';
    
    export default {
        name: "UsuariInfo",
        setup() {

            //Per obtenir la url
            let url = window.location.href;
            //Separar la url per '/'
            let directories = url.split("/");
            let idUser = ref(directories[(directories.length - 1)]);

            async function canviar_timeline() {

            }

            async function canviar_watched() {
                
            }

            async function canviar_token() {
                
            }

            async function canviar_usuari() {
                
            }
        },
        
        //hacer funciones antes de que se pinte todo
        mounted() {
            //Per obtenir la url
            let url = window.location.href;
            //Separar la url per '/'
            let directories = url.split("/");
            let userId = directories[(directories.length - 1)];
            
            //Obtengo todos los usuarios para ponerlos en el apartado "Your Team"
            let allUsers = ref([]);
            simpleFetch("usuaris/", "GET", "").then((data) => allUsers.value = data);
            console.log("all Users: ", allUsers.value);

            //Obtengo el usuario loggeado
            let idUser = ref([]);
            let userLogged = ref([]);
            simpleFetch("usuaris/"+1+"/", "GET", "").then((data) => userLogged.value = data);
            console.log("Logged user: ", userLogged.value);

        }
    }
</script>

<style scoped>
    .my-tag {
    display: flex;
    justify-content: space-between;
    margin-right: 5px;
}
</style>


