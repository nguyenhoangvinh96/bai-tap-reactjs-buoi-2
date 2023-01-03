import React, { Component } from "react";
import GlassItem from "./GlassItem";
export default class ListGlass extends Component {
    renderGlass = (listGlass) =>{
        return listGlass.map((glass,index) => {
            return <GlassItem img={glass.url} name={glass.name} price={glass.pice} />
        })
    }
  render() {
    let {listGlass} = this.props;
    return (
      <div className="list-glass">
        <div className="row"></div>
        {this.renderGlass(listGlass)}
      </div>    
    );
  }
}
