<template>
  <div class="val_content">
    <p style="font-size: 18px;">参数显示位置：</p>
    <br>
    <p>{{val}}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      val:''
    };
  },
  methods: {
    initData() {
      this.val = this.$route.params.val;
    }
  },
  mounted() {
    this.initData();
  }
}
</script>
<style lang="scss" scoped>
.val_content{
  p{
    margin: 0;
    padding: 0;
  }
  width: calc(100% - 20%);
  // min-height: 40vh;
  font-size:30px;
  text-align: center;
  margin: 0 auto;
  margin-top: 80px;
}
</style>