import React from 'react'

import SearchDropList from './searchDroplist';

//icons
import rowIcon from "./imagelogos/2-row-icon.svg"
import appIcon from "./imagelogos/four-squares-icon.svg"
import articleIcon from "./imagelogos/article-icon.svg"

//css
import './filterbar.css';





const pagesnav = "< 1/1 >"



export default function FilterBar (){


    return(      

    <div id='filterbardiv'>

        <div id='filterbar'>

            <div className='filtering'>

                <div className='displaysetting'>

                    <div className='displaytype rowicondiv'>
                        <img
                            src={rowIcon}
                            alt='display row icon'
                            className="rowicon displaytypeicon"
                        />
                    </div>


                    <div className='displaytype appicondiv'>
                        <img
                            src={appIcon}
                            alt='display app icon'
                            className="appicon displaytypeicon"
                        />
                    </div>
                    <div className='displaytype articleicondiv'>
                        <img
                            src={articleIcon}
                            alt='display Articles icon'
                            className="articleicon displaytypeicon"
                        />
                    </div>

                </div>

                <div className='pagenav'>
                    <p> {pagesnav} </p>
                </div>

                <SearchDropList
                    // options={CategoriesOptions}
                    placeholder="Rows"
                    // props={selectedOption}
                    // handleChange={handleChange}
                />

            </div>

            <div className='navigation'>

                <SearchDropList
                    // options={CategoriesOptions}
                    placeholder="Ecosystem"
                    // props={selectedOption}
                    // handleChange={handleChange}
                />

                <SearchDropList
                    // options={CategoriesOptions}
                    placeholder="Categories"
                    // props={selectedOption}
                    // handleChange={handleChange}
                />

                <SearchDropList
                    // options={CategoriesOptions}
                    placeholder="Filter"
                    // props={selectedOption}
                    // handleChange={handleChange}
                />

            </div>

        </div>

    </div>



    )
}