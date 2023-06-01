<template>
    <li>
        <div style="display: flex; justify-content: space-between; margin-left: 5px; margin-right: 5px; margin-top: 5px; border-bottom: 0.5px solid grey;">
            <div style="display: flex; justify-content: space-between; margin-top: 10px; margin-bottom: 20px;">
                <img
                    :src=activity.usuari.avatar
                    width="60"
                    height="60"
                >
                <div style="margin-left: 10px">
                    <div style="display: flex; margin-left: 5px;">
                        <a :href="'/#/usuari/'+activity.usuari.id" style="margin-right: 5px;" class="comment-creator">{{ activity.usuari.nom }}</a>
                        <span>{{ activity.data }}</span>
                    </div>
                        <div
                            v-if="activity.tipus === 'Creada'"
                            class="diff-status-wrapper" 
                            style="margin-top: 20px;"
                        >
                            <span style="background-color: #e2e3e9; font-weight: bold;" class="key">Creada: </span>
                            <span style="margin-left: 5px;" class="diff">userHardcoded</span>
                        </div>
                        <div 
                            v-else-if="activity.tipus === 'Nou attachment'"
                            class="diff-status-wrapper" 
                            style="margin-top: 20px;"
                        >
                            <span style="background-color: #e2e3e9; font-weight: bold;" class="key">New attachment: </span>
                            <span style="margin-left: 5px;" class="diff">{{activity.valor_nou}}</span>    
                        </div>
                        <div
                            v-else-if="activity.tipus === 'Attachment esborrat'"
                            class="diff-status-wrapper" 
                            style="margin-top: 20px;"
                        >
                            <span style="background-color: #e2e3e9; font-weight: bold;" class="key">Deleted attachment: </span>
                            <span style="margin-left: 5px;" class="diff">{{activity.valor_previ}}</span>    
                        </div>
                        <div
                            v-else-if="activity.tipus === 'Tag afegida'"
                            class="diff-status-wrapper" 
                            style="margin-top: 20px;"
                        >
                            <span style="background-color: #e2e3e9; font-weight: bold;" class="key">Tags added: </span>
                            <span style="margin-left: 5px;" class="diff">{{activity.valor_nou}}</span>    
                        </div>
                        <div
                            v-else-if="activity.tipus === 'Tag esborrada'"
                            class="diff-status-wrapper" 
                            style="margin-top: 20px;"
                        >
                            <span style="background-color: #e2e3e9; font-weight: bold;" class="key">Tags removed: </span>
                            <span style="margin-left: 5px;" class="diff">{{activity.valor_previ}}</span>    
                        </div>
                        <div 
                            class="diff-status-wrapper" 
                            style="margin-top: 20px;" 
                            v-else
                        >
                            <span style="background-color: #e2e3e9; font-weight: bold;" class="key">{{activity.tipus}}: </span>
                            <span style="margin-left: 5px;" class="diff">{{activity.valor_previ}} > {{activity.valor_nou}}</span>    
                        </div>
                </div>
            </div>
        </div>
    </li>
</template>

<script>

    //imports ...
    export default {
        name: "ActivitesEdit",
        
        props: {
            activity: Object
        },
        setup() {

            return {

            }
        }
    }


</script>

<style scoped>

</style>