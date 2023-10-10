// const fs=require('fs')
// const getNotes = function () {
//     return 'Your notes...'
// }
// const addNote=function(title,body){
// const notes=loadNotes()
// const duplicateNotes=notes.filter(function(note){
// return note.title===title
// })
// if(duplicateNotes.length===0){
//     notes.push({
//         title:title,
//         body: body
//     })
//     saveNotes(notes)
//     console.log('New note added')
// }
// else{
// console.log('Note title taken')
// }
// }
// const saveNotes=function(notes){
//       const dataJson=JSON.stringify(notes)
//       fs.writeFileSync('notes.json',dataJson)
// }
// const loadNotes=function(){
//     try{
//         const dataBuffer=fs.readFileSync('notes.json')
//         const dataJson=dataBuffer.toString()
//         return JSON.parse(dataJson)
//     }
//     catch(e){
//       return []
//     }

// }
// module.exports = {
//     getNotes:getNotes,
//     addNote:addNote
// }
const chalk = require('chalk')
const fs = require('fs')

// const getNotes = ()=> {
//     return 'Your notes...'
// }

const addNote =  (title, body)=> {
    const notes = loadNotes()
    // const duplicateNotes = notes.filter((note) => note.title === title)
    const duplicateNote=notes.find((note)=>note.title===title)
    // const duplicateNotes=[]
    // notes.forEach(note=>{
    // if(note.title===title)
    // duplicateNotes.push(note)
     

    if (! duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    } else {
        console.log(chalk.red.inverse('Note title taken!'))
    }
}
const removeNote=(title)=>{
    const notes=loadNotes()
    const duplicateNotes=notes.filter((note)=> note.title !== title
    )

    if (notes.length> duplicateNotes.length) {
    console.log(chalk.green.inverse('Note removed'))
    saveNotes(duplicateNotes)   
     }
    else 
        console.log(chalk.red.inverse('no note found'))

}
const listNote=()=>{
    const notes=loadNotes()
    console.log(chalk.inverse('YOUR NOTES : '))
    const note=[]
    notes.forEach((note) => {
        console.log(note.title)
        
    });
        
    };

const readNote=(title)=>{
    const notes=loadNotes()
    const note=notes.find((note)=>note.title===title)
    if(note.title===title){
        console.log(chalk.inverse.bold(notes.title))
        console.log(notes.body)
    }
    else
    console.log(chalk.inverse.red('NOTE NOT FOUND!!!'))
}
const saveNotes = (notes)=> {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes =  ()=> {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

module.exports = {
    // getNotes: getNotes,
    addNote: addNote,
    removeNote:removeNote,
    listNote:listNote,
    readNote:readNote
}