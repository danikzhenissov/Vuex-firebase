<template class="">
  <form @submit.prevent="handleSubmit">
    <h3 class="text-3xl text-center py-16 font-bold">Sign up</h3>

    <div class="flex">
      <div class="mb-8 ml-44 mr-32">
        <label class="mr-3" for="email">Email:</label>
        <input class="text-black rounded-3xl px-2 border-2 border-forbroder-500 py-3" type="email" name="email" v-model="email" required>                                 
      </div>
    
      <div>
        <label class="mr-3" for="email">Password:</label>
        <input class="text-black rounded-3xl px-2 border-2 border-forbroder-500 py-3" type="password" name="password" v-model="password" required>
      </div>
    </div>
    <div class="flex justify-center py-10.5">
        <button class="rounded-3xl py-3 px-8 btn">Sign Up</button>
      </div>

    <div v-if="error">{{ error }}</div>
  </form>
</template>

<script>
import { ref} from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const email = ref('')
    const password = ref('')
    const error = ref(null)

    const store = useStore()
    const router = useRouter()

    const handleSubmit = async () => {
      try {
        await store.dispatch('signup', {
          email: email.value,
          password: password.value
        })
        router.push('/')
      }
      catch (err) {
        error.value = err.message
      }
    }

    return { handleSubmit, email, password, error }
  }
}
</script>