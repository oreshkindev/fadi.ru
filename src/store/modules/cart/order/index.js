import axios from "@/common/axios";
import storage from "@/common/storage";

// определяем состояние
const state = () => ({
	data: [],
	error: [],
});

// определяем геттеры
const getters = {
	get: (state) => state.data,
	error: (state) => state.error,
};

// определяем методы
const actions = {
	async get({ commit, dispatch }) {
		try {
			const response = await axios.get("/order/");
			commit("set", response.data);
		} catch (error) {
			if (error.response) {
				// вернулась ошибка (5xx, 4xx)
				commit("error", error.response.data);

				// прячем ошибку через 5 секунд
				setTimeout(() => {
					commit("error", []);
				}, 5000);
			}
		}
	},
	async post({ commit }, data) {
		try {
			const response = await axios.post("/order/", data);
			return response.data;
			//commit('cart/clear', [], { root: true })

			//storage.remove('fadi.cart')
		} catch (error) {
			if (error.response) {
				// вернулась ошибка (5xx, 4xx)
				commit("error", error.response.data);

				// прячем ошибку через 5 секунд
				setTimeout(() => {
					commit("error", []);
				}, 5000);
			}
		}
	},
	async createPaymentRequest({ commit }, orderId) {
		try {
			const response = await axios.get(`/api/pay/${orderId}/`);
			return response.data;
		} catch (error) {
			console.log(error);
			if (error.response) {
				// вернулась ошибка (5xx, 4xx)
				commit("error", error.response.data);

				// прячем ошибку через 5 секунд
				setTimeout(() => {
					commit("error", []);
				}, 5000);
			}
		}
	},
};

// определяем мутации
const mutations = {
	set: (state, data) => {
		state.data = data;
	},
	error: (state, error) => {
		state.error = error;
	},
};

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations,
};
