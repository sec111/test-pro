<template>
  <div class="gis_Content">
    <a-tabs default-active-key="1" @change="callback">
      <a-tab-pane key="1" tab="leaflet">
        <div class="leaflet_content">
          gis
        </div>
      </a-tab-pane>
      <a-tab-pane key="2" tab="openlayer" force-render>
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
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  .leaflet_content{
    width: 100%;
  }
}
</style>