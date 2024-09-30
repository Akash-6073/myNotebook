const express =require('express')
const router=express.Router();
const fetchUser=require('../middleware/fetchUser')
const Notes=require('../Models/Notes')
const { body, validationResult } = require('express-validator');  // express validator used to validate the eamils , name , passswords entered by user


// Route 1 : Fetch all the notes , get : "/api/notes/fetchAllNotes"
router.get('/fetchAllNotes',fetchUser,async (req,res)=>{
    try {
        const notes=await Notes.find({user:req.user.id})  // this will find the user with logged in user id and provide notes to that user
        res.json(notes)
    } catch (error) {
        res.status(404).send({error:"Internal Error"})
        console.log(error.message)        
    }
})

// Route 2 : Add a new note , get : "/api/notes/getAllNotes"
router.post('/addNote',fetchUser,[
    body('title','Enter a valid Email').exists(),
    body('description',"desc must be 5 characters").exists(),
],async (req,res)=>{
    try {
        const {title,description,tag} = req.body;
        const result = validationResult(req);
        if (!result.isEmpty()) {
           return res.status(400).json({ errors: result.array() });   // if any error occurs this will return 
        }
        const note = new Notes({
            title,description,tag,user:req.user.id
        })
        const savedNotes=await note.save();
        res.json(savedNotes);
    } catch (error) {
        res.status(404).send({error:"Internal Error"})
        console.log(error.message)
    }

})

// Route 3 : Update Notes   ,  get :"/api/notes/updateNotes"

router.put('/updateNotes/:id',fetchUser,async (req,res)=>{
    const{title,description,tag}=req.body;
    // Creating a New note object
    try{

        const newNote={};
        if(title)
        {
            newNote.title=title;
        }
        if(description)
        {
            newNote.description=description;
        }
        if(tag)
        {
            newNote.tag=tag;
        }
    
        // Find the note to be updated
        let note = await Notes.findById(req.params.id);
        if(!note)
        {
            return res.status(404).send("Not found")
        }
        if(note.user.toString()!==req.user.id)
        {
            return res.status(401).send("Not allowed to make changes")
        }
        note= await   Notes.findByIdAndUpdate(req.params.id,{$set:newNote},{new:true})
        res.json({note})
    } catch(error){
        res.status(404).send({error:"Internal Error"})
        console.log(error.message)
    }
})

// Route 4 : Delete Notes   ,  get :"/api/notes/deleteNotes"

router.delete('/deleteNotes/:id',fetchUser,async(req,res)=>{
    const{title,description,tag}=req.body;
    //  if you want to delete , you need to check the id of the user that should match
    try {
        
        let note = await Notes.findById(req.params.id);
        if(!note)
        {
            return res.status(404).send("User Not found")
        }
        if(note.user.toString()!==req.user.id)
        {
            return res.status(401).send("Not Allowed")
        }
        note =  await Notes.findByIdAndDelete(req.params.id)
        res.json({Success : "Your note has been deleted",note:note})
    } catch (error) {
        res.status(404).send({error:"Internal Error"})
        console.log(error.message)
    }
})

module.exports=router;

// req.params.id,{$set:newNote},{new:true}