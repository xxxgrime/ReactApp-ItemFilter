import React from "react"
import ReactDOM from "react-dom";
import styles from "./itemlistmain.css"


export const ItemListMain=(props)=>{
    console.log("this is the start")
console.log(props.getItem.length)
    var items=[];
    if(props.getItem.length!=0){
        var x=props.getItem
        for(var i=0;i<x.length;i++){
            items.push(<li key={i+10}><ItemFrame item={x[i]}/></li>)
        }
      
         return(
        <div className="ItemList" style={{boxSizing:"content-box"}}><div className="row"><ul>{items}</ul></div></div>   
    )
}
else{

    return (
        <div style={{backgroundColor:"silver",color:"black",borderBottom:"solid 1px black"}}><div style={{marginLeft:"45%"}}><p>No Item Found</p></div></div>
    )
}
   
}

const ItemFrame=(props)=>{
    return (
       
            <div className="col m3 l3 s12 itemcol" style={{marginBottom:"4%"}}>
             <div className={styles.itemFrame}>
            <div className={styles.itemName} style={{backgroundColor:props.item.color}}>{props.item.name}</div>
            <div className="ItemBrand"><span>BrandName: </span><i>{props.item.brand}</i></div>
            <div className="ItemCategory"><span>Category: </span>{props.item.category}</div>
        </div>
        </div>
    

    )
}