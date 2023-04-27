<template>


    <RouterLink to="/edit">
        <img source="logo" width="40" height="40" />
    </RouterLink>

    <v-btn @click="fetchUser()">A</v-btn>

    <div style="margin-left: 20px;">

        <div>
            <exempleComponent />
        </div>

        <div
            v-for="item of arraOfContnet"
        >
            {{ item }}
        </div>

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

</template>

<script setup>
    import exempleComponent from '../components/exempleComponent.vue'

    let falseBoolean = false;
    let trueBoolean = true;

    let arraOfContnet = ["issue1", "issue2", "issue3", "issue4"];

    async function fetchUser() {
        console.log("fetch");
        /*
        const response = await fetch("http://issuepeople-env.eba-bhtdckwp.us-west-2.elasticbeanstalk.com/api/issues", {
            method: "GET",
            mode: 'no-cors',
            headers: {
                "Content-Type": "application/json",
                'Accept': 'application/json',
            },
        });
        console.log("response: ", response);
        const jsonData = await response.json();
        console.log("data: ",jsonData);
        */
        try {
            const response = await fetch('http://127.0.0.1:8000/api/issues', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    'Accept': 'application/json',
                },
            });
            const data = await response.json();
            //const json = data === "" ? {} : JSON.parse(data);
            console.log("data: ", data);
            // Do something with the data
        } catch (error) {
            console.error('An error occurred during the fetch operation:', error);
            // Display an error message to the user
        }
    }

</script>

<style scoped>

</style>
