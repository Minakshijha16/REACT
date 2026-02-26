import { CDN_URL } from "./utils/constants";
const style = {
    backgroundColor: "#f0f0f0"
}

function RestaurantCard(props) {
    const { resdata } = props;
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } = resdata?.info;
    return (
        <div className="res-card" style={style}>
            <img className="FoodImage" src={CDN_URL + cloudinaryImageId} />
            <h3>{name}</h3>
            <h6>{cuisines.join(",")}</h6>
            <h5>{avgRating} </h5>
            <h5>{costForTwo}</h5>
        </div>
    );
}
export default RestaurantCard;