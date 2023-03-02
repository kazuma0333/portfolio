import '../css/template-css/Box.css';
import { useState } from 'react';
import { Contact } from "../organisms/contact";
import { Profile } from "../organisms/profile";
import { Kazumabooks } from '../organisms/kazumabooks';
import { Github } from '../organisms/github';
import { Star } from '../organisms/star';
import { EatsEmoji } from '../organisms/eats-emoji';
import { EatsEmojiOpa } from '../organisms-opa/eats-emoji-opa';
import { ProfileOpa } from '../organisms-opa/profile-opa';
import { ContactOpa } from '../organisms-opa/contact-opa';
import { StarOpa } from '../organisms-opa/star-opa';
import { GithubOpa } from '../organisms-opa/github-opa';
import { KazumabooksOpa } from '../organisms-opa/kazumabooks-opa';
import { BoxToggleButton } from '../organisms/box-toggle-button';
import { KazumabooksMobile } from '../organisms/kazumabooksMobile';
import { BoxToggleButtonOpa } from '../organisms-opa/box-toggle-button-opa';

export const Box = (props) => {
    const [ctab, setCtab] = useState("All");
    const newCtab = () => {
        setCtab(props.tab);
    }

    if(props.tab === "All"){
        return(
            <>
            <main>
                <div className='box1'>
                    <Profile />
                    <div className='Github-EatsEmoji'>
                        <div className='Github'>
                        <Github />
                        </div>
                        <EatsEmoji />
                    </div>
                    <div className='Star-Kazumabooks'>
                        <div className='Star'>
                        <Star />
                        </div>
                        <BoxToggleButton />
                        <Kazumabooks />
                    </div>
                    <KazumabooksMobile />
                    <div className='Contact-All-Works'>
                    <Contact />
                    </div>
                </div>
            </main>
            </>
        )
    } else if(props.tab === "About"){
        return(
            <>
            <main>
                <div className='box1-About'>
                    <div className='Profile'>
                    <Profile />
                    </div>
                    <div className='Contact'>
                    <Contact />
                    </div>
                    <div className='KazumabooksMobile'>
                    <KazumabooksMobile />
                    </div>
                    <div className='i'>
                        <div className='Github-EatsEmoji'>
                        <div className='Github'>
                        <GithubOpa />
                        </div>
                        <EatsEmojiOpa />
                    </div>
                    <div className='Star-Kazumabooks'>
                        <div className='Star'>
                        <StarOpa />
                        </div>
                        <BoxToggleButtonOpa />
                        <KazumabooksOpa />
                    </div>
                    </div>
                </div>
            </main>
            </>
        )
    } else if(props.tab === "Works"){
        return(
        <>
        <main>
            <div className='box1'>
            <KazumabooksMobile />
                <div className='Github-EatsEmoji'>
                    <div className='Github'>
                    <EatsEmoji />
                    </div>
                    <Github />
                </div>
                <div className='Star-Kazumabooks'>
                    <div className='Star'>
                    <Star />
                    </div>
                    <BoxToggleButtonOpa />
                    <Kazumabooks />
                </div>
                <ProfileOpa />
                <ContactOpa />
            </div>
        </main>
        </>
        )
    }
}