<template>

    <div>
        <RouterLink to="/edit/1">
            <img source="logo" width="40" height="40" />
        </RouterLink>

        <v-btn @click="fetchUser()">A</v-btn>

        <div style="margin-left: 20px;">

            <div>
                <exempleComponent />
            </div>

        <div>
            <exempleComponent />
            <llistaIssues></llistaIssues>
        </div>

        <!--<div
            v-for="item of arraOfContnet"
        >
            {{ item }}
        </div>-->

            <div
                v-if="falseBoolean"
            >
                text conditional
            </div>
            <div
                v-if="trueBoolean"
            >
                text conditional
            </div>
        </div>
    </div>

</template>

<script>
    import exempleComponent from '../components/exempleComponent.vue';
    import bulkComponent from '../components/BulkComponent.vue';
    import {simpleFetch} from '../utils/utils';


    export default {
        components: {
            exempleComponent,
            bulkComponent
        },
        name: "listIssue",
        /*
        Si es necesari l'estructura es aixi
        props: {
            title: String
        },
        setup(props) {
        */
        setup() {

            let falseBoolean = false;
            let trueBoolean = true;

            let arraOfContnet = ["issue1", "issue2", "issue3", "issue4"];

            async function fetchUser() {
                let issues;
                simpleFetch("issues/", "GET", "").then((data) => issues = data);    
                console.log("issues: ", issues);
            }

            return {
                falseBoolean,
                trueBoolean,
                arraOfContnet,
                fetchUser
            }
        }
    }

</script>

<style scoped>

</style>
