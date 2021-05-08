import React from 'react';
import {useState,useContext} from 'react';
import {ThemeContext} from './App';

function Content() {
    const context = useContext(ThemeContext);  // change this
    return (
        <section>
             <span>Current theme: {context.theme}</span>
             <button onClick={context.switchTheme}>Switch Theme</button>
        </section>
    );
}

export default Content;
