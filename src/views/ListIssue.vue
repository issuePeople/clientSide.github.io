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
                                <button class="btn-filter" @click="showfil()">
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
                                        <button class="filters-cat-single"  id="categoria_filtre_tipus" name = "obre" style="display: flex">
                                            <span>Tipus</span>
                                            <div class="ng-animate-disabled">
                                                <svg class="icon icon-arrow-right" style="fill: block">
                                                   <!-- <i class="fa fa-angle-right" aria-hidden="true"></i>-->
                                                </svg>
                                            </div>
                                        </button>
                                        <!--<button class="filters-cat-single selected" name="tanca" id="categoria_filtre_tipus_selected" style="display: none">
                                            <span>Tipus</span>
                                            <div class="ng-animate-disabled">
                                                <svg class="icon icon-arrow-down" style="fill: cred">
                                                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                                                </svg>
                                            </div>
                                        </button>-->
                                        <div class="filter-list" style="display:none"  name="tanca"  id="filtre_tipus" >
                                            <div>
                                                <button class="single-filter single-filter-type-general" style="border-color: rgb(228, 64, 87); width:100%">
                                                    <span>Bug</span>
                                                </button>
                                                <button class="single-filter single-filter-type-general" style="border-color: rgb(81, 120, 211)">
                                                    <span>Pregunta</span>
                                                </button>
                                                <button class="single-filter single-filter-type-general" style="border-color: rgb(64, 228, 206)">
                                                    <span class="name"></span>
                                                </button>
                                                
                                            </div>
                                        </div>
                                    </li>
                                    <!--<li>Gravetat
                                        <button class="filters-cat-single" id="categoria_filtre_gravetat" name = "obre"onclick="filtre_tipus('filtre_gravetat')">
                                            <span>Gravetat</span>
                                            <div class="ng-animate-disabled">
                                                <svg class="icon icon-arrow-right" style="fill: cred">
                                                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                                                </svg>
                                            </div>
                                        </button>
                                        <button class="filters-cat-single selected" name="tanca"id="categoria_filtre_gravetat_selected" onclick="filtre_tipus('filtre_gravetat')" style="display:none">
                                            <span>Gravetat</span>
                                            <div class="ng-animate-disabled">
                                                <svg class="icon icon-arrow-down" style="fill: cred">
                                                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                                                </svg>
                                            </div>
                                        </button>
                                        <div class="filter-list" style="display:none" name="tanca"id="filtre_gravetat">
                                            <div>
                                                {%for key,value in TGravetat%}
                                                {%if  request.GET.gravetat is null or key not in request.GET.gravetat%}
                                                
                                                    {%if key == 'D'%}
                                                        <button class="single-filter single-filter-type-general"style="border-color: rgb(112, 114, 143); width:100%">
                                                    {%elif key == 'M'%}
                                                        <button class="single-filter single-filter-type-general" style="border-color: rgb(64, 168, 228);">
                                                    {%elif key == 'N'%}
                                                        <button class="single-filter single-filter-type-general" style="border-color: rgb(64, 228, 124);">
                                                    {%elif key == 'I'%}
                                                        <button class="single-filter single-filter-type-general" style="border-color: rgb(228, 162, 64);">
                                                    {%else%} 
                                                        <button class="single-filter single-filter-type-general" style="border-color: rgb(211, 84, 80);">
                                                    {%endif%} 
                                                    
                                                    <div onclick="modif_url('gravetat','{{key}}','1')" class="name">{{value}}</div>
                                                    </button>
                                                    {%endif%}
                                                {%endfor%}  
                                            </div>
                                        </div>
                                    </li>
                                    <li>Prioritat
                                        <button class="filters-cat-single" id="categoria_filtre_prioritat" name = "obre"onclick="filtre_tipus('filtre_prioritat')">
                                            <span>Prioritat</span>
                                            <div class="ng-animate-disabled">
                                                <svg class="icon icon-arrow-right" style="fill: cred">
                                                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                                                </svg>
                                            </div>
                                        </button>
                                        <button class="filters-cat-single selected" name="tanca"id="categoria_filtre_prioritat_selected" onclick="filtre_tipus('filtre_prioritat')" style="display:none">
                                            <span>Prioritat</span>
                                            <div class="ng-animate-disabled">
                                                <svg class="icon icon-arrow-down" style="fill: cred">
                                                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                                                </svg>
                                            </div>
                                        </button>
                                        <div class="filter-list" style="display:none" name="tanca"id="filtre_prioritat">
                                            <div>
                                                {%for key,value in TPrioritat%}
                                                {%if request.GET.prioritat is null or key not in request.GET.prioritat%}
                                                {%if key == 'B'%}
                                                        <button class="single-filter single-filter-type-general"style="border-color: rgb(168, 228, 64); width:100%">
                                                {%elif key == 'M'%}
                                                        <button class="single-filter single-filter-type-general" style="border-color: rgb(228, 206, 64);">
                                                {%else%} 
                                                        <button class="single-filter single-filter-type-general" style="border-color: rgb(228, 124, 64);">
                                                {%endif%} 
                                                    <div onclick="modif_url('prioritat','{{key}}','1')" class="name">{{value}}</div>
                                                    </button>
                                                {%endif%}
                                                {%endfor%}
                                            </div>
                                        </div>
                                    </li>
                                    <li>Estat
                                        <button class="filters-cat-single" id="categoria_filtre_estat" name = "obre"onclick="filtre_tipus('filtre_estat')">
                                            <span>Estat</span>
                                            <div class="ng-animate-disabled">
                                                <svg class="icon icon-arrow-right" style="fill: cred">
                                                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                                                </svg>
                                            </div>
                                        </button>
                                        <button class="filters-cat-single selected" name="tanca"id="categoria_filtre_estat_selected" onclick="filtre_tipus('filtre_estat')" style="display:none">
                                            <span>Estat</span>
                                            <div class="ng-animate-disabled">
                                                <svg class="icon icon-arrow-down" style="fill: cred">
                                                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                                                </svg>
                                            </div>
                                        </button>
                                        <div class="filter-list" style="display:none" name="tanca"id="filtre_estat">
                                            <div>
                                                {%for key,value in TEstats%}
                                                {%if request.GET.estat is null or key not in request.GET.estat%}
                                                    {%if key == 'N'%}
                                                        <button class="single-filter single-filter-type-general"style="border-color: rgb(112, 114, 143);; width:100%">
                                                    {%elif key == 'D'%}
                                                        <button class="single-filter single-filter-type-general" style="border-color: rgb(64, 168, 228);">
                                                    {%elif key == 'T'%}
                                                        <button class="single-filter single-filter-type-general" style="border-color: rgb(228, 206, 64);">
                                                    {%elif key == 'C'%}
                                                        <button class="single-filter single-filter-type-general" style="border-color: rgb(168, 228, 64);">
                                                    {%elif key == 'I'%}
                                                        <button class="single-filter single-filter-type-general" style="border-color: rgb(228, 64, 87);">
                                                    {%elif key == 'R'%}
                                                        <button class="single-filter single-filter-type-general" style="border-color: rgb(169, 170, 188);">
                                                    {%else%} 
                                                        <button class="single-filter single-filter-type-general" style="border-color: rgb(81, 120, 211);">
                                                    {%endif%}
                                                    <div onclick="modif_url('estat','{{key}}','1')" class="name">{{value}}</div>
                                                    </button>
                                                    {%endif%}
                                                {%endfor%}
                                            </div>
                                        </div>
                                    </li>
                                    <li>Assignat
                                        <button class="filters-cat-single" id="categoria_filtre_assignat" name = "obre"onclick="filtre_tipus('filtre_assignat')">
                                            <span>Assignat a</span>
                                            <div class="ng-animate-disabled">
                                                <svg class="icon icon-arrow-right" style="fill: cred">
                                                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                                                </svg>
                                            </div>
                                        </button>
                                        <button class="filters-cat-single selected" name="tanca"id="categoria_filtre_assignat_selected" onclick="filtre_tipus('filtre_assignat')" style="display:none">
                                            <span>Assignat a</span>
                                            <div class="ng-animate-disabled">
                                                <svg class="icon icon-arrow-down" style="fill: cred">
                                                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                                                </svg>
                                            </div>
                                        </button>
                                        <div class="filter-list" style="display:none" name="tanca"id="filtre_assignat">
                                            <div>
                                                {%for usuari in usuaris%}
                                                {%with usuari.user.id|stringformat:"s" as id%}
                                                {%if request.GET.assignat is null or id not in request.GET.assignat%}
                                                <button class="single-filter single-filter-type-general" style="border-color: rgb(81, 120, 211);">
                                                    <div onclick="modif_url('assignat','{{usuari.user.id}}','1')" class="name">{{usuari.user.username}}</div>
                                                    
                                                </button>
                                                {%endif%}
                                                {%endwith%}
                                                {%endfor%}
                                            </div>
                                        </div>
                                    </li>
                                    <li>Tags
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
            let showFiltres = ref(false);
            

          
            /*async function fetchUser() {
               let llistaIssue;
                console.log("aaaaaaa")
                
                simpleFetch("issues/", "GET", "").then(data => llistaIssue= data);
                listItems.value = llistaIssue;    
                console.log("issues: ", llistaIssue);
                console.log("aaaaaaaaaaaaaa",issues)
                
                
            }*/
            async function showfil(){
                if(this.showFiltres == true) {
                   this.showFiltres =false

                } else{
                    this.showFiltres = true 
                }
                
            }

            return {
                falseBoolean,
                trueBoolean,
                
                //fetchUser,
                issues,
                showFiltres,
                showfil
            }
        },
        mounted() {
            simpleFetch("issues/", "GET", "").then((data) => this.issues = data);
            console.log("issueObject: ",this.issues );
        }
    }

</script>

<style scoped>

</style>
