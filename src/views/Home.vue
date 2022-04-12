<template>
  <div class="home h-screen">
    <div v-for="blog in blogs" :key="blog.id">
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const blogs = ref([
    ])

    const store = useStore()
    
    console.log(store.state.user)

    return { 
      blogs
    }
  }
}
</script>
