<script setup lang="ts">
import ChangeTheme from "~/components/UI/ChangeTheme/ChangeTheme.vue";
import ChangeLanguage from "~/components/UI/ChangeLanguage/ChangeLanguage.vue";
</script>

<template>
    <nav
        class="navbar absolute left-0 top-0 z-10 bg-base-100 px-4 py-2 md:py-4"
    >
        <div class="flex-1 text-lg font-bold">
            <img
                src="~/assets/img/logo.webp"
                alt="Logo"
                class="inline-block w-8"
            />
        </div>
        <div class="flex-none">
            <change-theme />
            <change-language />
        </div>
    </nav>
</template>

<style scoped></style>
