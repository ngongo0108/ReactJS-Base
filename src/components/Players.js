import React, { Component } from 'react'
export default class player extends Component {
    render() {
        return (
            <div className='container'>
                <div className='column'>
                    <div className='card'> 
                        <img scr='../images/cr.jpg' alt=''/>
                        <h3>Cristiano Ronaldo</h3>
                        <p className='title'>Manchester United</p>
                        <p><button>Detail</button></p>
                    </div>
                </div>
                <div className='column'>
                    <div className='card'> 
                    <img scr='assets/images/kante.jpg'/>
                    <h3>Kante</h3>
                    <p className='title'>Chelsea</p>
                    <p><button>Detail</button></p>
                    </div>
                </div>
                <div className='column'>
                    <div className='card'> 
                    <img scr='assets/images/messi.jpg'/>
                    <h3>Messi</h3>
                    <p className='title'>PSG</p>
                    <p><button>Detail</button></p>
                    </div>
                </div>
                <div className='column'>
                    <div className='card'> 
                    <img scr='assets/images/neymar.jpg'/>
                    <h3>Neymar</h3>
                    <p className='title'>PSG</p>
                    <p><button>Detail</button></p>
                    </div>
                </div>
                <div className='column'>
                    <div className='card'> 
                    <img scr='assets/images/kane.jpg'/>
                    <h3>Kane</h3>
                    <p className='title'>Tottemham</p>
                    <p><button>Detail</button></p>
                    </div>
                </div>
                <div className='column'>
                    <div className='card'> 
                        <img scr='assets/images/haaland.jpg'/>
                        <h3>Haaland</h3>
                        <p className='title'>Manchester City</p>
                        <p><button>Detail</button></p>
                    </div>
                </div>
            </div>
        )
    }
}