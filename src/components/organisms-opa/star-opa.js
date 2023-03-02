import star from "../../img/star.jpg";
import star163 from "../../img/star163.jpg";
import "../css/organisms-opacity-css/star-opa.css";

export const StarOpa = () => {
    return(
        <>
        <div>
            <div className="star-opa">
                <img src={ star } className="star-opa-img" />
                <img src={ star163 } className="star-opa-img163" />
                <div className="imgStar-opa">
                    <p className="imgStar-left-opa">↗︎</p>
                </div>
            </div>
        </div>
        </>
    )
}