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
                                    <input name="subject" style="margin-top: 3px; font-size: 25px;" class="detail-subject" value=issue.subject>
                                    
                                    <button style="background: none;" type="submit"  name="guardar_subject">
                                        <i style="margin-top: 3px; font-size: 25px;" class="fa fa-floppy-o" aria-hidden="true"></i>
                                    </button>
                                </div>
                                
                            </span>
                        </div>
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
                issue,
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


