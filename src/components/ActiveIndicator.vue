<template>
    <div class="active-indicator">

    </div>
</template>

<style scoped>
.active-indicator {
    width: 20px;
    height: 20px;
    border-radius: 20px;
    background-color: #ff5d5d;
    animation: blinker 3s linear infinite;
}

@keyframes blinker {
  50% {
    opacity: 0.5;
  }
}

</style>
