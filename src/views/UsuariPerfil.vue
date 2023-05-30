
<template>
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
              :src="userLogged.avatar" 
              width="180"
              height="180"
            >
        </fieldset>
        <div>
            <button id="btnSelectImg" type="text" variant="secondary" class="btn-small button-full js-change-avatar">
                Canviar foto
            </button>
            <!-- <input id="avatarImg" style="display: none;" type="file" name="avatar"> -->
            <!--
            <v-file-input
                label="Canviar foto"
                v-model=attachmentFile
                @change="addAttachment()"
            >
                <font-awesome-icon icon="plus" />
            </v-file-input>
            -->
        </div>
        <button type="submit" id="btnSaveAvatar" style="display: none;" name="guardar_avatar" class="btn-small button-full js-change-avatar">    </button>
        <button type="submit" name="guardar_avatar_defecte" class="botonMenu">
            <p style="color: #1e96b1;"> &nbsp; &nbsp; Avatar per defecte</p>
        </button>
      </div>
      <!-- Info usuari i canviar bio -->  
      <div class="project-details-form-data"> 
        <fieldset>
            <label for="username">Username</label>
            <input  type="text" name="username" v-model="username" :placeholder="userLogged.username">
        </fieldset>
        <fieldset>
            <label for="email">Email</label>
            <input type="text" name="email" v-model="email" :placeholder="userLogged.email">
        </fieldset>
        <fieldset>
            <label for="first_name">Nom</label>
            <input  type="text" name="first_name" v-model="nom" :placeholder="userLogged.nom">
        </fieldset>
        <fieldset>
            <label for="bio">Bio</label>  
            <textarea v-if="userLogged.bio" v-model="bio" name="bio" id="bio" class="ng-pristine ng-valid ng-not-empty ng-valid-maxlenght ng-touched" :placeholder="userLogged.bio" style="width: 500px; height: 227px;"></textarea>
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
</template>

<script>
  //imports
  import { ref } from 'vue';
  import {simpleFetch} from '@/utils/utils'; 
    

  export default {
    name: "UsuariPerfil",
    setup() {
      
      //Per obtenir la url
      let url = window.location.href;
      console.log("Url: ",url);
      //Separar la url per '/'
      let directories = url.split("/");
      let idUser = ref(directories[(directories.length - 1)]);
      
      let userLogged = ref([]);            
      let allUsers = ref([]);
      
      let username = ref(userLogged.username);
      let email = ref(userLogged.email);
      let nom = ref(userLogged.nom);
      let bio = ref(userLogged.bio);      

      /*
      async function addAvatar() {
        console.log("Attachment: ", attachmentFile.value);
        console.log("File: ", attachmentFile.value[0]);

        const fd = new FormData();
        fd.append("avatar", attachmentFile.value[0]);

        await simpleFetch("usuari/1", "PUT", fd, "formData");
        actualitzarInfo();
      }*/

      async function saveChanges() {
        await simpleFetch("usuaris/1", "PUT", username, email, nom, bio);
        actualitzarInfo();
      }

      function actualitzarInfo() {
        simpleFetch("usuaris/1", "GET", "").then((data) => userLogged.value = data);
      }

      return {
        userLogged,
        allUsers,
        username,
        email,
        nom,
        bio,
        saveChanges
      }
    },

    mounted() {
      //Per obtenir la url
      let url = window.location.href;
      //Separar la url per '/'
      let directories = url.split("/");
      let userId = directories[(directories.length - 1)];

      //Obtengo el usuario loggeado
      simpleFetch("usuaris/"+1+"/", "GET", "").then((data) => this.userLogged = data);
      console.log("Logged user: ", this.userLogged);

      //Obtengo todos los usuarios para ponerlos en el apartado "Your Team"
      simpleFetch("usuaris/", "GET", "").then((data) => this.allUsers = data);
      console.log("all Users: ", this.allUsers);    
    }
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
  