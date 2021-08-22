import React from 'react'
import './Widgets.css'
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
  } from "react-twitter-embed";
  import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
    return (
        <div className='widgets'>
     <div className="widgets__input">
         <SearchIcon className='widgets__searchIcon'/>
         <input type="text" placeholder='Search Twitter'/>
     </div>
     <div className="widgets__widgetContainer">
         <h2>What's happening</h2>
         <TwitterTweetEmbed tweetId={'1373200640109735942'} />
         <TwitterTimelineEmbed
          sourceType="profile"
          screenName="imVkohli"
          options={{ height: 400 }}
        />
         <TwitterShareButton
          url={"https://www.instagram.com/sakshamjaiswal1/"}
          options={{ text: "#welcome to Twitter", via: "TowardsStock" }}
        />
     </div>
        </div>
    )
}

export default Widgets
