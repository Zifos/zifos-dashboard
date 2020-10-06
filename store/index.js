export const state = () => ({
    breadcrumbs: [{
        name: 'Inicio',
        link: 'index___es'
    }, ],
    authUser: null,
})

export const mutations = {
    SET_BREADCRUMB(state, breadcrumbs) {
        state.breadcrumbs = breadcrumbs;
    },
    RESET_STORE: (currentState) => {
        Object.assign(currentState, state());
    },

    SET_AUTH_USER: (state, { authUser }) => {
        state.authUser = {
            uid: authUser.uid,
            email: authUser.email
        }
    }
}

export const actions = {
    async nuxtServerInit({ dispatch }, ctx) {
        if (this.$fireAuth === null) {
            throw 'nuxtServerInit Example not working - this.$fireAuth cannot be accessed.'
        }

        if (ctx.$fireAuth === null) {
            throw 'nuxtServerInit Example not working - ctx.$fireAuth cannot be accessed.'
        }

        if (ctx.app.$fireAuth === null) {
            throw 'nuxtServerInit Example not working - ctx.$fireAuth cannot be accessed.'
        }

        // INFO -> Nuxt-fire Objects can be accessed in nuxtServerInit action via this.$fire___, ctx.$fire___ and ctx.app.$fire___'

        /** Get the VERIFIED authUser from the server */
        if (ctx.res && ctx.res.locals && ctx.res.locals.user) {
            const { allClaims: claims, ...authUser } = ctx.res.locals.user

            console.info(
                'Auth User verified on server-side. User: ',
                authUser,
                'Claims:',
                claims
            )

            await dispatch('onAuthStateChanged', {
                authUser,
                claims
            })

        }
    },

    onAuthStateChanged({ commit }, { authUser }) {
        if (!authUser) {
            commit('RESET_STORE')
            return
        }
        commit('SET_AUTH_USER', { authUser })
        this.$router.push({ name: "index___es___default" }); // [TODO: FECO] Cambiar este metodo a un middleware
    },

    checkVuexStore(ctx) {
        if (this.$fireAuth === null) {
            throw 'Vuex Store example not working - this.$fireAuth cannot be accessed.'
        }

        alert(
            'Success. Nuxt-fire Objects can be accessed in store actions via this.$fire___'
        )
        return
    }
}


export const getters = {
  isLoggedIn: (state) => {
      try {
          return state.authUser.id !== null
      } catch {
          return false
      }
  }
}
