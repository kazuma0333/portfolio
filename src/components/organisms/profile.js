import "../css/organisms-css/profile.css";
import My from "../../img/MyEmoji.png"

export const Profile = () => {
    return(
        <>
        <div className="profile">
            <img src={ My } />
            <p>こんにちは、UI/UXデザイナーの　<span>光山冬馬</span> （みつやまかずま）です 👋</p>
            <p>頭の中で思い描いた理想の体験を製品に落とし込んで実際に作ることが好きです！</p>
            <p>操作に迷ったり、思ったことと違う動作のないデザインを心がけています。</p>
        </div>
        </>
    )
}