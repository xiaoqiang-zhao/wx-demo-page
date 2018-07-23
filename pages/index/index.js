/**
 * @file 首页
 * @author 小强赵
 */

const app = getApp();

Page({
    data: {},
    onLoad() {
        wx.navigateTo({
            url: '/pages/slide-card/index'
        });
    }
});
