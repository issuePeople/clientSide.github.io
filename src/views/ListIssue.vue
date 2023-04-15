<template>

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


</script>

<style scoped>

</style>
