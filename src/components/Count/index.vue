<template>
  <div class="count">
    <h2>当前求和为：{{sum}}, 放大10倍后: {{ bigSum }}</h2>
    <h2>欢迎来到:{{school}}, 大写：{{ upperSchool }}, 小写：{{ lowerSchool }}</h2>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add">加</button>
    <button @click="minus">减</button>
  </div>
</template>

<script setup lang="ts" name="Count">
import { ref } from 'vue';
import {storeToRefs} from 'pinia';
import {useCountStore} from '@/store/count';

const countStore = useCountStore()
// storeToRefs 只关注 state 和 getters 数据，不会对方法进行 ref 包裹
// toRefs 关注数据和方法
const { sum,school,bigSum,upperSchool,lowerSchool } = storeToRefs(countStore)

let n = ref(1)

function add() {
  // 第一种修改方式：
  // 修改多个值，TimeLine会有多次mutations
  // 逻辑简单可以使用这种方式
  // countStore.sum += n.value

  // 第二种修改方式：批量变更,直接覆盖，多个参数都可以
  // 修改多个值，TimeLine只有一次mutations
  // countStore.$patch({sum:888})

  // 第三种修改方式：最麻烦的一种，借助动作：actions
  countStore.increment(n.value)
}

function minus() {
  countStore.sum -= n.value
}
</script>

<style scoped>
.count {
  background-color: skyblue;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}
select,button {
  margin: 0 5px;
  height: 25px;
}
</style>
