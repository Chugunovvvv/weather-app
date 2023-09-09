import axios from 'axios'
import { useState } from 'react'
export const useWeather = () => {

    const [name, setName] = useState('')
    const [data, setData] = useState({
        temperature: '',
        pressure: '',
        precipitation: '',
        wind: ''
    })
    const handleClick = () => {
        if(name !== '') {
        const api = `https://api.openweathermap.org/data/2.5/forecast?q=${name}&lang=ru&units=metric&APPID=18114b0092fddb8ac514d9f1cd645e6c`
        axios.get(api)
        .then(res => {
            console.log(res.data)
            const dataInfo = res.data.list[0].main
            const dailyData = data.list
            setData(dailyData)
            setData({...data, temperature: dataInfo.temp, pressure: dataInfo.pressure, precipitation: res.data.list[0].weather[0].description, wind: res.data.list[0].wind.speed})
        })
        .catch(err => console.log(err)) 
        }
    }
    return {setName, name, handleClick, data, setData}
}