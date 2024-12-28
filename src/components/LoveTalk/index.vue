<template>
  <div class="talk">
    <button @click="getLoveTalk">获取一句土味情话</button>
    <ul>
      <li v-for="talk in talkStore.talkList" :key="talk.id">{{ talk.title }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts" name="LoveTalk">
import axios from 'axios'
import {nanoid} from 'nanoid'
import {useTalkStore} from '@/store/loveTalk'

const talkStore = useTalkStore()

async function getLoveTalk() {
  // 连续解构赋值+重命名：result.data.content 在给content 取一个 title 别名
  let {data:{content:title}} = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
  let obj = {id:nanoid(), title}
  // 放到数组头部
  talkStore.talkList.unshift(obj)
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
