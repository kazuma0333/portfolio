import git from "../../img/githubWidth.jpg";
import git163 from "../../img/github163.jpg";
import "../css/organisms-opacity-css/github-opa.css";

export const GithubOpa = () => {
    return(
        <>
        <div className="github-opa">
            <img src={ git } className="github-opa-img" />
            <img src={ git163 } className="github-opa-img163" />
            <div className="imgUp-opa">
                <p className="imgUp-left-opa">↗︎</p>
            </div>
        </div>
        </>
    )
}