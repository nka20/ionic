<template>

<ion-header>
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-button @click="close" color="white">Cancel</ion-button>
    </ion-buttons>
    <ion-title class="ion-text-center">Formulaire</ion-title>
    <ion-buttons slot="end">
      <ion-button>Confirm</ion-button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>
<ion-content class="ion-padding">
  <ion-item>
    <ion-label position="stacked">Debut</ion-label>
    <ion-input  placeholder="heure de Debut"></ion-input>
  </ion-item>
    <ion-item>
    <ion-label position="stacked">fin</ion-label>
    <ion-input  placeholder="heure de Fin"></ion-input>
  </ion-item>

 <ion-button>ajouter un conger</ion-button>
</ion-content>

</template>
<script>
  import{IonContent,IonToolbar,IonButtons,IonItem,IonHeader,IonLabel,IonInput,IonTitle} from '@ionic/vue'
export default {
    components:{
        IonContent,
        IonToolbar,
        IonButtons,
        IonItem,
        IonHeader,
        IonLabel,
        IonInput,
        IonTitle
    },
    methods: {
		close() {
			this.$emit("allan");
		},
	},
}
</script>