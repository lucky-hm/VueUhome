<template>
  <div id="life" class="home-content view-container">
    <div class="mainContent pane" >
      <div class="life-img life-img1">
        <div class="img"></div>
        <ul>
          <li><a href="#"><img src="static/img/life/2_04.png"></a></li>
        </ul>
      </div>
      <div class="life-img life-img2">
        <div class="img"></div>
        <ul>
          <li><a href="#"><img src="static/img/life/2_04.png"></a></li>
        </ul>
      </div>
      <div class="life-img life-img3">
        <div class="img"></div>
        <ul>
          <li><a href="#" class=""><img src="static/img/life/2_04.png"></a></li>
        </ul>
      </div>
      <div class="life-img life-img4">
        <div class="img"></div>
        <ul>
          <li><a href="#" class=""><img src="static/img/life/2_04.png"></a></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
  import { mapActions } from 'vuex'
  export default{
    created () {
      this.changeFooterStatus(false)
      this.changeHeaderStatus(true)
    },
    methods: {
      ...mapActions(['changeFooterStatus', 'changeHeaderStatus'])
    }
  }
</script>
