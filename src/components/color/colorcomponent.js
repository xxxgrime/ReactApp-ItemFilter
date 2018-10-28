import React from 'react'
import ReactDOM from "react-dom"
import styles from './colorlist.css'



export const Color = (props) => {

    return (
        <ColorList addFilter={props.addFilter} removeFilter={props.removeFilter} colorlist={props.colorlist} />
    )
}

export const ColorList = (props) => {
    var colorlist = [];
    var timepass;
    if (props.colorlist) {

        for (var i = 0; i < props.colorlist.length; i++) {

            timepass = props.colorlist[i]
            colorlist.push(
                <li key={i}>
                    <div className="col s3 l3 m2">
                        <div className={styles.colorlist} style={{ backgroundColor: props.colorlist[i] }}><div className={styles.inner} style={{ opacity: "0.1", color: "white", backgroundColor: props.colorlist[i] }}
                            onMouseOver={
                                (e) => {
                                    e.target.parentNode.style.opacity = "1"
                                }

                            }
                            onMouseLeave={
                                (e) => {
                                    var x = e.target.parentNode;
                                    // e.target.parentNode.style.color=="grey"?e.target.parentNode.style.opacity="1":e.target.parentNode.opacity="0.1";
                                    if (e.target.parentNode.style.color == "grey") {
                                        console.log(x)
                                        x.style.opacity = "1"
                                    }
                                    else {
                                        e.target.parentNode.style.opacity = "0.1"
                                    }

                                }
                            }
                            onClick={
                                (e) => {
                                    e.target.parentNode.style.color == "white" ?
                                        (props.addFilter("color", e.target.parentNode.style.backgroundColor, e.target), e.target.parentNode.style.color = "grey", e.target.parentNode.style.opacity = "1") :
                                        (props.removeFilter("color", e.target.parentNode.style.backgroundColor, e.target), e.target.parentNode.style.color = "white", e.target.parentNode.style.opacity = "0.1")
                                }
                            }><i style={{ width: "inherit", height: "inherit" }} className="material-icons check">check</i></div></div>
                    </div>
                </li>
            )
        }
    }

    return (
        <div className="container" style={{ margin: "0px" }}><div className="row"><ul className="ListOfColors">{colorlist}</ul></div></div>
    )

}
