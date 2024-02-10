<script setup lang="ts">
import ProfileCard from "~/components/UI/ProfileCard/ProfileCard.vue";

const { t } = useI18n();
const title = computed(() => `${t("home.titlePage")} 👨‍💻`);

useHead({
    title: title,
    htmlAttrs: {
        lang: "es",
    },
});
</script>

<template>
    <div class="h-full w-full">
        <div class="relative z-0 h-full w-full">
            <div
                class="flex h-[calc(100%-64px)] w-full flex-col items-center justify-center"
            >
                <profile-card />
            </div>
        </div>
    </div>
</template>

<style scoped></style>
