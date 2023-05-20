<template>
    <div>
        <!-- dialog to select the whatchers users -->
        <div v-if="type === 'obs'" >

            <div
              v-for="user of users"
              :key="user"
              style="margin-top: 10px"
              @click="$emit('userSelect', user.id)"
            >
                <div style="display: flex; flex-direction: row; ">
                    <img
                         :src= user.avatar
                         width="60"
                         height="60"
                    >
                    <div style="margin-top: 15px; margin-left: 5px">{{ user.nom }}</div>
                </div>
                <div style="background: grey; width: 300px; height: 1px; margin-top: 5px"></div>
            </div>

        </div>
        <!-- dialog to select the assign users -->
        <div v-else>
            <div
                    v-for="user of users"
                    :key="user"
                    style="margin-top: 10px"
                    @click="$emit('userSelect', user.id)"
            >
                <div style="display: flex; flex-direction: row; ">
                    <img
                            :src=user.avatar
                            width="60"
                            height="60"
                    >
                    <div style="margin-top: 15px; margin-left: 5px">{{ user.nom }}</div>
                </div>
                <div style="background: grey; width: 300px; height: 1px; margin-top: 5px"></div>
            </div>
        </div>
    </div>

</template>
  
  <script>
  
    export default {
      name: "SelectUsers",
      props: {
        type: String,
        users: Array,
      },
      setup(props) {
        console.log(props.users[0]);

        /*
        two types:
            -   assign
            -   obs
        */

        return {
  
        }
      }
    }
    
  </script>
  
  <style scoped>
  
  </style>