<template>
    <div class="profile centered" style="margin-left: 50px;">
        <section class="profile-bar">
            <div>
                <img 
                    :src=userLogged.avatar
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


            let allUsers = ref([]);
            let userLogged = ref([]);

            async function canviar_timeline() {

            }

            async function canviar_watched() {
                
            }

            async function canviar_token() {
                
            }

            async function canviar_usuari() {
                
            }

            return {
                userLogged,
                allUsers
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
            simpleFetch("usuaris/", "GET", "").then((data) => this.allUsers = data);
            console.log("all Users: ", this.allUsers);

            //Obtengo el usuario loggeado
            simpleFetch("usuaris/"+1+"/", "GET", "").then((data) => this.userLogged = data);
            console.log("Logged user: ", this.userLogged);

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


