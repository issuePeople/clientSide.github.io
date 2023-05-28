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
                     <RouterLink :to='/edit/+id'>
                        <span class="issue-ref">#{{id}}</span>
                    <span class="issue-subject">{{ subject }}</span>
                    </RouterLink>

                    
                    <div v-show=bloquejat class="blocked">
                         <font-awesome-icon icon="lock" color="red"/>



                    </div>

                       <!-- Dataaaaa-->
                    <div v-if="dataLimit != null" class="due-date">
                        <font-awesome-icon icon="clock" />
                    </div>

                        
                    <div v-for="tag in tags" :key="tag.nom" class="cjt_tags">
                            <span  v-bind:style='{backgroundColor: tag.color}' class="tag" style="padding-right: 5px; ">{{tag.nom}}</span>
                    </div>
                    
                </span>
            </td>
        
            <td class="issue-field" >
                <div class="status-button">
                <select  class="issue-status" style="margin-top: 5px; border:none; outline:none;background: none;" @change="handleChange">
                    <option v-for="E in TEstats" :selected="E == estat" :value="E" v-bind:selected="E == estat" class="issue-status-bind">{{E}} </option>
                    <!--Falta icono fletxeta-->
                </select>
                </div>
            </td>
            <td class="modified-field" >
                <span>12/10/2056</span>                          
            </td>
            <td class="assigned-field" >
                 <div class="issue-assignedto">

                <select  class="issue-status" style="margin-top: 5px; border:none; outline:none;background: none;" @change="handleChange2">
                    <option v-if="assignat == 'UnAssigned'"  :value="assignat" :selected="assignat" class="issue-status-bind">No Assignat</option>
                    <option v-for="usu in usuaris"  :selected="assignat != 'UnAssigned' && usu.username == assignat"  :value="usu.id"  class="issue-status-bind">{{usu.nom}}</option>
                    <!--Falta icono fletxeta-->
                </select>
                 </div>
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
                assignacio: Object,
                usuaris: Array(Object),
            },
            //setup(props) {
            
            setup() {
                let tags = ref();
                let limit = ref();
                let assignat = ref()


                const TEstats = ["Nova", "En curs", "Llesta per testejar", "Tancada", "Necessita informació", "Rebutjada", "Ajornada"];
                

                return {
                     limit,
                     tags,
                    TEstats,
                    assignat,
                    handleChange,
                    handleChange2,
                     
                }

                function handleChange(e){
                    var id = e.target.value
                    var value
                    if(id === "Nova") value = "N"
                    else if(id == "En curs") value = "D"
                    else if(id == "Llesta per testejar") value = "T"
                    else if(id == "Tancada") value ="C"
                    else if(id == "Necessita informació") value ="I"
                    else if(id == "Rebutjada") value = "R"
                    else value ="P"
                    let endpoint = "issues/"+this.id+"/"
                    simpleFetch(endpoint,"PUT",{estat: value})
                }
                function handleChange2(e){
                    var id = e.target.value
                    if(id !== 'UnAssigned') {
                        let endpoint = "issues/" + this.id + "/"
                        simpleFetch(endpoint, "PUT", {assignacio_id:id})
                    }
                }



            },
            mounted(){

                simpleFetch("issues/"+ this.id + "/tags/", "GET", "").then((data) => this.tags = data);
                if( this.assignacio == null){
                    this.assignat = "UnAssigned"
                }
                else{
                    this.assignat = this.assignacio.username
                }



            },

    })
    
    
    //code here
  </script>
  
  <style scoped>


</style>