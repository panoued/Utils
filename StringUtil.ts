export default class StringUtil {

    static isNull(str: string){
        return !str || str.split(" ").join("").length === 0 || str.split("\n").join("").length === 0;
    };

    static toString(value: any){
        let res = '';
        if(value){
            if(typeof value == 'number'){
                res = value.toString();
            }else if(typeof value == 'string'){
                res = value;
            };
        }else if(value === 0){
            res = '0';
        };
        return res;
    };

    static getFormatFileSizeString(fileSize: number, withB = false): string{
        let result: string = '';
        const b = withB ? 'B' : '';
        if(fileSize < 1024){
            result = fileSize + b;
        }else if(fileSize < Math.pow(1024, 2)){
            result = Math.round(fileSize / 1024) + 'K' + b;
        }else if(fileSize < Math.pow(1024, 3)){
            result = Math.round(fileSize / Math.pow(1024, 2)) + 'M' + b;
        }else if(fileSize < Math.pow(1024, 4)){
            result = Math.round(fileSize / Math.pow(1024, 3)) + 'G' + b;
        }else{
            result = Math.round(fileSize / Math.pow(1024, 4)) + 'T' + b;
        };
        return result;
    };

    static cutNumber(value: string, hasPoint = false){
        if(hasPoint){
            if(value.startsWith('.')){
                value = '0' + value;
            };
            value = value.replace(/[^\d.]/g,"");  //清除“数字”和“.”以外的字符
            value = value.replace(/\.{2,}/g,".");  //只保留第一个. 清除多余的
            value = value.replace(".","$#$").replace(/\./g,"").replace("$#$","."); 
            value = value.replace(/^(\-)*(\d+)\.(\d\d).*$/,'$1$2.$3');  //只能输入两个小数
            if(value.indexOf(".")< 0 && value !=""){ //如果没有小数点，首位不能为0
                value = parseFloat(value).toString();
            };
        }else{
            value = value.replace(/[^\d]/g,""); //清除“数字”以外的字符
        };
        return value;
    };

    static format(value: string){
        let i = value.length, res = '', sum = '', dot = '';
        if(value.indexOf('.') >= 0){
            i = value.indexOf(".");
            dot = value.substring(value.length,value.indexOf("."));  //取到小数部分搜索
            sum = sum || '0';
        };
        sum = value.substring(0, i).replace(/\B(?=(?:\d{3})+$)/g, ',');  //取到整数部分
        res = sum + dot;
        return res;
    };

    static cutNumberLetter(str: string, hasPoint = false){
        str = str && typeof str == 'string' ? str : '';
        if(hasPoint){
            return str.replace(/[^\w\.\/]/ig,'');
        }else{
            return str.replace(/[^\w\/]/ig,'');
        };
    };

}
