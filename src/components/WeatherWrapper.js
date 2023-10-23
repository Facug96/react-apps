import React from 'react'
import {useState} from 'react'

const api = {
    api_key: 'c16ce1d48f8d87507260f9c1a7bc9632',
    url: 'https://api.openweathermap.org/data/2.5/',
}

const WeatherWrapper = () => {
    const [search, setSearch] = useState("")
    const [data, setData] = useState("")
    const [fetched,setFetched] = useState(false)
    const [error,setError] = useState(false) //quick fix para no usar async/await usando que la pai devuelve result.cod
    const apiCall = (search) => {
        console.log(search)
        fetch(`${api.url}weather?q=${search}&appid=${api.api_key}&units=metric`)
        .then((res) => res.json())
        .then((result) => {
            setData(result)
            setFetched(true)
            setError(false)
            if (result.cod === '404'){
                setData("")
                setFetched(false)
                setError(true)
            }
        }) // guardar el resultado en variable
    }
  return (
    <div>
        <p className = 'Title'> Weather app</p>
        <div className = "TodoWrapper">
        <input 
            className='todo-input' 
            placeholder = 'Ingrese una ciudad'
            onChange={(e)=>{
                setSearch(e.target.value)
                setFetched(false)
            }}
            />
        <button className = 'button-text' onClick = {() => apiCall(search)}>
            Buscar clima
        </button>
            {fetched === true && error === false ? 
            <div>
            <p>Pais: {data.sys.country}</p>
            <p>Temperatura: {data.main.temp} ºC</p>
            <p>Humedad: {data.main.humidity}%</p>
            <p>Descripcion: {data.weather[0].description}</p>
            </div>            
            : <p>No se encontro el pais</p>}
        </div>
    </div>
  )
}

export default WeatherWrapper
