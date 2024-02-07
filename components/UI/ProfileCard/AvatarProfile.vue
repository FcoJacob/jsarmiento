<script setup>
import "atropos/css";
import Atropos from "atropos";

onMounted(() => {
    Atropos({
        el: ".my-atropos",
        shadow: false,
    });
});
</script>

<template>
    <div class="atropos my-atropos">
        <!-- scale container (required) -->
        <div class="atropos-scale">
            <!-- rotate container (required) -->
            <div class="atropos-rotate">
                <!-- inner container (required) -->
                <div class="atropos-inner overflow-hidden rounded-full">
                    <!-- put your custom content here -->
                    <div
                        class="relative h-60 w-60 rounded-full bg-gradient-to-bl from-neutral to-base-content"
                    >
                        <div
                            class="absolute inset-[11px] h-[90%] w-[90%] rounded-full bg-base-100 drop-shadow-md"
                        >
                            <img
                                src="./Avatar.png"
                                alt="Jacob Sarmiento"
                                class="h-full w-full rounded-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.my-atropos {
    width: 15rem;
    height: 15rem;
    animation: pulse 2s infinite;
    border-radius: 100%;
    cursor: pointer;
}

.my-atropos:hover {
    animation: none;
}

@keyframes pulse {
    0% {
        filter: drop-shadow(0 0 0 rgba(128, 128, 128, 0.9));
    }
    50% {
        filter: drop-shadow(0 0 10px rgba(128, 128, 128, 0.7));
    }
    100% {
        filter: drop-shadow(0 0 0 rgba(128, 128, 128, 0));
    }
}
</style>
