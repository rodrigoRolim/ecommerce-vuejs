<script lang="ts" setup></script>
<template>
  <div class="TProducts">
    <div class="TProducts__Header">
      <slot name="Header"></slot>
    </div>
    <div class="TProducts__Navigation">
      <slot name="navigation"></slot>
    </div>
    <div class="TProducts__Content">
      <slot name="content"></slot>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.TProducts {
  width: 1280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.TProducts__Navigation {
  border-bottom: 1px solid rgb(221, 221, 221);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
}
.TProducts__Content {
  align-self: center;
  padding: 1rem;
}

</style>