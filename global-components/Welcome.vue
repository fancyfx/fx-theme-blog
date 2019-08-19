<template>
  <div class="hello">
    <div class="logo mar_bot">
      <img v-if="data.heroImage" :src="$withBase(data.heroImage)" alt="hero">
    </div>
    <div class="title">
      <h1>{{ data.heroTietle }}</h1> 
    </div>
    <hr class="panel-cover__divider">
    <div class="title_description mar_bot" v-bind:class="{ home_title_description: toHomeStyle.isHome }">
      <p v-bind:class="showWelMsg">{{ data.heroDesc }}</p>
    </div>
    
    <div class="link_button " >
        <ul>
          <li><a href="" target="_blank" v-on:click.stop.prevent="toRoute('home')">博客</a></li>
          <li><a href="#" target="_blank" v-on:click.stop.prevent="toRoute('lists')">文章列表</a></li>
          <li><a href="#" target="_blank" v-on:click.stop.prevent="toRoute('tags')">标签云</a></li>
          <li><a href="#" target="_blank">关于</a></li>
        </ul>
    </div>
    <div class="link_icon ">
      <ul>
        <li v-for="icon in data.linkIcon" :key="icon">
          <a href="#" target="_blank"><i :class="'fa fa-' + icon" aria-hidden="true"></i></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data (){
    return {
      toHomeStyle: {
        isHome: false,
      },
    }
  },
  methods: {
    toRoute(navVal) {
      this.toHomeStyle.isHome = true
      this.$emit('nav',navVal)
    },
  },
  computed: {
    data() {
      return this.$page.frontmatter
    },
    showWelMsg() {
      return {
        bounceInDown: this.toHomeStyle.isHome,
        animated_2s: this.toHomeStyle.isHome,
      };
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../styles/font-awesome.min.css";

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
  text-align: center;
}

li {
  display: inline-block;
  margin: 15px 10px;
}

a {
  color: #000;
  text-decoration:none;
}
.logo img{
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 3px solid #FFF;
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.3);
}
.link_button a{
    color: #42b983;
    padding: 10px 20px;
    border: 1px solid #42b983;
    border-radius: 20px;
    font-size: .9em;
    font-weight: bold;
    letter-spacing: 1px;
    text-shadow: none;
    -webkit-font-smoothing: antialiased;
}
.hello {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction:column;
    flex-wrap: nowrap;
    align-items:center;
    justify-content: center;
    background-color: #eee;
}
.fa {
  font-size: 28px;  
  color: #333333;
}
.link_button{
  margin-top: 20px;
  /* margin-bottom: 40px; */
}
.link_icon{
  margin-top: 20px;
}
.title_description{
  text-align: center;
  width: 600px;
  margin-bottom: 40px;
}
.home_title_description{
  width: 80%;
}
.title_description>p {
  font-size: 18px;
  line-height: 30px;
}
.panel-cover__divider{
    width: 20%;
    margin: 20px auto;
    border-top: 1px solid #bbb;
}

.animated_2s {
  animation-delay: 0.8s;
  animation-duration: 0.8s;
  animation-fill-mode: both;
}
</style>