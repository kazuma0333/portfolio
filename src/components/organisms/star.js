import star from "../../img/star.jpg";
import star163 from "../../img/star163.jpg";
import "../css/organisms-css/star.css";

export const Star = () => {
    return(
        <>
        <div>
            <div className="star">
                <img src={ star } className="star-img" />
                <img src={ star163 } className="star-img163" />
                <div className="imgStar">
                    <a className="imgStar-left" href="https://stars-psi.vercel.app/" target="_blank">↗︎</a>
                </div>
            </div>
        </div>
        </>
    )
}