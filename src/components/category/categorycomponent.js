import React from "react"
import ReactDOM from "react-dom"
import styles from "./category.css"

export const Category = (props) => {
    return (
        <CategoryList catlist={props.catlist} addFilter={props.addFilter} removeFilter={props.removeFilter} />
    )
}

const CategoryList = (props) => {
    var category = [];
    console.log("this is the finded")
  
    if (props.catlist) {
        for (var i = 0; i < props.catlist.length; i++) {
                category.push(<li key={i}><label>
                    <input type="checkbox" value={props.catlist[i]} onClick={
                        (e) => {
                            e.target.checked == true ?
                                props.addFilter("category", e.target.value, e.target) :
                                props.removeFilter("category", e.target.value, e.target)
                        }
                    } />
                    <span>{props.catlist[i]}</span>
                </label></li>)   
            }
        }
         return (<div className={styles.Listofitems}><ul>{category}</ul></div>)

    }


