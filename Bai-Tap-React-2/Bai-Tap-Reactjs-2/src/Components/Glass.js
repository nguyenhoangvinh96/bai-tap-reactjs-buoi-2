import React, { Component } from 'react'
import Model from './Model'
import ListGlass from './ListGlass'
export default class Glass extends Component {
  listGlass = 
  [
    {
        id: 1,
        price: 30,
        name: 'GUCCI G8850U',
        url: '../glassesImage/g1.jpg',
    },
    {
        id: 2,
        price: 50,
        name: 'GUCCI G8759H',
        url: './glassesImage/v2.png',
    },
    {
        id: 3,
        price: 30,
        name: 'DIOR D6700HQ',
        url: './glassesImage/v3.png',
    },
    {
        id: 4,
        price: 70,
        name: 'DIOR D6005U',
        url: './glassesImage/v4.png',
    },
    {
        id: 5,
        price: 40,
        name: 'PRADA P8750',
        url: './glassesImage/v5.png',
    },
    {
        id: 6,
        price: 60,
        name: 'PRADA P9700',
        url: './glassesImage/v6.png',
    },
    {
        id: 7,
        price: 80,
        name: 'FENDI F8750',
        url: './glassesImage/v7.png',
    },
    {
        id: 8,
        price: 100,
        name: 'FENDI F8500',
        url: './glassesImage/v8.png',
    },
    {
        id: 9,
        price: 60,
        name: 'FENDI F4300',
        url: "./glassesImage/v9.png"
    }
]
    render() {
    return (
      <div className='warpper'>
        <h1 className='pt-4 title'>Fashion Glass Shop</h1>
        <div className='container-fluid'>
            <div className='row pt-4'>
                
                <div className='col-4'>
        < Model />
                    </div>

                <div className='col-8'></div>
                < ListGlass listGlass={this.listGlass} />
            </div>
        </div>
      </div>
    )
  }
}
