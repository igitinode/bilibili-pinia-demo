import { defineStore } from "pinia";

// 统计相关的仓库
export const useCountStore = defineStore('count', {
	// 真正存储数据的地方
	state() {
		return {
			sum: 6
		}
	},
	// 放置动作方法，用于响应组件中的"动作"
	actions: {
		increment(value: number) {
			// this 是当前 count 的 store
			// 可以统一的做极限值的判断操作逻辑，处理逻辑，然后复用
			if (this.sum < 100) {
				this.sum += value
			}
		}
	}
})