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
    var pixel;
    screen.width<1000?pixel="2px":pixel="0px"
    screen.width==360?pixel="6px":pixel=pixel;
		
  
    console.log(pixel)
    if (props.catlist) {
        for (var i = 0; i < props.catlist.length; i++) {
            if(i==props.catlist.length-1){
                category.push(<li key={i}><label>
                    <input type="checkbox" value={props.catlist[i]} onClick={
                        (e) => {
                            e.target.checked == true ?
                                props.addFilter("category", e.target.value, e.target) :
                                props.removeFilter("category", e.target.value, e.target)
                        }
                    } />
                    <span style={{minWidth:"5px"}}>{props.catlist[i]}</span>
                </label></li>)   
            }
            else{
                category.push(<li key={i}><label>
                    <input type="checkbox" value={props.catlist[i]} onClick={
                        (e) => {
                            e.target.checked == true ?
                                props.addFilter("category", e.target.value, e.target) :
                                props.removeFilter("category", e.target.value, e.target)
                        }
                    } />
                    <span style={{minWidth:"5px"}}>{props.catlist[i]}</span>
                </label></li>)   
            }
                
            }
        }
  
         return (<div className={styles.Listofitems}><ul>{category}</ul></div>)

    }


