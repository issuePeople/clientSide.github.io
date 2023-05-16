<template>
    <li>
        <div style="border-bottom: 0.5px solid grey;">
            <div style="display: flex; margin-left: 5px; margin-right: 5px; margin-top: 10px; margin-bottom: 20px;">
                <img src="{{ comentari.autor.avatar.url }}"
                    width="60px"
                    height="60px"
                >
                <div style="margin-left: 10px;">
                    <div style="display: flex; justify-content: space-between;">
                        <a href="/usuaris/{{comentari.autor.user.id}}" style="margin-right: 5px;" class="comment-creator">{{ comentari.autor.user.first_name }}</a>
                        <span>{{ comentari.data }}</span>
                    </div>
                    <span>{{ comentari.text }}</span>
                </div>
            </div>
        </div>
    </li>
</template>


<script>

    //imports ...
    export default {
        name: "ComentarisEdit",
        props: {
            comentari: String
        },
        setup(props) {


            return {

            }
        }
    }


</script>

<style scoped>

</style>