<template>

    <div>
        <RouterLink to="/edit/1">
            <img source="logo" width="40" height="40" />
        </RouterLink>

        <v-btn @click="fetchUser()">A</v-btn>

<div style="margin-left: 0px;">
    <div class="master" style>
        <div class = "wrapper issues lightbox-generic-form">
            <div class="main issue-main">
                <div class="issue-top">
                    <header class="issue-header">
                        <h1>
                            <span>Issues</span>
                        </h1>
                        <div class="taskboard-actions">
                            <div class="issue-table-options-start" >
                                <button class="btn-filter" @click="showfil(1)">
                                    <i class="fa fa-sliders" aria-hidden="true"></i>
                                    <span class="text" style="margin: 5px;">Filtres</span>
                                </button>
                             </div>
                        </div>
                    </header>
                </div>
                <div class="issue-container">
                    <div class="filters-bar" v-show="showFiltres"  >
                        <div>
                            <div class="filters-step-cat">
                                <div class="filters-cat">
                                    <div class="filters-applied">
                                        <div class="filters-included">
                                            <div class="filters-title">Filtrat per:</div>
                                        </div>
                                    </div>
                                </div>
                                <!--Llistat Filtres-->
                                <ul>
                                    <li> <!--Tipus-->
                                        <button v-show="!tipus" class="filters-cat-single"  id="categoria_filtre_tipus" name = "obre" style="display: flex" @click="showfil(2)">
                                            <span>Tipus</span>
                                            <div class="ng-animate-disabled">
                                                <svg class="icon icon-arrow-right" style="fill: block">
                                                   <!-- <i class="fa fa-angle-right" aria-hidden="true"></i>-->
                                                </svg>
                                            </div>
                                        </button>
                                        <button v-show="tipus" class="filters-cat-single selected" name="tanca" id="categoria_filtre_tipus_selected" style="display: none" @click="showfil(2)">
                                            <span>Tipus</span>
                                            <div class="ng-animate-disabled">
                                                <svg class="icon icon-arrow-down" style="fill: cred">
                                                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                                                </svg>
                                            </div>
                                        </button>
                                        <div class="filter-list" v-show="tipus" style="display:none"  name="tanca"  id="filtre_tipus" >
                                            <div>
                                                <button class="single-filter single-filter-type-general" style="border-color: rgb(228, 64, 87); width:100%">
                                                    <span class="name">Bug</span>
                                                </button>
                                                <button class="single-filter single-filter-type-general" style="border-color: rgb(81, 120, 211)">
                                                    <span class="name">Pregunta</span>
                                                </button>
                                                <button class="single-filter single-filter-type-general" style="border-color: rgb(64, 228, 206)">
                                                    <span class="name">Millora</span>
                                                </button>
                                                
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <button  v-show="!gravetat" class="filters-cat-single" id="categoria_filtre_gravetat" name = "obre" @click="showfil(3)">
                                            <span>Gravetat</span>
                                            <div class="ng-animate-disabled">
                                                <svg class="icon icon-arrow-right" style="fill: cred">
                                                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                                                </svg>
                                            </div>
                                        </button>
                                        <button  v-show="gravetat" class="filters-cat-single selected" name="tanca" id="categoria_filtre_gravetat_selected"  @click="showfil(3)" style="display:none">
                                            <span>Gravetat</span>
                                            <div class="ng-animate-disabled">
                                                <svg class="icon icon-arrow-down" style="fill: cred">
                                                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                                                </svg>
                                            </div>
                                        </button>
                                        <div  v-show="gravetat" class="filter-list" style="display:none" name="tanca" id="filtre_gravetat">
                                            <div>
                                                <button class="single-filter single-filter-type-general" style="border-color: rgb(112, 114, 143); width:100%">
                                                    <span class="name">Desitjada</span>
                                                </button>
                                                <button class="single-filter single-filter-type-general" style="border-color: rgb(64, 168, 228)">
                                                    <span class="name">Menor</span>
                                                </button>
                                                <button class="single-filter single-filter-type-general" style="border-color: rgb(64, 228, 124)">
                                                    <span class="name">Normal</span>
                                                </button>
                                                <button class="single-filter single-filter-type-general" style="border-color: rgb(228, 162, 64)">
                                                    <span class="name">Important</span>
                                                </button>
                                                <button class="single-filter single-filter-type-general" style="border-color: rgb(211, 84, 80)">
                                                    <span class="name"> Critica</span>
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <button v-show="!prioritat" class="filters-cat-single" id="categoria_filtre_prioritat" name = "obre" @click="showfil(4)">
                                            <span>Prioritat</span>
                                            <div class="ng-animate-disabled">
                                                <svg class="icon icon-arrow-right" style="fill: cred">
                                                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                                                </svg>
                                            </div>
                                        </button>
                                        <button v-show="prioritat" class="filters-cat-single selected" name="tanca" id="categoria_filtre_prioritat_selected" @click="showfil(4)"  style="display:none">
                                            <span>Prioritat</span>
                                            <div class="ng-animate-disabled">
                                                <svg class="icon icon-arrow-down" style="fill: cred">
                                                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                                                </svg>
                                            </div>
                                        </button>
                                        <div v-show="prioritat" class="filter-list" style="display:none" name="tanca" id="filtre_prioritat">
                                            <div>
                                                <button class="single-filter single-filter-type-general" style="border-color: rgb(168, 228, 64); width:100%">
                                                    <span class="name">Baixa</span>
                                                </button>
                                                <button class="single-filter single-filter-type-general" style="border-color: rgb(228, 206, 64); width:100%">
                                                    <span class="name">Mitja</span>
                                                </button>
                                                <button class="single-filter single-filter-type-general" style="border-color: rgb(228, 124, 64); width:100%">
                                                    <span class="name">Alta</span>
                                                </button>
                                                                                               
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <button v-show="!estat" class="filters-cat-single" id="categoria_filtre_estat" name = "obre" @click="showfil(5)">
                                            <span>Estat</span>
                                            <div class="ng-animate-disabled">
                                                <svg class="icon icon-arrow-right" style="fill: cred">
                                                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                                                </svg>
                                            </div>
                                        </button>
                                        <button v-show="estat" class="filters-cat-single selected" name="tanca" id="categoria_filtre_estat_selected" @click="showfil(5)" style="display:none">
                                            <span>Estat</span>
                                            <div class="ng-animate-disabled">
                                                <svg class="icon icon-arrow-down" style="fill: cred">
                                                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                                                </svg>
                                            </div>
                                        </button>
                                        <div  v-show="estat" class="filter-list" style="display:none" name="tanca" id="filtre_estat">
                                            <div>
                                                <button class="single-filter single-filter-type-general" style="border-color:  rgb(112, 114, 143); width:100%">
                                                    <span class="name">Nova</span>
                                                </button>
                                                <button class="single-filter single-filter-type-general" style="border-color: rgb(64, 168, 228); width:100%">
                                                    <span class="name">En Curs</span>
                                                </button>
                                                <button class="single-filter single-filter-type-general" style="border-color: rgb(228, 206, 64); width:100%">
                                                    <span class="name">Llesta per testejar</span>
                                                </button>
                                                <button class="single-filter single-filter-type-general" style="border-color: rgb(168, 228, 64); width:100%">
                                                    <span class="name">Tancada</span>
                                                </button>
                                                <button class="single-filter single-filter-type-general" style="border-color: rgb(228, 64, 87); width:100%">
                                                    <span class="name">Necessita informació</span>
                                                </button>
                                                <button class="single-filter single-filter-type-general" style="border-color: rgb(169, 170, 188); width:100%">
                                                    <span class="name">Rebutjada</span>
                                                </button>
                                                <button class="single-filter single-filter-type-general" style="border-color: rgb(81, 120, 211); width:100%">
                                                    <span class="name">Proposada</span>
                                                </button>
                                                
                                            </div>
                                        </div>
                                    </li>
                                    <li>Assignat
                                        <button v-how="!assignat" class="filters-cat-single" id="categoria_filtre_assignat" name = "obre" onclick="filtre_tipus('filtre_assignat')">
                                            <span>Assignat a</span>
                                            <div class="ng-animate-disabled">
                                                <svg class="icon icon-arrow-right" style="fill: cred">
                                                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                                                </svg>
                                            </div>
                                        </button>
                                        <button v-show="assignat" class="filters-cat-single selected" name="tanca" id="categoria_filtre_assignat_selected" onclick="filtre_tipus('filtre_assignat')" style="display:none">
                                            <span>Assignat a</span>
                                            <div class="ng-animate-disabled">
                                                <svg class="icon icon-arrow-down" style="fill: cred">
                                                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                                                </svg>
                                            </div>
                                        </button>
                                        <div v-show="assignat" class="filter-list" style="display:none" name="tanca" id="filtre_assignat">
                                            <div>
                                                <v-list-item v-for="usuari in usuaris" :key="usuari.id" >
                                                    <button class="single-filter single-filter-type-general" style="border-color: rgb(81, 120, 211); width:100%">
                                                        <span class="name">"usuari.username"</span>
                                                    </button> 
                                                </v-list-item>

                                            </div>
                                        </div>
                                    </li>
                                    <!--<li>Tags
                                        <button class="filters-cat-single" id="categoria_filtre_rol" name = "obre"onclick="filtre_tipus('filtre_rol')">
                                            <span>Tags</span>
                                            <div class="ng-animate-disabled">
                                                <svg class="icon icon-arrow-right" style="fill: cred">
                                                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                                                </svg>
                                            </div>
                                        </button>
                                        <button class="filters-cat-single selected" name="tanca"id="categoria_filtre_rol_selected" onclick="filtre_tipus('filtre_rol')" style="display:none">
                                            <span>Tags</span>
                                            <div class="ng-animate-disabled">
                                                <svg class="icon icon-arrow-down" style="fill: cred">
                                                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                                                </svg>
                                            </div>
                                        </button>
                                        <div class="filter-list" style="display:none" name="tanca"id="filtre_rol">
                                            <div>
                                                {%for issue in issues%}
                                                {%for tag in issue.tags.all%}
                                                {%if request.GET.tags is null or tag.nom not in request.GET.tags%}
                                                <button class="single-filter single-filter-type-general" style="background-color: {{tag.color}};">
                                                    <div onclick="modif_url('tags','{{tag.nom}}','1')" class="name">{{tag.nom}}</div>
                                                    
                                                </button>
                                                {%endif%}
                                                {%endfor%}
                                                {%endfor%}
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <button class="filters-cat-single" id="categoria_filtre_creat" name = "obre"onclick="filtre_tipus('filtre_creat')">
                                            <span>Creat per</span>
                                            <div class="ng-animate-disabled">
                                                <svg class="icon icon-arrow-right" style="fill: cred">
                                                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                                                </svg>
                                            </div>
                                        </button>
                                        <button class="filters-cat-single selected" name="tanca"id="categoria_filtre_creat_selected" onclick="filtre_tipus('filtre_creat')" style="display:none">
                                            <span>Creat per</span>
                                            <div class="ng-animate-disabled">
                                                <svg class="icon icon-arrow-down" style="fill: cred">
                                                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                                                </svg>
                                            </div>
                                        </button>
                                        <div class="filter-list" style="display:none" name="tanca"id="filtre_creat">
                                            <div>
                                                {%for usuari in usuaris%}
                                                {%with usuari.user.id|stringformat:"s" as id%}
                                                {%if request.GET.creat is null or id not in request.GET.creat%}
                                                <button class="single-filter single-filter-type-general" style="border-color: rgb(168, 228, 64);">
                                                    <div onclick="modif_url('creat','{{usuari.user.id}}','1')" class="name">{{usuari.user.username}}</div>
                                                    
                                                </button>
                                                {%endif%}
                                                {%endwith%}
                                                {%endfor%}
                                            </div>
                                        </div>
                                    </li>-->
                                </ul>
                            </div>
                        </div>
                    
                    </div>
                    <div class="issue-page" style="width: 100%;">
                    <v-list  style=" ;" >
                      <v-list-item v-for="issue in issues" :key="issue.id" >  
                        <issueComp 
                            :id=issue.id 
                            :subject=issue.subject
                            :tipus=issue.tipus
                            :bloquejat=issue.bloquejat
                            :gravetat=issue.gravetat
                            :prioritat=issue.prioritat
                            :estat=issue.estat
                            :assignacio=issue.assignacio 
                        ></issueComp>
                    </v-list-item>
                </v-list>  
            </div>  
                    
                    
                    
                </div>
            </div>
        </div>
    </div>
</div>


        
        </div>
    

</template>

<script>
    //import exempleComponent from '../components/exempleComponent.vue';
    import issueComp from '../components/issueComp.vue';
    import { ref } from 'vue';
    import {simpleFetch} from '../utils/utils';

    export default {
        components: {
            
            issueComp,
        },
        name: "listIssue",
        /*
        Si es necesari l'estructura es aixi
        props: {
            title: String
        },
        setup(props) {
        */
        setup() {

            let falseBoolean = false;
            let trueBoolean = true;
            let issues = ref();
            let usuaris = ref();
            let showFiltres = ref(false);
            let tipus = ref(false)
            let gravetat = ref(false)
            let prioritat= ref(false)
            let estat= ref(false)
            let assignat=ref(false)
            
            

          
            /*async function fetchUser() {
               let llistaIssue;
                console.log("aaaaaaa")
                
                simpleFetch("issues/", "GET", "").then(data => llistaIssue= data);
                listItems.value = llistaIssue;    
                console.log("issues: ", llistaIssue);
                console.log("aaaaaaaaaaaaaa",issues)
                
                
            }*/
            
            
            async function showfil(param){
                if(param == 1){
                    if(this.showFiltres == true) { this.showFiltres =false} 
                    else{this.showFiltres = true}
                }
                else if(param == 2){
                    if(this.tipus == true) {this.tipus =false} 
                    else{this.tipus= true }
                }
                else if(param == 3){ 
                    if(this.gravetat == true) {this.gravetat =false} 
                    else{this.gravetat= true }
                }
                else if(param == 4){ 
                    if(this.prioritat == true) {this.prioritat =false} 
                    else{this.prioritat= true }
                }
                else if(param == 5){ 
                    if(this.estat == true) {this.estat =false} 
                    else{this.estat= true }
                }
                else if(param == 6){
                    if(this.assignat == true) {this.assignat =false} 
                    else{this.assignat= true }
                }
            }


            return {
                falseBoolean,
                trueBoolean,
                
               
                issues,
                usuaris,
                showFiltres,
                tipus,
                gravetat,
                prioritat,
                estat,
                assignat,
                
                showfil,
            }
            },
        mounted() {
            simpleFetch("issues/", "GET", "").then((data) => this.issues = data);
            simpleFetch("usuaris/", "GET", "").then((data) => this.usuaris = data);
            
            console.log("issueObject: ",this.issues );
           
        }
    }

</script>

<style scoped>

</style>
