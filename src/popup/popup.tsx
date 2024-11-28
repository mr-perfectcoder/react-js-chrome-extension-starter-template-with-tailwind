import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Page1 from './components/Page1';
import Page2 from './components/Page2';

const Popup = () => {
    const [activePage, setActivePage] = useState('home')
    return (
        <div className="">

            {
                activePage === "home" &&

                <>
                    <Header setActivePage={setActivePage} />
                    <div className='h-[1px] w-full bg-gray-200' />
                    <Home />
                </>

            }

            {
                activePage === "page-1" && <Page1 setActivePage={setActivePage} />
            }

            {
                activePage === "page-2" && <Page2 setActivePage={setActivePage} />
            }
        </div>
    );
};
export default Popup;

