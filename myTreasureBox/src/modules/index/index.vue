<template>
<div class="login">
  <div class="topheader">
    <topheader ref="topheader"></topheader>
  </div>
  <div class="content">
    <div class="leftmenu">
        <leftmenu ref="leftMenu"></leftmenu>
    </div>

    <div class="container">
        <rightcontent ref="rightcontent"></rightcontent>
    </div>
  </div>
</div>

</template>

<script>
import leftmenu from '@/modules/index/leftMenu';
import rightcontent from '@/modules/index/rightContent';
import topheader from '@/modules/index/topHeader';

export default {
  name: 'index',
  data() {
    return {
      colArr: ['aqua', 'pink', '#77B6FF', '#73E9EE', '#F7D205', '#FFA3A3', '#C7B3FF', '#F5974E', '#FFFFFF', '#000000'],
      valueArr: ['你好', '别来无恙', '今天又熬夜了吗', '你好，明天', '天晴了', '雨天', '明天会更好', '你会更好'],
      testData: {
        color: 'aqua',
        value: '别来无恙',
      },
      LabelArr: [],
    };
  },
  components: { leftmenu, rightcontent, topheader },
  mounted() {
    this.test();
  },
  watch: {
  },
  methods: {
    test() {
      this.testData.color = this.colArr[this.getNumber(this.colArr.length)];
      this.testData.value = this.valueArr[this.getNumber(this.valueArr.length)];
      this.LabelArr.push(this.testData);
    },
    inIt() {

    },
    getNumber(number = 10) {
      return Math.floor(Math.random() * number);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login{
  width: 100%;
  /* max-height: calc(98vh); */
  /* background: #FFFFFF;
  display: flex;
  flex-direction: row;
  justify-content: center; */
  /* padding:0;
  margin: 0; */
}
.login::-webkit-scrollbar{
    display: none;
}
.topheader{
  width: 100%;
}
.content{
    width: 100%;
    display: flex;
    justify-content: center;
}
.leftmenu{
  width: 20%;
}
.container {
  width: 80%;
  margin: 0 0.5% 0 0.5%;
}
</style>
