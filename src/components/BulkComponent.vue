<template>
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

    <div class="a" style="display: flex; justify-content: center; align-items: center; width: 600px; height: 500px;">
        <a class="close" @click="selectAssign=false" style="position: absolute; top: 0; right: 0;">
            X
        </a>
        <form class="ng-pristine ng-invalid ng-invalid-required" method="post" style="display: block">
            <h2 class="title" style="display: flex; justify-content: center; align-items: center;">
                Afegir nou bulk
            </h2>
            <textarea v-model="text" cols="70" rows="10" wrap="off" data-linewidth="200" class="ng-pristine ng-empty ng-invalid ng-invalid-required ng-touched"
                type="text" name="subjects" style="display: block"></textarea>
                <br>
            <div class="lb-action-wrapper" style="position: absolute; right: 0;">
                <button @click="addIssues" variant="primary" type="submit" title="Save" class="btn-big">
                    Guardar
                </button>
            </div>
        </form>
        <!--
        <button @click="addIssues">
            as
        </button>
        --> 
    </div>
    
</v-dialog>
    
  
  </template>
  
  <script>
     import {ref} from 'vue';
    export default {
        name: "listIssue",
        
        /*
        components: {
            exempleComponent
        },
        
        Si es necesari l'estructura es aixi
        props: {
            title: String
        },
        setup(props) {
        */

        
        setup() {

            let text = ref("");
            let selectAssign = ref(false);

            async function addIssues() {
                console.log("Text", text.value);

                //await simpleFetch("issues/bulk", "POST", newIssues);
            }
        return {
            text,
            selectAssign,
            addIssues
        }
        }
    }
  
  </script>
  
  <style scoped>
  
  </style>