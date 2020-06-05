<template>
  <section class="container">
    <div>
      <!-- <app-logo/> -->
      <!-- <h1 class="title">
        test-pro
      </h1>
      <h2 class="subtitle">
        Nuxt.js project
      </h2> -->
      <!-- <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green">Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey">GitHub</a>
      </div> -->
      <a-input-search
        placeholder="/_val/pageVal"
        enter-button="必传参数"
        size="large"
        @search="jumpPageValue"
        style="margin-bottom:20px;"
        v-model="inputContent"
      />
      <a-input-search
        placeholder="/valPage/_val"
        enter-button="非必传参数"
        size="large"
        @search="jumpPageValue2"
        style="margin-bottom:20px;"
        v-model="inputContent2"
      />
      <a-alert
        message="warning 必传参数要填写内容"
        banner
        v-if="showWarn"
      />
      <div class="btns">
        <!-- 按钮组 -->
        <!-- 要禁用链接页面的预获取，可以使用no-prefetch： -->
        <!-- 跳转页面1. <n-link to="/about" no-prefetch>About page not pre-fetched</n-link> -->
        <nuxt-link to="/ex/textBus">
          <a-button type="primary" shape="round">bus的modal控件</a-button>
        </nuxt-link>
        <!-- 跳转页面2. -->
        <a-button type="dashed" shape="circle" @click="jumpPageGis">gis</a-button>
        <!-- chart. -->
        <a-button type="danger">chart</a-button>
        <!-- <a-button type="link">canvas</a-button> -->
        <nuxt-link to="/ex/svg">
          <a-button>svg示例</a-button>
        </nuxt-link>
        <nuxt-link to="/ex/svgdom">
          <a-button>svg的DOM</a-button>
        </nuxt-link>
        <nuxt-link to="/ex/svgChart">
          <a-button type="primary">svg图表</a-button>
        </nuxt-link>
        <!-- lodash -->
        <!-- fecha -->
      </div>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  },
  data() {
    return {
      showWarn: true,
      inputContent: '',
      inputContent2: ''
    }
  },
  watch: {
    inputContent() {
      if (this.inputContent.length === 0) {
        this.showWarn = true;
      } else {
        this.showWarn = false;
      }
    }
  },
  methods: {
    jumpPageGis() {
      this.$router.push('/ex/testGis');
    },
    jumpPageValue(value) {
      if (!value) {
        return;
      }

      // /555/pageVal

      // 方法1. path: /:val/pageVal
      // this.$router.push(`/${value}/pageVal`);

      // 方法2.
      this.$router.push({ name: 'val-pageVal', params: { val: value }})

      // 注意：
      // 带查询参数，变成 /:val/pageVal?val=222
      // this.$router.push({path: '/:val/pageVal', query: {val: value}});
    },
    jumpPageValue2(value) {

      // /valPage/5555

      // 方法1.
      // this.$router.push({ name: 'valPage-val', params: { val: value }})

      // 方法2.
      this.$router.push({path: `/valPage/${value}`});

      // 注意： /valPage?val=555
      // this.$router.push({path: '/valPage', query: {val: value}});
    }
  },
  mounted() {

  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
  margin-bottom: 20px;
}

.btns {
  display: flex;
  justify-content: space-between;
  width: 600px;
  margin-top: 20px;
}
</style>

