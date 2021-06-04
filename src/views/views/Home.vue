<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    static data
    <br />
    developer&nbsp; name=&nbsp;&nbsp; {{employes.name}}
    <br />
    developer &nbsp; email=&nbsp;&nbsp; {{employes.email}}
    <br />
    <br />
    <br />
    <button :disabled="isActive" type="button" @click="go">Fetch Data</button>
    <br />
    <br />api data persistence
    <br />
    id=&nbsp;&nbsp;{{user.id}}
    <br />
    userId=&nbsp;&nbsp;{{user.userId}}
    <br />
    title=&nbsp;&nbsp;{{user.title}}
    <br />
    completed=&nbsp;&nbsp;{{user.completed}}
  </div>
</template>

<script>
import { mapState } from "vuex";
import user from "@/domain/usecase";

export default {

  beforeRouteEnter(routeTo, routeFrom, next){
 user.user.getDataUser().then(()=>{next()});
 }, 
  beforeRouteUpdate(routeTo, routeFrom, next){
   user.user.getDataUser().then(()=>{next()});
  
 },
  data() {
    return { isActive: false };
  },
  computed: {
    ...mapState({
      user: state => state.user.user,
      employes: state => state.employes.user
    })
  },

  methods: {
    go() {
       this.isActive = true;
      user.user.updateUser({handler:() => {
        this.isActive = false;
      }});
    }
  }
};
</script>
