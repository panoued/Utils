export default class HTMLElementUtil {

    static isVisible(el: HTMLElement){
        const visibleBottom = window.scrollY + document.documentElement.clientHeight,
        visibleTop = window.scrollY,
        centerY = el.offsetTop + (el.offsetHeight / 2);
        return centerY > visibleTop && centerY < visibleBottom;
    };

    static getImgWidthHeight(src: string, callBack: (width: number, height: number) => void){
        const img = new Image();
        img.src = src;
        img.onload = () => {
            const w = img.width, h = img.height;
            callBack(w, h);
        };
    };

}
