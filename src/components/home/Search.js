import React, { useState } from 'react'
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import './Search.scss'
import { DateRangePicker } from 'react-date-range';
import PeopleIcon from '@material-ui/icons/People'
import { Button } from '@material-ui/core'

function Search() {
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",                
    }

    function handleSelect(ranges) {
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)
    }

    return (
        <div className="search">
            <DateRangePicker
                ranges={[selectionRange]}
                onChange={handleSelect}
            />
            <p>
                Number of Guests
                <PeopleIcon />
            </p>
            <input className="search__guestCountInput" type="number" min={1} />
            <Button
                variant="outlined" 
                className="search__button">
                    Search Airbnb
            </Button>
        </div>
    )
}

export default Search
