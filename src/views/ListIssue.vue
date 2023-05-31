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
                                    <font-awesome-icon icon="sliders"></font-awesome-icon>
                                    <span class="text" style="margin: 5px;">Filtres</span>
                                </button>
                                <div style="display: flex; flex-direction: row; padding-left: 10px">
                                    <input id="busca" type="search" placeholder="Buscar" class="ng-pristine ng-valid ng-empty ng-touched">
                                    <button type="submit" style="margin-left: 7px">
                                        <font-awesome-icon icon="search"></font-awesome-icon>
                                    </button>
                                </div>
                                <div style="display:flex; flex-direction:row; padding-left:10px">
                                    <div  style="padding-right:10px">
                                        <div v-show="toggle"  id="tag_on" @click="showfil(9)">
                                            <font-awesome-icon icon="toggle-on" size="lg"></font-awesome-icon>
                                        </div>
                                        <div v-show="!toggle" id="tag_off" style="display:none" @click="showfil(9)">
                                            <font-awesome-icon icon="toggle-off" size="lg"></font-awesome-icon>
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
                                            <div class="filters-wrapper">
                                                <div v-for="a in arrayFilter()" :key=a.value>
                                                    <div  class="single-applied-filter"> <!--v-if="existeix('tipus__in',T.lletra)"-->
                                                        <div class="name" >{{a.value}}</div>
                                                        <button class="remove-filter" @click="modif_url(a.param,a.value,2)">X</button>
                                                    </div>
                                                </div>


                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <!--Llistat Filters-->
                                <ul>
                                    <li> <!--Tipus-->
                                        <button v-show="!tipus" class="filters-cat-single"  id="categoria_filtre_tipus" name = "obre" style="display: flex" @click="showfil(2)">
                                            <span>Tipus</span>
                                            <div class="ng-animate-disabled">
                                               <font-awesome-icon icon="angle-right"></font-awesome-icon>
                                            </div>
                                        </button>
                                        <button v-show="tipus" class="filters-cat-single selected" name="tanca" id="categoria_filtre_tipus_selected" style="display: none" @click="showfil(2)">
                                            <span>Tipus</span>
                                            <div class="ng-animate-disabled">
                                                <font-awesome-icon icon="angle-down"></font-awesome-icon>
                                            </div>
                                        </button>
                                        <div class="filter-list" v-show="tipus" style="display:none"  name="tanca"  id="filtre_tipus" >
                                            <div>
                                                <button  class="single-filter single-filter-type-general" style="border-color: rgb(228, 64, 87); width:100%" @click="modif_url('tipus','B',1)">
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
                                                <font-awesome-icon icon="angle-right"></font-awesome-icon>
                                            </div>
                                        </button>
                                        <button  v-show="gravetat" class="filters-cat-single selected" name="tanca" id="categoria_filtre_gravetat_selected"  @click="showfil(3)" style="display:none">
                                            <span>Gravetat</span>
                                            <div class="ng-animate-disabled">
                                                <font-awesome-icon icon="angle-down"></font-awesome-icon>
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
                                                <font-awesome-icon icon="angle-right"></font-awesome-icon>
                                            </div>
                                        </button>
                                        <button v-show="prioritat" class="filters-cat-single selected" name="tanca" id="categoria_filtre_prioritat_selected" @click="showfil(4)"  style="display:none">
                                            <span>Prioritat</span>
                                            <div class="ng-animate-disabled">
                                                <font-awesome-icon icon="angle-down"></font-awesome-icon>
                                            </div>
                                        </button>
                                        <div v-show="prioritat" class="filter-list" style="display:none" name="tanca" id="filtre_prioritat">
                                            <div>
                                                <button class="single-filter single-filter-type-general" style="border-color: rgb(168, 228, 64); width:100%" @click="modif_url('prioritat','B',1)">
                                                    <span class="name">Baixa</span>
                                                </button>
                                                <button class="single-filter single-filter-type-general" style="border-color: rgb(228, 206, 64); width:100%" @click="modif_url('prioritat','M',1)">
                                                    <span class="name">Mitja</span>
                                                </button>
                                                <button class="single-filter single-filter-type-general" style="border-color: rgb(228, 124, 64); width:100%" @click="modif_url('prioritat','A',1)">
                                                    <span class="name">Alta</span>
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <button v-show="!estat" class="filters-cat-single" id="categoria_filtre_estat" name = "obre" @click="showfil(5)">
                                            <span>Estat</span>
                                            <div class="ng-animate-disabled">
                                                <font-awesome-icon icon="angle-right"></font-awesome-icon>
                                            </div>
                                        </button>
                                        <button v-show="estat" class="filters-cat-single selected" name="tanca" id="categoria_filtre_estat_selected" @click="showfil(5)" style="display:none">
                                            <span>Estat</span>
                                            <div class="ng-animate-disabled">
                                                <font-awesome-icon icon="angle-down"></font-awesome-icon>
                                            </div>
                                        </button>
                                        <div  v-show="estat" class="filter-list" style="display:none" name="tanca" id="filtre_estat">
                                            <div>
                                                <button class="single-filter single-filter-type-general" style="border-color:  rgb(112, 114, 143); width:100%" @click="modif_url('estat','N',1)">
                                                    <span class="name">Nova</span>
                                                </button>
                                                <button class="single-filter single-filter-type-general" style="border-color: rgb(64, 168, 228); width:100%" @click="modif_url('estat','D',1)">
                                                    <span class="name">En Curs</span>
                                                </button>
                                                <button class="single-filter single-filter-type-general" style="border-color: rgb(228, 206, 64); width:100%" @click="modif_url('estat','T',1)">
                                                    <span class="name">Llesta per testejar</span>
                                                </button>
                                                <button class="single-filter single-filter-type-general" style="border-color: rgb(168, 228, 64); width:100%" @click="modif_url('estat','C',1)">
                                                    <span class="name">Tancada</span>
                                                </button>
                                                <button class="single-filter single-filter-type-general" style="border-color: rgb(228, 64, 87); width:100%" @click="modif_url('estat','I',1)">
                                                    <span class="name">Necessita informació</span>
                                                </button>
                                                <button class="single-filter single-filter-type-general" style="border-color: rgb(169, 170, 188); width:100%" @click="modif_url('estat','R',1)">
                                                    <span class="name">Rebutjada</span>
                                                </button>
                                                <button class="single-filter single-filter-type-general" style="border-color: rgb(81, 120, 211); width:100%" @click="modif_url('estat','P',1)">
                                                    <span class="name">Ajornada</span>
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <button v-show="!assignat" class="filters-cat-single" id="categoria_filtre_assignat" name = "obre" @click="showfil(6)">
                                            <span>Assignat a</span>
                                            <div class="ng-animate-disabled">
                                                <font-awesome-icon icon="angle-right"></font-awesome-icon>
                                            </div>
                                        </button>
                                        <button v-show="assignat" class="filters-cat-single selected" name="tanca" id="categoria_filtre_assignat_selected" @click="showfil(6)" style="display:none">
                                            <span>Assignat a</span>
                                            <div class="ng-animate-disabled">
                                                <font-awesome-icon icon="angle-down"></font-awesome-icon>
                                            </div>
                                        </button>
                                        <div v-show="assignat" class="filter-list" style="display:none" name="tanca" id="filtre_assignat">
                                            <div v-for="usuari in usuaris" :key="usuari.id">
                                                    <button class="single-filter single-filter-type-general" style="border-color: rgb(81, 120, 211); width:100%" @click="modif_url('assignacio__user__id',usuari.id,1)">
                                                        <span class="name">{{usuari.username}}</span>
                                                    </button>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <button v-show="!tags_show" class="filters-cat-single" id="categoria_filtre_rol" name = "obre" @click="showfil(7)">
                                            <span>Tags</span>
                                            <div class="ng-animate-disabled">
                                                <font-awesome-icon icon="angle-right"></font-awesome-icon>
                                            </div>
                                        </button>
                                        <button v-show="tags_show" class="filters-cat-single selected" name="tanca" id="categoria_filtre_rol_selected" @click="showfil(7)" style="display:none">
                                            <span>Tags</span>
                                            <div class="ng-animate-disabled">
                                                <font-awesome-icon icon="angle-down"></font-awesome-icon>
                                            </div>
                                        </button>
                                        <div v-show="tags_show" class="filter-list" style="display:none" name="tanca" id="filtre_rol" @click="showfil(7)">
                                            <div v-for="tag in tags" :key="tag.nom">
                                                <button v-show="tag.num_issues != 0" class="single-filter single-filter-type-tag"  :style="{'background-color': tag.color}" @click="modif_url('tags__nom',tag.nom,1)">
                                                    <span class="name">{{tag.nom}}</span>
                                                    <span class="number">{{tag.num_issues}}</span>
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <button v-show="!creats" class="filters-cat-single" id="categoria_filtre_creat" name = "obre" @click="showfil(8)">
                                            <span>Creat per</span>
                                            <div class="ng-animate-disabled">
                                                <font-awesome-icon icon="angle-right"></font-awesome-icon>
                                            </div>
                                        </button>
                                        <button v-show="creats" class="filters-cat-single selected" name="tanca" id="categoria_filtre_creat_selected" @click="showfil(8)" style="display:none">
                                            <span>Creat per</span>
                                            <div class="ng-animate-disabled">
                                                <font-awesome-icon icon="angle-down"></font-awesome-icon>
                                            </div>
                                        </button>
                                        <div v-show="creats" class="filter-list" style="display:none" name="tanca" id="filtre_creat" @click="showfil(8)">
                                            <div v-for="usuari in usuaris" :key="usuari.id">
                                                <button class="single-filter single-filter-type-general" style="border-color: rgb(168, 228, 64);" @click="modif_url('creador__user__id',usuari.id,1)">
                                                    <span  class="name">{{usuari.username}}</span>
                                                </button>
                                            </div>
                                        </div>
                                    </li>
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
                                        <div style="display:flex;flex-direction: column; padding-left: 10px; ">
                                            <button class="arrow-up" @click="modif_url('ordering','tipus',3)">
                                                <font-awesome-icon icon="sort-up" ></font-awesome-icon>
                                            </button>
                                            <button class="arrow-up" @click="modif_url('ordering','-tipus',3)">
                                                <font-awesome-icon icon="sort-down" ></font-awesome-icon>
                                            </button>
                                            </div>

                                    </div>
                                </div>
                                <div class="level-field">
                                    <div style="display:flex; flex-direction: row;" >
                                        <span class="wide" style="padding-top: 6px;">Gravetat</span>
                                        <div class="mobile" style="padding-top:6px;">
                                            <span class="first-letter">Gravetat</span>
                                        </div>
                                        <div style="display:flex;flex-direction: column; padding-left: 10px; ">
                                        <button class="arrow-up" @click="modif_url('ordering','gravetat',3)">
                                            <font-awesome-icon icon="sort-up" ></font-awesome-icon>
                                        </button>
                                        <button class="arrow-up" @click="modif_url('ordering','-gravetat',3)">
                                            <font-awesome-icon icon="sort-down" ></font-awesome-icon>
                                        </button>
                                            </div>
                                    </div>
                                </div>
                                <div class="level-field">
                                    <div style="display:flex; flex-direction: row;">
                                        <span class="wide" style="padding-top: 6px;">Prioritat</span>
                                        <div class="mobile" style="padding-top: 6px;">
                                            <span class="first-letter">Prioritat</span>
                                        </div>
                                        <div style="display:flex;flex-direction: column; padding-left: 10px; ">
                                        <button class="arrow-up" @click="modif_url('ordering','prioritat',3)">
                                            <font-awesome-icon icon="sort-up" ></font-awesome-icon>
                                        </button>
                                        <button class="arrow-up" @click="modif_url('ordering','-prioritat',3)">
                                            <font-awesome-icon icon="sort-down" ></font-awesome-icon>
                                        </button>
                                            </div>
                                    </div>
                                </div>
                                <div class="subject">
                                    <div style="display:flex; flex-direction: row;">

                                        <span class="wide" style="padding-top: 6px;">Issue</span>

                                    <div style="display:flex;flex-direction: column; padding-left: 10px; ">
                                    <button class="arrow-up" @click="modif_url('ordering','issue',3)">
                                        <font-awesome-icon icon="sort-up" ></font-awesome-icon>
                                    </button>
                                    <button class="arrow-up" @click="modif_url('ordering','-issue',3)">
                                        <font-awesome-icon icon="sort-down" ></font-awesome-icon>
                                    </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="issue-field">
                                    <div style="display:flex; flex-direction: row;">
                                        <span class="wide" style="padding-top: 6px;">Estat</span>
                                        <div style="display:flex;flex-direction: column; padding-left: 10px; ">
                                            <button class="arrow-up" @click="modif_url('ordering','estat',3)">
                                                <font-awesome-icon icon="sort-up" ></font-awesome-icon>
                                            </button>
                                            <button class="arrow-up" @click="modif_url('ordering','-estat',3)">
                                                <font-awesome-icon icon="sort-down" ></font-awesome-icon>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="modified-field">
                                    <div style="display:flex; flex-direction: row;">
                                        <span class="wide" style="padding-top: 6px;">Modificat</span>
                                        <div style="display:flex;flex-direction: column; padding-left: 10px; ">
                                            <button class="arrow-up" @click="modif_url('ordering','dataModificacio',3)">
                                                <font-awesome-icon icon="sort-up" ></font-awesome-icon>
                                            </button>
                                            <button class="arrow-up" @click="modif_url('ordering','-dataModificacio',3)">
                                                <font-awesome-icon icon="sort-down" ></font-awesome-icon>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="assigned-field">
                                    <div style="display:flex; flex-direction: row;">
                                        <span class="wide" style="padding-top: 6px;">Assignat a</span>
                                        <div style="display:flex;flex-direction: column; padding-left: 10px; ">
                                            <button class="arrow-up" @click="modif_url('ordering','assignacio',3)">
                                                <font-awesome-icon icon="sort-up" ></font-awesome-icon>
                                            </button>
                                            <button class="arrow-up" @click="modif_url('ordering','-assignacio',3)">
                                                <font-awesome-icon icon="sort-down" ></font-awesome-icon>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div>
                                <v-list  :key=componentKey  >
                                    <v-list-item v-for="issue in issues" :key="issue.id" >
                                        <issueComp
                                            :id=issue.id
                                            :subject=issue.subject
                                            :tipus=issue.tipus
                                            :bloquejat=issue.bloquejat
                                            :gravetat=issue.gravetat
                                            :prioritat=issue.prioritat
                                            :estat=issue.estat
                                            :data=(issue.dataModificacio)
                                            :dataLimit=issue.dataLimit
                                            :assignacio=issue.assignacio
                                            :usuaris = usuaris
                                            :toggle = toggle
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
    import {computed, ref} from 'vue';
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
            let issues_filtrat =ref();
            let tags = ref();
            let usuaris = ref();
            let showFiltres = ref(false);
            let tipus = ref(false)
            let gravetat = ref(false)
            let prioritat= ref(false)
            let estat= ref(false)
            let assignat=ref(false)
            let tags_show=ref(false)
            let creats=ref(false)
            let toggle=ref(false)
            let query_parameters=([]);
            let componentKey = ref(0);
            let mostrar = ref([])

            const TEstats = [{estat: "Nova", lletra: "N"}, "Ready for test", "Closed", "Needs info", "Rejected", "Postponed"];
            const TTipus = [{tipus:"Bug",lletra:"B"}, {tipus:"Pregunta",lletra:"P"}, {tipus:"Millora",lletra:"M"}];
            const TGravetat = ["Wishlist", "Minor", "Normal", "Important", "Critical"];
            const TPrioritat = ["Low", "Normal", "High"];




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
                    assignat.value = !assignat.value;
                }
                else if(param === 7){
                    tags_show.value = !tags_show.value
                }
                else if(param === 8){
                    creats.value= !creats.value
                }
                else if(param === 9){
                    toggle.value = !toggle.value
                }
            }

            /*const arrayFilter = computed(() => {
            let array=[];
                if (query_parameters.length !== 0) {

                    console.log('9090909090909090909090909090',query_parameters)
                    var query = query_parameters.split('&')

                    for (var i = 0; query.length > i; ++i) {
                        if(query[i].search("ordering") === -1){
                            if(query[i].search("tipus") !== -1){
                                if(query[i].search("B") !== -1) array.push({param:"tipus",value:"Bug"})
                                if(query[i].search("P") !== -1) array.push({param:"tipus",value:"Pregunta"})
                                if(query[i].search("M") !== -1) array.push({param:"tipus",value:"Millora"})
                            }
                        }
                        //if param

                        //array.push();

                        //if (query[i].search(param) !== -1 && query[i].search(value) !== -1) {
                          //  array.push({value:"Bug",param:"tipus"})
                        //}
                    }
                }
                return array

            });*/

           function arrayFilter(){
                let array=[];
                if (query_parameters.length !== 0) {

                    console.log('ple')
                    var query = query_parameters.split('&')

                    for (var i = 0; query.length > i; ++i) {
                        if(query[i].search("ordering") === -1){
                            if(query[i].search("tipus") !== -1){
                                if(query[i].search("B") !== -1) array.push({param:"tipus",value:"Bug"})
                                if(query[i].search("P") !== -1) array.push({param:"tipus",value:"Pregunta"})
                                if(query[i].search("M") !== -1) array.push({param:"tipus",value:"Millora"})
                            }
                            else if(query[i].search("gravetat") !== -1){
                                if(query[i].search("D") !== -1) array.push({param:"gravetat",value:"Desitjada"})
                                if(query[i].search("M") !== -1) array.push({param:"gravetat",value:"Menor"})
                                if(query[i].search("N") !== -1) array.push({param:"gravetat",value:"Menor"})
                                if(query[i].search("I") !== -1) array.push({param:"gravetat",value:"Important"})
                                if(query[i].search("C") !== -1) array.push({param:"gravetat",value:"Critica"})
                            }
                            else if(query[i].search("prioritat") !== -1){
                                if(query[i].search("B") !== -1) array.push({param:"tipus",value:"Baixa"})
                                if(query[i].search("M") !== -1) array.push({param:"tipus",value:"Mitja"})
                                if(query[i].search("A") !== -1) array.push({param:"tipus",value:"Alta"})
                            }
                            else if(query[i].search("estat") !== -1){
                                if(query[i].search("N") !== -1) array.push({param:"gravetat",value:"Nova"})
                                if(query[i].search("D") !== -1) array.push({param:"gravetat",value:"En curs"})
                                if(query[i].search("T") !== -1) array.push({param:"gravetat",value:"Llesta per testejar"})
                                if(query[i].search("C") !== -1) array.push({param:"gravetat",value:"Tancada"})
                                if(query[i].search("I") !== -1) array.push({param:"gravetat",value:"Necessita informacio"})
                                if(query[i].search("R") !== -1) array.push({param:"gravetat",value:"Rebutjada"})
                                if(query[i].search("P") !== -1) array.push({param:"gravetat",value:"Ajornada"})
                            }
                            else if(query[i].search("assignacio__user__id") !== -1){
                                let usu = query[i].split('=');
                                let array_usu = usu[1].split(',');
                                for(var j = 0; j < array_usu.length; ++j){
                                    array.push({param:"assignacio__user__id",value:array_usu[j]})
                                }
                            }
                            else if(query[i].search("tags__nom") !== -1){
                                let tagss = query[i].split('=');
                                let array_tagss = tagss[1].split(',');
                                for(var j = 0; j < array_tagss.length; ++j){
                                    array.push({param:"tags__nom",value:array_tagss[j]})
                                }
                            }
                            else if(query[i].search("creador__user__id") !== -1){
                                let usu = query[i].split('=');
                                let array_usu = usu[1].split(',');
                                for(var j = 0; j < array_usu.length; ++j){
                                    array.push({param:"creador__user__id",value:array_usu[j]})
                                }
                            }

                        }
                        //if param

                        //array.push();

                        //if (query[i].search(param) !== -1 && query[i].search(value) !== -1) {
                          //  array.push({value:"Bug",param:"tipus"})
                        //}
                    }
                }
                return array;
            }

            function existeix(param,value){
               let array = arrayFilter()
                for(var i = 0; i < array.length;++i){
                    if(array[i].param === param && array[i].value === value){
                        return true
                    }
                }
                return false
            }


            function filtra(query){
                let endpoint = "issues/?"+ query
                console.log(endpoint)
                simpleFetch(endpoint,"GET","").then((data)=>issues.value = data);
                console.log(issues)
            }


            //el valor de int indica afegir filtre, borrar o ordenar
            // 1 es crear, 2 es borrar i 3 es ordenar
            function modif_url(param,value,int){

                var trobat = false;
                console.log(query_parameters,"aaaaaaaaaaa")
                if(!query_parameters.length){
                    if(int === 3){
                        query_parameters=param+"="+value
                    }
                    else {
                        query_parameters= param + "__in=" + value
                    }
                }
                else{
                    var query=query_parameters.split('&');
                    var out=[];
                    var mos=[];
                    for(var i = 0; query.length >i ; ++i){
                        if(query[i].search(param) !== -1 && int === 3){
                            trobat = true
                                out.push(param+"="+value)
                        }
                        else {
                            if (query[i].search(param + "__in") !== -1) {
                                trobat = true;
                                var filtre = query[i].split('=');
                                var parametres = filtre[1].split(',');
                                if (int == 1) {
                                    parametres.push(value);
                                    var params = parametres.toString();
                                    out.push(param + "__in=" + params);

                                } else {
                                    if (parametres.length != 1) {
                                        var params = []
                                        for (var j = 0; parametres.length > j; ++j) {
                                            if (parametres[j] !== value) {
                                                params.push(parametres[j])
                                            }
                                        }
                                        params = params.toString();
                                        out.push(param + "__in=" + params)
                                    }
                                }
                            }
                            else{
                                out.push(query[i]);
                            }
                        }

                    }
                    if(trobat === false){
                        out.push(param+"__in="+value)
                    }
                    var result=out.join('&')
                    console.log(result,"aaaaaaaaaaaaa")
                    query_parameters= result
                }
                filtra(query_parameters)
            }

            return {
                falseBoolean,
                trueBoolean,
                mostrar,
                issues,
                usuaris,
                tags,
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
                tags_show,
                creats,
                TEstats,
                arrayFilter,
                toggle,
                TTipus,
                existeix


            }
            },
            mounted() {
            console.log(window.location.href)
            simpleFetch("issues/", "GET", "").then((data) => this.issues = data);
            simpleFetch("usuaris/", "GET", "").then((data) => this.usuaris = data);
            simpleFetch("tags/","GET","").then((data) => this.tags = data);





        }
    }

</script>

<style scoped>

</style>
