<template>
  <div class="hello">
    <!-- <div class="test_button" @click.stop.prevent="test">
        <div class="test_button_label" :style="{'color':testData.color}">{{testData.value}}</div>
    </div> -->
  <div class="test_button">
    <el-button class="my_button" size="large" :style="{'color':testData.color}"
     @click.stop.prevent="test" plain>{{testData.value}}</el-button>
  </div >
  </div>
</template>

<script>
export default {
  name: 'leftMenu',
  data() {
    return {
      colArr: ['#FFFFFF', '#000000'],
      valueArr: ['你好', '别来无恙', '今天又熬夜了吗', '你好，明天', '天晴了', '雨天', '明天会更好', '你会更好'],
      testData: {
        color: 'aqua',
        value: '别来无恙',
      },
    };
  },
  mounted() {
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
.hello{
  width: 100%;
  height: calc(91vh);
  background: #0094;
  border-radius: 6px;
}
 .test_button {
  /* background: linear-gradient(to left,pink,#73E9EE); */
  /* border-radius: 6px; */
  /* border:2px solid #C7B3FF; */
  display: flex;
  justify-content: center;
  /* box-shadow: 2px linear-gradient(to left,pink,orange);/ */
  /* cursor: pointer; */
}
.my_button{
  width: 180px;
  height: 45px;
  margin:1em;
  background: linear-gradient(to left,pink,#73E9EE);
  box-shadow: 2px linear-gradient(to left,pink,orange);
  border: 1px solid #0094;
}
.el-button.is-plain:focus, .el-button.is-plain:hover{
  background: linear-gradient(to left,pink,#73E9EE);
  border: 1px solid #0094;
}
</style>
