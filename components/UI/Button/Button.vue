<script setup lang="ts">
const emit = defineEmits<{
    (e: "action", id: number): void;
}>();
</script>

<template>
    <button class="btn btn-square btn-ghost" @click="emit('action', 0)">
        <svg
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block h-5 w-5 stroke-current"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
            />
        </svg>
    </button>
</template>
