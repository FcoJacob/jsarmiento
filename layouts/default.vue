<script setup lang="ts">
import NavBar from "~/components/UI/NavBar/NavBar.vue";
import BottomNav from "~/components/UI/BottomNav/BottomNav.vue";
</script>

<template>
    <div class="relative h-screen w-screen">
        <nav-bar />
        <slot />
        <bottom-nav />
    </div>
</template>

<style scoped></style>
