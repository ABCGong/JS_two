<template>
    <div class="bg">
        <div class="tx1">
        麦浪滚滚
        </div>
        <div class="tx2">
            ———将论文写在祖国大地上
        </div>
    </div>

    
</template>
<script setup>

</script>
<style scoped>

@font-face {
  font-family: "阿里妈妈数黑体 Bold";font-weight: 700;src: url("//at.alicdn.com/wf/webfont/wl2T05KepNcG/8lftcuFBJUfx.woff2") format("woff2"),
  url("//at.alicdn.com/wf/webfont/wl2T05KepNcG/KYfWrckLbknf.woff") format("woff");
  font-display: swap;
}
@font-face {
  font-family: "阿里妈妈东方大楷 Regular";font-weight: 400;src: url("//at.alicdn.com/wf/webfont/wl2T05KepNcG/fQLY5hSP0hGR.woff2") format("woff2"),
  url("//at.alicdn.com/wf/webfont/wl2T05KepNcG/YGchhCyLwn2D.woff") format("woff");
  font-display: swap;
}
.tx1{
    background: linear-gradient(to right, #ffd700, #ffed00);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    font-size:85px;
    text-align: center;
    font-family: "阿里妈妈东方大楷 Regular";
    padding-top:10% ;
    
}
.tx2{
    font-family:"阿里妈妈数黑体 Bold" ;
    text-align: right;
    font-size: 35px;
    padding-right: 60px;
    color: black;
}
.bg{
    background-image: url("C:/Users/G/Desktop/project/vue-project/src/components/maintool/bg.svg");
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    padding: 0;
    margin: 0;
}
</style>