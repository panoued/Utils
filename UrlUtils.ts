export function urlConcat(root: string, path: string){
    if(root[root.length - 1] == '/'){
        root = root.slice(0,-1);
    };
    if(path[0] == '/'){
        path = path.slice(1);
    };
    return root + '/' + path;
};
