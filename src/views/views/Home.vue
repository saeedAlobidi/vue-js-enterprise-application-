<template>
  <div class="home">

  <button   type="button" @click="changeLang">{{lang}}</button>

    <br/><br/><br/>
    <h1>{{$t('hello')}}</h1>
    <br/><br/><br/>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
     <input type="text"  :value="n"    @change="(n) =>  this.setx(n.target.value)"/>
     <select name="pets" id="pet-select" :value="n"  @change="(n) =>  this.setx(n.target.value)">
    <option value="">--Please choose an option--</option>
    <option value="dog">Dog</option>
    <option value="cat">Cat</option>
    <option value="hamster">Hamster</option>
    <option value="parrot">Parrot</option>
    <option value="spider">Spider</option>
    <option value="goldfish">Goldfish</option>
</select>

      <input type="text" v-for="(dd,index) in saeed" :value.prop="dd.name"  :key="index" v-model="dd.name"/>
    static data
    <br />
    developer&nbsp; name=&nbsp;&nbsp; {{employes.name}}
    <br />
    developer &nbsp; email=&nbsp;&nbsp; {{employes.email}}
    <br />
    <br />
    <br />
    <button id="load" :disabled="isActive" type="button" @click="go">Fetch Data</button>
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
import { mapState,mapActions } from "vuex";
import user from "@/domain/usecase";

export default {

//   beforeRouteEnter(routeTo, routeFrom, next){
//  user.user.getDataUser().then(()=>{next()});
//  }, 
//   beforeRouteUpdate(routeTo, routeFrom, next){
//    user.user.getDataUser().then(()=>{next()});
  
//  },
  data() {
    return { isActive: false,lang:'ar' };
  },
  computed: {
    ...mapState({
      user: state => state.user.user,
      employes: state => state.employes.user,
       saeed: state => state.employes.saeed,
      n:  state => state.employes.n,
    })
  },

  methods: {
    go() {
       
       this.isActive = true;
      user.user.updateUser({handler:() => {
        this.isActive = false;
      }});
    },   setxx(x) { //the value is passed through the v-model automatically
    console.log(x)
        this.setx('sss')
      },
 ...mapActions('employes',['setx']),
    changeLang(){
     this.setx('sss')
    let lan=this.$root.$i18n.locale=='en'?'ar':'en';
    this.$root.$i18n.locale=lan;
    this.lang=lan=='en'?'ar':'en';
    }


  },

  

};
</script>
