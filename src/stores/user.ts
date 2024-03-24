// @ts-check
import { defineStore, acceptHMRUpdate } from 'pinia'

/**
 * Simulate a login
 */
function apiLogin(a: string, p: string) {
  if (a === '18280874238' && p === '123456') return Promise.resolve({ isAdmin: true })
  if (p === 'ed') return Promise.resolve({ isAdmin: false })
  return Promise.reject(new Error('invalid credentials'))
}

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    name:"",
    isAdmin:true,
    img:"https://img.zcool.cn/community/01e6915e78374ea801216518a28ae2.jpg@1280w_1l_2o_100sh.jpg"
  }),

  actions: {
    logout() {
      this.$patch({
        name: '',
        isAdmin: false,
      })

      // we could do other stuff like redirecting the user
    },

    /**
     * Attempt to login a user
     */
    async login(user: string, password: string) {
      const userData = await apiLogin(user, password)
      console.log("jjj")
      this.$patch({
        name: user,
        ...userData,
      })
    },
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
}
