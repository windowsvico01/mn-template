<!--
 * @Author: your name
 * @Date: 2020-09-15 13:24:48
 * @LastEditTime: 2020-09-21 11:32:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /h5_share/src/views/home/index.vue
-->
<template>
  <div class="wrapper">
    <drag-box ref="scrollBox">
      <div class="player_box" slot="top">
        <video-player ref="videoPlayer"></video-player>
        <live-in
          @showPop="handleShowPop"
          @showShare="handleShowShare"
          @reloadVideo="handleReloadVideo"
          v-if="showPlayer"
          :title="liveInfo.title"
        ></live-in>
        <live-end
          v-if="!showPlayer"
          :title="liveInfo.title"
        ></live-end>
      </div>
      <div class="bottom_box" slot="bottom" v-if="showPlayer">
        <top-aunt :cityId="liveInfo.cityId" :type="liveInfo.type === 1 ? 11 : 12"></top-aunt>
      </div>
    </drag-box>
    <m-popup ref="pop"></m-popup>
    <m-share ref="share"></m-share>
  </div>
</template>
<script>
import videoPlayer from '@/components/videoPlayer.vue';
import dragBox from '@/components/dragBox';
import topAunt from '@/components/topAunt';
import mPopup from '@/components/mPopup';
import mShare from '@/components/mShare';
import operateHeader from '@/components/operateHeader';
import liveIn from '@/components/liveIn';
import liveEnd from '@/components/liveEnd';
import {request} from '@/utils/request';
import { GetQueryValue } from '@/utils/index';
export default {
  components: {
    videoPlayer,
    operateHeader,
    liveIn,
    liveEnd,
    dragBox,
    topAunt,
    mPopup,
    mShare,
  },
  data() {
    return {
      liveId: 129
    }
  },
  computed: {
    liveInfo() {
      return this.$store.getters.getLiveInfo;
    },
    liveStatus() {
      return this.$store.getters.getLiveStatus;
    },
    playBackUrl() {
      return this.$store.getters.getPlayBackUrl;
    },
    showPlayer() {
      return (this.$store.getters.getStatus === 'playback' &&  this.$store.getters.getPlayBackUrl) || this.$store.getters.getLiveStatus === 2000;
    }
  },
  async mounted() {
    const status = GetQueryValue('status');
    const liveId = GetQueryValue('id');
    this.liveId = liveId;
    if (!liveId) return;
    await this.$store.dispatch('requestLiveInfo', { status, id: liveId });
    let liveRoomId = liveId;
    if (status) liveRoomId = this.liveInfo.liveRoomId;
    await this.$store.dispatch('requestAuntList', liveRoomId);
  },
  methods: {
    handleShowPop(type) {
      this.$refs.pop.showPop(type);
    },
    handleShowShare() {
      this.$refs.share.showShare();
    },
    scrollBottom() {
      this.$refs.scrollBox.countTouchEnd(true);
    },
    async handleReloadVideo() {
      const status = GetQueryValue('status');
      const liveId = GetQueryValue('id');
      await this.$store.dispatch('requestLiveInfo', { status, id: liveId }); // 重新拉流
      this.$store.commit('setAnchorLeave', false); // 切换直播状态
      this.$refs.videoPlayer.initPlayer(); // 重新渲染播放器
    }
  }
}
</script>

<style lang="scss" scoped>
.player_box {
  position: relative;
  padding-top: 0.001px;
  background: #fccfd7;
}
.bottom_box {
  width: 100%;
  height: auto;
  background: #fff;

}
</style>