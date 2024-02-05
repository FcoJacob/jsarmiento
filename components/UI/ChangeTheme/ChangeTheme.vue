<script setup lang="ts">
const colorMode = useColorMode();
const themes = [
    "system",
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
];
</script>

<template>
    <select
        v-model="colorMode.preference"
        :aria-label="$t('ui.ariaLabels.changeLanguage')"
        class="select w-full max-w-xs"
    >
        <option disabled selected>Theme</option>
        <option v-for="theme of themes" :key="theme">
            {{ theme }}
        </option>
    </select>
</template>

<style scoped></style>
