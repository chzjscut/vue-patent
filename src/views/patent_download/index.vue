<template>
  <div class="content">
    <div class="operations-list">
      <a class="switch_on type_l  " data-type="l">
        <span class="barIcon" />列表模式<i class="iconfont" style="font-size: 12px;"></i>
      </a>
      <div class="fn-hide type_switch" style="display: none;">
        <a class="active Js_type type_l" data-type="l"><span class="barIcon" />列表模式</a>
        <a class="Js_type type_s" data-type="s"><span class="barIcon" />图文模式</a>
      </div>

      <a class="Js_export"><span class="barIcon" />著录项导出</a>
      <a class="Js_multi_export"><span class="barIcon" />批量下载</a>
      <a id="Js_patentFee_dropdown" class="Js_patentFee" style="position: relative;"><span class="barIcon" />专利年费</a>
    </div>
  </div>
</template>
<script>

</script>
<style scoped>
	.operations-list{
		height: 40px;
		position: relative;
	}
	.operations-list>a{
		padding: 0 4px;
	    border: 0;
	    font-size: 12px;
	    margin-right: 0;
	    color: #000;
	    cursor: pointer;
    	float: left;
    	height: 40px;
    	line-height: 40px;
	}
	.switch_on{
	    margin-left: 0;
	}
	.type_l{
    	position: relative;
	}
	.switch_on.type_l{
		margin-left: 20px;
	}
	.barIcon{
		width: 22px;
	    height: 20px;
	    background-image: url(~@/assets/images/toolbarIcon.png);
	    background-repeat: no-repeat;
	    margin-top: 11px;
	    display: inline-block;
	    float: left;
	}
	.switch_on .barIcon{
		background-position: -10px -40px;
	}
	.Js_export .barIcon{
		background-position: -185px -15px;
	}
	.Js_multi_export .barIcon {
	    background-position: -55px -40px;
	}
	.Js_patentFee .barIcon {
	    background-position: -185px -40px;
	}
	.iconfont{
		font-family: "iconfont";
	    font-size: 12px;
	    font-style: normal;
	    font-weight: bold;
	}
</style>
