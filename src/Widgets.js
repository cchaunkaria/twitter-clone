import { Search } from '@mui/icons-material'
import React from 'react'
import './Widgets.css'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from 'react-twitter-embed'

function Widgets() {
  return (
    <div className='widgets'>
        <div className='widgets__input'>
            <Search className='widgets__searchIcon' />
            <input placeholder='Search Twitter' type="text" />
        </div>

        <div className='widgets__widgetContainer'>
            <h2>What's happening</h2>

            <TwitterTweetEmbed tweetId={"1619568801502339072"} />

            <TwitterTimelineEmbed
            sourceType='profile'
            screenName='Raptors'
            options={{height : 400}}
            />

            <TwitterShareButton
            url={"https://github.com/cchaunkaria"}
            options={{ text: "Check out my github!", via: "cj"}}
            />

        </div>
        </div>
  )
}

export default Widgets