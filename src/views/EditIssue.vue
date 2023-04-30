<template>
    <div class="master">
        <div class="wrapper">
            <div class="main detail">
                <!-- issue info container  -->
                <div class="detail-header-container">

                    <div class="detail-header">
                        <!-- Titol issue-->
                        <div class="detail-title-wrapper">
                            <span classe="issue-text" style="display: inline-flex;">
                                <div class="detail-ref">
                                    <span class="issue-ref">#{{ issue.id }}</span>
                                </div>
                                <input name="subject" style="margin-top: 3px; font-size: 25px;" class="detail-subject" value="{{issue.subject}}">
                                <button style="background: none;" type="submit"  name="guardar_subject">
                                    <i style="margin-top: 3px; font-size: 25px;" class="fa fa-floppy-o" aria-hidden="true"></i>
                                </button>
                            </span>
                        </div>
                        <div class="detail-project">
                            <div class="section-name">Issue</div>
                        </div>
                        <!--
                            <div v-if="issue.dataLimit" class="detail-header-line block-desc-container">
                                <span class="blocked-sign" style="color: white">
                                    <i class="fa fa-clock-o" aria-hidden="true" style="margin-right: 5px; margin-top: 1px;"></i>
                                </span>
                                <span class="block-description" style="margin-left: 5px; color: #e5e5e5;">
                                    {{issue.dataLimit}}
                                </span>
                            </div>
                            <div v-if="issue.bloquejat" class="detail-header-line block-desc-container">
                                <span class="blocked-sign" style="color: white">
                                    <i class="fa fa-lock" aria-hidden="true" style="margin-right: 5px; margin-top: 1px;"></i>
                                    Blocked
                                </span>
                                <span class="block-description" style="margin-left: 5px; color: #e5e5e5;">
                                        {{issue.motiuBloqueig}}
                                </span>
                            </div> 
                        -->   
                        <!-- Action buttons-->
                        
                    </div>
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

            
            return {
                issue
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
            let dataIssue;
            simpleFetch("issues/"+issueId+"/", "GET", "").then((data) => dataIssue = data);
            issue.value = dataIssue;
            console.log("dataIssue: ", dataIssue);
            console.log("issueObject: ", issue.value.id);
        }
    }

    

</script>

<style scoped>
    
</style>


