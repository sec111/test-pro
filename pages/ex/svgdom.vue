<template>
  <div class="svg_content">
    <svg
      id="mysvg"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 800 600"
      preserveAspectRatio="xMidYMid meet"
    >
      <circle id="mycircle" cx="400" cy="300" r="50" />
    </svg>
    <!-- 使用<object>、<iframe>、<embed>标签插入 SVG 文件，可以获取 SVG DOM。
          var svgObject = document.getElementById('object').contentDocument;
          var svgIframe = document.getElementById('iframe').contentDocument;
          var svgEmbed = document.getElementById('embed').getSVGDocument();
      注意，如果使用<img>标签插入 SVG 文件，就无法获取 SVG DOM。
     -->
     <!-- 读取源码
    <div id="svg-container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        xml:space="preserve" width="500" height="440"
      >
      </svg>
    </div> -->

     <!-- SVG 图像转为 Canvas 图像 -->
     <!-- 没实现 -->
    <!-- <img :src="url" alt="111"> -->
    <!-- <canvas id="canvas" width="100%" height="40vh"></canvas> -->
    <!-- <div id="canvas" style="width:100%;;height:100px;"></div> -->


    <!-- 实例：折线图 -->

    <!-- Date |Amount
    -----|------
    2014-01-01 | $10
    2014-02-01 | $20
    2014-03-01 | $40
    2014-04-01 | $80 -->
    
    <svg width="350" height="160">
      <g class="layer" transform="translate(60,10)">
        <circle r="5" cx="0"   cy="105" />
        <circle r="5" cx="90"  cy="90"  />
        <circle r="5" cx="180" cy="60"  />
        <circle r="5" cx="270" cy="0"   />

        <g class="y axis">
          <line x1="0" y1="0" x2="0" y2="120" />
          <text x="-40" y="105" dy="5">$10</text>
          <text x="-40" y="0"   dy="5">$80</text>
        </g>
        <g class="x axis" transform="translate(0, 120)">
          <line x1="0" y1="0" x2="270" y2="0" />
          <text x="-30"   y="20">January 2014</text>
          <text x="240" y="20">April</text>
        </g>
      </g>
    </svg>

  </div>
</template>
<script>
export default {
  data() {
    return {
      url: ''
    };
  },
  methods: {
    init() {
      var mycircle = document.getElementById('mycircle');
      var _this = this;

      // 如果点击图形，就改写circle元素的r属性。
      mycircle.addEventListener('click', function(e) {
        console.log('circle clicked - enlarging');
        mycircle.setAttribute('r', 60);

        // _this.loadImage();
      }, false);

      // 使用XMLSerializer实例的serializeToString()方法，获取 SVG 元素的代码。
      // var svgString = new XMLSerializer().serializeToString(document.querySelector('svg'));

    },
    async loadImage() {
      // SVG 图像转为 Canvas 图像
      // 1. 首先，需要新建一个Image对象，将 SVG 图像指定到该Image对象的src属性。
      var mysvg = document.getElementById('mysvg');
      var img = new Image();
      var svg = new Blob([mysvg], {type: "image/svg+xml;charset=utf-8"});

      var DOMURL = self.URL || self.webkitURL || self;
      var url = DOMURL.createObjectURL(svg);

      this.url = url;

      img.src = url;

      // 2.然后，当图像加载完成后，再将它绘制到<canvas>元素。
      img.onload = function () {
        console.log(111111);
        var canvas = document.getElementById('canvas');
        console.log('canvas', canvas);
        var ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);
        console.log('img', img);
        console.log('canvas', canvas);
      };

      img.onload();
    }
  },
  mounted() {
    this.init();
  }
}
</script>
<style lang="scss" scoped>
  .svg_content{
    width: calc(100% - 20%);
    margin: 0 auto;
    padding-top: 40px;
    circle {
      stroke-width: 5;
      stroke: #f00;
      fill: #ff0;
    }

    circle:hover {
      stroke: #090;
      fill: #fff;
    }
    #canvas {
      min-height: 100vh;
    }
  }
</style>