<template>
    <div v-if="issue" class="master">
        <div class="wrapper">
            <div class="main detail">
                <!-- issue info container  -->
                <div class="detail-header-container">

                    <div class="detail-header">
                        <!-- Titol issue-->
                        <div class="detail-title-wrapper">
                                <div class="detail-ref">
                                    <span class="issue-text" style="display: inline-flex;">

                                        <span class="issue-ref">#{{issue.id}}</span>
                                        <v-text-field v-model=issueTitle style="margin-top: 3px; margin-left: 5px; font-size: 25px; width: 300px" class="detail-subject" ></v-text-field>
                                    </span>
                                    <button style="background: none;" @click="saveEdit()">
                                        <font-awesome-icon icon="floppy-disk" />
                                    </button>
                                </div>
                        </div>
                        <div class="detail-project">
                            <div class="section-name">Issue</div>
                        </div>

                        <!-- Data limit -->
                        <div v-if="issue.dataLimit" class="detail-header-line block-desc-container">
                            <span class="blocked-sign" style="color: white">
                                <font-awesome-icon icon="clock" />
                            </span>
                            <span class="block-description" style="margin-left: 5px; color: #e5e5e5;">
                                {{issue.dataModificacio}}
                            </span>
                        </div>
                        <!-- Motiu Bloqueig-->
                        <div v-if="issue.bloquejat" class="detail-header-line block-desc-container">
                            <span class="blocked-sign" style="color: white">
                                <font-awesome-icon icon="lock" />
                            </span>
                            <span class="block-description" style="margin-left: 5px; color: #e5e5e5;">
                                {{issue.motiuBloqueig}}
                            </span>
                        </div>
                        <!-- Action buttons-->
                        <div class="action-buttons"></div>
                        <div class="subheader" >
                            <div class="tags-container" style="display: flex; justify-content: space-between">
                            
                                <div style="display: flex; justify-content: space-between;">        
                                    
                                    <div
                                        v-for="tag of issue.tags"
                                        :key="tag"
                                        class="tag my-tag"
                                        :style="{'background-color': tag.color}"
                                    >
                                        <span   style="margin-top: auto; margin-bottom: auto; margin-right: 5px; margin-left: 5px;">{{tag.nom}}</span>
                                        <button @click="esborrar_tag_issue(tag)">
                                            <font-awesome-icon icon="xmark" />
                                        </button>
                                    </div>
                                    <button v-if="addTag" class="btn-filter ng-animate-disabled" @click="addTag = false">
                                        <span>Add tag</span>
                                        <span style="font-size: 20px;">+</span>
                                    </button> 

                                    <div v-show="!addTag" style="display: flex; justify-content: space-between;">
                                        <input v-model=nomTag type="text" placeholder="Enter tag" >
                                        <input v-model="colorTag" type="color" style="margin-top: auto; margin-bottom: auto; margin-left: 5px;">
                                        <button @click="addTagFetch()">
                                            <font-awesome-icon icon="floppy-disk" />
                                        </button>
                                    </div>
                                    
                                </div>

                                <div style="display: flex; justify-content: space-between">
                                    <div class="created-by">
                                    <span>
                                        Created by
                                        <span>{{ issue.creador.nom }}</span>

                                        <!-- com possar be l'string
                                        <RouterLink to="/usuari/"{{issue.creador.user.id}}>
                                            <span>{{ issue.creador.nom }}</span>
                                        </RouterLink>
                                        -->
                                    </span>
                                        <div class="created-date">{{issue.dataModificacio}}</div>
                                    </div>
                                    <div class="user-avatar" style="margin-left: 5px">
                                        <!-- com possar be l'string
                                        <RouterLink to="/usuari/"{{issue.creador.user.id}}>

                                        </RouterLink>
                                        -->
                                        <img
                                            :src=issue.creador.avatar
                                            width="40"
                                            height="40"
                                        >
                                    </div>
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
                                v-model=issueDesc
                                >
                            </textarea>
                            <button style="max-height: 32px; background: none;" @click="guardarDesc()">
                                <font-awesome-icon icon="floppy-disk" />
                            </button>
                        </div>
                    </section>
                    <!-- Attachments -->
                    <section style="margin-top: 10px;" class="attachments attachments-full">
                        <!-- attachment header-->
                        <div class="attachments-header">
                            <!-- num attachment -->
                            <h3 class="attachment-title" style="margin-left: 5px">
                                <span class="attachments-num" >{{issue.attachments.length}}</span>
                                <span class="attachments-text" style="margin-left: 5px" >Attachments</span>
                            </h3>
                            
                            <!-- add attachment-->
                            <div class="options ">
                                <div class="add-attach">
                                    <!-- input to add attach -->
                                    <v-file-input
                                        label="+"
                                        v-model=attachmentFile
                                    >
                                        <font-awesome-icon icon="plus" />
                                    </v-file-input>
                                    <v-btn
                                        @click="addAttachment()"
                                    >
                                    </v-btn>
                                </div>
                            </div>
                        </div>
                        <!-- attachment content-->
                        <div class="attachment-list sortable">
                            <ul
                                v-for="(attachment, index) of issue.attachments"
                                :key="index"
                            >
                                <li style="margin-top: 5px; margin-left: 5px; border-bottom: 1px solid rgb(168, 168, 168); font-size: 15px;">
                                    <div style="display: flex; justify-content: space-between;">
                                        <div>
                                            <a href="{{ attachment.document.url }}">{{ attachment.document.name }}</a>
                                            <span>({{ attachment.document.size }})</span>
                                            nomDocumenthardcoded now
                                        </div>
                                        <button
                                            style="margin-right: 5px"
                                            @click="esborrar_attachment(attachment)"
                                        >
                                            <font-awesome-icon icon="trash" />
                                        </button>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </section>
                    <!-- Comments Activites header -->
                    <section class="history" >
                        <nav class="history-tabs" style="padding: 5px">
                            <!-- si comentaris un style o altre -->
                           <button
                                :class="hihaComentaris ? 'history-tab active' : 'history-tab'"
                                @click="hihaComentaris = true"
                           >
                                Comentaris
                           </button> 
                           <button
                               :class="hihaComentaris ? 'history-tab' : 'history-tab active'"
                               style="margin-left: 15px"
                               @click="hihaComentaris = false"
                           >
                                Activities
                           </button> 
                        </nav>
                    </section>

                    <!-- sha de mirar pero va lo segunet-->
                    <section
                        class="comment"
                        v-if="hihaComentaris"
                    >
                        <div style="display: flex; justify-content: space-between;">
                            <textarea v-model=comment placeholder="Type a new comment here" style="margin-top: 5px; margin-bottom: 5px;"></textarea>
                            <button @click="afegir_comentari()" style="margin-left: 5px;" >
                                <font-awesome-icon icon="floppy-disk" />
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
                    <section
                        class="activities"
                        v-else
                    >
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
            <div class="sidebar ticket-data">
                    <section class="ticket-header">
                        <span class="ticket-title ng-pristine ng-valid ng-untouched ng-not-empty">
                            <span>Open</span>
                        </span>
                        <!-- estat-->
                        <div style="background-color: whitesmoke; display: flex; justify-content: space-between;">
                            <v-menu>
                                <template v-slot:activator="{ props }">
                                    <v-btn
                                        v-bind="props"
                                        variant="text"
                                    >
                                    {{estat}}
                                    </v-btn>
                                </template>
                                <v-list>
                                    <v-list-item
                                    v-for="(item, index) in TEstats"
                                        :key="index"
                                        :value="index"
                                    >
                                        <v-list-item-title @click="setEstat(item)">{{ item }}</v-list-item-title>
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                            <font-awesome-icon icon="arrow-down" style="margin-top: 8px;" />
                        </div>
                        
                        
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
                                        <img :src=issue.assignacio.avatar
                                            width="60"
                                            height="60"
                                        >
                                        <a href="/usuaris/{{ issue.assignacio.id }}" style=" margin-top: 20px;">{{ issue.assignacio.nom }}</a>
                                        <!-- issue.id -->
                                        <button @click="esborrar_assignacio()">
                                            <font-awesome-icon icon="xmark" />
                                        </button>
                                    </div>  
                                </div>
                                <!-- selector d'assignacio -->
                                
                                <div class="ticket-users-actions">

                                    <v-dialog
                                        v-model="selectAssign"
                                        width="auto"
                                    >
                                        <template v-slot:activator="{ props }">
                                            <button
                                                color="primary"
                                                v-bind="props"
                                                style="margin-right: 10px;"
                                                class="ticket-users-actions"
                                            >
                                                + Add assigned
                                            </button>
                                        </template>

                                        <v-card
                                            width="600px"
                                        >
                                            <v-card-title>
                                                Select user
                                            </v-card-title>
                                            <v-card-text>
                                                <v-text-field placeholder="Search for users"></v-text-field>
                                                <SelectUsers type="assign" :users=allUsers @userSelect="assignSelect"/>

                                                <v-btn
                                                    @click="selectAssign = false"
                                                    color="red"
                                                    class="mt-10 ml-16"
                                                >
                                                    close
                                                </v-btn>
                                            </v-card-text>
                                        </v-card>
                                    </v-dialog>
                                    <button 
                                        v-if="issue.assignacio && issue.assignacio.id === idUser"
                                        class="ticket-users-actions" 
                                        style="maassignSelectautorgin-left: 5px;"
                                        @click="esborrar_assignacio()"
                                    >
                                        Dont assign to me
                                    </button>
                                    <button 
                                        v-else
                                        class="ticket-users-actions" 
                                        style="margin-left: 5px;"
                                        @click="autoSelect(idUser)"
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
                                            v-for="(obs, index) of issue.observadors"
                                            :key=index
                                        >
                                            <div style="display: flex; justify-content: space-between; margin-left: 5px; margin-right: 5px; margin-top: 5px;">
                                                <img :src=obs.avatar
                                                    width="60"
                                                    height="60"
                                                >
                                                <a href="/usuaris/{{ obs.id }}" style=" margin-top: 20px;">{{ obs.nom }}</a>

                                                <button @click="esborrar_observador()">
                                                    <font-awesome-icon icon="xmark" />
                                                </button>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                
                                <div class="ticket-users-actions">

                                    <v-dialog
                                        v-model="selectObs"
                                        width="auto"
                                    >
                                        <template v-slot:activator="{ props }">
                                            <button
                                                color="primary"
                                                v-bind="props"
                                                style="margin-right: 10px;"
                                                class="ticket-users-actions"
                                            >
                                                + Add watchers
                                            </button>
                                        </template>

                                        <v-card
                                            width="400px"
                                        >
                                            <v-card-title>
                                                Add watchers
                                            </v-card-title>
                                            <v-card-text>
                                               <v-text-field placeholder="Search for users"></v-text-field>
                                                <SelectUsers type="obs"  :users=allUsers @userSelect="obsSelected" />
                                                <v-btn
                                                    @click="selectObs = false"
                                                    color="red"
                                                    class="mt-10 ml-16"
                                                >
                                                    close
                                                </v-btn>
                                            </v-card-text>
                                        </v-card>
                                    </v-dialog>
                                    <button 
                                        v-if="autoObservador" 
                                        class="ticket-users-actions" 
                                        style="margin-left: 5px;"
                                    >
                                        Unwatch
                                    </button>
                                    <button
                                        v-else 
                                        class="ticket-users-actions" 
                                        style="margin-left: 5px;">
                                        Watch
                                    </button>
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
                                    <font-awesome-icon icon="clock" />
                                </button>
                                <button
                                    v-else
                                    @click="showDatePickker = true" 
                                >
                                    <font-awesome-icon icon="clock" />
                                </button>
                            </div>

                            <!-- Bloqueig  -->
                            <div>
                                <button
                                    v-if="issue.bloquejat"
                                    style="background: red; margin-left: 5px;"
                                    @click="deleteBlock()"
                                >
                                    <font-awesome-icon icon="lock"/>
                                </button>
                                <button
                                    v-else
                                    style="margin-left: 5px;"
                                    @click="showBlock = true"
                                >
                                    <font-awesome-icon icon="lock"/>
                                </button>
                            </div>
                            <div style="margin-left: 5px;">
                                <button
                                    @click="deleteIssue()"
                                >
                                    <font-awesome-icon icon="trash"/>
                                </button>
                            </div>
                        </div>
                    </section>
                    
                    <div style="display: flex; justify-content: space-between;" v-show="showDatePickker">
                        <input 
                            type="date" 
                            id="datePickerInput" 
                            name="dataLimit"
                            v-model="date"
                        >
                        <button @click="btnSaveDateDirect()"  style=" margin-left: 5px">
                            <font-awesome-icon icon="floppy-disk" />
                        </button>
                    </div>

                    <div style="display: flex; justify-content: space-between;" v-show="showBlock">
                        <input 
                            type="text" 
                            id="inputMotiuBloqueig" 
                            name="motiuBloqueig"
                            v-model="motiuBlock"
                        >
                        <button @click="btnSaveMotiuBloqueig"  >
                            <font-awesome-icon icon="floppy-disk" />
                        </button>
                    </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { ref } from 'vue';
    import {simpleFetch} from '@/utils/utils';
    import ActivitiesEdit from '../components/ActivitesEdit.vue';
    import ComentarisEdit from '../components/ComentarisEdit.vue';
    import SelectUsers from '../components/SelectUsers.vue';
    import { useRouter } from 'vue-router';

    export default {
        name: "listIssue",
        components: {
            ActivitiesEdit,
            ComentarisEdit,
            SelectUsers,
        },
        setup() {
            const router = useRouter();

            //Per obtenir la url
            let url = window.location.href;
            //Separar la url per '/'
            let directories = url.split("/");
            let issueId = ref(directories[(directories.length - 1)]);

            let issueTitle = ref('');
            let issueDesc = ref('');
            let nomTag = ref('');
            let colorTag = ref('');
            let attachmentFile = ref();

            const TEstats = ["new", "In progress", "Ready for test", "Closed", "Needs info", "Rejected", "Postponed"];
            const TTipus = ["Bug", "Question", "Enhancement"];
            const TGravetat = ["Wishlist", "Minor", "Normal", "Important", "Critical"];
            const TPrioritat = ["Low", "Normal", "High"];

            let estat = ref("new");
            let tipus = ref("Bug");
            let gravetat = ref("Wishlist");
            let prioritat = ref("Low");
            
            let issue = ref();
            let idUser = ref(24);
            let autoObservador = ref(false);
            let addTag = ref(true);
            let hihaComentaris = ref(true);
            let showDatePickker = ref(false);
            let showBlock = ref(false);

            let selectAssign = ref(false);
            let selectObs = ref(false);

            let allUsers = ref([]);
            simpleFetch("usuaris/", "GET", "").then((data) => allUsers.value = data);
            console.log("all Users: ", allUsers.value);

            let date = ref();
            let motiuBlock = ref('');
            let comment = ref('');

            function esborrar_observador() {
                console.log("esborrar observador");
            }

            function setEstat(item) {
                estat.value = item;
                let newEstat;
                switch (estat.value) {
                    case "new":
                        newEstat = 'N';
                        break;
                    case "In progress":
                        newEstat = 'D';
                        break;
                    case "Ready for test":
                        newEstat = 'T';
                        break;
                    case "Closed":
                        newEstat = 'C';
                        break;
                    case "Needs info":
                        newEstat = 'I';
                        break;
                    case "Rejected":
                        newEstat = 'R';
                        break;
                    case "Postponed":
                        newEstat = 'P';
                        break;                    
                    default:
                        newEstat = 'B';
                }
                let obj = {
                    "estat": newEstat,
                }
                simpleFetch("issues/"+issueId.value+"/", "PUT", obj);
            }

            function setTipus(item) {
                tipus.value = item;
                let newTipus;
                switch (tipus.value) {
                    case "Bug":
                        newTipus = 'B';
                        break;
                    case "Question":
                        newTipus = 'P';
                        break;
                    case "Enhancement":
                        newTipus = 'M';
                        break;    
                    default:
                        newTipus = 'B';
                }
                let obj = {
                    "tipus": newTipus,
                }
                simpleFetch("issues/"+issueId.value+"/", "PUT", obj);
            }   

            function setGravetat(item) {
                gravetat.value = item;
                let newGravetat;
                switch (gravetat.value) {
                    case "Wishlist":
                        newGravetat = 'D';
                        break;
                    case "Minor":
                        newGravetat = 'M';
                        break;
                    case "Normal":
                        newGravetat = 'N';
                        break;
                    case "Important":
                        newGravetat = 'I';
                        break;
                    case "Critical": 
                        newGravetat = 'C';
                        break;            
                    default:
                        newGravetat = 'D';
                }
                let obj = {
                    "gravetat": newGravetat,
                }
                simpleFetch("issues/"+issueId.value+"/", "PUT", obj);
            }

            function setPrioritat(item) {
                prioritat.value = item;
                let newPrioirity;
                switch (prioritat.value) {
                    case "High":
                        newPrioirity = 'A';
                        break;
                    case "Normal":
                        newPrioirity = 'M';
                        break;
                    case "Low":
                        newPrioirity = 'B';
                        break;    
                    default:
                        newPrioirity = 'A';
                }
                let obj = {
                    "prioritat": newPrioirity,
                }
                simpleFetch("issues/"+issueId.value+"/", "PUT", obj);
            }

            function obsSelected(obsSelected) {
                console.log("new obs: ", obsSelected);
            }

            async function addAttachment() {
                console.log("Attachment: ", attachmentFile.value);
                console.log("File: ", attachmentFile.value[0]);

                const fd = new FormData();
                fd.append("document", attachmentFile.value[0]);
                fd.append("file", attachmentFile.value[0]);
                fd.append("name", "angel");


                await simpleFetch("issues/"+issueId.value+"/attachments/", "POST", fd, "formData");
                actualitzarInfo();
            }

            async function deleteIssue() {
                console.log("issue deleted");
                await simpleFetch("issues/"+issueId.value, "DELETE", );
                router.push('/');
            }

            /**
             * Esborrar un attachment
             * @param attachment
             * @returns {Promise<void>}
             */
            async function esborrar_attachment(attachment) {
                console.log("esborrar attachment: ", attachment);
                await simpleFetch("issues/"+issueId.value+"attachments/"+attachment.id, "DELETE", );
                actualitzarInfo();
            }

            /**
             * Delete tag
             * @param nomTag
             * @returns {Promise<void>}
             */
            async function esborrar_tag_issue(nomTag) {
                console.log("esborrar tag issue: ", nomTag.nom);
                await simpleFetch("issues/"+issueId.value+"/tags/"+nomTag.nom, "DELETE", );
                actualitzarInfo();
            }

            /**
             * Add tag
             */
            async function addTagFetch() {
                let obj = {
                    "nom": nomTag.value,
                    "color": colorTag.value
                }
                await simpleFetch("issues/"+issueId.value+"/tags/", "POST", obj);
                actualitzarInfo();
                addTag.value = true;
            }

            /**
             * Save description
             */
            async function guardarDesc() {
                console.log("guardar descripcio: ", issueDesc.value);
                let obj = {
                    "descripcio": issueDesc.value
                }
                await simpleFetch("issues/"+issueId.value+"/", "PUT", obj);
                actualitzarInfo();
            }

            /**
             * Save subject
             */
            async function saveEdit() {
                let obj = {
                    "subject": issueTitle.value
                }
                await simpleFetch("issues/"+issueId.value+"/", "PUT", obj);
                actualitzarInfo();
            }

            /**
             * Afagir comentari
             */
            async function afegir_comentari() {
                console.log("comment added: ", comment.value);
                let obj = {
                    "text": comment.value
                }
                await simpleFetch("issues/"+issueId.value+"/comentaris/", "POST", obj).then((data) => console.log("POST", data));
                actualitzarInfo();
                comment.value = '';
            }
            /**
             * Assignacio seleccionada
             * @param assignSelected
             */
            async function assignSelect(assignSelected) {
                console.log("new assign: ", assignSelected.id);
                selectAssign.value = false;
                let obj = {
                    "assignacio_id": assignSelected.id,
                }
                await simpleFetch("issues/"+issueId.value+"/", "PUT", obj).then((data) => console.log("PUT", data));
                actualitzarInfo();
            }

            async function autoSelect(id) {
                console.log("auto select: ", id);
                selectAssign.value = false;
                let obj = {
                    "assignacio_id": id,
                }
                await simpleFetch("issues/"+issueId.value+"/", "PUT", obj).then((data) => console.log("PUT", data));
                actualitzarInfo();
            }


            /**
             * Esborra assignacio
             */
            async function esborrar_assignacio() {
                console.log("esborrar assignacio");
                let obj = {
                    "assignacio_id": null,
                }
                await simpleFetch("issues/"+issueId.value+"/", "PUT", obj).then((data) => issue.value = data);
                actualitzarInfo();
            }

            /**
             * elimina la restriccio de data
             */
            async function deleteTimeLine() {
                let obj = {
                    "dataLimit": null,
                }
                await simpleFetch("issues/"+issueId.value+"/", "PUT", obj).then((data) => console.log("PUT", data));
                actualitzarInfo();
            }

            /**
             * Delete del bloqueig
             */
            async function deleteBlock() {
                let obj = {
                    "bloquejat": false,
                    "motiuBloqueig": ""
                }
                await simpleFetch("issues/"+issueId.value+"/", "PUT", obj).then((data) => console.log("PUT", data));
                actualitzarInfo();
            }

            /**
             * Guardar la restricció de data limit
             */
            async function btnSaveDateDirect() {
                showDatePickker.value = false;
                let obj = {
                    "dataLimit": new Date(date.value).toISOString(),
                }
                await simpleFetch("issues/"+issueId.value+"/", "PUT", obj).then((data) => console.log("PUT", data));
                actualitzarInfo();
            }

            /**
             * Guardar el motiu de bloqueig
             */
            async function btnSaveMotiuBloqueig() {
                let obj = {
                    "bloquejat": true,
                    "motiuBloqueig": motiuBlock.value
                }
                showBlock.value = false;
                await simpleFetch("issues/"+issueId.value+"/", "PUT", obj).then((data) => console.log("PUT", data));
                actualitzarInfo();
            }

            /**
             * Refresh page
             */
            function actualitzarInfo() {
                simpleFetch("issues/"+issueId.value+"/", "GET", "").then((data) => issue.value = data);
            }

            return {
                nomTag,
                colorTag,
                comment,
                issueTitle,
                issueDesc,
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
                autoObservador,
                selectAssign,
                selectObs, 
                allUsers,
                date,
                motiuBlock,
                attachmentFile,
                esborrar_observador,
                esborrar_assignacio,
                esborrar_tag_issue,
                esborrar_attachment,
                addAttachment,
                guardarDesc,
                deleteBlock,
                deleteTimeLine,
                setEstat,
                setTipus,
                setPrioritat,
                setGravetat,
                saveEdit,
                obsSelected,
                assignSelect,
                actualitzarInfo,
                btnSaveMotiuBloqueig,
                btnSaveDateDirect,
                afegir_comentari,
                addTagFetch,
                deleteIssue,
            }
        },
        mounted() {
            //Per obtenir la url
            let url = window.location.href;
            //Separar la url per '/'
            let directories = url.split("/");

            let issueIdUser = directories[(directories.length - 1)];
            simpleFetch("issues/"+issueIdUser+"/", "GET", "").then((data) => {
                this.issue = data;
                this.issueTitle = data.subject;
                this.issueDesc = data.descripcio;
            });
            console.log("issueObject: ", this.issue);
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


