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
        <div class="ng-pristine ng-invalid ng-invalid-required" style="display: block">
            <h2 class="title" style="display: flex; justify-content: center; align-items: center;">
                Afegir nou bulk
            </h2>
            <textarea v-model="text" cols="70" rows="10" wrap="off" data-linewidth="200" class="ng-pristine ng-empty ng-invalid ng-invalid-required ng-touched"
                type="text" name="subjects" style="display: block"></textarea>
                <br>
            <div class="lb-action-wrapper" style="position: absolute; right: 0;">
                <button @click="addIssues" variant="primary" title="Save" class="btn-big">
                    Guardar
                </button>
            </div>
        </div>
    </div>
    
</v-dialog>
    
  
  </template>
  
  <script>
     import {ref} from 'vue';
    import {simpleFetch} from '@/utils/utils';

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
            let newIssues = ref("");

            async function addIssues() {
                newIssues = text.value.split("\n");
                newIssues = newIssues.filter((issue) => issue !== "");  
                console.log("Text", text.value);
                text.value = "";
                console.log("New issues");
                for (let i = 0; i < newIssues.length; i++) {
                  console.log(newIssues[i]);
                }       
                
                let issuesArray = newIssues.map((issue) => {
                    return {
                    subject: issue
                    };
                });

                let obj = {
                    issues: issuesArray
                }
                await simpleFetch("issues/bulk/", "POST", obj);
                restart();
            }

            async function restart() {
                text.value = "";
                newIssues.value = "";
            }

        return {
            text,
            selectAssign,
            newIssues,
            addIssues
        }
        }
    }
  
  </script>
  
  <style scoped>
  
  </style>