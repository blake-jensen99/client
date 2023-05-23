import React, { useState, useEffect } from 'react'
import Nav from './Nav'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

const One = () => {
  const {id} = useParams()
  const [coin, setCoin] = useState([])
  const [color24, setColor24] = useState('')
  const [color1, setColor1] = useState('')
  const [color7, setColor7] = useState('')


  useEffect(() => {
    axios.get('https://api.coinlore.net/api/ticker/?id=' + id)
      .then(res => {
        console.log(res.data)
        setCoin(res.data[0])
        if (res.data[0].percent_change_24h > 0){
          setColor24('green')
        }
        else {
          setColor24('red')
        }
        if (res.data[0].percent_change_1h > 0){
          setColor1('green')
        }
        else {
          setColor1('red')
        }
        if (res.data[0].percent_change_7d > 0){
          setColor7('green')
        }
        else {
          setColor7('red')
        }
      })
      .catch(err => console.log(err))
  },[])




  return (
    <div>
        <Nav/>
        <div className=' text-center d-flex gap-5 justify-content-center'>
                <Link to={'/ad'} style={{textDecoration: "none"}}><h3>A-D</h3></Link>
                <Link to={'/eh'} style={{textDecoration: "none"}}><h3>E-H</h3></Link>
                <Link to={'/il'} style={{textDecoration: "none"}}><h3>I-L</h3></Link>
                <Link to={'/mp'} style={{textDecoration: "none"}}><h3>M-P</h3></Link>
                <Link to={'/qt'} style={{textDecoration: "none"}}><h3>Q-T</h3></Link>
                <Link to={'/uz'} style={{textDecoration: "none"}}><h3>U-Z</h3></Link>
        </div>
        <Link to={'/dash'} style={{textDecoration: "none"}}><h3 className='text-center my-5'>Dashboard</h3></Link>
        <div className='ms-5'>
          <h1>{coin.name}</h1>
          <div className='m-5'>
            <h2>Symbol: {coin.symbol}</h2>
            <br />
            <h4>USD: ${coin.price_usd}</h4>
            <br />
            <h4>Market Cap: ${coin.market_cap_usd}</h4>
            <br />
            <h4>Percent Change in the last 24 hours: <span style={{color: color24}}>{coin.percent_change_24h}%</span></h4>
            <br />
            <h4>Percent Change in the last hour: <span style={{color: color1}}>{coin.percent_change_1h}%</span></h4>
            <br />
            <h4>Percent Change in the last week: <span style={{color: color7}}>{coin.percent_change_7d}%</span></h4>
            <br />
          </div>
        </div>

    </div>
  )
}

export default One