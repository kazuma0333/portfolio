import "../css/organisms-opacity-css/profile-opa.css";
import My from "../../img/MyEmoji.png"

export const ProfileOpa = () => {
    return(
        <>
        <div className="profile-opa">
            <img src={ My } />
            <p>こんにちは、UI/UXデザイナーの　<span>光山冬馬</span> （みつやまかずま）です 👋</p>
            <p>頭の中で思い描いた理想の体験を製品に落とし込んで実際に作ることが好きです！</p>
            <p>操作に迷ったり、思ったことと違う動作のないデザインを心がけています。</p>
        </div>
        </>
    )
}