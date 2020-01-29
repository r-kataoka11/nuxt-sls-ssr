<template>
  <div>
    <nuxt />
  </div>
</template>

<style lang="scss">
* {
  box-sizing: border-box;
}

img {
  max-width: 100%;
}

/* ページ遷移アニメーション */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
