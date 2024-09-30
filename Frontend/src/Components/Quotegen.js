import React, { useState } from 'react'

function Quotegen() {
    const [quote,setquote]=useState({
        text:'Hello good morning',
        author:"Akash"
    })
    let arr = [
            {
            "text": "Genius is one percent inspiration and ninety-nine percent perspiration.",
            "author": "Thomas Edison"
            },
            {
            "text": "You can observe a lot just by watching.",
            "author": "Yogi Berra"
            },
            {
            "text": "A house divided against itself cannot stand.",
            "author": "Abraham Lincoln"
            },
            {
            "text": "Difficulties increase the nearer we get to the goal.",
            "author": "Johann Wolfgang von Goethe"
            },
            {
            "text": "Fate is in your hands and no one elses",
            "author": "Byron Pulsifer"
            },
            {
            "text": "Be the chief but never the lord.",
            "author": "Lao Tzu"
            },
            {
            "text": "Nothing happens unless first we dream.",
            "author": "Carl Sandburg"
            },
            {
            "text": "Well begun is half done.",
            "author": "Aristotle"
            },
            {
            "text": "Life is a learning experience, only if you learn.",
            "author": "Yogi Berra"
            },
            {
            "text": "Self-complacency is fatal to progress.",
            "author": "Margaret Sangster"
            },
            {
            "text": "Peace comes from within. Do not seek it without.",
            "author": "Buddha"
            },
            {
            "text": "What you give is what you get.",
            "author": "Byron Pulsifer"
            },
            {
            "text": "We can only learn to love by loving.",
            "author": "Iris Murdoch"
            },
            {
            "text": "Life is change. Growth is optional. Choose wisely.",
            "author": "Karen Clark"
            },
            {
            "text": "You'll see it when you believe it.",
            "author": "Wayne Dyer"
            },
            {
            "text": "Today is the tomorrow we worried about yesterday.",
            "author": "Akash"
            }
    ]
    var a="jhs";
    const quoteGen=()=>{
        a=arr[Math.floor(Math.random()*arr.length)]
    }
    window.onload = quoteGen();
  return (
    <>
     <div className="quoteContainer">
        <div className="quoteText">
           " {a.text}  "
            </div>    
        <div className="quoteAuthor">
            - {a.author}
        </div>
    </div> 
    </>
  )
}

export default Quotegen
