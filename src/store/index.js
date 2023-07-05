import { createStore } from "vuex";

export default createStore({
  state: {
    // state - это само состояние, здесь мы описываем данные, которые будут в нашем приложении
    likes: 2,
    isAuth: false,
  },
  getters: {
    // getters - это некоторые computed свойства, аналогичные тем, что мы делали в компонентах, т.е. своего рода это кэшируемые вычисляемые значения. Геттеры должны обязательно что-то возвращать
    doubleLikes(state) {
      return state.likes * 2;
    }
  },
  mutations: {
    // mutations - позволяют изменять состояние приложения. Мутации представляют из себя функции внутри которых мы меняем значение какого-либо поля в состоянии
    incrementLikes(state) {
      state.likes += 1;
    },
    decrementLikes(state) {
      state.likes -= 1;
    },
    switchAuth(state) {
      state.isAuth = !state.isAuth;
    }
  },
  actions: {
    // actions - функции, которые внутри себя используют мутации
  },
  modules: {
    // modules - один  модуль представляет из себя изолированный кусочек состояния, со своими геттерами, мутациями и экшэнами, и все эти модули по итогу подключаются в один глобальный стор.
  }


})