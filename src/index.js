import React from "react";
import ReactDOM from "react-dom";
import { SideBar } from "./components/sidebar/sidebarcomponent"
import { Brand } from "./components/brand/brandcomponent"
import { data } from './data'
import { ItemListMain } from './components/itemlistmain/itemlistmaincomponent'
import { Topfilterbuttons } from './components/topfilterbuttons/topfilterbuttonscomponent'
import {Mobilebar} from './components/mobilebar/mobilebarcomponent'
import styles from '../styles.css'

const MyContext = React.createContext();
export var MyContextConsumer = MyContext.Consumer;

class App extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = ({

      items: data,
      options: [],
      order: [],


    })
  }


  removeFilter(flag, value, reference) {

    var flagindex;
    for (var i = 0; i < this.state.options.length; i++) {

      if (this.state.options[i][1] == value) {
        flagindex = i
      }
    }

    if (flagindex != undefined) {
      this.state.options.splice(flagindex, 1)

      this.multipleOptionsRenderer();
    }
  }


  getdistinctvalues(arr, flag) {
    const map = new Map()
    var result = [];
    this.state.options.forEach((item) => {
      if (!map.has(item[0])) {
        map.set(item[0]);
        result.push(item[0])
      }
    })
    if (flag) {
      return result
    }
    return result.length
  }

  multipleOptionsRenderer(flag) {

    this.state.items = data;
    var distinctcat = this.getdistinctvalues();
   
    this.setState({
      items: this.state.items.filter((item) => {

        var count = [];
    

        this.state.options.forEach((itemlist) => {
       

          if (item[itemlist[0]] == itemlist[1]) {
     
            count.push(itemlist[0]);
          }

        })
 
        if (count.length == distinctcat) {
          count = [];
          return true
        }
        else {
          count = [];
          return false
        }

      })
    })
  }

  addFilter(flag, value, reference) {
    var temp;
    this.getdistinctvalues()
    console.log("enter the addFilter")
    
    if (this.state.options.length > 0) {
      this.state.options.push([flag, value, reference])
      this.multipleOptionsRenderer(flag)
    }

    else if (this.state.options.length == 0) {

      this.state.options.push([flag, value, reference])
      this.setState({ items: this.state.items.filter(item => item[flag] == value) })

    }

  }
  setOptions(flag) {
    var brandList = [];
    var catList = [];
    var refList = [];
    var colorList = [];
    var x;
    var brandListx = new Map()
    var catListx = new Map()
    var colorListx = new Map()

    for (var i = 0; i < this.state.items.length; i++) {
     
      if (!brandListx.has(this.state.items[i].brand)) {
        brandListx.set(this.state.items[i].brand);
        brandList.push(this.state.items[i].brand)
      }
      if (!catListx.has(this.state.items[i].category)) {
        catListx.set(this.state.items[i].category);
        catList.push(this.state.items[i].category)
      }
      if (!colorListx.has(this.state.items[i].color)) {
        colorListx.set(this.state.items[i].color)
        colorList.push(this.state.items[i].color)
      }
    }

    var complete = new Promise((resolve, reject) => {
      brandList = brandList.sort()
      catList = catList.sort()
      if (flag && flag == "brand") {
        this.setState({
          brandList: this.state.brandList,
          catList: catList
        })
      }
      else if (flag && flag == "category") {

        this.setState({
          brandList: brandList,
          catList: this.state.catList
        })
      }
      else {
        this.setState({
          brandList: brandList,
          catList: catList,
          colorList: colorList
        })
      }
      resolve("done")
    }).then(() => {
      console.log("options set")

    })

  }
  getOptions() {
     if ((this.state.catList && this.state.brandList && this.state.colorList) ) {
      return [[this.state.brandList], [this.state.catList], [this.state.colorList]]
  }}

  getItems() {
    if (this.state.items) {
      return this.state.items;
    }
  }
  componentDidMount() {
    console.log("")
        this.setOptions()
  }
  render() {

    return (
      <MyContext.Provider value={{
        getOptions: this.getOptions(),
        getItem: this.state.items,
        options: this.state.options,
        removeFilter: this.removeFilter.bind(this),
        addFilter: this.addFilter.bind(this)
      }}>
        {this.props.children}
      </MyContext.Provider>
    )
  }

}

const AppInner = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col s12 l2 m2 mob" style={{ border: "solid black 1px" }}>
          <MyContextConsumer>{({ getOptions, addFilter, removeFilter }) =>
            <SideBar getOptions={getOptions} removeFilter={removeFilter} addFilter={addFilter} />}
          </MyContextConsumer>
          <div className={styles.mobx}>
            <MyContextConsumer>
            {({getOptions,addFilter,removeFilter})=><Mobilebar addFilter={addFilter} removeFilter={removeFilter} getOptions={getOptions}/>}</MyContextConsumer>
          </div>
        </div>
        <div className="col s12 m10 l10">
          <MyContextConsumer>{({ options, removeFilter }) => <Topfilterbuttons removeFilter={removeFilter} options={options} />}</MyContextConsumer>
          <MyContextConsumer>{({ getItem }) =>
            <ItemListMain getItem={getItem} />}
          </MyContextConsumer>
        </div>
      </div>
    </div>
  )
}
ReactDOM.render(<App><AppInner /></App>, document.getElementById("index"));
