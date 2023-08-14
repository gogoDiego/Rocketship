import React from 'react'



import PlusIcon from "./imagelogos/plus-icon.svg"


import "./article.css"




export default function DisplayArticles (props){


    return(

    <div className='article'>

        <div className="articleImgDiv">
            <img src={props.chain.coverPhoto} className='articleImage' alt='coverphoto'/>
        </div>

        <div className='articleContents'>

                <div className='articleTypefaceLogo'>
                    <img src={props.chain.logoTypeface} alt='articleTypeface' />
                </div>

                <p className='articleDescription'> {props.chain.articleDescription} </p>

                <div className='articleButtonDiv'>
                    <button className='articleButton'>
                        <p> Launch </p>
                    </button>
                    <button className='articleButton' onClick={() => props.setTargetChainID(props.chain.id)} >
                        <p> Explore </p>
                    </button>

                    <img src={PlusIcon} alt='plus icon' className="PlusIcon"/>
                    
                </div>


        </div>

    </div>


    )
}