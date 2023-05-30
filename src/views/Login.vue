<template>
    <div style="background-color: cadetblue; padding: 25%; display: flex; justify-content: center; align-items: center; height: 100%;">
        <div style=" border-radius: 20px;  background-color: grey; height: 400px; width: 400px;">
            <h1 style="margin-left: 100px; color: whitesmoke;">Possibles usuaris</h1>
            <v-col>
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
                >
                    Login
                </v-btn>
            </v-col>
        </div>
    </div>
</template>

<script>
    import {ref} from 'vue';  
    import { useRouter } from 'vue-router';

    export default {
        name: "Login",
        setup() {
            const router = useRouter();
            let users = [{name: "pau", id: 1, token: "959f71f16d42c05c267153f4ce64e822bb829df7"}, 
                {name: "joan", id: 6, token: "32e702b8607776cd2e2a22806148b0f10acac910"}, 
                {name: "pere", id: 3, token:"32e702b8607776cd2e2a22806148b0f10acac910" }, 
                {name: "maria", id: 4, token:"32e702b8607776cd2e2a22806148b0f10acac910" }
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


