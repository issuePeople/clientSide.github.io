
<template>
  <div>
    <NavBar></NavBar>
    <div class="master" style="width: 100%; display: grid; place-content: center;">
      <br>
        <header>
            <h1 style="color: #1e96b1;">Configuració d'usuari</h1>
        </header>
      <section class="main user-profile" style="display: grid; grid-template-columns: 30% 67% 20%; gap: 20px;">
        
        <!-- Avatar -->
        <div class="project-details-image">
          
          <fieldset class="image-container">
              <img 
                :src="avatarUrl" 
                width="180"
                height="180"
              >
          </fieldset>
          <div class="add-attach" >
              <v-file-input
              style="width: 180px; important!"
                  label="Canviar foto"
                  width="180"
                  v-model=avatar
              >
                  <font-awesome-icon icon="plus" />
              </v-file-input>
          </div>
          <button type="submit" id="btnSaveAvatar" style="display: none;" name="guardar_avatar" class="btn-small button-full js-change-avatar">    </button>
          <button type="submit" name="guardar_avatar_defecte" class="botonMenu" @click="setAvatarPerDefecte">
              <p style="color: #1e96b1;"> &nbsp; &nbsp; Avatar per defecte</p>
          </button>
        </div>
        <!-- Info usuari i canviar bio -->  
        <div class="project-details-form-data"> 
          <fieldset>
              <label for="username">Username</label>
              <input type="text" name="username" v-model="username">
          </fieldset> 
          <fieldset>
              <label for="email">Email</label>
              <input type="text" name="email" v-model="email">
          </fieldset>
          <fieldset>
              <label for="first_name">Nom</label>
              <input  type="text" name="first_name" v-model="nom">
          </fieldset>
          <fieldset>
              <label for="bio">Bio</label>  
              <textarea v-if="bio" v-model="bio" name="bio" id="bio" class="ng-pristine ng-valid ng-not-empty ng-valid-maxlenght ng-touched" style="width: 500px; height: 227px;"></textarea>
              <textarea v-else name="bio" v-model="bio" id="bio" class="ng-pristine ng-valid ng-not-empty ng-valid-maxlenght ng-touched" placeholder="Digues alguna cosa sobre tu" style="width: 500px; height: 227px;"></textarea>
            </fieldset>
          <fieldset class="submit">
              <button @click="saveChanges" name="guardar_info" variant="primary" title="Save" class="btn-small" style="margin-left: 400px;">
                  Guardar
              </button>
          </fieldset>
          <br>
              <a href="/usuaris/logout">
                  <p style="color: #1e96b1; margin-left: 380px;"> &nbsp; &nbsp; Tancar sessió</p>
              </a>
        </div>
        <!-- Your team -->
        <div class="timeline-wrapper" style="margin-left: 30px; width: 130px;">
          <h1 style="white-space: nowrap;">Your team</h1>
          <div >
            <a v-for="usuari in allUsers" :href="'/usuari/'+usuari.id">
                <img 
                    :src="usuari.avatar"
                    width="32"
                    height="32"
                    style="border-radius: 50%; margin-right: 5px;"
                >
            </a>
        </div>
        </div>
      </section>
    </div>
  </div>
  
</template>

<script>
  //imports
  import { ref } from 'vue';
  import {simpleFetch} from '@/utils/utils'; 
  import NavBar from '../components/NavBar.vue';
    

  export default {
    name: "UsuariPerfil",
    components: {
      NavBar
    },
    setup() {
        //Per obtenir la url
        let url = window.location.href;
        //Separar la url per '/'
        let directories = url.split("/");
        let idUser = ref(directories[(directories.length - 1)]);
        let allUsers = ref([]);
        let username = ref("");
        let email = ref("");
        let nom = ref("");
        let bio = ref("");
        let avatarUrl = ref();
        let avatar = ref("");
        async function saveChanges() {
            let fd = new FormData();
            fd.append("username", username.value);
            fd.append("email", email.value);
            fd.append("nom", nom.value);
            fd.append("bio", bio.value);
            fd.append("avatar", avatar.value[0]);
            await simpleFetch("usuaris/1", "PUT", fd, "formData");
            await simpleFetch("usuaris/1/", "GET", "").then((data) => avatarUrl.value = data.avatar);
        }
        async function setAvatarPerDefecte() {
            await new Promise(resolve => setTimeout(resolve, 3000));
            avatarUrl.value = "https://issuestorage.s3.amazonaws.com/media/default.png";
            //await simpleFetch("usuaris/1/", "GET", "").then((data) => avatarUrl.value = data.avatar);
        }
        return {
            allUsers,
            username,
            email,
            nom,
            bio,
            avatar,
            avatarUrl,
            setAvatarPerDefecte,
            saveChanges
        };
    },
    mounted() {
        //Per obtenir la url
        let url = window.location.href;
        //Separar la url per '/'
        let directories = url.split("/");
        let userId = directories[(directories.length - 1)];
        //Obtengo el usuario loggeado
        simpleFetch("usuaris/" + 1 + "/", "GET", "").then((data) => {
            this.username = data.username;
            this.email = data.email;
            this.nom = data.nom;
            this.bio = data.bio;
            this.avatarUrl = data.avatar;
        });
        //Obtengo todos los usuarios para ponerlos en el apartado "Your Team"
        simpleFetch("usuaris/", "GET", "").then((data) => this.allUsers = data);
    },
    components: { NavBar }
}


</script>

<style scoped>
  @media (min-width: 1024px) {
    .about {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }
</style>
  