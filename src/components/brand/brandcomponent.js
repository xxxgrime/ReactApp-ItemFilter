import React from 'react';
import ReactDOM from 'react-dom';
import styles from './brand.css'

export const Brand = (props) => {

    return (


        <BrandListx addFilter={props.addFilter} removeFilter={props.removeFilter} brandlist={props.brandlist} />

    )
}


class BrandListx extends React.Component {
    constructor(props) {
        super(props)

    }
    render() {
        var brand = [];
        var brandvalue = [];
        if (this.props.brandlist) {
            for (var i = 0; i < this.props.brandlist.length; i++) {

                brandvalue[i] = this.props.brandlist[i]
                brand.push(<li key={i}><label>
                    <input type="checkbox" id={i} value={brandvalue[i]} onClick={
                        (e) => {
                            e.target.checked == true ?
                                this.props.addFilter("brand", e.target.value, e.target) :
                                this.props.removeFilter("brand", e.target.value, e.target)
                        }}
                    />
                    <span>{this.props.brandlist[i]}</span>
                </label></li>)

            }
        }
        return (
            <div className={styles.Listofitems}><ul>{brand}</ul></div>
        )
    }
} 