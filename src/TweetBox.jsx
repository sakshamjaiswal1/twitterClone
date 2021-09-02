import React, { useState } from "react";
import './Tweetbox.css' 
import { Avatar, Button } from "@material-ui/core";
import TwitterLogo from './TwitterLogo.png'
import db from "./firebase";
import firebase from 'firebase'


function TweetBox() {
const [tweetMessage,setTweetMessage]=useState('')
const [tweetImage,setTweetImage]=useState('')

const sendTweet = (e)=>{
e.preventDefault();
db.collection("PostSort").add({
    displayName: "Saksham Jaiswal",
    username: "sakshamjaiswal1",
    verified: true,
    text: tweetMessage,
    image: tweetImage,
    avatar:TwitterLogo,
    timestamp:firebase.firestore.FieldValue.serverTimestamp()
     ,
  });
  setTweetImage('')
  setTweetMessage('')
}

    return (
        <div className='tweetBox'>
           <form action="">
               <div className="tweetBox__input">
               <Avatar src={TwitterLogo} />
<input type="text"placeholder="What's happening?"
 value={tweetMessage}
 onChange={(e) => setTweetMessage(e.target.value)}
/>

               </div>
<input type="text"  className='tweetBox__imageInput'  placeholder="  Enter image URL" 
    value={tweetImage}
    onChange={(e) => setTweetImage(e.target.value)}
  />
               <Button onClick={sendTweet} type='submit' className='tweetBox__tweetButton'>Tweet</Button>
           </form>
        </div>
    )
}

export default TweetBox
