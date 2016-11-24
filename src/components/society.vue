<template>
  <div id="society" class="home-content view-container">
    <div class="mainContent pane" >
      2222222222222222222222
    </div>
  </div>
</template>
<script type="text/javascript">
  import { mapActions } from 'vuex'
  export default{
    created () {
      this.changeFooterStatus(false)
    },
    methods: {
      ...mapActions(['changeFooterStatus'])
    }
  }
</script>
