<template>
<div class="container">
    <div v-for="(item,index) in LabelArr" class="container-item"
    :style="{'background':item.color}" :key="index">
        {{index}}
    </div>
</div>
</template>

<script>
export default {
  name: 'rightContent',
  data() {
    return {
      LabelArr: [{
        color: '#0094',
      }, {
        color: '#0094',
      }, {
        color: '#0094',
      }, {
        color: '#0094',
      }, {
        color: '#0094',
      }, {
        color: '#0094',
      }, {
        color: '#0094',
      }, {
        color: '#0094',
      }, {
        color: '#0094',
      }],
    };
  },
  mounted() {
  },
  watch: {
  },
  methods: {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
  width: 100%;
  height: calc(91vh);
  border-radius:8px;
  display: grid;
  grid-template-columns:32.6% 32.6% 32.6%;
  grid-gap: 1.5% 1.1%;
  justify-content: center;
  overflow: scroll;
  touch-action: pan-y;
}
.container::-webkit-scrollbar{
    display: none;
}
.container-item{
  height:15em;
  display: flex;
  justify-content: center;
  border-radius:2%;
}
</style>
