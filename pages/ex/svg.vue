<template>
  <div class="svg_content">
    <!-- 黑色半径50的圆 -->
    <!-- SVG 图像默认大小是300像素（宽） x 150像素（高）。 -->
    <svg width="100%" height="100%">
      <circle id="mycircle" cx="50" cy="50" r="50" />
    </svg>
    <!-- 如果只想展示 SVG 图像的一部分，就要指定viewBox属性。属性的值有四个数字，分别是左上角的横坐标和纵坐标、视口的宽度和高度 -->
    <svg width="100" height="100" viewBox="50 50 50 50">
      <circle id="mycircle" cx="50" cy="50" r="50" />
    </svg>
    <!-- circle代表圆形 -->
    <svg width="300" height="180">
      <circle cx="30"  cy="50" r="25" />
      <circle cx="90"  cy="50" r="25" class="red" />
      <circle cx="150" cy="50" r="25" class="fancy" />
    </svg>
    <!-- line用来绘制直线 -->
    <!-- x1属性和y1属性，表示线段起点的横坐标和纵坐标；x2属性和y2属性，表示线段终点的横坐标和纵坐标；style属性表示线段的样式。 -->
    <svg width="300" height="180">
      <line x1="0" y1="0" x2="200" y2="0" style="stroke:rgb(0,0,0);stroke-width:5" />
    </svg>
    <!-- <polyline>标签用于绘制一根折线。 -->
    <svg width="300" height="180">
      <polyline points="3,3 30,28 3,53" fill="none" stroke="black" />
    </svg>
    <!-- <rect>标签用于绘制矩形。 -->
    <svg width="300" height="180">
      <rect x="0" y="0" height="100" width="200" style="stroke: #70d5dd; fill: #dd524b" />
    </svg>
    <!-- <ellipse>标签用于绘制椭圆。 -->
    <!-- cx属性和cy属性，指定了椭圆中心的横坐标和纵坐标（单位像素）；rx属性和ry属性，指定了椭圆横向轴和纵向轴的半径（单位像素）。 -->
    <svg width="300" height="180">
      <ellipse cx="60" cy="60" ry="40" rx="20" stroke="black" stroke-width="5" fill="silver"/>
    </svg>
    <!-- <polygon>标签用于绘制多边形。 -->
      <!-- points属性指定了每个端点的坐标，横坐标与纵坐标之间与逗号分隔，点与点之间用空格分隔。 -->
    <svg width="300" height="180">
      <polygon fill="green" stroke="orange" stroke-width="1" points="0,0 100,0 100,80 0,100 0,0"/>
    </svg>
    <!-- <path>标签用于制路径。 -->
      <!-- M：开始点 Z：结束点，返回M点 -->
      <!-- d属性表示绘制顺序，它的值是一个长字符串，每个字母表示一个绘制动作，后面跟着坐标。 -->
      <!-- M：移动到（moveto）
      L：画直线到（lineto）
      Z：闭合路径 -->
    <svg width="300" height="180">
      <path d="
        M 18,3
        L 46,3
        L 46,40
        L 61,40
        L 32,68
        L 3,40
        L 18,40
        Z
      "></path>
    </svg>
    <!-- <text>标签用于绘制文本。 -->
      <!-- x属性和y属性，表示文本区块基线（baseline）起点的横坐标和纵坐标。文字的样式可以用class或style属性指定。 -->
    <svg width="300" height="180">
      <text x="50" y="25">Hello World</text>
    </svg>
    <!-- <use>标签用于复制一个形状。 -->
      <!-- href属性指定所要复制的节点，x属性和y属性是<use>左上角的坐标。另外，还可以指定width和height坐标。 -->
    <svg viewBox="0 0 30 10" xmlns="http://www.w3.org/2000/svg" width="300" height="100">
      <circle id="myCircle" cx="5" cy="5" r="4"/>

      <use href="#myCircle" x="10" y="0" fill="blue" />
      <use href="#myCircle" x="20" y="0" fill="white" stroke="blue" />
    </svg>
    <!-- <g>标签用于将多个形状组成一个组（group），方便复用。 -->
    <svg width="300" height="100">
      <g id="myCircle">
        <text x="25" y="20">圆形</text>
        <circle cx="50" cy="50" r="20"/>
      </g>

      <use href="#myCircle" x="100" y="0" fill="blue" />
      <use href="#myCircle" x="200" y="0" fill="white" stroke="blue" />
    </svg>
    <!-- <defs>标签用于自定义形状，它内部的代码不会显示，仅供引用。 -->
    <svg width="300" height="100">
      <defs>
        <g id="myCircle">
          <text x="25" y="20">圆形</text>
          <circle cx="50" cy="50" r="20"/>
        </g>
      </defs>

      <use href="#myCircle" x="0" y="0" />
      <use href="#myCircle" x="100" y="0" fill="blue" />
      <use href="#myCircle" x="200" y="0" fill="white" stroke="blue" />
    </svg>
    <!-- <pattern>标签用于自定义一个形状，该形状可以被引用来平铺一个区域。 -->
    <!-- <pattern>标签将一个圆形定义为dots模式。patternUnits="userSpaceOnUse"表示<pattern>的宽度和长度是实际的像素值。然后，指定这个模式去填充下面的矩形。 -->
    <svg width="500" height="500">
      <defs>
        <pattern id="dots" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <circle fill="#bee9e8" cx="50" cy="50" r="35" />
        </pattern>
      </defs>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#dots)" />
    </svg>
    <!-- <image>标签用于插入图片文件。 -->
      <!-- <image>的xlink:href属性表示图像的来源。 -->
    <svg viewBox="0 0 100 100" width="100" height="100">
      <image xlink:href="path/to/image.jpg"
        width="50%" height="50%"/>
    </svg>
    <!-- <animate>标签用于产生动画效果。 -->
      <!-- attributeName：发生动画效果的属性名。
      from：单次动画的初始值。
      to：单次动画的结束值。
      dur：单次动画的持续时间。
      repeatCount：动画的循环模式。 -->
    <svg width="500px" height="500px">
      <rect x="0" y="0" width="100" height="100" fill="#feac5e">
        <animate attributeName="x" from="0" to="500" dur="5s" repeatCount="indefinite" />
        <animate attributeName="width" to="500" dur="5s" repeatCount="indefinite" />
      </rect>
    </svg>
    <!-- <animate>标签对 CSS 的transform属性不起作用，如果需要变形，就要使用<animateTransform>标签。 -->
      <!-- <animateTransform>的效果为旋转（rotate），
        这时from和to属性值有三个数字，第一个数字是角度值，第二个值和第三个值是旋转中心的坐标。
        from="0 200 200"表示开始时，角度为0，围绕(200, 200)开始旋转；
        to="360 400 400"表示结束时，角度为360，围绕(400, 400)旋转。 -->
    <svg width="500px" height="500px">
      <rect x="250" y="250" width="50" height="50" fill="#4bc0c8">
        <animateTransform attributeName="transform" type="rotate" begin="0s" dur="10s" from="0 200 200" to="360 400 400" repeatCount="indefinite" />
      </rect>
    </svg>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
  .svg_content{
    width: calc(100% - 20%);
    margin: 0 auto;
    padding-top: 40px;
    // SVG 的 CSS 属性与网页元素有所不同。
    .red {
      fill: red;
    }
    .fancy {
      fill: none; // fill：填充色
      stroke: black; // stroke：描边色
      stroke-width: 3pt; // stroke-width：边框宽度
    }
  }
</style>