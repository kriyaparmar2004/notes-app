// const fs=require('node:fs')
// fs.writeFileSync('notes.txt','kriya')
// fs.appendFileSync('notes.txt',' is the best')
// const validator=require('validator')
const chalk= require('chalk')
const notes=require('./notes')
const yargs=require('yargs')
// const msg=getNotes()
// console.log(msg)
// // console.log(validator.isURL('kriyaparmar2004@gmail'))
// const greenMsg=chalk.green('Success!!')
// console.log(greenMsg)
//  console.log(process.argv)
// const command=process.argv[2]
// if(command==='add')
// console.log('vfs s')
                      //Customize yargs version
yargs.version('1.1.0')
// Create add command
yargs.command({
    command:'add',
    describe:'add a new note',
    builder:{
            title:{
                describe:'note title',
                demandOption:true,
                type:'string'
            },
            body:{
                describe:'description ',
                demandOption:true,
                type:'string'
              }
    },
    handler(argv){
       notes.addNote(argv.title,argv.body)
    }
})
//remove command
yargs.command({
    command:'remove',
    describe:'remove a note',
    builder:{
        title:{
            describe:'note title',
            demandOption:true,
            type:'string'
        },
        
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})
yargs.command({
    command:'read',
    describe:'read a note',
    builder:{
        title:{
            describe:'note title',
            demandOption:true,
            type:'string'
        },
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})
yargs.command({
    command:'list',
   describe:'list a note',
   handler(){
    notes.listNote()
   } 
})

   yargs.command({
command:'read',
describe:'reading a note',
handler(){
    console.log('reading a note')
}
   })

console.log(yargs.argv)
