import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import './components/styles/theme-taiga.css';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFloppyDisk, faClock, faLock, faArrowRight, faArrowDown, faArrowLeft, faArrowUp, faPlus, faXmark, faTrash,faSearch,faSortUp,faSortDown,faSliders,faAngleDown,faAngleRight} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faFloppyDisk, faClock, faLock, faArrowRight, faArrowDown, faArrowLeft, faArrowUp, faPlus, faXmark, faTrash,faSearch,faSortUp,faSortDown,faSliders,faAngleDown,faAngleRight);

const vuetify = createVuetify({
  components,
  directives,
})

const app = createApp(App)

app.use(vuetify)
app.use(router)
app.component("font-awesome-icon", FontAwesomeIcon)
app.mount('#app')
