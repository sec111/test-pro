<template>
  <div style="padding-left:80px;">
    关于csshover特效显示
    <div>
      <div class="div-content">
        <div ><hover-one></hover-one></div>
        <div ><hover-two></hover-two></div>
        <div ><hover-three></hover-three></div>
        <div ><hover-four></hover-four></div>
        <div ><hover-five></hover-five></div>
        <div ><hover-six></hover-six></div>
        <div ><hover-seven></hover-seven></div>
        <div ><hover-eight></hover-eight></div>
      </div>
    </div>
  </div>
</template>
<script>
import hoverOne from '@/components/cssHover/hoverOne';
import hoverTwo from '@/components/cssHover/hoverTwo';
import hoverThree from '@/components/cssHover/hoverThree';
import hoverFour from '@/components/cssHover/hoverFour';
import hoverFive from '@/components/cssHover/hoverFive';
import hoverSix from '@/components/cssHover/hoverSix';
import hoverSeven from '@/components/cssHover/hoverSeven';
import hoverEight from '@/components/cssHover/hoverEight';
export default{
  components: {
    hoverOne,
    hoverTwo,
    hoverThree,
    hoverFour,
    hoverFive,
    hoverSix,
    hoverSeven,
    hoverEight
  },
  data() {
    return {

    };
  },
  methods: {

  }
}
  
</script>
<style>
.div-content div{
 margin: 0 auto;
 margin-bottom:20px;
}
</style>