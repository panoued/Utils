export default class HTMLElementUtil {

    static isVisible(el: HTMLElement){ // 判断DOM是否出现在屏幕中
        const visibleBottom = window.scrollY + document.documentElement.clientHeight,
        visibleTop = window.scrollY,
        centerY = el.offsetTop + (el.offsetHeight / 2);
        return centerY > visibleTop && centerY < visibleBottom;
    };

    static getImgWidthHeight(src: string, callBack: (width: number, height: number) => void){ // 根据src获取图片宽高
        const img = new Image();
        img.src = src;
        img.onload = () => {
            const w = img.width, h = img.height;
            callBack(w, h);
        };
    };

}
