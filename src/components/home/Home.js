import React from 'react'
import './Home.scss'
import Banner from './Banner'
import Card from './Card'

function Home() {
    return (
        <div className="home">
            <Banner />
            <div className="home__section">
                <Card
                    src="https://a0.muscache.com/im/pictures/4d353c80-e73a-4b04-9e15-ec3d8381b106.jpg?im_w=480"
                    title="Online experiences"
                    description="Unique activities you can do together, led by a world of hosts"
                />
                <Card
                    src="https://a0.muscache.com/im/pictures/ce6814ba-ed53-4d6e-b8f8-c0bbcf821011.jpg?im_w=480"
                    title="Unique stays"
                    description="Spaces that are more than just a place to sleep"
                />
                <Card
                    src="https://a0.muscache.com/im/pictures/a0316ecb-e49b-4b3a-b6b6-c2876b820e8c.jpg?im_w=480"
                    title="Entire homes"
                    description="Comfortable privare places, with room for friends or family"
                />
            </div>
            <div className="home__section">
                <Card
                    src="https://cf.bstatic.com/images/hotel/max1024x768/229/229895565.jpg"
                    title="3 Bed Flat in Bournemouth"
                    description="Superhost with a stynning view of the beachside and excellent choice of local market food"
                    price="£130/night"
                />
                <Card
                    src="https://static.mansionglobal.com/production/media/article-images/05f2121890e5a320adf07161ba446e19/large_The-Heron-South-Penthouse-Main-Reception.jpg"
                    title="Penthouse in London"
                    description="Enjoy the amazing sights of London with this stunning penthouse"
                    price="£350/night"
                />
                <Card
                    src="https://www.essentialliving.co.uk/wp-content/uploads/2015/09/Studio_bed-WR.jpg"
                    title="1 Bedroom apartment"
                    description="Superhost with great amenities and a fabulous shopping complex nearby"
                    price="£70/night"
                />
            </div>
        </div>
    )
}

export default Home
