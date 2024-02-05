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
const { locale, t } = useI18n();
const languageEmojis = {
    es: "🇪🇸",
    en: "🇬🇧",
};
</script>

<template>
    <nav class="navbar absolute left-0 top-0 z-10 bg-base-100 p-4">
        <div class="flex-1 text-lg font-bold">
            <img
                src="~/assets/img/logo.webp"
                alt="Logo"
                class="inline-block w-8"
            />
        </div>
        <div class="flex-none gap-2">
            <select
                v-model="colorMode.preference"
                :aria-label="t('ui.ariaLabels.changeLanguage')"
                class="select w-full max-w-xs"
            >
                <option disabled selected>Theme</option>
                <option v-for="theme of themes" :key="theme">
                    {{ theme }}
                </option>
            </select>
            <form>
                <select
                    v-model="locale"
                    :aria-label="t('ui.ariaLabels.changeTheme')"
                    class="select"
                >
                    <option
                        v-for="(emoji, lang) in languageEmojis"
                        :key="lang"
                        :value="lang"
                    >
                        {{ emoji }}
                    </option>
                </select>
            </form>
        </div>
    </nav>
</template>

<style scoped></style>
