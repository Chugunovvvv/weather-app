import img1 from '../images/card/littlerainandsun.svg'
import img2 from '../images/card/rain.svg'

const data = new Date()
const days = data.getDate()

const cards = [

    {
        day: 'Сегодня',
        date: days + ' сентября',
        img: img1,
        temperature: '+18°',
        info: 'Облачно'
    },
    {
        day: 'Завтра',
        date: days + 1 + ' сентября',
        img: img1,
        temperature: '+15°',
        info: 'Облачно'
    },
    {
        day: 'Пн',
        date: days + 2 + ' сентября',
        img: img2,
        temperature: '+18°',
        info: 'Облачно'
    },
    {
        day: 'Вт',
        date: days + 3 + ' сентября',
        img: img1,
        temperature: '+18°',
        info: 'Облачно'
    },
    {
        day: 'Ср',
        date: days + 4 + ' сентября',
        img: img2,
        temperature: '+15°',
        info: 'Облачно'
    },
    {
        day: 'Чт',
        date: days + 5 + ' сентября',
        img: img1,
        temperature: '+18°',
        info: 'Облачно'
    },
    {
        day: 'Пт',
        date: days + 6 + ' сентября',
        img: img2,
        temperature: '+18°',
        info: 'Облачно'
    },
]

export default cards