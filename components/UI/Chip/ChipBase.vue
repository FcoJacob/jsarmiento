<script setup lang="ts">
import { Size } from "./types";

type ChipProps = {
    text: string;
    size?: Size;
    color?: string;
    textColor?: string;
};
withDefaults(defineProps<ChipProps>(), {
    text: "Chip",
    size: Size.small,
    color: "bg-neutral",
    textColor: "text-neutral-content",
});
</script>

<template>
    <span
        class="chip"
        :class="{
            small: size === Size.small,
            medium: size === Size.medium,
            large: size === Size.large,
            [color]: true,
            [textColor]: true,
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
    @apply h-6 px-2 py-1 text-xs;
}

.medium {
    @apply h-8 px-3 py-1 text-sm;
}

.large {
    @apply h-10 px-3 py-1 text-lg;
}
</style>
