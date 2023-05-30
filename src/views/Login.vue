<template>
    <div style="background-color: cadetblue; padding: 25%; display: flex; justify-content: center; align-items: center; height: 100%;">
        <v-card style=" border-radius: 20px;  height: 400px; width: 400px;">
            <v-card-title>
                Possibles usuaris
            </v-card-title>
            <div style="margin-left: 50px; margin-top: 130px;">
                <v-menu>
                    <template v-slot:activator="{ props }">
                        <v-btn
                            width="200px"
                            v-bind="props"
                        >
                            {{userName.name}}
                            <font-awesome-icon icon="arrow-down" style="margin-left: 10px;" />
                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-item
                            v-for="(user, index) in users"
                                :key="index"
                                :value="index"
                            >
                            <v-list-item-title @click="setUser(user)">{{ user.name }}</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
                <v-btn
                    @click="setCookiUser()"
                    color="green"
                >
                    Login
                </v-btn>
            </div>
        </v-card>
    </div>
</template>

<script>
    import {ref} from 'vue';  
    import { useRouter } from 'vue-router';

    export default {
        name: "Login",
        setup() {
            const router = useRouter();
            let users = [{name: "Pau", id: 1, token: "959f71f16d42c05c267153f4ce64e822bb829df7"}, 
                {name: "Nora", id: 28, token: "c93626790ee837a869e62a4bdae48ad7752d6074"}, 
                {name: "Angel", id: 30, token:"ea8b2887d7d9e586bdda20ec4688fb1fea6699a6" }, 
                {name: "Sol", id: 31, token:"32e702b8607776cd2e2a22806148b0f10acac910" }
            ];

            let userName = ref(users[0]);

            function setUser(user) {
                userName.value = user;
            }

            function setCookiUser() {
                setCookie("name", userName.value.name, 1);
                setCookie("id", userName.value.id, 1);
                setCookie("Token", userName.value.token, 1);
                router.push('/list');
            }

            function setCookie(cname, cvalue, exdays) {
                const d = new Date();
                d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
                let expires = "expires="+d.toUTCString();
                document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
            }

            return {
                userName,
                users,
                setUser,
                setCookiUser
            }
        }
    }
</script>

<style scoped>
    
</style>


