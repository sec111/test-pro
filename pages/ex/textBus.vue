<template>
  <div class="bus_Content">
    <a-button @click="opModal">bus显示modal</a-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
    };
  },
  methods: {
    opModal() {
      this.bus.$emit('modal', true);
    }
  }
}
</script>
<style lang="scss" scoped>
  .bus_Content{
    width: calc(100% - 20%);
    margin: auto;
    padding: 20px;
    display: flex;
    justify-content: center;
    min-height: 40vh;
    align-items: center;
  }
</style>