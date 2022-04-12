<template>
  <div class="bg_auth text-white">
    <div class="w-9/12 mx-auto">
        <Navbar class=""/>
        <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar'

export default {
  components: {Navbar}
}
</script>