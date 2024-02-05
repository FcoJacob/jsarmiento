<script setup lang="ts">
import LogoHTML from "~/components/UI/ProfileCard/icons/LogoHTML.vue";
import LogoCSS from "~/components/UI/ProfileCard/icons/LogoCSS.vue";
import LogoJS from "~/components/UI/ProfileCard/icons/LogoJS.vue";
import LogoNuxt from "~/components/UI/ProfileCard/icons/LogoNuxt.vue";
</script>

<template>
    <section class="flex w-full flex-col items-center justify-center gap-2">
        <h1
            class="text-4xl font-extrabold text-slate-800 dark:text-slate-200 md:text-8xl"
        >
            Jacob Sarmiento
        </h1>
        <h4
            class="text-2xl font-light text-slate-600 dark:text-slate-300 md:text-4xl"
        >
            {{ $t("home.jobPosition") }}
        </h4>
        <div class="w-10/12">
            <div class="divider" />
        </div>
        <div class="flex w-full items-center justify-center gap-4">
            <logo-h-t-m-l class="w-8" />
            <logo-c-s-s class="w-8" />
            <logo-j-s class="w-8" />
            <logo-nuxt class="w-10" />
        </div>
    </section>
</template>

<style scoped></style>
