export default class StringUtil {

    static isNull(str: string){
        return !str || str.split(" ").join("").length === 0 || str.split("\n").join("").length === 0;
    };

    static toString(value: any){
        let res = '';
        if(value){
            if(typeof value == 'number'){
                res = String(value);
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

}
