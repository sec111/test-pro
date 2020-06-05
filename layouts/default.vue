<template>
  <div>
    <!-- <app-logo/> -->
    <!-- 去掉footer :footer="null" -->
    <!-- 在导航栏或者公共组件中写对话框，注册bus事件 -->
    <a-modal v-model="showModal" title="Title" on-ok="handleOk" :footer="null">
      <!-- <template slot="footer">
        <a-button key="back" @click="handleCancel">
          Return
        </a-button>
        <a-button key="submit" type="primary" :loading="loading" @click="handleOk">
          Submit
        </a-button>
      </template> -->
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </a-modal>
    <nuxt/>
  </div>
</template>

<script>
import AppLogo from '~/components/AppLogo';
export default {
  components: {
    AppLogo,
  },
  data() {
    return {
      showModal: false,
      loading: false
    }
  },
  methods: {
    controllBus() {
      // 在导航栏或者公共组件中写对话框，注册bus事件
      this.bus.$off('modal');
      this.bus.$on('modal', (res) => {
        this.showModal = res;
      });
    },
    handleOk(e) {
      this.loading = true;
      setTimeout(() => {
        this.showModal = false;
        this.loading = false;
      }, 300);
    },
    handleCancel(e) {
      this.showModal = false;
    }
  },
  mounted() {
    this.controllBus();
  }
}
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  /* padding-top: 20vh; */
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>

