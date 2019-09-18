<template>
    <div class="card-content">
        <header class="card-header">
            <ul class="tag">
                <li>随笔</li>
                <li class="spacing">•</li>
                <li>前端开发</li>
                <li class="spacing">•</li>
                <li>后端开发</li>
            </ul>
            <h2 class="title">{{ postData.title }}</h2>
        </header>
        <section class="card-excerpt">
            <p>{{ postData.summary }}</p>
        </section>
        <footer class="card-footer">
            <!-- <span class="update-time">2018-07-10 23:20:19</span> -->
            <span class="update-time">{{ lastUpdated}}</span>
            <span class="more">more</span>
        </footer>
    </div>
</template>

<script>
    export default {
        props:['postData'],
        computed:{
            lastUpdated(){
                if(typeof this.postData.lastUpdated === "object"
                && typeof this.postData.lastUpdated.moment !== "undefined")
                    return this.postData.lastUpdated.moment
                else
                    return ''
            }
        }
    }
</script>

<style scoped>
.card-content{
    padding: 25px;
    margin-bottom: 40px;
    min-height: 200px;
    cursor: pointer;
    background: #fff 50%;
    background-size: cover;
    border-radius: 5px;
    box-shadow: 8px 14px 38px rgba(39,44,49,.06), 1px 3px 8px rgba(39,44,49,.03);
    transition: all .5s ease; 
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.card-content:hover{
    box-shadow: 8px 28px 50px rgba(39,44,49,.07), 1px 6px 12px rgba(39,44,49,.04);
    transition: all .4s ease;
    transform: translate3D(0,-1px,0) scale(1.02);
}
.tag{
    display: block;
    margin-bottom: 4px;
    color: #738a94;
    font-size: 1.2rem;
    line-height: 1.15em;
    font-weight: 500;
    letter-spacing: .5px;
    text-transform: uppercase;
}
.title{
    margin: 0.4em 0 .3em;
    font-size: 2rem;
}
.card-excerpt{
    font-size: 1.5rem;
    flex-grow: 1;
}
.card-footer{
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
}
.update-time,
.more{
    color: #738a94;
    font-size: 1.2rem;
    line-height: 33px;
    font-weight: 500;
    letter-spacing: .5px;
    text-transform: uppercase;
}
.more{
   color: #BF1827; 
}
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
}
.spacing{
    margin: 0 1em;
}
</style>