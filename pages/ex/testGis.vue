<template>
  <div class="gis_Content">
    <a-tabs default-active-key="1" @change="callback">
      <a-tab-pane key="1" tab="leaflet">
        <div>
          gis
        </div>
      </a-tab-pane>
      <a-tab-pane key="2" tab="Tab 2" force-render>
        <div>
          gis
        </div>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {

    };
  },
  methods: {
    callback(key) {
      console.log(key);
    }
  }
}
</script>
<style lang="scss" scoped>
.gis_Content{
  min-height: 40vh;
  width: calc(100% - 20%);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
}
</style>