import React, { useEffect, useState } from 'react';

//Components
import Header from "./Header";

import Dashboard from "./Dashboard.js"


// import DisplayApps from "./displayApps.js"
// import DisplayRows from './displayRows.js'
import DisplayArticles from "./displayArticles.js"

import Sidebar from "./sidebar.js"
import FilterBar from './filterBar.js'
import Chains from "./Database.js";





export default function MainDashboard (){


    const [targetSearch, setTargetSearch] = useState("Cosmos Ecosystem");
    const [targetChainID, setTargetChainID] = useState(0);
    const [targetChain, setTargetChain] = useState(Chains[targetChainID]);


    useEffect(() => {
      setTargetChain(Chains[targetChainID]);
    }, [targetChainID]);



    useEffect(() => {
        const styleElement = document.createElement('style');
        styleElement.innerHTML = Object.entries(targetChain.cssSheet)
          .map(([selector, styles]) => {
            const cssProperties = Object.entries(styles)
              .map(([property, value]) => `${property}: ${value};`)
              .join(' ');
            return `${selector} { ${cssProperties} }`;
          })
          .join(' ');
      
        document.head.appendChild(styleElement);
      
        return () => {
          document.head.removeChild(styleElement);
        };
      }, [targetChain]);



      const chainTags = Chains.map(chain => ({
        id: chain.id,
        tags: chain.tags
      }));
    
      const tagIds = chainTags
        .map((chain) => {
          const matchingTags = chain.tags.filter((tag) =>
            tag.toLowerCase().includes(targetSearch.toLowerCase())
          );
          return matchingTags.map((tag) => chain.id);
        })
        .flat();



        const handleSearch = (value) => {
          setTargetSearch(value);
        };


    return(

        <div id="mainbody">

          <Header
            targetSearch={targetSearch}
            setTargetSearch={setTargetSearch}
            handleSearch={handleSearch}
          />


          <Dashboard
              chain={targetChain}
              setTargetSearch={setTargetSearch}
          />

          <Sidebar
            
          />

          <FilterBar/>



            <div className='explorebody'>


                <div className='articlediv'>

                    {tagIds.map((id) => (
                        <DisplayArticles
                            key={id}
                            chain={Chains.find((chain) => chain.id === id)}
                            setTargetChainID={setTargetChainID}
                        />)
                        )}

                </div>



            </div>




            {/* <DisplayApps
                chain={Chains[1]}
            /> */}
            {/* <DisplayRows/> */}




        </div>
    )
}