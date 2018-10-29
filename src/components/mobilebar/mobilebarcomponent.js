import React from "react"
import ReactDOM from "react-dom"
import { Category } from '../category/categorycomponent'
import { Brand } from "../brand/brandcomponent"
import { Color } from "../color/colorcomponent"
import styles from './mobilebar.css'

export const Mobilebar = (props) => {
    var options = props.getOptions;
    console.log("asdsad")
    console.log(options)
    var brand;
    var color;
    var category;
    var i = 0;
    function mobile(e) {
        console.log(e.target.className)
        //e.target.nextSibling.className==styles.mobx?e.target.nextSibling.className=styles.mobxnormal:e.target.nextSibling.className=styles.mobx

    }
    options ? (brand = options[0][0], category = options[1][0], color = options[2][0]) : i = 1;
    return (
        <div className="itemlist" >
               <Mobilebarx addFilter={props.addFilter} removeFilter={props.removeFilter} brandList={brand} colorList={color} categoryList={category} />
        </div>
    )

}

export class Mobilebarx extends React.Component {
    constructor(props) {
        super(props)
        this.brand = [];
        this.category = [];
        this.color = [];
        this.i = 0;
        this.option;
        this.Brand = React.createRef();
        this.Category = React.createRef();
        this.Color = React.createRef();
        this.options ? (this.brand = this.options[0][0], this.category = this.options[1][0], this.color = this.options[2][0]) : this.i = 1;
    }

    render() {  
        console.log(this.props)
        function mobile(e, ref) {
            ref.current.className == styles.mobx ? ref.current.className = styles.mobxnormal : ref.current.className = styles.mobx

        }
        return (

                <div >
                    <div className={styles.mobtitle} onClick={(e) => { mobile(e, this.Brand) }}>Brand</div>
                    <div className={styles.mobtitle} onClick={(e) => { mobile(e, this.Category) }}>Category</div>
                    <div className={styles.mobtitle} onClick={(e) => { mobile(e, this.Color) }}>Color</div>
       
                    <br />
                    <div className={styles.mobx} ref={this.Brand} style={{position:"relative",right:"2px"}}><Brand brandlist={this.props.brandList} addFilter={this.props.addFilter} removeFilter={this.props.removeFilter} mob={true} /></div>
                    <div className={styles.mobx} ref={this.Category} style={{position:"relative",right:"2px"}}><Category addFilter={this.props.addFilter} removeFilter={this.props.removeFilter} catlist={this.props.categoryList} mob={true} /></div>
                    <div className={styles.mobx} ref={this.Color}><Color addFilter={this.props.addFilter} removeFilter={this.props.removeFilter} colorlist={this.props.colorList} mob={true} /></div>
                </div>
          
        )
    }
}