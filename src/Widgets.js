import React from 'react'
import "./Widgets.css"
import {
    TwitterTimelineEmbed, 
    TwitterShareButton,
    TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon" />
                <input placeholder="Search Twitter" type="text" />
            </div>

            <div className="widgets__widgetContainer">
                <h2>What's Happending</h2>
                <TwitterTweetEmbed tweetId={"1373287664905039875"} />
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="elonmusk"
                    options={{ height: 400 }}
                />

                <TwitterShareButton
                    url={"https://www.instagram.com/f.senju/"}
                    options={{ text: "Follow This Guy", via: "Fahim_senju" }}
                />
            </div>
        </div>
    )
}

export default Widgets
