<script setup lang="ts">
import NavBar from "~/components/UI/NavBar/NavBar.vue";
</script>

<template>
    <div class="relative h-screen w-screen">
        <NavBar />
        <slot />
    </div>
</template>

<style scoped></style>
