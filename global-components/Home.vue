<template>
    <div class="home">
        <div class="centre-left" :class="{animated:isHome,home_hellp:isHome}">
            <Welcome v-on:nav="route"></Welcome>
        </div>
        <transition enter-active-class="animated fadeInRight delay-2s">
        <div class="centre-main" v-show="isHome">
            <div v-if="isContent">
                <DateLists v-if="nav === 'lists'" class="centent-man"></DateLists>
                <TagCloud v-else-if="nav === 'tags'" class="centent-man"></TagCloud>
                <ContentList v-else class="centent-man"></ContentList>
            </div>
            <div class="centent-man" v-else>
                <Content/>
            </div>
            <div class="foot">
                <div class="foot-dest">
                    本站由 <a href="#">@Fancyxi</a> 创建，
                    采用<a href="https://vuepress.vuejs.org">vuePress</a> 构建，
                    您可以在 GitHub 找到本站 <a href="#">源码</a>- © 2018
                </div> 
            </div>
        </div>
        </transition>
    </div>
    
</template>

<script>
import ContentList from '../components/ContentList.vue'
import DateLists from '../components/DateLists.vue'
import TagCloud from '../components/TagCloud.vue'
export default {
    components: { 
        ContentList,
        DateLists,
        TagCloud
    },
    data() {
        return {
            isHome:false,
            nav:"blog",
        }
    },
    computed:{
        isContent(){
            return typeof this.$page.frontmatter.home === 'boolean' && this.$page.frontmatter.home
        }
    },
    methods: {
        route(navVal) {
            this.isHome = true 
            this.nav = navVal
        },
    },
}


</script>

<style scoped>
.home{
    width: 100%;
    height: 100%;
    
}
.centre-left{
    width: 100%;
    height: 100%;
    position: fixed;
}
.centre-main{
    height: 100%;
    margin: 0 10% 0 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.centent-man{
    margin: 50px 0;
    flex-grow: 1;
}

.foot{
    border-top: 2px solid #DDDDDD;
    padding-top: 10px;
    margin-bottom: 50px;
    font-size: 1.3rem;
    color: #738a94;
    font-weight: 500;
}
.foot-dest a{
    color: #738a94;
}
.foot-dest a:hover{
    color: #a6a6a6;
}
.home_hellp {
  animation-name: toLeft;
  min-width: 327px;
}

@keyframes toLeft {
  from {
    width: 100%;
  }
  to {
    width: 30%;
  }
}
</style>