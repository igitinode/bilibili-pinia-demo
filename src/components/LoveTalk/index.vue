<template>
  <div class="talk">
    <button @click="getLoveTalk">获取一句土味情话</button>
    <ul>
      <li v-for="talk in talkList" :key="talk.id">{{ talk.title }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts" name="LoveTalk">
import {useTalkStore} from '@/store/loveTalk'
import { storeToRefs } from 'pinia';

const talkStore = useTalkStore()
const { talkList } = storeToRefs(talkStore)
// $subscribe 相当于 watch
talkStore.$subscribe((mutate, state) => {
  console.log('talkStore里面保存的数据发生了变化');
  console.log('mutate--> ',mutate);
  // 当数据变化的时候，可以更新本地存储的数据,实现刷新不丢失数据
  localStorage.setItem('talkList', JSON.stringify(state.talkList))
})

function getLoveTalk() {
  talkStore.getATalk()
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
