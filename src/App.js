import React from 'react'
import Header from './components/Header'
import Card from './components/Card'
import Footer from './components/Footer'
import data from './data'

export default function App() {
    const tripjournal = data.map(item => {
        return (
            <Card 
            key={item.id}
            item={item} />
        )
    }
    )

    return (
    <div>
        <Header />
        <div className='cards'>
        {tripjournal}
        <Footer />
        </div>
    </div>
    )
}