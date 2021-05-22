import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './state.css'

const State = () => {
    const [data, setData] = useState([])
    // const getCovidData = async () => {
    //     const res = await fetch ('https://api.covid19india.org/data.json');
    //     const actualData = await res.json();
    //     console.log(actualData)

    // }

    // useEffect(() => {
    //     getCovidData()
    // }, [])

    useEffect(() => {
        axios.get('https://api.covid19india.org/data.json')
            .then(res => {
                console.log(res.data.statewise[0], { State: 'Getting Data Successfully...' })
                setData(res.data.statewise[0])
            })
            .catch(err => {
                console.log(err, { state: "Opps!! Getting Errors" })
            })
    }, [])

    return (
        <>
            <div className="main__div">
                <h6 className='live'><span>LIVE 🔴 </span></h6>
                <h6>COVID-19 TRACKER</h6>
                <marquee>Covid Live Tracker 🔴 🌵</marquee>
                <div className="main">
                    <div className="column" style={{backgroundColor:'#a3e4e6'}}>
                        <div className="text">
                            <h4>Our Country</h4><br/>
                        </div>
                        <div style={{textAlign:'center',marginTop:'20px', fontSize:'32px'}}><strong>INDIA </strong></div>
                        <div style={{marginLeft:'100px'}}>🇮🇳</div>
                    </div>  
                    <div className="column" style={{backgroundColor:'#cea9fc'}}>
                    <div className="text">
                            <h4>Total Recovered</h4><br/>
                        </div>
                        <div style={{textAlign:'center', marginTop:'30px', fontSize:'22px'}}><strong>{data.recovered}</strong></div>                    </div>
                    <div className="column" style={{backgroundColor:'seashell'}}>
                    <div className="text">
                            <h4>Total Confirmed</h4><br/>
                        </div>
                        <div style={{textAlign:'center', marginTop:'30px', fontSize:'22px'}}><strong>{data.confirmed}</strong></div>                    </div>
                    <div className="column" style={{backgroundColor:"#33ca5b"}}>
                    <div className="text">
                            <h4>Total Deaths</h4><br/>
                        </div>
                        <div style={{textAlign:'center',marginTop:'30px', fontSize:'22px'}}><strong>{data.deaths}</strong></div>                    </div>
                    <div className="column" style={{backgroundColor:'#427aeb'}}>
                    <div className="text">
                            <h4>Total Active</h4><br/>
                        </div>
                        <div style={{textAlign:'center', marginTop:'30px', fontSize:'22px'}}><strong>{data.active}</strong></div>                    </div>
                    <div className="column" style={{backgroundColor:'lightpink'}}>
                    <div className="text">
                            <h4>Last Updated</h4><br/>
                        </div>
                        <div style={{textAlign:'center', marginTop:'30px', fontSize:'22px'}}><strong>{data.lastupdatedtime}</strong></div>                    </div>
                </div>
            </div>

        </>
    )
}

export default State
