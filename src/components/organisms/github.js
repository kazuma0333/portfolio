import git from "../../img/githubWidth.jpg";
import git163 from "../../img/github163.jpg";
import "../css/organisms-css/github.css";

export const Github = (props) => {
    // if ( props.ctab === "All" ){
        return(
            <>
            <div className="github">
                <img src={ git } className="github-img" />
                <img src={ git163 } className="github-img163" />
                <div className="imgUp">
                    <a className="imgUp-left" href="https://github.com/kazuma0333" target="_blank">↗︎</a>
                </div>
            </div>
            </>
        )
    // } else if ( props.ctab === "About" ){
    //     return(
    //         <>
    //         <div className="github-opa">
    //             <img src={ git } />
    //             <div className="imgUp">
    //                 <p className="imgUp-left">↗︎</p>
    //             </div>
    //         </div>
    //         </>
    //     )
    // } else if ( props.ctab === "Works" ){
    //     return(
    //         <>
    //         <div className="github">
    //             <img src={ git } />
    //             <div className="imgUp">
    //                 <a className="imgUp-left" href="https://github.com/kazuma0333" target="_blank">↗︎</a>
    //             </div>
    //         </div>
    //         </>
    //     )
    // }
}