import { defineStore } from 'pinia';

export const userAuthStore = defineStore('userAuth', {
  state: () => ({
    isLoggedIn: false,
    userId: -1,
    userName: '',
  }),
  actions: {
    setUser(userId: number, userName: string) {
      this.isLoggedIn = true;
      this.userId = userId;
      this.userName = userName;
    },
    logout() {
      this.isLoggedIn = false;
      this.userId = -1;
      this.userName = '';
    }
  }
});
