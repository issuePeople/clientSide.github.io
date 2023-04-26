<template>


    <RouterLink to="/edit">
        <img source="logo" width="40" height="40" />
    </RouterLink>

    <v-btn @click="fetchUser()">A</v-btn>

    <div style="margin-left: 20px;">

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

</template>

<script setup>
    import exempleComponent from '../components/exempleComponent.vue'
    import llistaIssues from '../components/llistaIssues.vue'

    let falseBoolean = false;
    let trueBoolean = true;

    //let arraOfContnet = ["issue1", "issue2", "issue3", "issue4"];

    function fetchUser() {
        console.log("click");
        fetch('http://deploy-env.eba-6a6b2amf.us-west-2.elasticbeanstalk.com/usuaris/sign_up/perfils/',  {   
            method: "POST",
            /*
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            */
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            
            body: JSON.stringify({password: "string1234", password2: "string1234", username: "string", email: "a@gmail.com"}),
        })
            .then(res => res.json())
            .then(data => {
                setData(data);
                console.log("login: ", data);
            })
            .catch(console.error)
    }

</script>

<style scoped>

</style>
