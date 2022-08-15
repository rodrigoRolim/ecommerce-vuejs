<script lang="ts" setup></script>
<template>
  <div class="TProducts">
    <div class="TProducts__Header">
      <slot name="Header"></slot>
    </div>
    <slot name="navigation"></slot>
    <div class="TProducts__Content">
      <slot name="content"></slot>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.TProducts {
  min-width: 1280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.TProducts__Content {
  align-self: center;
}
</style>