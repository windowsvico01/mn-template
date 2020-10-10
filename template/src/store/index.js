import Vue from 'vue'
import Vuex from 'vuex'
import { request } from '@/utils/request';
import { reqUrl } from '@/config';
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    status: '', // playback 回放
    liveId: 129,
    liveStatus: 1000,
    liveInfo: {
      title: '',
    },
    groupId: '',
    streamUrl: '',
    playBackUrl: '',
    auntList: [],
    videoPlay: false,
    groupNum: 0,
    initWxConfig: false,
    anchorLeave: false, // 主播离开装填
  },
  getters: {
    getLiveInfo(state) {
      return state.liveInfo;
    },
    getStreamUrl(state) {
      return state.streamUrl
    },
    getLiveId(state) {
      return state.liveId;
    },
    getLiveStatus(state) {
      return state.liveStatus;
    },
    getAuntList(state) {
      return state.auntList;
    },
    getVideoPlay(state) {
      return state.videoPlay;
    },
    getGroupId(state) {
      return state.groupId;
    },
    getGroupNum(state) {
      return state.groupNum;
    },
    getStatus(state) {
      return state.status;
    },
    getPlayBackUrl(state) {
      return state.playBackUrl;
    },
    getWxConfig(state) {
      return state.initWxConfig;
    },
    getAnchorLeave(state) {
      return state.anchorLeave;
    }
    
  },
  mutations: {
    setLiveInfo(state, info) {
      const { status } = info;
      state.liveInfo = info;
      state.groupId = info.imGroupId;
      state.liveStatus = status;
      state.liveId = info.id;
    },
    setLiveStatus(state, status) {
      state.liveStatus = status;
    },
    setAuntList(state, list) {
      state.auntList = list;
    },
    setStreamUrl(state, stream) {
      state.streamUrl = stream;
    },
    setVideoPlay(state, status) {
      state.videoPlay = status
    },
    setGroupNum(state, num) {
      state.groupNum = num
    },
    setStatus(state, type) {
      state.status = type;
    },
    setPlayBackUrl(state, url) {
      state.playBackUrl = url;
    },
    setInitWxConfig(state) {
      state.initWxConfig = true;
    },
    setAnchorLeave(state, status) {
      state.anchorLeave = status;
    }
  },
  actions: {
    async requestLiveInfo({ commit }, params) {
      const { status, id } = params;
      if (status === 'playback') { // 回放
        commit('setStatus', status);
        const info = await request('get', `${reqUrl.playBackInfo}/${id}`);
        if (info) commit('setLiveInfo', info);
        if (info && info.uploadFileUrl) commit('setPlayBackUrl', info.uploadFileUrl);
        if (!info) commit('setLiveStatus', 9999);
      } else { // 直播中或者未开始
        const info = await request('get', `${reqUrl.liveInfo}/${id}`);
        if (info) commit('setLiveInfo', info);
        if (info.streamId) {
          const stream = await request('get', `${reqUrl.streamUrl}/${info.streamId}/M3U8`);
          if (stream) commit('setStreamUrl', stream);
        } 
      }
    },
    async requestAuntList({ commit }, id) {
      const data = await request('post', `${reqUrl.allAuntList}/${id}`);
      if (data) commit('setAuntList', data);      
    }
  }

})
export default store;
