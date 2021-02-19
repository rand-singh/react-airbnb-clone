import { Button } from '@material-ui/core'
import React from 'react'
import './SearchPage.scss'
import SearchResult from './SearchResult'

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__info">
                <p>62 stays &#183; 26th August to 30 August &#183; 2 guests</p>
                <h5>Stays nearby</h5>
                <Button variant="outlined">Cancellation Flexibility</Button>
                <Button variant="outlined">Type of place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms and beds</Button>
                <Button variant="outlined">More filters</Button>
            </div>
            <SearchResult
                img="https://s7d2.scene7.com/is/image/ritzcarlton/Presidential%20Suite%20Bedroom-1?$XlargeViewport100pct$"
                location="Private room in center of london"
                title="Stay at this spacious Edwardian House"
                description="Wifi, Kitchen, 1 bed, 1 bath, free parking"
                star={4.73}
                price="£30 / night"
                total="£117 total"
            />
            
            <SearchResult
                img="https://s7d2.scene7.com/is/image/ritzcarlton/Presidential%20Suite%20Bedroom-1?$XlargeViewport100pct$"
                location="Private room in center of london"
                title="Stay at this spacious Edwardian"
                description="Wifi, Kitchen, 1 bed, 1 bath, free parking"
                star={4.73}
                price="£30 / night"
                total="£117 total"
            />
        </div>
    )
}

export default SearchPage
