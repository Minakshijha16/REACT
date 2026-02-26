
import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./shimmer";

const Body = () => {
    const [ListofRestaurant, setListofRestaurant] = useState([]);
    useEffect(() => {
        fetchdata();
    }, []);
    const fetchdata = async () => {
        const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.6687991&lng=88.2813944&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING%22");
        const json = await data.json();
        console.log(json);
        setListofRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const [SearchText, setSearchText] = useState("");


        
    return ListofRestaurant.length === 0 ? (<Shimmer/>) : (
        <div className="body">
            <div className="filter-btn">
                <div className="search">
                    <input type="text" className="search-box" value={SearchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }}></input>
                    <button onClick={() => {
                        const filterRestaurant = ListofRestaurant.filter(
                            (res) => res.info.name.toLowerCase().includes(SearchText.toLowerCase())
                        );
                        setListofRestaurant(filterRestaurant);
                    }}>search</button>
                </div>
                <button onClick={
                    () => {
                        const filterList = ListofRestaurant.filter(
                            (res) => res.info.avgRating > 4
                        );
                        setListofRestaurant(filterList);
                    }
                } >Top rated Restaurant</button>
            </div>
            <div className="res-container">
                {ListofRestaurant.map((restaurant) => (<RestaurantCard key={restaurant.info.id} resdata={restaurant} />))}

            </div>
        </div>
    )
}

export default Body;