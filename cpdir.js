#!/usr/bin/env node
console.log(`The Copy Tool\n<c>Sharkbyteprojects`);
const paths   = require("path");
const fs     = require("fs");
function cpydir(dir, target, fis){
    try{
        const stati=fs.statSync(dir);
        if(stati.isDirectory()){
            if(!fis){
            const bgd=paths.parse(paths.resolve(dir)).base;
            console.log(paths.resolve(target));
            fs.mkdirSync(paths.resolve(target));
            }
            const dirs = fs.readdirSync(dir);
            for(let cur of dirs){
                cpydir(paths.resolve(dir, cur), paths.resolve(target, cur), false);
            }
        }else{
            fs.copyFileSync(dir,target);
        }
    }catch(e){
        console.error(`ERR in ${dir} to ${target}`);
    }
}
const dir=process.argv[2];
const target=process.argv[3];
cpydir(dir, target, true);
console.log("-----------------------\nCOMPLETE");