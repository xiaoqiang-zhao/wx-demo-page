# 左滑右滑卡片

> 在做一些选择的时候左右滑动卡片是一种很好的交互，给用户的选择项较少，左滑一种选择右滑一种选择，必须左滑喜欢右滑不喜欢，左滑通过右滑不通过。

## 交互

左滑右滑。

## 功能

- 滑动动画；
- 多张卡重叠 3D 效果；
- 滑动结果回调；
- 卡片全部滑完后“见底”提示。

## 二次开发

动画采用的是微信小程序提供的 [Animation](https://developers.weixin.qq.com/miniprogram/dev/api/api-animation.html) 对象，可以做微调。

```js
wx.createAnimation({
    duration: 4,
    timingFunction: 'ease',
    delay: 0
});
```

多张卡的重叠 3D 效果通过结构伪类选择器和CSS3 的 scale 缩放实现，这里通过 2D 变换实现了视觉 3D 的效果。

```css
.card:nth-last-of-type(2) {
    transform: scale(0.9, 1);
    top: 5px;
}
```

滑动结果可以回调，在 `touchend` 方法中有 `translate.type` 结果值，含义如下：

- 0: 左右滑动不超过 30px;
- 1: 左滑动超过 30px;
- 2: 右滑动超过 30px。

为了禁止滑动时整个页面上下和左右移动，使用和绝对定位来固定卡片：

```css
.container {
    position: fixed;
}
```
