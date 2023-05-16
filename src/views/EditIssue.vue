<template>
    <div v-if="issue" class="master">
        <div class="wrapper">
            <div class="main detail">
                <!-- issue info container  -->
                <div class="detail-header-container">

                    <div class="detail-header">
                        <!-- Titol issue-->
                        <div class="detail-title-wrapper">
                            <span classe="issue-text" style="display: inline-flex;">
                                <div class="detail-ref">
                                    <span class="issue-ref">#{{issue.id}}</span>
                                    <input name="subject" style="margin-top: 3px; margin-left: 5px; font-size: 25px;" class="detail-subject" :value=issue.subject>
                                    
                                    <button style="background: none;" @click="saveEdit()">
                                        <font-awesome-icon icon="floppy-disk" />
                                        <font-awesome-icon icon="clock" />
                                        <font-awesome-icon icon="lock" />

                                        <font-awesome-icon icon="arrow-left" />
                                        <font-awesome-icon icon="arrow-right" />
                                        <font-awesome-icon icon="arrow-up" />
                                        <font-awesome-icon icon="arrow-down" />

                                    </button>
                                </div>
                            </span>
                        </div>
                        <div class="detail-project">
                            <div class="section-name">Issue</div>
                        </div>

                        <!-- Data limit -->
                        <div v-if="issue.dataLimit" class="detail-header-line block-desc-container">
                            <span class="blocked-sign" style="color: white">
                                <i class="fa fa-clock-o" aria-hidden="true" style="margin-right: 5px; margin-top: 1px;"></i>
                            </span>
                            <span class="block-description" style="margin-left: 5px; color: #e5e5e5;">
                                {{issue.dataModificacio}}
                            </span>
                        </div>
                        <!-- Motiu Bloqueig-->
                        <div v-if="issue.bloquejat" class="detail-header-line block-desc-container">
                            <span class="blocked-sign" style="color: white">
                                <i class="fa fa-lock" aria-hidden="true" style="margin-right: 5px; margin-top: 1px;"></i>
                                Blocked
                            </span>
                            <span class="block-description" style="margin-left: 5px; color: #e5e5e5;">
                                {{issue.motiuBloqueig}}
                            </span>
                        </div>
                        <!-- Action buttons-->
                        <div class="action-buttons"></div>
                        <div class="subheader">
                            <div class="tags-container">
                            
                                <div style="display: flex; justify-content: space-between;">        
                                    
                                    <div v-for="tag of issue.tags" class="tag" style="background-color: {{tag.color}}; display: flex; justify-content: space-between; margin-right: 5px;">
                                        <span   style="margin-top: auto; margin-bottom: auto; margin-right: 5px; margin-left: 5px;">{{tag.nom}}</span>
                                        <a class="icon-close"  href="{% url 'esborrar_tag_issue' id_issue=issue.id nom_tag=tag.nom %}">
                                            <i class="fa fa-times" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                    <button v-if="addTag" class="btn-filter ng-animate-disabled" @click="addTag = false">
                                        <span>Add tag</span>
                                        <span style="font-size: 20px;">+</span>
                                    </button> 

                                    <div v-show="!addTag" style="display: flex; justify-content: space-between;">
                                        <input id="inputAddTag" name="nom" type="text" placeholder="Enter tag" >
                                        <input name="color" type="color" style="margin-top: auto; margin-bottom: auto; margin-left: 5px;">
                                        <button @click="addTag = true">
                                            <!--<i class="fa fa-floppy-o" aria-hidden="true"></i>-->
                                            G
                                        </button>
                                    </div>
                                    
                                </div>

                                
                                <div class="created-by">
                                    <span>
                                        Created by
                                        <!-- com possar be l'string 
                                        <RouterLink to="/usuari/"{{issue.creador.user.id}}>
                                            <span>{{ issue.creador.user.first_name }}</span>
                                        </RouterLink>
                                        -->
                                    </span>
                                    <div class="created-date">{{issue.dataModificacio}}</div>
                                </div>
                                <div class="user-avatar">
                                    <a href="{% url 'usuari' issue.creador.user.id %}"></a>
                                        <!-- com possar be l'string 
                                    <RouterLink to="/usuari/"{{issue.creador.user.id}}>
                                        <img :src = issue.creador.avatar.url
                                        width = "40px"
                                        height = "40px"
                                    >
                                    </RouterLink>
                                    -->
                                </div>
                            </div>
                        </div>    

                    </div>
                </div>
                <!-- Attachments Comments Activites-->
                <div class="detail-content">
                    <!-- Descripcio  issue-->
                    <section class="duty-content" style="justify-content: flex-start;">
                        <div style="display: flex; justify-content: space-between;">
                            <textarea 
                                v-if="issue.descripcio"
                                placeholder="Empty space is so boring... go on, be descriptive..." 
                                name="descripcio" 
                                class="description ng-pristine ng-untouched ng-valid ng-empty"
                                >
                                {{issue.descripcio}}
                            </textarea>
                            <button style="max-height: 32px; background: none;" @click="guardarDesc()">
                                G
                                <i  class="fa fa-floppy-o" aria-hidden="true"></i>
                            </button>
                        </div>
                    </section>
                    <!-- Attachments -->
                    <section style="margin-top: 10px;" class="attachments attachments-full">
                        <!-- attachment header-->
                        <div class="attachments-header">
                            <!-- num attachment -->
                            <h3 class="attachment-title">
                                <span class="attachments-num">{{issue.attachments.length}}</span>
                                <span class="attachments-text">Attachments</span>
                            </h3>
                            
                            <!-- add attachment-->
                            <div class="options ">
                                <div class="add-attach">
                                    <!-- input to add attach -->

                                    <button id="addAttachment" style="display: flex;"
                                        @click="addAttachment()"
                                    >
                                        ADD
                                        <i class="fa fa-plus" aria-hidden="true"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <!-- attachment content-->
                        <div class="attachment-list sortable">
                            <ul
                                v-for="attachment of issue.attachments"
                            >
                                <li style="margin-top: 5px; margin-left: 5px; border-bottom: 1px solid rgb(168, 168, 168); font-size: 15px;">
                                    <div style="display: flex; justify-content: space-between;">
                                        <div>
                                            <a href="{{ attachment.document.url }}">{{ attachment.document.name }}</a>
                                            <span>({{ attachment.document.size|filesizeformat }})</span>
                                        </div>
                                        <a href="{% url 'esborrar_attachment' attachment.id %}">
                                            <i style="margin-right: 5px;" class="fa fa-trash-o" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </section>
                    <!-- Comments Activites header -->
                    <section class="history">
                        <nav class="history-tabs">
                            <!-- si comentaris un style o altre -->
                           <button class="history-tab active">
                                Comentaris
                           </button> 
                           <button>
                                Activites
                           </button> 
                        </nav>
                    </section>

                    <!-- sha de mirar pero va lo segunet-->
                    <section class="comment" v-if="hihaComentaris">
                        <div style="display: flex; justify-content: space-between;">
                            <textarea name="text" placeholder="Type a new comment here" style="margin-top: 5px; margin-bottom: 5px;"></textarea>
                            <button type="submit" name="afegir_comentari" style="background: none;">
                                <i class="fa fa-floppy-o" aria-hidden="true"></i>
                            </button>
                        </div>
                        <div>
                            <ul>
                                <ComentarisEdit
                                    v-for="(comentari, index) of issue.comentaris"
                                    :key="index"
                                    :comentari="comentari"
                                >
                                </ComentarisEdit>
                            </ul>
                        </div>

                    </section>
                    <section class="activities" v-else>
                        <div class="activities-wrapper">
                            <ul>
                                <ActivitiesEdit
                                    v-for="(activity, index) of issue.logs"
                                    :key="index"
                                    :activity="activity"
                                >
                                </ActivitiesEdit>
                            </ul>
                        </div>
                    </section>
                </div>
            </div>
                <sidebar class="sidebar ticket-data">
                    <section class="ticket-header">
                        <span class="ticket-title ng-pristine ng-valid ng-untouched ng-not-empty">
                            <span>Open</span>
                        </span>
                        <!-- estat-->
                        <v-select
                            class="ml-3"
                            label="Select"
                            density="compact"
                            :items=TEstats
                            v-model=estat
                        ></v-select>
                        
                        <button id="btnSaveState" type="submit" name="guardar_estat" style="display: none;"></button>

                    </section>
                    <section class="ticket-section ticket-data-container">
                        <div class="ticket-data-container">
                            <!-- Type-->
                            <div style="display: flex; justify-content: space-between;">
                                <label>
                                    type
                                </label>
                                <v-menu>
                                    <template v-slot:activator="{ props }">
                                        <v-btn
                                            v-bind="props"
                                            variant="text"
                                        >
                                        {{tipus}}
                                        </v-btn>
                                    </template>
                                    <v-list>
                                        <v-list-item
                                        v-for="(item, index) in TTipus"
                                        :key="index"
                                        :value="index"
                                        >
                                        <v-list-item-title @click="setTipus(item)">{{ item }}</v-list-item-title>
                                        </v-list-item>
                                    </v-list>
                                </v-menu>
                            </div>
                            
                            <button id="btnSaveType" type="submit" name="guardar_tipus" style="display: none;"></button>

                            <!-- Severity-->
                            <div style="display: flex; justify-content: space-between;">
                                <label>
                                    severity
                                </label>
                                <v-menu>
                                    <template v-slot:activator="{ props }">
                                        <v-btn
                                            v-bind="props"
                                            variant="text"
                                        >
                                        {{gravetat}}
                                        </v-btn>
                                    </template>
                                    <v-list>
                                        <v-list-item
                                        v-for="(item, index) in TGravetat"
                                        :key="index"
                                        :value="index"
                                        >
                                        <v-list-item-title @click="setGravetat(item)">{{ item }}</v-list-item-title>
                                        </v-list-item>
                                    </v-list>
                                </v-menu>
                            </div>

                            <button id="btnSaveGrav" type="submit" name="guardar_gravetat" style="display: none;"></button>
                            
                            <!-- Priority-->
                            
                            <div style="display: flex; justify-content: space-between;">
                                <label>
                                    priority
                                </label>
                                <v-menu>
                                    <template v-slot:activator="{ props }">
                                        <v-btn
                                            variant="text"
                                            v-bind="props"
                                        >
                                        {{prioritat}}
                                        </v-btn>
                                    </template>
                                    <v-list>
                                        <v-list-item
                                        v-for="(item, index) in TPrioritat"
                                        :key="index"
                                        :value="index"
                                        >
                                        <v-list-item-title @click="setPrioritat(item)">{{ item }}</v-list-item-title>
                                        </v-list-item>
                                    </v-list>
                                </v-menu>
                            </div>
                            <button id="btnSavePrior" type="submit" name="guardar_prioritat" style="display: none;"></button>

                        </div>
                    </section>
                    <!-- Assigned section-->
                    <section class="ticket-section ng-pristine ng-untouched ng-valid ng-not-empty">
                        <div class="ticket-section-label">
                            <span>Assigned</span>
                        </div>
                        <div class="ticket-user-list-container">
                            <div class="ticket-user-list-content">
                                <div class="ticket-user-list"></div>
                                <div>
                                    <div 
                                        v-if="issue.assignacio"
                                        style="display: flex; 
                                        justify-content: space-between; 
                                        margin-left: 5px; 
                                        margin-right: 5px;"
                                        >
                                        <img src="{{ issue.assignacio.avatar }}"
                                            width="60px"
                                            height="60px"
                                        >
                                        <a href="/usuaris/{{ issue.assignacio.id }}" style=" margin-top: 20px;">{{ issue.assignacio.nom }}</a>
                                        <a href="{% url 'esborrar_assignacio' issue.id %}">
                                            <i class="fa fa-times" aria-hidden="true"></i>
                                        </a>
                                    </div>  
                                </div>
                                <!-- selector d'assignacio -->
                                
                                <div class="ticket-users-actions">
                                    <div>
                                        <select id="selectAssig" name="assignat" type="submit" class="status-button" style="display: none; max-width: 170px;">
                                            <option>+ Add assigned</option>
                                            <!--
                                                Possibles assignats fetch on mouonted
                                            {% for assig in possibles_assignats %}
                                                <option value="{{assig.user.id}}">{{assig.user.username}}</option>
                                            {% endfor %}
                                            -->
                                        </select>
                                        <button id="btnSaveAssig" type="submit" name="guardar_assignat" style="display: none;"></button>
                                    </div>
                                    <button id="addAssigned" class="ticket-users-actions" style="margin-right: 10px;">
                                        + Add assigned
                                    </button>
                                    <button 
                                        v-if="issue.assignacio.id == idUser"
                                        type="submit" 
                                        name="autoassignar" 
                                        class="ticket-users-actions" 
                                        style="margin-left: 5px;"
                                    >
                                        Dont assign to me
                                    </button>
                                    <button 
                                        v-else
                                        type="submit" 
                                        name="autoassignar" 
                                        class="ticket-users-actions" 
                                        style="margin-left: 5px;"
                                    >
                                        Assign to me
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Watchers section-->
                    <section class="ticket-section ticket-watchers">
                        <div class="ticket-section-label">
                            <span>Watchers</span>
                        </div>
                        <div class="ticket-user-list-container">
                            <div class="ticket-user-list-content">
                                <div class="ticket-user-list"></div>
                                <div>
                                    <ul>
                                        <li
                                            v-for="obs of issue.observadors"
                                        >
                                            <div style="display: flex; justify-content: space-between; margin-left: 5px; margin-right: 5px; margin-top: 5px;">
                                                <img src="{{ obs.avatar }}"
                                                    width="60px"
                                                    height="60px"
                                                >
                                                <a href="/usuaris/{{ obs.id }}" style=" margin-top: 20px;">{{ obs.nom }}</a>
                                                <a href="{% url 'esborrar_observador' issue.id obs.user.id %}">
                                                    <i class="fa fa-times" aria-hidden="true"></i>
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                
                                <div class="ticket-users-actions">
                                    <div>
                                        <select id="selectObs" name="observador" type="submit" class="status-button" style="display: none; max-width: 170px;">
                                            <option>+ Add watchers</option>
                                            <!--
                                                fetch de possibles observadors
                                            {% for obs in possibles_observadors %}
                                                <option value="{{obs.user.id}}">{{obs.user.username}}</option>
                                            {% endfor %}
                                            -->
                                        </select>
                                        <button id="btnSaveObs" type="submit" name="guardar_observador" style="display: none;"></button>
                                    </div>
                                    <button id="addObserver" style="margin-right: 10px;" class="ticket-users-actions">
                                        + Add watchers
                                    </button>
                                    <!--
                                    <button 
                                        v-if="obs.id == idUser" 
                                        type="submit" 
                                        name="autoobservar" 
                                        class="ticket-users-actions" 
                                        style="margin-left: 5px;"
                                    >
                                        Unwatch
                                    </button>
                                    <button
                                        v-else 
                                        type="submit" 
                                        name="autoobservar" 
                                        class="ticket-users-actions" 
                                        style="margin-left: 5px;">
                                        Watch
                                    </button>
                                    -->
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- setting Section-->
                    <section class="ticket-section ticket-detail-settings">
                        <div class="ticket-detail-settings" >
                            <!-- Data limit -->
                            <div>
                                <button
                                    v-if="issue.dataLimit"
                                    style="background: red;"
                                    @click="deleteTimeLine()"
                                >
                                    clock
                                </button>
                                <button
                                    else
                                    @click="showDatePickker = true" 
                                >
                                    clock
                                </button>
                            </div>

                            <!-- Bloqueig  -->
                            <div>
                                <button
                                    v-if="issue.bloquejat"
                                    style="background: red; margin-left: 5px;"
                                    @click="deleteBlock()"
                                >
                                    <font-awesome-icon :icon="['far', 'lock']" />
                                </button>
                                <button
                                    else
                                    style="margin-left: 5px;"
                                    @click="showBlock = true"
                                >
                                    <font-awesome-icon :icon="['far', 'lock']" />
                                </button>
                            </div>
                        </div>
                    </section>
                    
                    <div style="display: flex; justify-content: space-between;" v-show="showDatePickker">
                        <input 
                            type="date" 
                            id="datePickerInput" 
                            name="dataLimit"
                            style="display: none;"
                        >
                        <button id="btnSaveDateDirect" type="submit" name="guardar_dataLimit" style="display: none;">
                            <i class="fa fa-floppy-o" aria-hidden="true"></i>
                        </button>
                    </div>

                    <div style="display: flex; justify-content: space-between;" v-show="showBlock">
                        <input 
                            type="text" 
                            id="inputMotiuBloqueig" 
                            name="motiuBloqueig"
                            style="display: none;"
                        >
                        <button id="btnSaveBloqueigDirect" type="submit" name="guardar_bloquejat" style="display: none;">
                            <i class="fa fa-floppy-o" aria-hidden="true"></i>
                        </button>
                    </div>
                
                    <button id="btnSaveMotiuBloqueig" type="submit" name="guardar_bloquejat" style="display: none;"></button>

                </sidebar>
        </div>
    </div>
</template>

<script>
    import { ref } from 'vue';
    import {simpleFetch} from '../utils/utils';
    import ActivitiesEdit from '../components/ActivitesEdit.vue';
    import ComentarisEdit from '../components/ComentarisEdit.vue';

    export default {
        name: "listIssue",
        components: {
            ActivitiesEdit,
            ComentarisEdit,
        },
        setup() {

            const TEstats = ["new", "In progress", "Ready for test", "Closed", "Needs info", "Rejected", "Postponed"];
            const TTipus = ["Bug", "Question", "Enhancement"];
            const TGravetat = ["Wishlist", "Minor", "Normal", "Important", "Critical"];
            const TPrioritat = ["Low", "Normal", "High"];

            let estat = ref("new");
            let tipus = ref("Bug");
            let gravetat = ref("Wishlist");
            let prioritat = ref("Low");
            
            let issue = ref();
            let idUser = ref();
            let addTag = ref(true);
            let hihaComentaris = ref(true);
            let showDatePickker = ref(false);
            let showBlock = ref(false);

            function saveEdit() {
                console.log("save edit");
            }

            function guardarDesc() {
                console.log("guardar descripcio");
            }

            function addTagAction() {
                addTag = false;
            }

            function addAttachment() {
                console.log("add attachment");
            }

            function setTipus(item) {
                tipus.value = item;
            }   

            function setGravetat(item) {
                gravetat.value = item;
            }

            function setPrioritat(item) {
                prioritat.value = item;
            }

            function deleteTimeLine() {
                console.log("now ther arent time line");
            }

            function deleteBlock() {
                console.log("block is delete");
            }
            
            return {
                issue,
                hihaComentaris,
                addTag,
                TEstats,
                TTipus,
                TGravetat,
                TPrioritat,
                estat, 
                tipus, 
                gravetat, 
                prioritat,
                idUser,
                showDatePickker,
                showBlock,
                deleteBlock,
                deleteTimeLine,
                setTipus,
                setPrioritat,
                setGravetat,
                saveEdit
            }
        },
        mounted() {
            //Per obtenir la url
            let url = window.location.href;
            //Separar la url per '/'
            let directories = url.split("/");
            //Agafar l'ultim element
            let issueId = directories[(directories.length - 1)];


            console.log("urlLocation: ", issueId);
            simpleFetch("issues/"+issueId+"/", "GET", "").then((data) => this.issue = data);
            console.log("issueObject: ", this.issue);
        }
    }

    

</script>

<style scoped>
    
</style>


