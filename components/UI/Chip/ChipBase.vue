<script setup lang="ts">
import { Size } from "./types";

type ChipProps = {
    text: string;
    size?: Size;
};
withDefaults(defineProps<ChipProps>(), {
    text: "Chip",
    size: Size.small,
});
</script>

<template>
    <span
        class="chip"
        :class="{
            small: size === Size.small,
            medium: size === Size.medium,
            large: size === Size.large,
        }"
    >
        {{ text }}
    </span>
</template>

<style scoped>
.chip {
    @apply flex items-center justify-center rounded-md font-bold;
}

.small {
    @apply h-6 bg-neutral-content px-2 py-1 text-xs text-neutral;
}

.medium {
    @apply h-8 bg-neutral px-3 py-1 text-sm text-neutral-content;
}

.large {
    @apply h-10 bg-neutral px-3 py-1 text-lg text-neutral-content;
}
</style>
