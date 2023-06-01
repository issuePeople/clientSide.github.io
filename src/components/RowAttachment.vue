<template>
    <li style="margin-top: 5px; margin-left: 5px; border-bottom: 1px solid rgb(168, 168, 168); font-size: 15px;">
        <div style="display: flex; justify-content: space-between;">
            <div>
                <a :href=attachment.document>{{ attachmentName(attachment.document) }}</a>
            </div>

            <v-dialog
                v-model="dialogTrashAttachment"
                width="auto"
            >
                <template v-slot:activator="{ props }">
                    <button
                        v-bind="props"
                    >
                        <font-awesome-icon icon="trash"/>
                    </button>
                </template>

                <v-card
                    width="600px"
                    class="pa-5"
                >
                    <div style="margin-left: auto; margin-right: auto; font-size: 30px;">
                        Delete attachment...
                    </div>
                    <div style="margin-left: auto; margin-right: auto; font-size: 20px;">
                        <p>
                            Are you sure you want to delete?
                        </p>
                        <p style="margin-left: auto; margin-right: auto;">
                            the attachment {{ attachmentName(attachment.document) }}
                        </p>
                        <div style="margin-left: auto; margin-right: auto">
                            <v-btn
                                @click="dialogTrashAttachment = false"
                                variant="text"
                            >
                                Cancel
                            </v-btn>
                            <v-btn
                                @click="esborrar_attachment(attachment)"
                                color="red"
                                class="ml-15"
                            >
                                Delete
                            </v-btn>
                        </div>
                    </div>
                </v-card>
            </v-dialog>
        </div>
    </li>
</template>
  
<script>

import {ref} from 'vue';
import {simpleFetch} from '@/utils/utils';
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
export default {
    name: "RowAttachment",
    components: {FontAwesomeIcon},
    props: {
        attachment: Array,
        issueId: Number,
    },
    emits: ['update_issues'],
    setup(props, context) {

        console.log("props: ", props.issueId);

        let dialogTrashAttachment = ref(false);
        
        function attachmentName(url) {
            const parts = url.split('/');
            const lastPart = parts[parts.length - 1];
            return lastPart;
        }

        /**
         * Esborrar un attachment
         * @param attachment
         * @returns {Promise<void>}
         */
         async function esborrar_attachment(attachment) {
            await simpleFetch("issues/"+props.issueId+"/attachments/"+attachment.id, "DELETE", );
            context.emit('update_issues');
        }


        return {
            dialogTrashAttachment,
            attachmentName,
            esborrar_attachment,
        }
    }
}
  
</script>

<style scoped>

</style>