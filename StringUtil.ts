export default class StringUtil {

    static isNull(str: string){
        return !str || str.split(" ").join("").length === 0 || str.split("\n").join("").length === 0;
    };

}
