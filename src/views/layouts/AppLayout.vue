<template>
  <div>
    <NavBar />
    <main>
      <router-view v-slot="{Component}">
        <transition name="slide-x" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
  </div>
</template>
<script setup lang="ts">
import NavBar from "@/components/shared/NavBar.vue";

</script>
<style>




main {
  max-width: 90%;
}
</style>
