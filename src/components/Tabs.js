import React, { useState } from 'react';
import "../App.css";

const Tabs = () => {
    // State Variables Here
    let [handleState, setHandleState] = useState(1);
    let toggleTab = (index) => {
        setHandleState(index);
    }

    return (
        <div className="container">
            <div className="allTabs">
                <div className={handleState === 1 ? "tabs activeTabs" : "tabs"} onClick={() => toggleTab(1)}>Tab 1</div>
                <div className={handleState === 2 ? "tabs activeTabs" : "tabs"} onClick={() => toggleTab(2)}>Tab 2</div>
                <div className={handleState === 3 ? "tabs activeTabs" : "tabs"} onClick={() => toggleTab(3)}>Tab 3</div>
            </div>

            <div className="contentBlock">
                <div className={handleState === 1 ? "content currentContent" : "content"}>
                    <h2>Content 1</h2>
                    <hr/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aspernatur beatae distinctio earum excepturi harum iure modi nemo odio officia omnis pariatur, perspiciatis possimus quidem ratione ullam veniam veritatis voluptatem! Unoooo!</p>
                </div>

                <div className={handleState === 2 ? "content currentContent" : "content"}>
                    <h2>Content 2</h2>
                    <hr/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aspernatur beatae distinctio earum excepturi harum iure modi nemo odio officia omnis pariatur, perspiciatis possimus quidem ratione ullam veniam veritatis voluptatem! This is two!</p>
                </div>

                <div className={handleState === 3 ? "content currentContent" : "content"}>
                    <h2>Content 3 </h2>
                    <hr/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aspernatur beatae distinctio earum excepturi harum iure modi nemo odio officia omnis pariatur, perspiciatis possimus quidem ratione ullam veniam veritatis voluptatem! more words here! </p>
                </div>
            </div>
        </div>
    );
}

export default Tabs;