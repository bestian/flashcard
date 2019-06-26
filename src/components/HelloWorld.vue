<i18n>
{
  "en-US": {
    "press": "please press",
    "min": "minimum number",
    "max": "maximum number",
    "choose": "please choose"
  },
  "zh-TW": {
    "press": "請連按",
    "min": "數字下限",
    "max": "數字上限",
    "choose": "選擇"
  }
}
</i18n>

<template>
  <div class="hello">
    <div class="locale-changer">
      <label><i class="world icon"/></label>
      <select v-model="$i18n.locale">
        <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">{{ lang}}</option>
      </select>
    </div>

    <h1>{{ $t('press') }} </h1>

    <div class="ui centered red card clickable" v-if="!flip" @click="flipCard()">
      <h1 class="ui header" v-if = "op.v == '+'">{{ n1 }} + {{ n2 }} = ?</h1>
      <h1 class="ui header" v-if = "op.v == '-'">{{ n1 }} - {{ n2 }} = ?</h1>
      <h1 class="ui header" v-if = "op.v == '*'">{{ n1 }} × {{ n2 }} = ?</h1>
    </div>

    <div class="ui centered orange fliped card clickable" v-else @click="flipCard()">
      <h1 class="ui blue header" v-if = "op.v == '+'">{{ n1 }} + {{ n2 }} = {{ n1 + n2 }}</h1>
      <h1 class="ui blue header"  v-if = "op.v == '-'">{{ n1 }} - {{ n2 }} = {{ n1 - n2 }}</h1>
      <h1 class="ui blue header"  v-if = "op.v == '*'">{{ n1 }} × {{ n2 }} = {{ n1 * n2 }}</h1>
    </div>


    <div class="ui form container no-print">
      <div class="inline fields">
        <div class="field">
          <div class="ui labeled input">
            <div class="ui label">{{ $t('min') }}</div>
            <input id="r" type="number" v-model="min" step = "5">
          </div>
        </div>
        <div class="field">
          <div class="ui labeled input">
            <div class="ui label">{{ $t('max') }}</div>
            <input id="r" type="number" v-model="range" step = "5" autofocus="">
          </div>
        </div>
      </div>
      <div class="inline fields">
        <label>{{ $t('choose') }}：</label>
        <div class="field" v-for="o in ops" v-bind:key="o.v">
          <div class="ui radio checkbox">
            <input type="radio" name="year" v-bind:value="o" v-model = "op">
            <label class="clickable" @click = "op = o">{{o.t}}</label>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data () {
    return {
      flip: false,
      op: {v: '*', t: '×'},
      ops: [
        {v: '+', t: '+'},
        {v: '-', t: '-'},
        {v: '*', t: '×'}
      ],
      n1: 0,
      n2: 0,
      min: 0,
      range: 10,
      locale: 'zh-TW',
      langs: ['zh-TW', 'en-US'] 
    }
  },
  watch: {
    locale (val) {
      this.$i18n.locale = val
    }
  },
  methods: {
    flipCard: function () {
      if (this.flip) {
        this.reset()
        this.flip = false
      } else {
        this.flip = true
      }
    },
    reset: function () {
      this.n1 = Math.floor(Math.random() * (this.range - this.min)) + Number(this.min)
      this.n2 = Math.floor(Math.random() * (this.range - this.min)) + Number(this.min)
    }
  },
  mounted () {
    this.reset()
    window.addEventListener('keydown', this.flipCard)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}

h1 {
  font-size: 4em !important;
  margin-left: -.3em !important;
}

.card {
  height: 50vh;
  width: auto;
  justify-content: center;
  background-color: #fcc !important;
  cursor: pointer;
}

/*
.card.orange {
  background-color: #fc9 !important;
}

.card.red {
  background-color: #fcc !important;
} */

.card.fliped .header {
}

.locale-changer {
  background-color: #f0f !important;
}

select {
  display: inline-block !important;
  width: 200px !important;
}

</style>
