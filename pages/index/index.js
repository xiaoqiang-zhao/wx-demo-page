/**
 * @file 首页
 * @author 小强赵
 */
const app = getApp();
let animation;
Page({
    data: {},
    onLoad() {
        wx.navigateTo({
            url: '/pages/slide-card/index'
        });
    }
});
