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

    static innerScript(element: HTMLElement | string, script: string){ // DOM中执行script
        let container: HTMLElement = null;
        if(typeof element == 'object'){
            container = element;
        }else if(typeof element == 'string'){
            container = document.getElementById(element);
        };
        const div = document.createElement('div');
        div.innerHTML = script;
        const children = div.children;
        for (let i = 0; i < children.length; i++) {
            const el = children[i];
            const nodeName = el.nodeName;
            const tag = document.createElement(nodeName);
            const attrNames = el.getAttributeNames();
            attrNames.forEach(attrName => {
                const attrValue = el.getAttribute(attrName);
                tag.setAttribute(attrName,attrValue);
            });
            container.appendChild(tag);
        };
    };

    static clickElementSelf(e: any, classOrId: string){ // 判断点击位置是否在指定DOM元素中
        let flag = true;
        let path = e.path || (e.composedPath && e.composedPath()) || [];
        for (let i = 0; i < path.length; i++) {
            const el = path[i];
            if((el && el.id == classOrId) || (el.className && typeof el.className == 'string' && el.className.includes(classOrId))){
                flag = false;
                break;
            };
        };
        return flag;
    };

    static elementParabolaAnimation(el: Element, endX: number, endY: number){
        setTimeout(() => {
            const sx = el.getBoundingClientRect().x, sy = el.getBoundingClientRect().y;
            const div = el.cloneNode(true) as HTMLElement;
            div.style.position = 'fixed';
            div.style.left = sx + 'px';
            div.style.top = sy + 'px';
            div.style.zIndex = '9999';
            div.style.transition = 'left 0s, top 0s';
            div.style.opacity = '1';
            el.parentElement.appendChild(div);
            setTimeout(() => {
                div.style.transition = 'left 0.5s linear, top 0.5s ease-in, opacity 0.1s ease-in';
                div.style.left = endX + 'px';
                div.style.top = endY + 'px';
            }, 20);
            setTimeout(() => {
                div.style.opacity = '0.5';
            }, 300);
            setTimeout(() => {
                div.style.opacity = '0';
            }, 400);
            setTimeout(() => {
                el.parentElement.removeChild(div);
            }, 650);
        }, 10);
    };

}
