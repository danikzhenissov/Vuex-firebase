<template>
  <nav class="">
    <template v-if="authIsReady">
      <div>
        <router-link to="../views/tosite">toSite</router-link>
      </div>
      <!-- for all users -->
      <div class="text-center pt-24">
        <router-link to="/" class="text-3xl font-bold ">Авторизация</router-link>
      </div>
      <!-- for logged in users -->
      <div v-if="user">
        <span>Logged in as {{ user.email }}</span>
        <button @click="handleClick">Logout</button>
      </div>
      <!-- for logged out users -->
      <div v-if="!user" class="flex pt-32 justify-center">
        <div class="mr-96">
          <router-link to="/login" class="btn rounded-3xl py-3 px-16">Кіру</router-link>
        </div>
        <div class="">
          <router-link to="/signup" class="btn rounded-3xl py-3 px-8">Регистрация</router-link>
        </div>
      </div>
    </template>
  </nav>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
  setup() {
    const store = useStore()

    const handleClick = () => {
      store.dispatch('logout')
    }

    return {
      handleClick,
      user: computed(() => store.state.user),
      authIsReady: computed(() => store.state.authIsReady)
    }
  }
}
</script>