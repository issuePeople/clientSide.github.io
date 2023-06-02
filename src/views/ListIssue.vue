<template>
    <div>
        <NavBar></NavBar>
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
                                        <button class="btn-filter" @click="showFiltres=!showFiltres">
                                            <font-awesome-icon icon="sliders"></font-awesome-icon>
                                            <span class="text" style="margin: 5px;">Filtres</span>
                                        </button>
                                        <div style="display: flex; flex-direction: row; padding-left: 10px">
                                            <input type="search" placeholder="Buscar" class="ng-pristine ng-valid ng-empty ng-touched" v-model="searchInp">

                                            <button  @click="modif_url('search',searchInp,1);(searchInp= '')"  style="margin-left: 7px">
                                                <font-awesome-icon icon="search"></font-awesome-icon>
                                            </button>
                                        </div>
                                        <div style="display:flex; flex-direction:row; padding-left:10px">
                                            <div  style="padding-right:10px">
                                                <div v-show="toggle" @click="toggle = !toggle">
                                                    <font-awesome-icon icon="toggle-on" size="lg"></font-awesome-icon>
                                                </div>
                                                <div v-show="!toggle" @click="toggle = !toggle">
                                                    <font-awesome-icon icon="toggle-off" size="lg"></font-awesome-icon>
                                                </div>
                                            </div>
                                            <span>Tags</span>
                                        </div>
                                    </div>

                                    <div class="new-issue">
                                        <RouterLink to='/create'>
                                            <button class="btn-small">
                                                <span class="icon icon-add" style="font-size: large;padding-right: 5px;">+</span>
                                                <a> New Issue</a>
                                            </button>
                                        </RouterLink>

                                        <BulkComponent
                                            @update_issues="updateIssues"
                                        ></BulkComponent>

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
                                                        <div v-for="a in resultArrayFilter" :key=a.value>
                                                            <div  class="single-applied-filter"> <!--v-if="existeix('tipus__in',T.lletra)"-->
                                                                <div class="name" >{{a.value}}</div>
                                                                <button class="remove-filter" @click="modif_url(a.param,a.int,2)">X</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!--Llistat Filters-->
                                        <ul>
                                            <li> <!--Tipus-->
                                                <button v-show="!tipus" @click="tipus=!tipus" class="filters-cat-single" >
                                                    <span>Tipus</span>
                                                    <div class="ng-animate-disabled">
                                                        <font-awesome-icon icon="angle-right"></font-awesome-icon>
                                                    </div>
                                                </button>
                                                <button v-show="tipus" @click="tipus=!tipus" class="filters-cat-single selected">
                                                    <span>Tipus</span>
                                                    <div class="ng-animate-disabled">
                                                        <font-awesome-icon icon="angle-down"></font-awesome-icon>
                                                    </div>
                                                </button>
                                                <div class="filter-list" v-show="tipus"  >
                                                    <div>
                                                        <button  v-show="!(existeix('tipus','B'))" class="single-filter single-filter-type-general" style="border-color: rgb(228, 64, 87); width:100%" @click="modif_url('tipus','B',1)">
                                                            <span class="name">Bug</span>
                                                        </button>
                                                        <button v-show="!(existeix('tipus','P'))" class="single-filter single-filter-type-general" style="border-color: rgb(81, 120, 211)" @click="modif_url('tipus','P',1)">
                                                            <span class="name">Pregunta</span>
                                                        </button>
                                                        <button v-show="!(existeix('tipus','M'))" class="single-filter single-filter-type-general" style="border-color: rgb(64, 228, 206)" @click="modif_url('tipus','M',1)">
                                                            <span class="name">Millora</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <button  v-show="!gravetat" @click="gravetat=!gravetat" class="filters-cat-single" >
                                                    <span>Gravetat</span>
                                                    <div class="ng-animate-disabled">
                                                        <font-awesome-icon icon="angle-right"></font-awesome-icon>
                                                    </div>
                                                </button>
                                                <button  v-show="gravetat" @click="gravetat=!gravetat"  class="filters-cat-single selected">
                                                    <span>Gravetat</span>
                                                    <div class="ng-animate-disabled">
                                                        <font-awesome-icon icon="angle-down"></font-awesome-icon>
                                                    </div>
                                                </button>
                                                <div  v-show="gravetat" class="filter-list" >
                                                    <div>
                                                        <button v-show="!(existeix('gravetat','D'))" class="single-filter single-filter-type-general" style="border-color: rgb(112, 114, 143); width:100%" @click="modif_url('gravetat','D',1)">
                                                            <span class="name">Desitjada</span>
                                                        </button>
                                                        <button v-show="!(existeix('gravetat','M'))" class="single-filter single-filter-type-general" style="border-color: rgb(64, 168, 228)" @click="modif_url('gravetat','M',1)">
                                                            <span class="name">Menor</span>
                                                        </button>
                                                        <button v-show="!(existeix('gravetat','N'))" class="single-filter single-filter-type-general" style="border-color: rgb(64, 228, 124)" @click="modif_url('gravetat','N',1)">
                                                            <span class="name">Normal</span>
                                                        </button>
                                                        <button v-show="!(existeix('gravetat','I'))" class="single-filter single-filter-type-general" style="border-color: rgb(228, 162, 64)" @click="modif_url('gravetat','I',1)">
                                                            <span class="name">Important</span>
                                                        </button>
                                                        <button v-show="!(existeix('gravetat','C'))" class="single-filter single-filter-type-general" style="border-color: rgb(211, 84, 80)" @click="modif_url('gravetat','C',1)">
                                                            <span class="name"> Critica</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <button v-show="!prioritat" @click="prioritat=!prioritat" class="filters-cat-single">
                                                    <span>Prioritat</span>
                                                    <div class="ng-animate-disabled">
                                                        <font-awesome-icon icon="angle-right"></font-awesome-icon>
                                                    </div>
                                                </button>
                                                <button v-show="prioritat" @click="prioritat=!prioritat" class="filters-cat-single selected">
                                                    <span>Prioritat</span>
                                                    <div class="ng-animate-disabled">
                                                        <font-awesome-icon icon="angle-down"></font-awesome-icon>
                                                    </div>
                                                </button>
                                                <div v-show="prioritat" class="filter-list">
                                                    <div>
                                                        <button v-show="!(existeix('prioritat','B'))" class="single-filter single-filter-type-general" style="border-color: rgb(168, 228, 64); width:100%" @click="modif_url('prioritat','B',1)">
                                                            <span class="name">Baixa</span>
                                                        </button>
                                                        <button v-show="!(existeix('prioritat','M'))" class="single-filter single-filter-type-general" style="border-color: rgb(228, 206, 64); width:100%" @click="modif_url('prioritat','M',1)">
                                                            <span class="name">Mitja</span>
                                                        </button>
                                                        <button v-show="!(existeix('prioritat','A'))" class="single-filter single-filter-type-general" style="border-color: rgb(228, 124, 64); width:100%" @click="modif_url('prioritat','A',1)">
                                                            <span class="name">Alta</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <button v-show="!estat" @click="estat=!estat" class="filters-cat-single">
                                                    <span>Estat</span>
                                                    <div class="ng-animate-disabled">
                                                        <font-awesome-icon icon="angle-right"></font-awesome-icon>
                                                    </div>
                                                </button>
                                                <button v-show="estat" @click="estat=!estat" class="filters-cat-single selected">
                                                    <span>Estat</span>
                                                    <div class="ng-animate-disabled">
                                                        <font-awesome-icon icon="angle-down"></font-awesome-icon>
                                                    </div>
                                                </button>
                                                <div  v-show="estat" class="filter-list">
                                                    <div>
                                                        <button v-show="!(existeix('estat','N'))" class="single-filter single-filter-type-general" style="border-color:  rgb(112, 114, 143); width:100%" @click="modif_url('estat','N',1)">
                                                            <span class="name">Nova</span>
                                                        </button>
                                                        <button v-show="!(existeix('estat','D'))" class="single-filter single-filter-type-general" style="border-color: rgb(64, 168, 228); width:100%" @click="modif_url('estat','D',1)">
                                                            <span class="name">En Curs</span>
                                                        </button>
                                                        <button v-show="!(existeix('estat','T'))" class="single-filter single-filter-type-general" style="border-color: rgb(228, 206, 64); width:100%" @click="modif_url('estat','T',1)">
                                                            <span class="name">Llesta per testejar</span>
                                                        </button>
                                                        <button v-show="!(existeix('estat','C'))" class="single-filter single-filter-type-general" style="border-color: rgb(168, 228, 64); width:100%" @click="modif_url('estat','C',1)">
                                                            <span class="name">Tancada</span>
                                                        </button>
                                                        <button v-show="!(existeix('estat','I'))" class="single-filter single-filter-type-general" style="border-color: rgb(228, 64, 87); width:100%" @click="modif_url('estat','I',1)">
                                                            <span class="name">Necessita informació</span>
                                                        </button>
                                                        <button v-show="!(existeix('estat','R'))" class="single-filter single-filter-type-general" style="border-color: rgb(169, 170, 188); width:100%" @click="modif_url('estat','R',1)">
                                                            <span class="name">Rebutjada</span>
                                                        </button>
                                                        <button v-show="!(existeix('estat','P'))" class="single-filter single-filter-type-general" style="border-color: rgb(81, 120, 211); width:100%" @click="modif_url('estat','P',1)">
                                                            <span class="name">Ajornada</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <button v-show="!assignat" @click="assignat=!assignat" class="filters-cat-single">
                                                    <span>Assignat a</span>
                                                    <div class="ng-animate-disabled">
                                                        <font-awesome-icon icon="angle-right"></font-awesome-icon>
                                                    </div>
                                                </button>
                                                <button v-show="assignat" @click="assignat=!assignat" class="filters-cat-single selected">
                                                    <span>Assignat a</span>
                                                    <div class="ng-animate-disabled">
                                                        <font-awesome-icon icon="angle-down"></font-awesome-icon>
                                                    </div>
                                                </button>
                                                <div v-show="assignat" class="filter-list">
                                                    <div v-for="usuari in usuaris" :key="usuari.id">
                                                        <button v-show="!(existeix('assignacio__user__id',usuari.id))" class="single-filter single-filter-type-general" style="border-color: rgb(81, 120, 211); width:100%" @click="modif_url('assignacio__user__id',usuari.id,1)">
                                                            <span class="name">{{usuari.username}}</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <button v-show="!tags_show" @click="tags_show=!tags_show" class="filters-cat-single">
                                                    <span>Tags</span>
                                                    <div class="ng-animate-disabled">
                                                        <font-awesome-icon icon="angle-right"></font-awesome-icon>
                                                    </div>
                                                </button>
                                                <button v-show="tags_show" @click="tags_show=!tags_show" class="filters-cat-single selected">
                                                    <span>Tags</span>
                                                    <div class="ng-animate-disabled">
                                                        <font-awesome-icon icon="angle-down"></font-awesome-icon>
                                                    </div>
                                                </button>
                                                <div v-show="tags_show" @click="tags_show=!tags_show" class="filter-list">
                                                    <div v-for="tag in tags" :key="tag.nom">
                                                        <button v-show="tag.num_issues != 0 && !(existeix('tags__nom',tag.nom))" class="single-filter single-filter-type-tag"  :style="{'background-color': tag.color}" @click="modif_url('tags__nom',tag.nom,1)">
                                                            <span class="name">{{tag.nom}}</span>
                                                            <span class="number">{{tag.num_issues}}</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <button v-show="!creats" @click="creats=!creats" class="filters-cat-single">
                                                    <span>Creat per</span>
                                                    <div class="ng-animate-disabled">
                                                        <font-awesome-icon icon="angle-right"></font-awesome-icon>
                                                    </div>
                                                </button>
                                                <button v-show="creats" @click="creats=!creats" class="filters-cat-single selected">
                                                    <span>Creat per</span>
                                                    <div class="ng-animate-disabled">
                                                        <font-awesome-icon icon="angle-down"></font-awesome-icon>
                                                    </div>
                                                </button>
                                                <div v-show="creats" @click="creats=!creats" class="filter-list">
                                                    <div v-for="usuari in usuaris" :key="usuari.id">
                                                        <button v-show="!(existeix('creador__user__id',usuari.id))" class="single-filter single-filter-type-general" style="border-color: rgb(168, 228, 64);" @click="modif_url('creador__user__id',usuari.id,1)">
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
                                                    <button class="arrow-up" @click="modif_url('ordering','subject',3)">
                                                        <font-awesome-icon icon="sort-up" ></font-awesome-icon>
                                                    </button>
                                                    <button class="arrow-up" @click="modif_url('ordering','-subject',3)">
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
                                                    :data=issue.dataModificacio
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
import issueComp from '../components/issueComp.vue';
import BulkComponent from "../components/BulkComponent.vue";
import NavBar from "../components/NavBar.vue";
import { ref} from 'vue';
import {simpleFetch} from '../utils/utils';
import { RouterLink } from 'vue-router'

export default {
    components: {
        BulkComponent,
        issueComp,
        NavBar,
    },
    name: "listIssue",
    setup() {

        let falseBoolean = false;
        let trueBoolean = true;
        let issues = ref();
        let tags = ref();
        let usuaris = ref();
        let showFiltres = ref(false);
        let tipus = ref(false);
        let gravetat = ref(false);
        let prioritat= ref(false);
        let estat = ref(false);
        let assignat = ref(false);
        let tags_show = ref(false);
        let creats = ref(false);
        let toggle = ref(true);
        let query_parameters = ([]);
        let componentKey = ref(0);
        let mostrar = ref([]);
        let resultArrayFilter = ref([]);
        let searchInp = ref("");


        function arrayFilter() {
            resultArrayFilter.value = [];
            if (query_parameters.length !== 0) {

                var query = query_parameters.split('&');

                for (var i = 0; query.length > i; ++i) {
                    if (query[i].search("ordering") === -1) {
                        if (query[i].search("tipus") !== -1) {
                            if(query[i].search("B") !== -1) resultArrayFilter.value.push({param:"tipus",value:"Bug",int:"B"});
                            if(query[i].search("P") !== -1) resultArrayFilter.value.push({param:"tipus",value:"Pregunta",int:"P"});
                            if(query[i].search("M") !== -1) resultArrayFilter.value.push({param:"tipus",value:"Millora",int:"M"});
                        }
                        if (query[i].search("gravetat") !== -1) {
                            if(query[i].search("D") !== -1) resultArrayFilter.value.push({param:"gravetat",value:"Desitjada",int:"D"});
                            if(query[i].search("M") !== -1) resultArrayFilter.value.push({param:"gravetat",value:"Menor",int:"M"});
                            if(query[i].search("N") !== -1) resultArrayFilter.value.push({param:"gravetat",value:"Menor",int:"N"});
                            if(query[i].search("I") !== -1) resultArrayFilter.value.push({param:"gravetat",value:"Important",int:"I"});
                            if(query[i].search("C") !== -1) resultArrayFilter.value.push({param:"gravetat",value:"Critica",int:"C"});
                        }
                        if (query[i].search("prioritat") !== -1) {
                            if(query[i].search("B") !== -1) resultArrayFilter.value.push({param:"prioritat",value:"Baixa",int:"B"});
                            if(query[i].search("M") !== -1) resultArrayFilter.value.push({param:"prioritat",value:"Mitja",int:"M"});
                            if(query[i].search("A") !== -1) resultArrayFilter.value.push({param:"prioritat",value:"Alta",int:"A"});
                        }
                        if (query[i].search("estat") !== -1) {
                            if(query[i].search("N") !== -1) resultArrayFilter.value.push({param:"estat",value:"Nova",int:"N"});
                            if(query[i].search("D") !== -1) resultArrayFilter.value.push({param:"estat",value:"En curs",int:"D"});
                            if(query[i].search("T") !== -1) resultArrayFilter.value.push({param:"estat",value:"Llesta per testejar",int:"T"});
                            if(query[i].search("C") !== -1) resultArrayFilter.value.push({param:"estat",value:"Tancada",int:"C"});
                            if(query[i].search("I") !== -1) resultArrayFilter.value.push({param:"estat",value:"Necessita informacio",int:"I"});
                            if(query[i].search("R") !== -1) resultArrayFilter.value.push({param:"estat",value:"Rebutjada",int:"R"});
                            if(query[i].search("P") !== -1) resultArrayFilter.value.push({param:"estat",value:"Ajornada",int:"P"});
                        }
                        if (query[i].search("assignacio__user__id") !== -1) {
                            let usu = query[i].split('=');
                            let array_usu = usu[1].split(',');
                            for (var j = 0; j < array_usu.length; ++j) {
                                var name = get_username(array_usu[j])
                                resultArrayFilter.value.push({param:"assignacio__user__id",value:name,int:array_usu[j]});
                            }
                        }
                        if (query[i].search("tags__nom") !== -1) {
                            let tagss = query[i].split('=');
                            let array_tagss = tagss[1].split(',');
                            for (var j = 0; j < array_tagss.length; ++j) {
                                resultArrayFilter.value.push({param:"tags__nom",value:array_tagss[j],id:array_tagss[j]});
                            }
                        }
                        if (query[i].search("creador__user__id") !== -1) {
                            let usu = query[i].split('=');
                            let array_usu = usu[1].split(',');
                            for(var j = 0; j < array_usu.length; ++j){
                                var name = get_username(array_usu[j])
                                resultArrayFilter.value.push({param:"creador__user__id",value:name,id:array_usu[j]});
                            }
                        }
                        if (query[i].search("search") !== -1) {
                            let value = query[i].split('=');
                            resultArrayFilter.value.push({param:"search",value:value[1],id:value[1]});
                        }
                    }
                }
            }
        }

        function existeix(param,value) {
            let trobat = false;
            let array = resultArrayFilter.value;
            for (var i = 0; i < array.length;++i) {
                if (array[i].param === param && array[i].int === value) {
                    trobat = true;
                }
            }
            return trobat;
        }

        function filtra(query) {
            if(!query.length){
                query = "ordering=-id"
            }
            let endpoint = "issues/?"+ query;
            simpleFetch(endpoint,"GET","").then((data)=>issues.value = data);
        }

        function get_username(int){
            let array = usuaris.value
            for(var i = 0; i< array.length;++i){
                if(int == array[i].id){
                    return array[i].username
                }
            }
        }

        //el valor de int indica afegir filtre, borrar o ordenar
        // 1 es crear, 2 es borrar i 3 es ordenar
        function modif_url(param,value,int){
            var trobat = false;
            if (!query_parameters.length) {
                if(param == "ordering" || param == "search") {
                    query_parameters=param+"="+value;
                }
                else {
                    query_parameters= param + "__in=" + value;
                }
            }
            else{
                var query=query_parameters.split('&');
                var out=[];
                for (var i = 0; query.length >i ; ++i) {
                    if (query[i].search(param) != -1) {
                        trobat = true;
                        var filtre = query[i].split('=');
                        var parametres = filtre[1].split(',');
                        if (int == 1) {
                            parametres.push(value);
                            var params = parametres.toString();
                            if (param == "search" || param == "ordering") {
                                out.push(param+"="+params);
                            }
                            else {
                                out.push(param+"__in="+params);
                            }
                        }
                        else if (int ==3) {
                            out.push(param+"="+value);
                        }
                        else {
                            if (param != "search") {
                                if (parametres.length != 1) {
                                    var params = [];
                                    for (var j = 0; parametres.length > j; ++j) {
                                        if (parametres[j] != value) {
                                            params.push(parametres[j]);
                                        }
                                    }
                                    params = params.toString();
                                    out.push(param + "=" + params);
                                }
                            }
                        }
                    }
                    else {
                        out.push(query[i]);
                    }
                }
                if (trobat == false) {
                    if (param == "search" || param == "ordering") {
                        out.push(param + "=" + value);
                    }
                    else {
                        out.push(param + "__in=" + value);
                    }
                }
                var result=out.join('&');
                query_parameters = result;
            }
            filtra(query_parameters);
            arrayFilter();
        }

        function updateIssues() {
            simpleFetch("issues/?ordering=-id", "GET", "").then((data) => issues.value = data);
            simpleFetch("usuaris/", "GET", "").then((data) => usuaris.value = data);
            simpleFetch("tags/","GET","").then((data) => tags.value = data);
        }

        return {
            falseBoolean,
            trueBoolean,
            mostrar,
            issues,
            usuaris,
            tags,
            showFiltres,
            tipus,
            gravetat,
            prioritat,
            estat,
            assignat,
            componentKey,
            tags_show,
            creats,
            resultArrayFilter,
            toggle,
            searchInp,
            filtra,
            modif_url,
            existeix,
            updateIssues,
            get_username
        }
    },
    mounted() {
        simpleFetch("issues/?ordering=-id", "GET", "").then((data) => this.issues = data);
        simpleFetch("usuaris/", "GET", "").then((data) => this.usuaris = data);
        simpleFetch("tags/","GET","").then((data) => this.tags = data);
    }
}
</script>

<style scoped>

</style>
