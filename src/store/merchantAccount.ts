import { defineStore } from 'pinia';

export const merchantAuthStore = defineStore('merchatnAuth', {
    state: () => ({
        isLoggedIn: false,
        merchantId: -1,
        merchantName: '',
    }),
    actions: {
        setUser(merchantId: number, merchantName: string) {
            this.isLoggedIn = true;
            this.merchantId = merchantId;
            this.merchantName = merchantName;
        },
        logout() {
            this.isLoggedIn = false;
            this.merchantId = -1;
            this.merchantName = '';
        }
    }
});
