import { generateId } from "../../utils/generateId";

export const moduleUserData = {
  state: () => ({
    tasks: [],
  }),
  mutations: {
    addTask: (state, title) => {
      const id = generateId();
      const item = { id, title, checked: false };
      state.tasks.unshift(item);
    },
    updateTaskTitle: (state, { itemId, title }) => {
      const item = state.tasks.find((item) => item.id === itemId);
      item.title = title;
    },
    deleteTask: (state, itemId) => {
      const item = state.tasks.find((item) => item.id === itemId);
      const index = state.tasks.indexOf(item);
      state.tasks.splice(index, 1);
    },
    moveTaskPosition: (state, { itemId, targetPositionItemId }) => {
      const item = state.tasks.find((item) => item.id === itemId);
      const currentIndex = state.tasks.indexOf(item);
      const nextIndex = state.tasks.findIndex(
        (item) => item.id === targetPositionItemId,
      );
      state.tasks.splice(currentIndex, 1);
      state.tasks.splice(nextIndex, 0, item);
    },
    moveTaskUp: (state, itemId) => {
      const item = state.tasks.find((item) => item.id === itemId);
      const currentIndex = state.tasks.indexOf(item);
      const nextIndex = currentIndex - 1;
      if (nextIndex >= 0) {
        state.tasks.splice(currentIndex, 1);
        state.tasks.splice(nextIndex, 0, item);
      }
    },
    moveTaskDown: (state, itemId) => {
      const item = state.tasks.find((item) => item.id === itemId);
      const currentIndex = state.tasks.indexOf(item);
      const nextIndex = currentIndex + 1;
      if (nextIndex < state.tasks.length) {
        state.tasks.splice(currentIndex, 1);
        state.tasks.splice(nextIndex, 0, item);
      }
    },
    toggleTask: (state, itemId) => {
      const item = state.tasks.find((item) => item.id === itemId);
      item.checked = !item.checked;
    },
  },
  actions: {},
  getters: {},
};
