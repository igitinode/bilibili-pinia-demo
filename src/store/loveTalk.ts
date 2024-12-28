import { defineStore } from "pinia";
import axios from "axios";
import { nanoid } from "nanoid";

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