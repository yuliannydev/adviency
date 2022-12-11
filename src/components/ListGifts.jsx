import React from 'react'
import { Gifts } from '../helpers/data'

export const ListGifts = () => {

return (
    <section>
        <ul>
            {
                Gifts.map(item => ( <li key={item.id}>{item.name}</li> ))
            }
        </ul>
    </section>
)}
