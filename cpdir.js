#!/usr/bin/env node
(()=>{
const cpt =["CCCCCCCCCCCCCCC",
			"CCCCCCCCCCCCCCC",
			"CCCCCC",
			"CCCC",
			"CC",
			"CCCC",
			"CCCCCC",
			"CCCCCCCCCCCCCCC",
			"CCCCCCCCCCCCCCC"];
for(let vge of cpt){
	console.log(vge);/*ICON*/
}
console.log(`The Copy Tool\n<c>Sharkbyteprojects`);
const paths   = require("path");
const fs     = require("fs");
function cpydir(dir, target){
    try{
        const stati=fs.statSync(dir);
        if(stati.isDirectory()){
			process.stdout.write(`Copy Dir "${dir}" to "${target}"`);
            const bgd=paths.parse(paths.resolve(dir)).base;
			const tgadir=paths.resolve(target);
			if(fs.existsSync(tgadir)){
            fs.mkdirSync(tgadir);//MAKE NEW DIR
			}
            const dirs = fs.readdirSync(dir);
            for(let cur of dirs){
                cpydir(paths.resolve(dir, cur), paths.resolve(target, cur));
            }
        }else{
			process.stdout.write(`Copy File "${dir}" to "${target}"`);
            fs.copyFileSync(dir,target);
        }
		process.stdout.write(`...Complete\n"`);
    }catch(e){
        console.error(`ERR in ${dir} to ${target}`);
    }
}
const ot=process.title;
process.title="cpy-t";
const dir=process.argv[2];
const target=process.argv[3];
if(dir&&target){
	cpydir(dir, target);
	console.log("-----------------------\nCOMPLETE, ALL FILES WHERE COPY");
}else{
	console.error("usage:\n\tcpy dir target\n\t target must be empty");
}
process.title=ot;
})();
