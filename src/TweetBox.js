import { Avatar, Button } from '@material-ui/core';
import React, { useState } from 'react'
import "./TweetBox.css";
import db from "./firebase"

function TweetBox() {

    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = (e) => {
        e.preventDefault();
        
        db.collection('posts').add({
            displayName: 'Senju',
            username: 'senjufy',
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: 
                "https://www.kindpng.com/picc/m/159-1595848_python-logo-png-transparent-background-python-logo-png.png",

        });

        setTweetMessage("");
        setTweetImage("");
    }

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://www.kindpng.com/picc/m/159-1595848_python-logo-png-transparent-background-python-logo-png.png"/>
                    <input 
                        onChange={(e) => setTweetMessage(e.target.value)}
                        value={tweetMessage} 
                        placeholder="What's Happening" 
                        type="text" />
                    
                </div>
                <input 
                    value={tweetImage}
                    onChange={(e) => setTweetImage(e.target.value)}
                    className="tweetBox__imageInput"
                    placeholder="Enter Image/GIF URL" 
                    type="text" 
                />

                <Button 
                    className="tweetBox__tweetButton"
                    onClick={sendTweet}
                    type="submit">
                    Tweet
                </Button>
            </form>
            
        </div>
    )
}

export default TweetBox
