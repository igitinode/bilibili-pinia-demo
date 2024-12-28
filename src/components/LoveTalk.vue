<template>
  <div class="talk">
    <button @click="getLoveTalk">获取一句土味情话</button>
    <ul>
      <li v-for="talk in talkList" :key="talk.id">{{ talk.title }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts" name="lovetalk">
import { reactive } from 'vue'
import axios from 'axios';
import {nanoid} from 'nanoid';

let talkList = reactive([
  {id: 'aaaa11', title:'今天你有点怪？哪里怪？怪好的的！'},
  {id: 'aaaa12', title:'草莓、蓝莓、蔓越莓，今天想我了没？'},
  {id: 'aaaa13', title:'心里给你留了一块儿，我的死心塌地'}
])

async function getLoveTalk() {
  // 连续解构赋值+重命名：result.data.content 在给content 取一个 title 别名
  let {data:{content:title}} = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
  let obj = {id:nanoid(), title}
  // 放到数组头部
  talkList.unshift(obj)
}
</script>

<style scoped>
.talk {
  background-color: orange;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}
</style>
