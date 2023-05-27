<template>

    <div>
        <RouterLink to="/edit/1">
            <img source="logo" width="40" height="40" />
        </RouterLink>

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
                                <div style="display: flex; flex-direction: row; padding-left: 10px">
                                    <input id="busca" type="search" placeholder="Buscar" class="ng-pristine ng-valid ng-empty ng-touched">
                                    <button type="submit">
                                        <i class="fa fa-search" aria-hidden="true"></i>
                                    </button>
                                </div>
                                <div style="display:flex; flex-direction:row; padding-left:10px">
                                    <div  style="padding-right:10px">
                                        <div  id="tag_on">
                                            <i class="fa fa-toggle-on" aria-hidden="true" style="color:#008aa8"></i>
                                        </div>
                                        <div  id="tag_off" style="display:none">
                                            <i class="fa fa-toggle-off" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                    <span>Tags</span>
                                </div>
                            </div>
                            <div class="new-issue">
                                <button class="btn-small">
                                    <span class="icon icon-add" style="font-size: large;padding-right: 5px;">+</span>
                                    <a> New Issue</a>
                                </button>
                                <button class="btn-icon">
                                    <i class="fa fa-plus" aria-hidden="true"></i>
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
                                <!--Llistat Filters-->
                                <ul>
                                    <li> <!--Tipus-->
                                        <button v-show="!tipus" class="filters-cat-single"  id="categoria_filtre_tipus" name = "obre" style="display: flex" @click="showfil(2)">
                                            <span>Tipus</span>
                                            <div class="ng-animate-disabled">
                                               <!-- <svg class="icon icon-arrow-right" style="fill: ">
                                                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                                                </svg>-->
                                            </div>
                                        </button>
                                        <button v-show="tipus" class="filters-cat-single selected" name="tanca" id="categoria_filtre_tipus_selected" style="display: none" @click="showfil(2)">
                                            <span>Tipus</span>
                                            <div class="ng-animate-disabled">
                                               <!-- <svg class="icon icon-arrow-down" style="fill: cred">
                                                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                                                </svg>-->
                                            </div>
                                        </button>
                                        <div class="filter-list" v-show="tipus" style="display:none"  name="tanca"  id="filtre_tipus" >
                                            <div>
                                                <button class="single-filter single-filter-type-general" style="border-color: rgb(228, 64, 87); width:100%" @click="filtra('tipus','Bug')">
                                                    <span class="name">Bug</span>
                                                </button>
                                                <button class="single-filter single-filter-type-general" style="border-color: rgb(81, 120, 211)" @click="modif_url('tipus','P',1)">
                                                    <span class="name">Pregunta</span>
                                                </button>
                                                <button class="single-filter single-filter-type-general" style="border-color: rgb(64, 228, 206)" @click="modif_url('tipus','M',1)">
                                                    <span class="name">Millora</span>
                                                </button>
                                                
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <button  v-show="!gravetat" class="filters-cat-single" id="categoria_filtre_gravetat" name = "obre" @click="showfil(3)">
                                            <span>Gravetat</span>
                                            <div class="ng-animate-disabled">
                                                <!--<svg class="icon icon-arrow-right" style="fill: cred">
                                                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                                                </svg>-->
                                            </div>
                                        </button>
                                        <button  v-show="gravetat" class="filters-cat-single selected" name="tanca" id="categoria_filtre_gravetat_selected"  @click="showfil(3)" style="display:none">
                                            <span>Gravetat</span>
                                            <div class="ng-animate-disabled">
                                                <!--<svg class="icon icon-arrow-down" style="fill: cred">
                                                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                                                </svg>-->
                                            </div>
                                        </button>
                                        <div  v-show="gravetat" class="filter-list" style="display:none" name="tanca" id="filtre_gravetat">
                                            <div>
                                                <button class="single-filter single-filter-type-general" style="border-color: rgb(112, 114, 143); width:100%" @click="modif_url('gravetat','D',1)">
                                                    <span class="name">Desitjada</span>
                                                </button>
                                                <button class="single-filter single-filter-type-general" style="border-color: rgb(64, 168, 228)" @click="modif_url('gravetat','M',1)">
                                                    <span class="name">Menor</span>
                                                </button>
                                                <button class="single-filter single-filter-type-general" style="border-color: rgb(64, 228, 124)" @click="modif_url('gravetat','N',1)">
                                                    <span class="name">Normal</span>
                                                </button>
                                                <button class="single-filter single-filter-type-general" style="border-color: rgb(228, 162, 64)" @click="modif_url('gravetat','I',1)">
                                                    <span class="name">Important</span>
                                                </button>
                                                <button class="single-filter single-filter-type-general" style="border-color: rgb(211, 84, 80)" @click="modif_url('gravetat','C',1)">
                                                    <span class="name"> Critica</span>
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <button v-show="!prioritat" class="filters-cat-single" id="categoria_filtre_prioritat" name = "obre" @click="showfil(4)">
                                            <span>Prioritat</span>
                                            <div class="ng-animate-disabled">
                                                <!--<svg class="icon icon-arrow-right" style="fill: cred">
                                                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                                                </svg>-->
                                            </div>
                                        </button>
                                        <button v-show="prioritat" class="filters-cat-single selected" name="tanca" id="categoria_filtre_prioritat_selected" @click="showfil(4)"  style="display:none">
                                            <span>Prioritat</span>
                                            <div class="ng-animate-disabled">
                                                <!--<svg class="icon icon-arrow-down" style="fill: cred">
                                                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                                                </svg>-->
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
                                                <!--<svg class="icon icon-arrow-right" style="fill: cred">
                                                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                                                </svg>-->
                                            </div>
                                        </button>
                                        <button v-show="estat" class="filters-cat-single selected" name="tanca" id="categoria_filtre_estat_selected" @click="showfil(5)" style="display:none">
                                            <span>Estat</span>
                                            <div class="ng-animate-disabled">
                                                <!--<svg class="icon icon-arrow-down" style="fill: cred">
                                                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                                                </svg>-->
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
                                        <button v-show="!assignat" class="filters-cat-single" id="categoria_filtre_assignat" name = "obre" @click="showfil(6)">
                                            <span>Assignat a</span>
                                            <div class="ng-animate-disabled">
                                                <!--<svg class="icon icon-arrow-right" style="fill: cred">
                                                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                                                </svg>-->
                                            </div>
                                        </button>
                                        <button v-show="assignat" class="filters-cat-single selected" name="tanca" id="categoria_filtre_assignat_selected" @click="showfil(6)" style="display:none">
                                            <span>Assignat a</span>
                                            <div class="ng-animate-disabled">
                                                <!--<svg class="icon icon-arrow-down" style="fill: cred">
                                                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                                                </svg>-->
                                            </div>
                                        </button>
                                        <div v-show="assignat" class="filter-list" style="display:none" name="tanca" id="filtre_assignat">
                                            <div>
                                                <v-list-item v-for="usuari in usuaris" :key="usuari.id" >
                                                    <button class="single-filter single-filter-type-general" style="border-color: rgb(81, 120, 211); width:100%">
                                                        <span class="name">{usuari.username}</span>
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
                        <div class="issues-table basic-table" style="width: 100%; border-spacing: 0 15px;">
                            <div class="row title">
                                <div class="level-field">
                                    <div style="display:flex; flex-direction: row;">
                                        <span class="wide" style="padding-top: 6px;">Tipus</span>
                                        <div class="mobile" style="padding-top:6px;">
                                            <span class="first-letter">Tipus</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="level-field">
                                    <div style="display:flex; flex-direction: row;" >
                                        <span class="wide" style="padding-top: 6px;">Gravetat</span>
                                        <div class="mobile" style="padding-top:6px;">
                                            <span class="first-letter">Gravetat</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="level-field">
                                    <div style="display:flex; flex-direction: row;">
                                        <span class="wide" style="padding-top: 6px;">Prioritat</span>
                                        <div class="mobile" style="padding-top: 6px;">
                                            <span class="first-letter">Prioritat</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="subject">
                                    <div style="display:flex; flex-direction: row;">
                                        <span class="wide" style="padding-top: 6px;">Issue</span>
                                    </div>
                                </div>
                                <div class="issue-field">
                                    <div style="display:flex; flex-direction: row;">
                                        <span class="wide" style="padding-top: 6px;">Estat</span>
                                    </div>
                                </div>
                                <div class="modified-field">
                                    <div style="display:flex; flex-direction: row;">
                                        <span class="wide" style="padding-top: 6px;">Modificat</span>
                                    </div>
                                </div>
                                <div class="assigned-field">
                                    <div style="display:flex; flex-direction: row;">
                                        <span class="wide" style="padding-top: 6px;">Assignat a</span>
                                    </div>
                                </div>

                            </div>
                            <div>
                                <v-list  :key=componentKey style=" ;" >
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
</div>


        
        </div>
    

</template>

<script>
    //import exempleComponent from '../components/exempleComponent.vue';
    import issueComp from '../components/issueComp.vue';
    import { ref } from 'vue';
    import {simpleFetch} from '../utils/utils';
    import { RouterLink, RouterView } from 'vue-router'

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
            let query_parameters=ref([]);
            let componentKey = ref(0);




            function showfil(param){
                if(param === 1){
                    showFiltres.value = !showFiltres.value;
                }
                else if(param === 2){
                    tipus.value = !tipus.value;
                }
                else if(param === 3){
                    gravetat.value = !gravetat.value;
                }
                else if(param === 4){
                    prioritat.value = !prioritat.value;
                }
                else if(param === 5){
                    estat.value = !estat.value;
                }
                else if(param === 6){
                    console.log(usuaris[0].id)
                    assignat.value = !assignat.value;
                }
            }
            function filtra(tipus,valor){
                console.log("aaaaaaaaaaaaaaaa")
                console.log(issues.value)
                console.log(issues.value.filter(tipus.value === "Bug"))
                issues.value = issues.value.filter(issue => issue.tipus.value === "Bug")
                console.log(issues.value)
                //simpleFetch('issues/'+endpoint,"GET","").then((data)=>this.issues = data);
                //componentKey.value += 1;
            }


            //el valor de int indica afegir filtre, borrar o ordenar
            // 1 es crear, 2 es borrar i 3 es ordenar
            function modif_url(param,value,int){

                var trobat = false;
                console.log(query_parameters,"aaaaaaaaaaa")
                if(!query_parameters.length){
                    query_parameters ="?"+param+"="+value
                }
                else{
                    var query=query_parameters.split('&');
                    var out=[];
                    for(var i = 0; query.length >i ; ++i){
                        if(query[i].search(param) !== -1){
                            trobat=true;
                            var filtre = query[i].split('=');
                            var parametres = filtre[1].split(',');
                            if(int == 1){
                                parametres.push(value);
                                var params = parametres.toString();
                                out.push(param+"__in="+params);

                            }
                            else if(int ==3){
                                out.push(param+"="+value)
                            }
                            else{
                                if(parametres.length != 1){
                                    var params =[]
                                    for(var j =0; parametres.length >j;++j){
                                        if(parametres[j] !== value){
                                            params.push(parametres[j])
                                        }
                                    }
                                    params = params.toString();
                                    out.push(param+"__in="+params)

                                }
                            }
                        }
                        else{
                            out.push(query[i]);
                        }
                    }
                    if(trobat === false){
                        out.push(param+"__in="+value)
                    }
                    var result=out.join('&')
                    console.log(result,"aaaaaaaaaaaaa")
                    query_parameters= result



                }
                //filtra(query_parameters)

            }

            return {
                falseBoolean,
                trueBoolean,


                issues,
                usuaris,
                query_parameters,
                showFiltres,
                tipus,
                gravetat,
                prioritat,
                estat,
                assignat,
                filtra,
                showfil,
                modif_url,
                componentKey,


            }
            },
        mounted() {
            console.log(window.location.href)
            simpleFetch("issues/", "GET", "").then((data) => this.issues = data);
            simpleFetch("usuaris/", "GET", "").then((data) => this.usuaris = data);



           
        }
    }

</script>

<style scoped>

</style>
