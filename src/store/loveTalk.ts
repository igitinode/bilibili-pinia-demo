import { defineStore } from "pinia";
import axios from "axios";
import { nanoid } from "nanoid";
import { reactive } from "vue";

// useTalkStore 等价于 userTalkCompositionStore

// 选项是 API 写法
export const useTalkStore = defineStore('talk', {
	// 真正存储数据的地方
	state() {
		return {
			talkList: JSON.parse(localStorage.getItem('talkList') as string) || [
				{ id: 'aaaa11', title: '今天你有点怪？哪里怪？怪好的的！' },
				{ id: 'aaaa12', title: '草莓、蓝莓、蔓越莓，今天想我了没？' },
				{ id: 'aaaa13', title: '心里给你留了一块儿，我的死心塌地' }
			]
		}
	},
	actions: {
		async getATalk() {
			// 连续解构赋值+重命名：result.data.content 在给content 取一个 title 别名
			// let { data: { content: title } } = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
			// let obj = { id: nanoid(), title }
			let obj = { id: nanoid(), title: 'test 接口不能用' }
			// 放到数组头部
			this.talkList.unshift(obj)
		}
	}
})

// 组合式函数 API 写法, 传入的函数相当于 setup 函数
export const userTalkCompositionStore = defineStore('talkComp', () => {
	const talkList = reactive(
		JSON.parse(localStorage.getItem('talkList') as string) || [
			{ id: 'aaaa11', title: '今天你有点怪？哪里怪？怪好的的！' },
			{ id: 'aaaa12', title: '草莓、蓝莓、蔓越莓，今天想我了没？' },
			{ id: 'aaaa13', title: '心里给你留了一块儿，我的死心塌地' }
		])
	// 函数相当于 action
	async function getATalk() {
		// 连续解构赋值+重命名：result.data.content 在给content 取一个 title 别名
		// let { data: { content: title } } = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
		// let obj = { id: nanoid(), title }
		let obj = { id: nanoid(), title: 'test 接口不能用' }
		// 放到数组头部
		talkList.talkList.unshift(obj)
	}

	return { talkList, getATalk }
})