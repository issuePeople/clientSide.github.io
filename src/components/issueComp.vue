<template>


    <div class = "row table-main " :class="{'is-blocked' : bloquejat }">
        
            <td class="level-field" >
                <div v-if="tipus === 'Bug'" class="level" style="background: rgb(228, 64, 87)"></div>
                <div v-else-if="tipus === 'Pregunta'" class="level" style="background-color: rgb(81, 120, 211);"></div>
                <div v-else class="level" style="background-color: rgb(64, 228, 206);"></div>
            </td>
            
            <td class="level-field" >
                <div v-if="gravetat === 'Desitjada'" class="level" style="background: rgb(112, 114, 143)"></div>
                <div v-else-if="gravetat === 'Menor'" class="level" style="background: rgb(64, 168, 228)"></div>
                <div v-else-if="gravetat === 'Normal'" class="level" style="background:  rgb(64, 228, 124)"></div>
                <div v-else-if="gravetat === 'Important'" class="level" style="background:  rgb(228, 162, 64)"></div>
                <div v-else class="level" style="background:   rgb(211, 84, 80)"></div>
            </td>
            <td class="level-field" >
                <div v-if="prioritat === 'Baixa'" class="level" style="background: rgb(168, 228, 64)"></div>
                <div v-else-if="prioritat === 'Mitja'" class="level" style="background: rgb(228, 206, 64)"></div>
                <div v-else class="level" style="background:  rgb(228, 124, 64)"></div>
            </td>
            
            
            
            <td @clik="namefun()" class="subject" >
                <span classe="issue-text" style="display: inline-flex;">
                     <RouterLink to="/edit/">
                        <span class="issue-ref">#{{id}}</span>
                    <span class="issue-subject">{{ subject }}</span>
                    </RouterLink>

                    
                    <div v-show=bloquejat class="blocked">
                        <i class="fa fa-lock" aria-hidden="true" style="color:red;padding-right: 5px;"></i>
                    </div>
                       <!-- Dataaaaa
                        {% if issue.dataLimit %}
                        <div class="due-date">
                            <i class="fa fa-clock-o" aria-hidden="true"></i>
                        </div>
                        {%endif%}-->
                        
                        <div v-for="tag in tags" :key="tag.nom" class="cjt_tags">
                            <span  v-bind:style='{backgroundColor: tag.color}' class="tag" style="padding-right: 5px; ">{{tag.nom}}</span>
                        </div>
                    
                </span>
            </td>
        
            <td class="issue-field" >

                <btn class="status-button" > {{ estat }}</btn>
                <select v-model="selected">
                    <option></option>

                </select>
                <!--<v-dialog v-model=dialogEstat width="500">
                    <v-card-title>Estat</v-card-title>
                    <v-card-text>
                        <v-select>

                        </v-select>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn @click="formulari()">Closeee</v-btn>
                    </v-card-actions>

                </v-dialog>-->


            </td>
            <td class="modified-field" >
                <span>12/10/2056</span>                          
            </td>
            <td class="assigned-field" >
                 <span class="issue-assignedto">Assigned</span>
            </td>
        </div>

    
  </template>
  
  <script >
  import {ref} from 'vue'
  import { simpleFetch } from '../utils/utils'
  import { RouterLink, RouterView } from 'vue-router'
  import {id} from "vuetify/locale";
        export default (await import('vue')).defineComponent({
            name: "IssueComp",
            
            /*components: {
                exempleComponent
            },*/
            
            props: {
                id: Number,
                subject: String,
                tipus: String,
                estat: String,
                gravetat: String,
                bloquejat: Boolean,
                dataCreacio: Date,
                prioritat: String,
                dataLimit: Date,
            },
            //setup(props) {
            
            setup() {
                let tags = ref();
                let limit = ref();
                let dialogEstat = ref(false);
                

                return {
                     limit,
                     tags,
                    formulari,
                    dialogEstat
                     
                }

                function formulari() {
                    console.log(2222222222222222222222222222222222222)
                    dialogEstat.value = !dialogEstat.value;

                }



            },
            mounted(){
                simpleFetch("issues/"+ this.id + "/tags/", "GET", "").then((data) => this.tags = data);


            },

    })
    
    
    //code here
  </script>
  
  <style scoped>


</style>