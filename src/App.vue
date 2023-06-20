<template>
  <ion-app>
    <ion-router-outlet v-if="connected"/>
    <loginView v-else @loginEmited="connected=true"/>
  </ion-app>
</template>

<script>
import LoginView from './pages/LoginView.vue'
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';
//import LoginViewVue from './pages/LoginView.vue';

export default defineComponent( {
  name:'app',
  components:{
    IonApp,
    IonRouterOutlet,
    LoginView
  },
  data(){
return{
  connected:false
}
  }
});
</script>
