// postcss
module.exports = {
  plugins: [
    // 自动添加前缀
    require('autoprefixer')({
      browers: ['last 2 versions', 'ie >= 8', '> 5% in CN']
    }),
    // 兼容flex至ie10下
    require('postcss-flexibility'),
    // 触发浏览器更好渲染, 在autoprefixer之前
    require('postcss-will-change'),
    // 为rgba做兼容
    require('postcss-color-rgba-fallback'),
    // 兼容ie滤镜
    require('postcss-opacity'),
    // 伪元素
    require('postcss-pseudoelements'),
    // 按规则排序css属性
    require('postcss-sorting')({
      "properties-order": [
        "position",
        "top",
        "left",
        "right",
        "bottom",
        "z-index",
        "display",
        "float",
        "margin",
        "padding",
        "width",
        "height",
        "text-align",
        "line-height",
        "font-size",
        "color",
        "border",
        "background",
        "animation",
        "transform",
        "transition"
      ]
    })
  ]
};