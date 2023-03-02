import '../../App.css';
import { useState } from "react"
import { Box } from './Box';
import { Github } from "../organisms/github";
import '../css/template-css/Header.css';
import { ToggleButton } from '../organisms/toggle-button';

export const Header = (props) => {
    const [tab, setTab] = useState("All");
    const onClickAll = () => {
        // alert("AllClick")
        setTab("All");
    }
    const onClickAbout = () => {
        // alert("AboutClick");
        setTab("About");
    }
    const onClickWorks = () => {
        // alert("WorksClick");
        setTab("Works");
    }
    if(tab === "All"){
    return(
        <>
        <header>
            <p className='KAZUMA'>KAZUMA🤟</p>
            <div className='headerItem'>
                <div className='p' id='p1' onClick={onClickAll}>All</div>
                <div className='p' id='p2' onClick={onClickAbout}>About</div>
                <div className='p' id='p2' onClick={onClickWorks}>Works</div>
            </div>
            <div className='ToggleButton'>
            <ToggleButton />
            </div>
        </header>
        <Box tab={tab}/>
        </>
    )
    } else if(tab === "About"){
        return(
        <>
        <header>
            <p className='KAZUMA'>KAZUMA👨‍🦱</p>
            <div className='headerItem'>
                <div className='p' id='p2' onClick={onClickAll}>All</div>
                <div className='p' id='p1' onClick={onClickAbout}>About</div>
                <div className='p' id='p2' onClick={onClickWorks}>Works</div>
            </div>
            <div className='ToggleButton'>
            <ToggleButton />
            </div>
        </header>
        <Box tab={tab}/>
        </>
        )
    } else if(tab === "Works"){
        return(
        <>
        <header>
            <p className='KAZUMA'>KAZUMA🛠️</p>
            <div className='headerItem'>
                <div className='p' id='p2' onClick={onClickAll}>All</div>
                <div className='p' id='p2' onClick={onClickAbout}>About</div>
                <div className='p' id='p1' onClick={onClickWorks}>Works</div>
            </div>
            <div className='ToggleButton'>
            <ToggleButton />
            </div>
        </header>
        <Box tab={tab}/>
        </>
        )
    }
}