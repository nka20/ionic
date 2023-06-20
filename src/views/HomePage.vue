<template>
  <ion-page @login="connected=true">
    <ion-header :translucent="true" >
    <ion-toolbar color="primary">
          <ion-title size="large">Liste employee</ion-title>
          <ion-icon :icon="person" size="large" slot="end"> </ion-icon>
          <ion-icon :icon="airplaneOutline"> </ion-icon>
      </ion-toolbar>
    </ion-header>
<ion-content :fullscreen="true" class="ion-padding">
<ion-list>

<ion-item v-for="i in 5" :key="i">
<ion-avatar slot="start"><img @click="this.$router.push('/image')" src="../asset/logo.jpg"></ion-avatar>
<ion-label>
<h2>Bonjour employe num :</h2>
<p @click="this.$router.push('/detail')">{{i}}</p>
 </ion-label>
<ion-button color="danger" slot="end" router-link="/add">
 <ion-icon :icon="add"> </ion-icon>
 <ion-label>conge</ion-label>
</ion-button>
</ion-item>


</ion-list>
</ion-content>
  </ion-page>
</template>

<script>
import {person} from "ionicons/icons";
import {airplaneOutline} from "ionicons/icons";
import {add} from "ionicons/icons";
import {IonContent,IonLabel, IonHeader, IonPage, IonTitle, IonToolbar,IonIcon,IonList,IonItem,IonAvatar,IonButton } from '@ionic/vue';

export default{
      data(){
        return{
    person,
    airplaneOutline,
    add,
        }
  },
  components:{
    IonButton ,
    IonLabel,
    IonAvatar,
    IonList,
    IonItem ,
    IonContent,
     IonHeader,
      IonPage,
       IonTitle,
        IonToolbar,
        IonIcon
  },
}
</script>

<style scoped>
#container {
  text-align: center;
  
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  
  color: #8c8c8c;
  
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
