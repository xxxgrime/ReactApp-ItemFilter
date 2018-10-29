import React from "react"
import ReactDOM from "react-dom"



export const Topfilterbuttons = (props) => {
    var buttonlist = [];
    if (props.options.length != 0) {
        for (var i = 0; i < props.options.length; i++) {
            //  console.log(props.options)   
            if (props.options[i][0] == "color") {
                buttonlist.push(<li style={{marginBottom:"2%", display: "inline-block", marginRight: "10px", border: "solid black 1px", position: "relative", width: "100px",backgroundColor:props.options[i][1]}} key={i}><div style={{ marginLeft: "10px", padding: "0px" }} ><span style={{color:"white",fontWeight:"bolder"}}>{props.options[i][1]}</span><div style={{ backgroundColor: "yellow" }}><Displayclose options={props.options[i]} remove={props.removeFilter} flag={props.options[i][0]} value={props.options[i][1]} reference={props.options[i][2]} color={true} /></div></div></li>)
            }
            else {
                buttonlist.push(<li style={{marginBottom:"3%" ,display: "inline-block", marginRight: "10px", border: "solid black 1px", position: "relative", width: "100px" }} key={i}><div style={{ marginLeft: "10px", padding: "0px" }} ><span style={{fontWeight:"bolder"}}>{props.options[i][1]}</span><div style={{ backgroundColor: "yellow" }}><Displayclose options={props.options[i]} remove={props.removeFilter} flag={props.options[i][0]} value={props.options[i][1]} reference={props.options[i][2]} /></div></div></li>)
            }

        }
        console.log("this is the item filter")
        console.log(props.options)

    }
    else {
        buttonlist = [];
    }
    return (
        <div>
            <ul >{buttonlist}</ul>
        </div>
    )

}


const Displayclose = (props) => {
    //  console.log("the display box")
    //console.log(props.value)
    //console.log(props.options)
if(props.color==true){
    console.log("this is the color time")
      return (
        <div> <span style={{fontWeight:"bolder", color: "white", position: "absolute", fontSize: "1em", left: "85%", bottom: ".05%" }} onClick={(e) => { console.log("these are props");console.log(props.reference);props.reference.click() }}>X</span></div>
    )
}
else{
    return (
        <div> <span style={{ fontWeight:"bolder",color: "black", position: "absolute", fontSize: "1em", left: "85%", bottom: ".05%" }} onClick={(e) => { props.reference.click() }}>X</span></div>
    )
}

}
    