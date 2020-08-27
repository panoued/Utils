export function getGuid_1(){
    function g1() {
        return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
    return (g1()+g1()+"-"+g1()+"-"+g1()+"-"+g1()+"-"+g1()+g1()+g1());
};
