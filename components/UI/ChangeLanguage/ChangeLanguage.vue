<script setup lang="ts">
const { locale } = useI18n();
const languageEmojis = {
    es: "🇪🇸",
    en: "🇬🇧",
};
</script>

<template>
    <form>
        <select
            v-model="locale"
            :aria-label="$t('ui.ariaLabels.changeTheme')"
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
</template>
