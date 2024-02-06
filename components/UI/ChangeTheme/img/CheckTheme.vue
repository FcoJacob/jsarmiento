<script setup lang="ts">
type CheckThemeProps = {
    show: boolean;
};

withDefaults(defineProps<CheckThemeProps>(), {
    show: false,
});
</script>

<template>
    <svg
        v-show="show"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="h-3 w-3 shrink-0"
    >
        <path
            d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
        ></path>
    </svg>
    <svg
        v-show="!show"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="h-3 w-3 shrink-0"
    ></svg>
</template>

<style scoped></style>
