import React from "react"
import ReactDOM from "react-dom"
import {Brand} from "../brand/brandcomponent"
import {Category} from '../category/categorycomponent'
import {Color} from '../color/colorcomponent'
import styles from './sidebar.css'

export var SideBar=(props)=>{
    var options=props.getOptions;
    var brand;
    var category;
    var color;
    var i=0;
  options?(brand=options[0][0],category=options[1][0],color=options[2][0]):i=1;

    return (
       <div className={styles.itemlist}>
           <div>
               <div>Brand</div>
               <div><Brand brandlist={brand} addFilter={props.addFilter} removeFilter={props.removeFilter}/></div>
               <div>Category</div>
                <div><Category addFilter={props.addFilter} removeFilter={props.removeFilter} catlist={category}/></div>
                <div>Color</div>
                 <div><Color addFilter={props.addFilter} removeFilter={props.removeFilter} colorlist={color}/></div>
           </div>
       </div>
    )
}