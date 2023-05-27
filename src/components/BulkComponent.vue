<template>
  
    <div class="lightbox lightbox-generic-bulk open" style="display: flex">
        <form class="ng-pristine ng-invalid ng-invalid-required" method="post" style="display: block">
            <h2 class="title">
                Afegir nou bulk
            </h2>
            <textarea cols="200" wrap="off" data-linewidth="200" class="ng-pristine ng-empty ng-invalid ng-invalid-required ng-touched"
                type="text" name="subjects" style="display: block"></textarea>
                <br>
            <div class="lb-action-wrapper">
                <button variant="primary" type="submit" title="Save" class="btn-big">
                    Guardar
                </button>
            </div>
        </form>
    </div>
  
  </template>
  
  <script>
  
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
  
        return {
  
        }
        }
    }
  
  </script>
  
  <style scoped>
  
  </style>