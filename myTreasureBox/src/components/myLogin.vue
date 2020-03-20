<template>
  <div class="hello">
    <div class="test_button" @click.stop="test">
      <span class="test_button_label" :style="{'color':testData.color}">{{testData.value}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'myLogin',
  data() {
    return {
      colArr: ['aqua', 'pink', '#77B6FF', '#73E9EE', '#F7D205', '#FFA3A3', '#C7B3FF', '#F5974E', '#FFFFFF', '#000000'],
      valueArr: ['你好', '别来无恙', '今天又熬夜了吗', '你好，明天', '天晴了', '雨天', '明天会更好', '你会更好'],
      testData: {
        color: 'aqua',
        value: '别来无恙',
      },
    };
  },
  mounted() {
    this.test();
  },
  methods: {
    test() {
      this.testData.color = this.colArr[this.getNumber(this.colArr.length)];
      this.testData.value = this.valueArr[this.getNumber(this.valueArr.length)];
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
  height: calc(100vh);
  background: aqua;
  display: flex;
  justify-content: center;
  align-items: center;
}
 .test_button {
  width: 180px;
  height: 45px;
  background: linear-gradient(to left,pink,#73E9EE);
  border-radius: 5px;
  border:2px solid #C7B3FF;
  display: flex;
  align-items: center;
  box-shadow: 2px linear-gradient(to left,pink,orange);
  cursor: pointer;
  margin-bottom:20%;
  opacity: 0.8;
}
.test_button_label{
  margin: 0 auto;
  color: #FFFFFF;
}
</style>
