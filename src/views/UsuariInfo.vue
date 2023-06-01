<template>
    <div class="profile centered" style="margin-left: 50px;">
        <!-- Info del perfil container -->
        <section class="profile-bar">
            <!-- Avatar -->
            <div v-if="userLogged.avatar">
                <img 
                    :src=userLogged.avatar
                    width="200"
                    height="200"
                >
            </div>
            <div v-else>
                <img 
                    :src="'https://issuestorage.s3.us-west-2.amazonaws.com/media/avatar/unnamed.png'"
                    width="200"
                    height="200"
                >
            </div>
            <!-- Nom -->
            <div  class="profile-data">
                <h1 v-if="userLogged.nom" class="not-full-name">
                    <p>{{userLogged.nom}}</p>
                </h1>
                <h1 v-else class="not-full-name">
                    <p>Nom no trobat</p>
                </h1>
                <!-- Username -->
                <div v-if="userLogged.username" class="username">
                    <p>@{{userLogged.username}}</p>
                </div>
                <div v-else class="username">
                    <p>@UsernameNoTrobat</p>
                </div>
            </div>
            
            <div class="profile-stats">
                <div class="stat">
                </div>
            </div>
            <!-- Bio -->
            <div v-if="userLogged.bio" class="profile-quote">
                <span>
                    {{userLogged.bio}}
                </span>
            </div>
        </section>
        <!-- Timeline/Watched/Token/Your Team -->
        <div class="main">
            <!-- Taskboard cambiar entre Timeline/watched/Token -->
                <div>
                    <table style="width: 450px; border-collapse: separate; border-spacing: 0px 5px;">
                        <tr>
                            <td>
                                <h1>&nbsp;</h1>
                            </td>
                            <td>
                                <h1 @click="mostrar='timeline'" style="cursor: default;"><font-awesome-icon icon="lock"></font-awesome-icon></h1>
                            </td>
                            <td>
                                <a v-if="mostrar === 'timeline'" @click="mostrar='timeline'" style="cursor: default;">
                                <h1>&nbsp;<u>Timeline</u>&nbsp; &nbsp;</h1>
                                </a>
                                <a v-else @click="mostrar='timeline'" style="cursor: default;">
                                <h1>&nbsp;Timeline&nbsp; &nbsp;</h1>
                                </a>
                            </td>
                            <td>
                                <a @click="mostrar='watched'" style="cursor: default;">
                                <h1>&nbsp;<font-awesome-icon icon="lock"></font-awesome-icon></h1>
                                </a>
                            </td>
                            <td>
                                <a v-if="mostrar === 'watched'" @click="mostrar='watched'" style="cursor: default;">
                                    <h1>&nbsp;<u>Watched</u>&nbsp; &nbsp;</h1>
                                </a>
                                <a v-else @click="mostrar='watched'" style="cursor: default;">
                                    <h1>&nbsp;Watched&nbsp; &nbsp;</h1>
                                </a>
                            </td>
                            <td v-if="userLogged.token">
                                <a @click="mostrar='token'" style="cursor: default;">
                                    <h1><font-awesome-icon icon="lock"></font-awesome-icon></h1>
                                </a>
                            </td>
                            <td v-if="userLogged.token">
                                <a v-if="mostrar === 'token'" @click="mostrar='token'" style="cursor: default;">
                                    <h1>&nbsp;<u>Token</u>&nbsp;</h1>
                                </a>
                                <a v-else @click="mostrar='token'" style="cursor: default;">
                                    <h1>&nbsp;Token&nbsp;</h1>
                                </a>
                            </td>
                        </tr>
                    </table>
                
                    <p style="color: darkgrey;">______________________________________________________________________________</p>
                    <div>
                        
                        <!-- Watched -->
                        <section v-if="mostrar === 'watched'" class="watched">
                            <table class="issues-table" style="width: 100%;border-collapse:separate; border-spacing: 0 10px;" >
                                <tr v-for="observat in userLogged.observats">
                                    <td>
                                        <div style="display: flex; align-items: center;">
                                            <div v-if="observat.assignacio" style="display: flex; align-items: center;">
                                                <img 
                                                    :src="observat.assignacio.avatar"
                                                    width="40"
                                                    height="40"
                                                    style="border-radius: 50%; margin-right: 5px;"
                                                >
                                            </div>
                                            <div v-else style="display: flex; align-items: center;">
                                                <img 
                                                    :src="'https://issuestorage.s3.us-west-2.amazonaws.com/media/avatar/unnamed.png'"
                                                    width="40" 
                                                    height="40" 
                                                    style="border-radius: 50%; margin-right: 5px;"
                                                >
                                            </div>
                                            <span v-if="observat.assignacio">{{observat.assignacio.username}}&nbsp;</span>
                                            <a :href="'/#/edit/'+observat.id">#{{observat.id}} {{observat.subject}}</a> &nbsp;{{observat.estat}}
                                        </div>
                                        
                                    <p style="color:darkgrey">______________________________________________________________________________</p>
                                    </td>
                                </tr>
                            </table>
                        </section>
                        <!-- Token -->

                        <section v-else-if="userLogged.token && mostrar === 'token'" class="token">
                            <p>Token {{userLogged.token}}</p>
                        </section> 

                        <!-- Timeline -->
                        <section v-else class="timeline">
                            <div class="issue-page" style="width: 100%; ">
                                <table class="issues-table" style="width: 100%; border-collapse: separate; border-spacing: 0 10px;">
                                    <tr class="row table-main" v-for="log in userLogged.logs" style="background-color: white;">
                                        <td>
                                            <div style="display: flex; align-items: center;">
                                                <img 
                                                    :src="log.usuari.avatar"
                                                    width="40"
                                                    height="40"
                                                    style="border-radius: 50%; margin-right: 5px;"
                                                >
                                                <div  style="display: inline-block;">
                                                    <a @click="updateData(usuari.id)" :href="'/#/usuari/'+log.usuari.id">{{log.usuari.username}} &nbsp;</a>
                                                    <span v-if="log.tipus === 'Creada'" style="display: inline;">ha creat l'</span>
                                                    <span v-else-if="log.tipus === 'Nou attachment'" style="display: inline;">ha afegit el fitxer 
                                                        <a v-if="log.valor_nou" style="display: inline;">{{log.valor_nou}}</a>
                                                        <a v-else style="display: inline;">No definit</a> al
                                                    </span>
                                                    <span v-else-if="log.tipus === 'Attachment esborrat'" style="display: inline;">ha esborrat el fitxer
                                                        <span v-if="log.valor_previ" style="display: inline;">{{log.valor_previ}}</span>
                                                        <span v-else style="display: inline;">No definit</span> al
                                                    </span>
                                                    <span v-else-if="log.tipus === 'Tag afegida'" style="display: inline;">ha afegit el tag 
                                                        <a v-if="log.valor_nou" style="display: inline;">{{log.valor_nou}}</a>
                                                        <a v-else style="display: inline;">No definit</a> al
                                                    </span>
                                                    <span v-else-if="log.tipus === 'Tag esborrada'" style="display: inline;">ha esborrat el tag 
                                                        <span v-if="log.valor_previ" style="display: inline;">{{log.valor_previ}}</span>
                                                        <span v-else style="display: inline;">No definit</span> al
                                                    </span>
                                                    <span v-else style="display: inline;">ha canviat l'atribut {{log.tipus}} de 
                                                        <a v-if="log.valor_nou" style="display: inline;">{{log.valor_nou}}</a>
                                                        <a v-else style="display: inline;">No definit</a> a
                                                        <span v-if="log.valor_previ" style="display: inline;">{{log.valor_previ}}</span>
                                                        <span v-else style="display: inline;">No definit</span> del
                                                    </span>
                                                    <span style="display: inline;">issue&nbsp;</span>
                                                    <span v-if="log.issue"><a :href="'/#/edit/'+log.issue.id">#{{log.issue.id}} {{log.issue.subject}}</a></span>
                                                    <span v-else>esborrat</span>
                                                </div>
                                            </div>
                                            <p>&nbsp;</p>
                                            <p style="color: darkgrey; font-size: 15px;" >{{ new Date(log.data).toLocaleString() }}</p>
                                            <p style="color:darkgrey">__________________________________________________________________________________________</p>
                                        </td>
                                    </tr>
                                      
                                </table>
                            </div>
                        </section>
                        
                    </div>
                </div>
        </div>
        <div class="timeline-wrapper" style="margin-left: 30px; width: 130px;">
            <h1 style="white-space: nowrap;">Your team</h1>
            <div >
                <a v-for="usuari in allUsers" :href="'/#/usuari/'+usuari.id" @click="updateData(usuari.id)">
                    <img 
                        :src="usuari.avatar"
                        width="32"
                        height="32"
                        style="border-radius: 50%; margin-right: 5px;"
                    >
                </a>
            </div>
        </div>
    </div>
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
            let mostrar = ref('timeline');

            let allUsers = ref([]);
            let userLogged = ref([]);

            function updateData(id) {
                //simpleFetch("usuaris/", "GET", "").then((data) => this.allUsers = data);

                simpleFetch("usuaris/"+id+"/", "GET", "").then((data) => this.userLogged = data);
            }

            return {
                userLogged,
                allUsers,
                mostrar,
                updateData
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

            //Obtengo el usuario en cuestion
            simpleFetch("usuaris/"+userId+"/", "GET", "").then((data) => this.userLogged = data);
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


