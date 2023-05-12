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
                                        <!-- <i style="margin-top: 3px; font-size: 25px;" class="fa fa-floppy-o" aria-hidden="true"></i> -->
                                        G
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

                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { ref } from 'vue';
    import {simpleFetch} from '../utils/utils';


    export default {
        setup() {
            let issue = ref();
            let addTag = ref(true);

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
            
            return {
                issue,
                addTag,
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


