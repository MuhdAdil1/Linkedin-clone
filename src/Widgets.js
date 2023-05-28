import React from 'react'
import './Widgets.css'
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {

  const newsArticle = (heading, Subtitle) => (
    <div className="widgets_article">
        <div className="widgets_articleleft">
        <FiberManualRecordIcon/>
        </div>
        <div className="widgets_articleright">
            <h4>{heading}</h4>
            <p>{Subtitle}</p>
        </div>
    </div>
  )
  return (
    <div className='widgets'>
        <div className="widgets_header">
            <h2>Linkedin News</h2>
            <InfoIcon />
        </div>
        {newsArticle("Coronavirus Update",'top news pretty bad')}
        {newsArticle("bitcoin crashed",'crashed by 1 million usd')}
        {newsArticle("Elon musk to new heights",'he turned to be no 1 richest man in the world')}
        {newsArticle("We are back",'huy damn dude')}
        {newsArticle("Sahyadri to be on fire",'College was on fire yesterday.And its not a reason for them to give holiday')}
    </div>
  )
}

export default Widgets