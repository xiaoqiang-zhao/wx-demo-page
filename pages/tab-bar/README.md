# 系统 tabBar

> 系统提供了导航，吸顶和吸底可配置。

## 交互

左滑右滑。

## 功能

- tabBar 吸顶吸底配置；
- 图标配置；
- 2 -5 个图标。

## 二次开发

配置在 app.json 中，代码示例：

```json
"tabBar": {
    "backgroundColor": "#fff",
    "color": "#555",
    "selectedColor": "#f77738",
    "borderStyle": "white",
    "list": [
        {
            "pagePath": "pages/tab-bar/home",
            "iconPath": "images/home.png",
            "selectedIconPath": "images/home-selected.png",
            "text": "首页"
        },
        {
            "pagePath": "pages/tab-bar/mine",
            "iconPath": "images/mine.png",
            "selectedIconPath": "images/mine-selected.png",
            "text": "我的"
        }
    ]
}
```

官方文档：https://developers.weixin.qq.com/miniprogram/dev/framework/config.html

注意点：

切换 tab 中的页面时使用 `switchTab` 方法，切换非 tab 页面时使用 `navigateTo` 方法；

```js
// 这里需要非 tabBar 的页面的路径
wx.navigateTo({
    url: '/pages/no-tab-bar/index'
});

// 如果是 tabBar 的页面用这个
wx.switchTab({
    url: '/pages/tab-bar/index'
});
```

使用 `navigator` 组件的时候也要有区别

```html
<navigator class="navigator" url="/pages/no-tab-bar/index">非tabBar页面</navigator>
<navigator class="navigator" open-type="switchTab" url="/pages/tab-bar/home">tabBar页面</navigator>
```

如果页面被配置在了 tabBar 中，那么在此页面呈现的时候显示 tabBar，否则不显示；

图标必须是图片，字体图标不被配置支持。
