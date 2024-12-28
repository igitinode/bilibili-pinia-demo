import { defineStore } from "pinia";

// 统计相关的仓库
export const useCountStore = defineStore('count', {
	// 真正存储数据的地方
	state() {
		return {
			sum: 6
		}
	}
})