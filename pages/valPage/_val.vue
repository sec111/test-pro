<template>
  <div class="content">
    非必传参数
    <div style="margin: 20px;">
      <span style="font-size: 30px;">{{val}}</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      val: ''
    };
  },
  methods: {
    initData() {
      if (this.$route.params.val) {
        this.val = this.$route.params.val;
      } else {
        this.val = '什么都木有传';
      }
    }
  },
  mounted() {
    this.initData();
  }
}
</script>
<style lang="scss" scoped>
  .content{
    width: calc(100% - 20%);
    min-height: 40vh;
    margin: 0 auto;
    text-align: center;
    font-size: 18px;
    padding-top:80px;
  }
</style>