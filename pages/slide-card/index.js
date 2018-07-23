/**
 * @file 滑动卡片
 * @author 小强赵
 */

let animation;
Page({
    data: {
        slideList: [
            {
                id: 'aa11',
                text: '卡片一',
                // 为动画预留
                animationData: {}
            },
            {
                id: 'bb22',
                text: '卡片二',
                animationData: {}
            },
            {
                id: 'cc33',
                text: '卡片三',
                animationData: {}
            },
            {
                id: 'dd44',
                text: '左滑<-- 卡片四 -->右滑',
                animationData: {}
            }
        ],
        slideStardEvent: {}
    },
    onLoad() {},

    /**
     * 滑动开始
     *
     * @param {Object} e 事件对象
     */
    touchstart(e) {
        this.setData({
            slideStardEvent: e
        });
        animation = wx.createAnimation({
            duration: 4,
            timingFunction: 'ease',
            delay: 0
        });
    },

    /**
     * 滑动中，通过计算滑动距离来设置卡片位置达到动画效果
     *
     * @param {Object} e 事件对象
     */
    touchmove(e) {
        const translate = this.getTranslate(e);

        // 左右滑动时给点倾斜角度
        animation.rotate(translate.x * 0.09).translate(translate.x, translate.y).step();

        this.setData({
            [`slideList[${this.data.slideList.length - 1}].animationData`]: animation.export()
        });
    },

    /**
     * 滑动结束
     *
     * @param {Object} e 事件对象
     */
    touchend(e) {
        const translate = this.getTranslate(e);
        let rotate;
        if (!translate.type) {
            translate.y = 0;
            rotate = 0;
        }
        else {
            translate.x = 400;
        }
        translate.x = [0, 400, -400][translate.type];
        animation.rotate(rotate).translate(translate.x, translate.y).step({
            duration: 300
        });

        this.setData({
            [`slideList[${this.data.slideList.length - 1}].animationData`]: animation.export()
        });
        this.data.slideList.pop();
        setTimeout(() => {
            this.setData({
                slideList: this.data.slideList
            });
        }, 300);
    },

    /**
     * 封装滑动事件产生的偏移数据
     *
     * @param {Object} e 事件对象
     * @return {Object} 偏移数据
     */
    getTranslate(e) {
        let translateX = e.changedTouches[0].clientX - this.data.slideStardEvent.changedTouches[0].clientX;
        let translateY = e.changedTouches[0].clientY - this.data.slideStardEvent.changedTouches[0].clientY;

        let type = 0;
        // 右滑大于零，左滑小于零
        if (translateX > 10) {
            type = 1;
        }
        else if (translateX < -10) {
            type = 2;
        }
        else {
            type = 0;
        }

        return {
            x: translateX,
            y: translateY,
            type
        };
    }
});
