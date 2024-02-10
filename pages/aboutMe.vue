<script setup lang="ts">
import ProfileBase from "~/components/ProfileCV/ProfileBase.vue";

const { t } = useI18n();
const title = computed(() => `👋 ${t("glossary.about")}`);

useHead({
    title: title,
    htmlAttrs: {
        lang: "es",
    },
});
</script>

<template>
    <main
        class="relative z-0 flex h-dvh w-dvw items-center justify-center py-20"
    >
        <div
            class="h-full w-full overflow-y-auto rounded-sm bg-base-200 px-4 py-8 shadow-lg lg:w-6/12 lg:px-16 lg:py-20"
        >
            <profile-base />
        </div>
    </main>
</template>

<style scoped></style>
