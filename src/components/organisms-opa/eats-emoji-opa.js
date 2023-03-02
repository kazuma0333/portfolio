import Eats from "../../img/eats-emoji.jpg";
import Eats163 from "../../img/eats-emoji163.jpg";
import "../css/organisms-opacity-css/eats-emoji-opa.css";

export const EatsEmojiOpa = () => {
    return(
        <>
        <div className="eats-opa">
                <img src={ Eats }  className="eats-opa-img" />
                <img src={ Eats163 } className="eats-opa-img163" />
                <div className="imgEats">
                    <p className="imgEats-left-opa" href="" target="_blank">↗︎</p>
                </div>
            </div>
        </>
    )
}