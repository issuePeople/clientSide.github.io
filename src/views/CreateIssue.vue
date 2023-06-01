<template>
    <div class="lightbox lightbox-generic-form lightbox-create-edit open">
        <a class="close" href="/#/list">
            <font-awesome-icon icon="xmark" />
        </a>
        <div> 
            <h2 class="title">New issue</h2>
            
            <div>
                <div class="form-wrapper">
                    
                    <!-- left side -->
                    <div class="main">
                        <input v-model=titleIssue type="text">
                        
                        <textarea v-model=description rows="7" placeholder="Description" class="description ng-pristine ng-untouched ng-valid ng-empty" style="margin-top: 5px;"></textarea>                            
                    </div>

                    <!-- right side -->
                    <div class="sidebar ticket-data">

                        <div>
                            <!-- status-->
                            <v-select
                                class="ml-3"
                                label="Select"
                                density="compact"
                                :items=TEstats
                                v-model=estat
                            ></v-select>
                            

                            <!-- assign ?--> 
                            <div v-if="assignat == null"  style="border: 1px solid black; border-radius:  10px;">
                                <v-dialog
                                    v-model="selectAssign"
                                    width="auto"
                                >
                                    <template v-slot:activator="{ props }">
                                        <v-btn
                                            v-bind="props"
                                            variant="text"
                                            class="ticket-users-actions ml-0"
                                        >
                                            Assign
                                        </v-btn>
                                    </template>

                                    <v-card
                                        width="600px"
                                    >
                                        <v-card-title>
                                            Select user
                                        </v-card-title>
                                        <v-card-text>
                                            <v-text-field placeholder="Search for users"></v-text-field>
                                        
                                            <SelectUsers type="assign" :users=allUsers @userSelect="assignSelect"/>
                                        
                                            <v-btn
                                                @click="selectAssign = false"
                                                color="red"
                                                class="mt-10 ml-16"
                                            >
                                                close
                                            </v-btn>
                                        </v-card-text>
                                    </v-card>
                                </v-dialog>
                                
                                <v-btn
                                    variant="text" 
                                    @click="autoAssign()"
                                >
                                    Assign to me
                                </v-btn>
                            </div>

                            <div 
                                v-else
                                style="
                                    display: flex; 
                                    justify-content: space-between; 
                                    margin-left: 5px; 
                                    margin-right: 5px;
                                    background-color: whitesmoke;
                                    padding: 5px;
                                    min-width: 200px;
                                "
                            >
                                <img 
                                    :src=avatarAssignat
                                    width = "60"
                                    height = "60"
                                >
                                <a :href='sethref("usuaris/", getidCookie())' style=" margin-top: 20px;">{{ userAssignName }}</a>
                                
                                <button
                                    @click="esborrar_assignacio()"
                                    variant="flat"
                                    color="whitesmoke"
                                >
                                    <font-awesome-icon icon="xmark" />
                                </button>
                            </div>
                            
                            <div class="ticket-data-container" style="margin-top: 10px;">
                                <!-- Type-->
                                <div style="display: flex; justify-content: space-between; margin-left: 10px;">
                                    <label>
                                        type
                                    </label>
                                    <v-menu>
                                        <template v-slot:activator="{ props }">
                                            <v-btn
                                                v-bind="props"
                                                variant="text"
                                            >
                                            {{tipus}}
                                            </v-btn>
                                        </template>
                                        <v-list>
                                            <v-list-item
                                                v-for="(item, index) in TTipus"
                                                :key="index"
                                                :value="index"
                                            >
                                            <v-list-item-title @click="setTipus(item)">{{ item }}</v-list-item-title>
                                            </v-list-item>
                                        </v-list>
                                    </v-menu>
                                </div>

                                <!-- Severity-->
                                <div style="display: flex; justify-content: space-between; margin-left: 10px;">
                                    <label>
                                        severity
                                    </label>
                                    <v-menu>
                                        <template v-slot:activator="{ props }">
                                            <v-btn
                                                v-bind="props"
                                                variant="text"
                                            >
                                            {{gravetat}}
                                            </v-btn>
                                        </template>
                                        <v-list>
                                            <v-list-item
                                            v-for="(item, index) in TGravetat"
                                            :key="index"
                                            :value="index"
                                            >
                                            <v-list-item-title @click="setGravetat(item)">{{ item }}</v-list-item-title>
                                            </v-list-item>
                                        </v-list>
                                    </v-menu>
                                </div>
                                
                                <!-- Priority-->
                                <div style="display: flex; justify-content: space-between; margin-left: 10px;">
                                    <label>
                                        priority
                                    </label>
                                    <v-menu>
                                        <template v-slot:activator="{ props }">
                                            <v-btn
                                                variant="text"
                                                v-bind="props"
                                            >
                                            {{prioritat}}
                                            </v-btn>
                                        </template>
                                        <v-list>
                                            <v-list-item
                                            v-for="(item, index) in TPrioritat"
                                            :key="index"
                                            :value="index"
                                            >
                                            <v-list-item-title @click="setPrioritat(item)">{{ item }}</v-list-item-title>
                                            </v-list-item>
                                        </v-list>
                                    </v-menu>
                                </div>
                            </div>
                            
                            <section class="ticket-section ticket-detail-settings">
                                <div class="ticket-detail-settings" >
                                    <!-- timeline -->
                                    <div>
                                        <v-btn
                                            v-if="isTimeLine"
                                            style="background: red;"
                                            variant="flat"
                                            @click="isTimeLine = false; showDatePickker = false"
                                        >
                                            <font-awesome-icon icon="clock" />
                                        </v-btn>
                                        <v-btn
                                            v-else
                                            @click="showDatePickker = true"
                                            variant="flat" 
                                        >
                                            <font-awesome-icon icon="clock" />
                                        </v-btn>
                                    </div>
                                    <!-- block -->
                                    <div>
                                        <v-btn
                                            v-if="bloquejat"
                                            variant="flat"
                                            style="background: red; margin-left: 5px;"
                                            @click="bloquejat = false"
                                        >
                                            <font-awesome-icon icon="lock"/>
                                        </v-btn>
                                        <v-btn
                                            v-else
                                            style="margin-left: 5px;"
                                            @click="bloquejat = true"
                                            variant="flat"
                                        >
                                            <font-awesome-icon icon="lock"/>
                                        </v-btn>
                                    </div>
                                </div>
                            </section>
                            
                            <div style="display: flex; justify-content: space-between;" v-show="showDatePickker">
                                <input 
                                    type="date" 
                                    v-model="dataLimit"
                                >
                                <v-btn 
                                    @click="isTimeLine = true"  
                                    style=" margin-left: 5px" 
                                    variant="flat"
                                >
                                    <font-awesome-icon icon="floppy-disk" />
                                </v-btn>
                            </div>

                            <div style="display: flex; justify-content: space-between;" v-show="bloquejat">
                                <label style="margin-top: 5px; margin-right: 5px;">Motiu: </label>
                                <input 
                                    type="text" 
                                    v-model="motiuBlock"
                                >
                            </div>
                        </div>
                    </div>
                    
                </div>
                <v-btn
                    @click="createNewIssue()" 
                    class="btn-big add-item"
                    style="margin-top: 10px; margin-bottom: 10px;"
                >
                    Enviar
                </v-btn>
            </div>
        </div>
    </div>
</template>

<script>
    import { ref } from 'vue';
    import {simpleFetch} from '../utils/utils';
    import SelectUsers from '../components/SelectUsers.vue';
    import { useRouter } from 'vue-router';

    export default {
        name: "CreateIssue",
        components: {
            SelectUsers
        },
        setup() {
            const router = useRouter();

            let titleIssue = ref("");
            let description = ref("");


            let estat = ref("new");
            let tipus = ref("Bug");
            let gravetat = ref("Wishlist");
            let prioritat = ref("Low");


            let assignat = ref(null);
            let avatarAssignat = ref();
            let userAssignName = ref();
            let dataLimit = ref(null);
            let bloquejat = ref(false);
            let motiuBlock = ref('');

            let selectAssign = ref(false);
            let allUsers = ref([]);
            simpleFetch("usuaris/", "GET", "").then((data) => allUsers.value = data);


            const TEstats = ["new", "In progress", "Ready for test", "Closed", "Needs info", "Rejected", "Postponed"];
            const TTipus = ["Bug", "Question", "Enhancement"];
            const TGravetat = ["Wishlist", "Minor", "Normal", "Important", "Critical"];
            const TPrioritat = ["Low", "Normal", "High"];

            let showDatePickker = ref(false);
            let isTimeLine = ref(false);

            ///#/usuaris/+getidCookie()
            function sethref(path, func) {
                return "/#"+path+func;
            }
            
            function setTipus(item) {
                tipus.value = item;
            } 

            function setGravetat(item) {
                gravetat.value = item;
            }

            function setPrioritat(item) {
                prioritat.value = item;
            }

            function getEstat() {
                switch (estat.value) {
                    case "new":
                        return 'N';
                    case "In progress":
                        return 'D';
                    case "Ready for test":
                        return 'T';
                    case "Closed":
                        return 'C';
                    case "Needs info":
                        return 'I';
                    case "Rejected":
                        return 'R';
                    case "Postponed":
                        return 'P';                    
                    default:
                        return 'B';
                }
            }

            function getTipus() {
                switch (tipus.value) {
                    case "Bug":
                        return 'B';
                    case "Question":
                        return 'P';
                    case "Enhancement":
                        return 'M';    
                    default:
                        return 'B';
                }
            }

            function getGravetat() {
                switch (gravetat.value) {
                    case "Wishlist":
                        return 'D';
                    case "Minor":
                        return 'M';
                    case "Normal":
                        return 'N';
                    case "Important":
                        return 'I';
                    case "Critical": 
                        return 'C';            
                    default:
                        return 'D';
                }
            }

            function getPrioritat() {
                switch (prioritat.value) {
                    case "High":
                        return 'A';
                    case "Normal":
                        return 'M';
                    case "Low":
                        return 'B';    
                    default:
                        return 'A';
                }
            }

            function assignSelect(assignSelected) {
                assignat.value = assignSelected.id;
                avatarAssignat.value = assignSelected.avatar;
                userAssignName.value = assignSelected.username;
                selectAssign.value = false;
            }

            function getidCookie() {
                let name = "id=";
                let decodedCookie = decodeURIComponent(document.cookie);
                let ca = decodedCookie.split(';');
                for(let i = 0; i <ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }
                }
                return "";
            }

            function getNameCookie() {
                let name = "name=";
                let decodedCookie = decodeURIComponent(document.cookie);
                let ca = decodedCookie.split(';');
                for(let i = 0; i <ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }
                }
                return "";
            }

            function getAvatarCookie() {
                let name = "avatar=";
                let decodedCookie = decodeURIComponent(document.cookie);
                let ca = decodedCookie.split(';');
                for(let i = 0; i <ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }
                }
                return "";
            }

            function autoAssign() {
                assignat.value = getidCookie();
                avatarAssignat.value = getAvatarCookie();
                userAssignName.value = getNameCookie();
            }

            function esborrar_assignacio() {
                assignat.value = null;
                userAssignName.value = undefined;
                avatarAssignat.value = undefined;
            }

            async function createNewIssue() {
                let obj = {
                    "subject": titleIssue.value,
                    "descripcio": description.value,

                    "tipus": getTipus(),
                    "estat": getEstat(),
                    "gravetat": getGravetat(),
                    "prioritat": getPrioritat(),

                    "assignacio_id": assignat.value,

                    "dataLimit": dataLimit.value,

                    "bloquejat": bloquejat.value,
                    "motiuBloqueig": motiuBlock.value
                }
                await simpleFetch("issues/", "POST", obj).then((data) => console.log("post response: ", data));
                //redirect 
                router.push('/#/list');
            }

            return {
                estat,
                TEstats,
                tipus,
                TTipus,
                gravetat,
                TPrioritat,
                prioritat,
                TGravetat,
                titleIssue,
                description,
                assignat,
                userAssignName,
                avatarAssignat,
                selectAssign,
                allUsers,
                dataLimit,
                isTimeLine,
                showDatePickker,
                bloquejat,
                motiuBlock,
                getidCookie,
                sethref,
                esborrar_assignacio,
                assignSelect,
                autoAssign,
                setGravetat,
                setTipus,
                createNewIssue,
                setPrioritat,
            }
        }
    }
    


</script>

<style scoped>
    
</style>


