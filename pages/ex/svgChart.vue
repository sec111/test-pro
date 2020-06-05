<template>
  <div class="svg_content">
    <h3>使用封装的组件生产</h3>
    <div class="chart_content" v-if="isShow">
      <!-- <svg width="100%" :height="svgHeight" preserveAspectRatio="none meet"> -->
      <svg :width="svgWidth" :height="svgHeight">
        <g class="layer" transform="translate(80,20)">
          <polyline :points="polylineData" fill="none" stroke="black" />
          <!-- 大坝名称 -->
          <g v-for="(item, index) in damIds" :key="'text'+index" > 
            <text class="scale_text text_middle" v-for="(i) in item.dbmc.length+1" :key="'dam'+i" :x="chartWidth * (item.lat-Xmin) / (Xmax-Xmin)" :y="chartHeight - (chartHeight) * item.lon / Ymax + 20 + (i-1)*20+20">{{showDamIdInfo.dbid !== item.dbid ? item.dbmc[i-1] : ''}}</text>
          </g>
          
          <!-- 坝高,水深 -->
          <!-- 使用stroke-dasharray="3 2"  属性，其中3和2分别表示画的长度和间隙的长度 -->
          <g v-for="i in y0damIds.length-1" :key="'red'+i">
            <!-- fill="url(#MyGradient)" -->
            <path name="三角形" :fill="`${y0damIds[i].damState === '已注册' || y0damIds[i].damState === '已建' ? 'url(#MyGradient)' : trangleInfo.normal.bgColor }`" stroke="transparent" :d="`M${y0damIds[i].pre.lat1} ${y0damIds[i].pre.lon1} L${y0damIds[i].pre.lat} ${y0damIds[i].pre.lon} L${y0damIds[i].lat} ${y0damIds[i].pre.lon} L${y0damIds[i].lat} ${y0damIds[i].lon}  Z`" @mouseover="showInfo(i)" @mouseout="isShowInfo=false">
            </path>
            <defs>
              <!-- 渐变色纵向 -->
              <!-- 1. gradientTransform="rotate(90)" 渐变旋转了90度角 -->
              <!-- 2. x1="0" y1="0" x2="1" y2="1" -->
              <linearGradient id="MyGradient" gradientTransform="rotate(90)">
                <stop offset="0%"  :stop-color="trangleInfo.active.bgColor"/>
                <stop offset="100%" stop-color="rgb(229,248,249)"/>
              </linearGradient>
            </defs>
            <!-- 三角形 -->
            <line :x1="y0damIds[i].pre.lat" :y1="y0damIds[i].pre.lon" :x2="y0damIds[i].lat" :y2="y0damIds[i].pre.lon" :style="`stroke:${y0damIds[i].damState === '已注册' || y0damIds[i].damState === '已建' ? trangleInfo.active.rowColor : trangleInfo.normal.rowColor };stroke-width:1;cursor:pointer;`" :stroke-dasharray="`${y0damIds[i].damState === '已注册' || y0damIds[i].damState === '已建' ? '' : '4 2'}`"/>
            <!-- 横线 -->
            <g v-if="Math.abs(y0damIds[i].pre.lat-y0damIds[i].lat)>58" transform="translate(-16, 0)">
              <image xlink:href="@/static/sjx.png" preserveAspectRatio="none" :x="(y0damIds[i].pre.lat+y0damIds[i].lat)/2" :y="y0damIds[i].pre.lon-14" width="11" height="11"></image>
              <text class="scale_text text_middle" :x="(y0damIds[i].pre.lat+y0damIds[i].lat)/2 + 26" :y="y0damIds[i].pre.lon-4">
              {{damIds[i-1].lon}}</text>
            </g>
            <!-- 横线上的标记 -->
            <line v-if="y0damIds[i].damState === '已注册' || y0damIds[i].damState === '已建'" :x1="y0damIds[i].lat" :y1="y0damIds[i].pre.lon" :x2="y0damIds[i].lat" :y2="y0damIds[i].lon" :style="`stroke:${trangleInfo.active.colColor};stroke-width:8;`"/>
            
            <g v-else>
              <line :x1="y0damIds[i].lat" :y1="y0damIds[i].pre.lon" :x2="y0damIds[i].lat" :y2="y0damIds[i].lon" :style="`stroke:${trangleInfo.normal.colColor};stroke-width:2;`" stroke-dasharray='3 2'/>
              <line :x1="y0damIds[i].lat+4" :y1="y0damIds[i].pre.lon" :x2="y0damIds[i].lat+4" :y2="y0damIds[i].lon" :style="`stroke:${trangleInfo.normal.colColor};stroke-width:1;`" stroke-dasharray='3 2'/>
              <line v-if="Math.abs(y0damIds[i].pre.lon-y0damIds[i].lon)>20" :x1="y0damIds[i].lat+2" :y1="(y0damIds[i].pre.lon+y0damIds[i].lon)/2+5" :x2="y0damIds[i].lat+2" :y2="(y0damIds[i].pre.lon+y0damIds[i].lon)/2-5" :style="`stroke:${trangleInfo.normal.colColor};stroke-width:4;`"/>
              <line v-else-if="Math.abs(y0damIds[i].pre.lon-y0damIds[i].lon)>10" :x1="y0damIds[i].lat+2" :y1="y0damIds[i].pre.lon+5" :x2="y0damIds[i].lat+2" :y2="y0damIds[i].lon-5" :style="`stroke:${trangleInfo.normal.colColor};stroke-width:4;`"/>
              <line v-else-if="Math.abs(y0damIds[i].pre.lon-y0damIds[i].lon)>5" :x1="y0damIds[i].lat+2" :y1="y0damIds[i].pre.lon+3" :x2="y0damIds[i].lat+2" :y2="y0damIds[i].lon" :style="`stroke:${trangleInfo.normal.colColor};stroke-width:4;`"/>
            </g>
            <!-- 竖线 -->
          </g>

          <!-- 需要特别显示的大坝 -->
          <g>
            <!-- 横坐标需要修改偏移量 -->
            <line :x1="showDamIdInfo.lat" y1="-20" :x2="showDamIdInfo.lat" :y2="svgHeight" :style="`stroke:${trangleInfo.normal.rowColor};stroke-width:1;cursor:pointer;`" stroke-dasharray="5 3"/>
            <text class="mark_text" v-for="(i) in showDamIdInfo.dbmc.length+1" :key="'dam'+i" :x="showDamIdInfo.lat" :y="showDamIdInfo.lon+ (i-1)*26+26">{{showDamIdInfo.dbmc[i-1]}}</text>
            <image xlink:href="@/static/red.png" preserveAspectRatio="none" :x="showDamIdInfo.lat-22" :y="showDamIdInfo.lon-48" width="44" height="44" @mouseover="showInfo()" @mouseout="isShowInfo=false" style="opacity:0.9;"></image>
            <!-- fill-opacity / stroke-opacity 透明度属性 -->
          </g>
          <g class="y axis">
            <!-- 纵坐标为了上面预留长度，刻度为0时实际为10，所以chartHeight+10 -->
            <line x1="0" :y1="-scaleBetweenPre" x2="0" :y2="chartHeight" style="stroke:rgb(202, 215, 228);stroke-width:2"/>
            <!-- 刻度 -->
            <text class="scale_text" style="text-anchor:end;" v-for="item in 4" :key="'t'+item" :x="-scaleBetweenPre" :y="4 + (item-1)*(Ymax/3)*(chartHeight)/Ymax">{{Number(Ymax - Ymax/3*(item-1)).toFixed(0)}}</text>
            <line v-for="item in 4" :key="'l'+item" :x1="-scaleBetweenPre/2" :y1="(item-1)*(Ymax/3)*(chartHeight)/Ymax" x2="0" :y2="(item-1)*(Ymax/3)*(chartHeight)/Ymax" :style="`stroke:${scaleColorSmall};stroke-width:${scaleColorSmallWidth}`"/>
            <!-- 纵坐标名称 -->
            <text :x="220" :y="200" class="y_rotate scale_text">高程</text>
          </g>

          <g class="x axis">
            <line x1="0" :y1="chartHeight" :x2="chartWidth+scaleBetweenPre" :y2="chartHeight" style="stroke:rgb(202, 215, 228);stroke-width:2"/>
            <!-- 刻度 -->
            <text class="scale_text text_middle" v-for="item in 11" :key="'xt' + item" :x="(item-1)*Xmax/10*chartWidth/Xmax" :y="4 + chartHeight + scaleBetweenPre">{{Number(Xmin+(item-1)*(Xmax-Xmin)/10).toFixed(2)}}</text>
            <line v-for="item in 11" :key="'xl' + item" :x1="(item-1)*Xmax/10*chartWidth/Xmax" :y1="chartHeight" :x2="(item-1)*Xmax/10*chartWidth/Xmax" :y2="chartHeight + scaleBetweenPre/2" :style="`stroke:${scaleColorSmall};stroke-width:${scaleColorSmallWidth}`"/>
            <!-- 坐标轴名称 -->
            <text class="scale_text" :x="svgWidth-200" :y="svgHeight - 30">直线距离（km）</text>
          </g>
        </g>
      </svg>
    </div>
    <div class="dam_info" ref="damInfo" v-show="isShowInfo" :style="`left:${showInfoLeft};top:${showInfoTop}`">
      <p>坝名： {{selectedInfo.name}}</p>
      <p>坝高(m)： {{Number(selectedInfo.height).toFixed(2)}}</p>
      <p>正常蓄水位(m)： {{Number(selectedInfo.normalWaterLevel).toFixed(2)}}</p>
    </div>
    <button @click="jumpPage">点点</button>
  </div>
</template>
<script>

export default {
  data() {
    return {
      isShow: false,
      isShowInfo: false,
      showInfoLeft: 100,
      showInfoTop: 0,
      ids: [300,301,302,361,370,371,401,451,457,502,511,551,552,558,579,601,602,615,640,827,828,829,832,833,834,937,938,1348,2286],
      damIds: [
      ],
      y0damIds: [], // 点坐标从第二个开始
      showDamId: '579',
      showDamIdInfo: {},
      svgWidth: 1200,
      svgHeight: 500,
      chartHeight: 400, // 纵坐标为了上面预留长度，刻度为0时实际为10，所以chartHeight+10，scaleBetweenPre/2
      chartWidth: 1000,
      Xmax: 0, // 横坐标最大值
      Xmin: 0, // 横坐标最小值
      Ymax: 0, // 纵坐标最大值
      scaleDistance: 40, // 刻度到坐标轴距离
      scaleLengthSmall: 10, // 刻度小线长度
      scaleColorSmall: 'rgb(202, 215, 228)', // 刻度小线颜色
      scaleColorSmallWidth: 1, // 刻度小线宽度
      scaleBetweenPre: 20, // 纵坐标，横坐标预留长度 （注：为了方便显示完全文字）
      textTranslate: 10, // 提示性文字偏移量
      polylineData: '',
      selectedInfo: {
        name: '',
        height: '',
        normalWaterLevel: ''
      },
      trangleInfo: {
        active: {
          rowColor: 'rgb(60, 174, 235)',
          colColor: 'rgb(255, 0, 0)',
          bgColor: 'rgb(159, 230, 234)'
        },
        normal: {
          rowColor: 'rgb(255, 32, 32)',
          colColor: 'rgb(255, 32, 32)',
          bgColor: '#fff'
        }
      }
    }
  },
  asyncData (context) {
    return context.$axios.get('newDam.json').then((res) => {
      return { damAllData: res.data };
    });
  },
  methods: {
    initData() {
      var arr = [];
      // this.ids.forEach((item) => {
      //   this.damAllData.forEach((i) => {
      //     if (String(item) === i.dbid) {
      //       arr.push({dbmc: i.dbmc, lat: i.topLevel, lon: i.normalWaterLevel, iconHeight: i.iconHeight});
      //     }
      //   });
      // });
      this.damAllData.forEach((i) => {
        arr.push({dbid: i.dbid, dbmc: i.dbmc, lat: Number(i.damDistance), lon: Number(i.normalWaterLevel), height: Number(i.height), damState: i.damState});
      });
      this.damIds = arr;
      // console.log(this.damIds);
      // 最大值 x
      this.Xmax = Math.max.apply(Math, this.damIds.map(item => {
        return item.lat;   
      }));
      this.Xmax = Math.ceil(this.Xmax);
      this.Xmin = Math.min.apply(Math, this.damIds.map((item) => {
        return item.lat;
      }));
      // console.log('从数组中得到的', this.Xmin, this.Xmax);
      this.Xmin = Math.floor((this.Xmin - (this.Xmax - this.Xmin) / 2) / 10) * 10;
      // console.log('计算后得到的', this.Xmin, this.Xmax);
      // 最大值 y
      this.Ymax = Math.max.apply(Math, this.damIds.map(item => {
        return item.lon;   
      }));
      this.Ymax = Math.floor(Math.floor(this.Ymax) / 2) * 3;
      // console.log(this.Ymax);
      this.isShow = true;

      // this.damIds.sort(this.sortBy('lat', null)); // 降序排列
      // 折线坐标
      var str = '';
      this.y0damIds = [];
      this.y0damIds.push({dbmc: '', lat: 0, lon: this.chartHeight - (this.chartHeight) * (Number(this.damAllData[0].height) + Number(this.damIds[0].lon)) / this.Ymax, height: 0});
      str = str + String(0) + ',' + String(this.chartHeight - (this.chartHeight) * (Number(this.damAllData[0].height) + Number(this.damIds[0].lon)) / this.Ymax) + ' ';
      for (var i = 0; i < this.damIds.length; i++) {
        str = str + String(this.chartWidth * (this.damIds[i].lat - this.Xmin) / (this.Xmax - this.Xmin)) + ',' + String(this.chartHeight - (this.chartHeight) * this.damIds[i].lon / this.Ymax) + ' ';
        // 转换坐标
        this.y0damIds.push({dbid:this.damIds[i].dbid, dbmc: this.damIds[i].dbmc, lat: this.chartWidth * (this.damIds[i].lat - this.Xmin) / (this.Xmax - this.Xmin), lon:this.chartHeight - (this.chartHeight) * this.damIds[i].lon / this.Ymax, height: this.damIds[i].height, damState: this.damIds[i].damState});
      }
      this.y0damIds.forEach(item => {
        // 显示大坝信息（标红）
        if (this.showDamId === item.dbid) {
          this.showDamIdInfo = item;
        }
      });
      // console.log('this.y0damIds', this.y0damIds);
      for (var i = 1; i < this.y0damIds.length; i++) {
        var pre = this.computePointPre(Number(this.y0damIds[i-1].lat), Number(this.y0damIds[i-1].lon), Number(this.y0damIds[i].lat), Number(this.y0damIds[i].lon), Number(this.y0damIds[i].height));
        this.y0damIds[i].pre = pre;
      }
      this.polylineData = str;
    },
    // 求大坝与前一坐标连线的经纬度
    computePointPre(pre_lat, pre_lon, cur_lat, cur_lon, dam_height) {
      var dam_lat = cur_lat;
      var dam_lon = cur_lon - dam_height * this.chartHeight / this.Ymax;
      var val_lon = dam_lon;
      var dist = Math.abs(dam_lon - cur_lon) / Math.abs(cur_lon - pre_lon) * Math.abs(cur_lat-pre_lat);
      var val_lat = cur_lat - dist;
      // 预留坐标 lat1 lon1
      var lat1 = val_lat;
      var lon1 = val_lon;
      if (pre_lat !== 0 && val_lat <= pre_lat) {
        val_lat = pre_lat+4;
        lat1 = val_lat;
        lon1 = pre_lon;
      }
      return {
        lat: val_lat,
        lon: val_lon,
        lat1: lat1,
        lon1: lon1
      };
    },
    sortBy(attr, rev) {
      if (rev === undefined) {
        rev = 1;
      } else {
        rev = (rev) ? 1 : -1;
      }
      return function(a, b) {
        a = a[attr];
        b = b[attr];
        if (a < b) {
          return rev * -1;
        }
        if (a > b) {
          return rev * 1;
        }
        return 0;
      }
    },
    showInfo(i) {
      var item = {};
      if (i) {
        item = this.damIds[i-1];
      } else {
        item = this.showDamIdInfo;
      }
      var point = this.getMousePos(event);
      this.showInfoLeft = point.x + 'px';
      this.showInfoTop = point.y + 'px';
      this.isShowInfo = true;
      this.selectedInfo = {
        name: item.dbmc,
        height: item.height,
        normalWaterLevel: item.lon
      }
    },
    getMousePos(event) {
      var e = event || window.event;
      var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
      var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
      var x = e.pageX || e.clientX + scrollX;
      var y = e.pageY || e.clientY + scrollY;
      return { 'x': x, 'y': y };
    },
    jumpPage() {
      console.log(11111);
      window.location.href = `/profile.html?damid=615&sort=1&ids=${this.ids.join(',')}`;
    }
  },
  created() {
    this.initData();
  },
  mounted() {
    
  }
}
</script>
<style lang="scss" scoped>
  .svg_content {
    width: 100%;
    height: 100%;
    padding-top: 40px;
    position: relative;
    .chart_content {
      padding-top:40px;
      width: 100%;
      text-align: center;
      circle {
        stroke-width: 5;
        stroke: #f00;
        fill: #ff0;
      }
      circle:hover {
        stroke: #090;
        fill: #fff;
      }
      .y_rotate {
        transform: rotate(-90deg);
        transform-origin: 0 50%;
      }
      .scale_text{
        font-size: 12px;
      }
      .mark_text{
        font-size: 16px;
        stroke: rgb(252, 86, 58);
        text-anchor: middle;
      }
      .text_middle{
        text-anchor: middle;
      }
      // writing-mode: lr-tb; // 有兼容性问题,只有ie显示正常
      // layout-flow: vertical-ideographic;
      // direction:rtl; // 文字开始位置相同，方向不同
      // text-anchor: middle; // start,middle,end
    }
    .dam_info {
      background: #fff;
      box-shadow: 0px 0px 10px #888888;
      padding: 4px;
      position: absolute;
      z-index: 10000;
    }
  }
</style>