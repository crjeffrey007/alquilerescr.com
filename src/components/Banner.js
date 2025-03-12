import { useEffect, useState } from "react";
import banner from "../banner.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
    const [search, setSearch] = useState([]);
    const [filteredResults, setFilteredResults] = useState([]);
    const [query, setQuery] = useState("");
    const [listingType, setListingType] = useState("rent");

    useEffect(() => {
        setSearch(["Luxury Apartment", "Beachfront Villa", "Downtown Condo", "Suburban House"]);
    }, []);

    const handleSearch = (e) => {
        setQuery(e.target.value);
        const results = search.filter(item => item.toLowerCase().includes(e.target.value.toLowerCase()));
        setFilteredResults(e.target.value.length === 0 ? [] : results);
    };

    const renderSearchResults = () => {
        if (filteredResults.length === 0 && query.length > 0) {
            return <div className="find-search">No properties found</div>;
        }
        if (filteredResults.length > 0) {
            return (
                <div className="find-search">
                    {filteredResults.map(item => (
                        <Link key={item} to="#">{item}</Link>
                    ))}
                </div>
            );
        }
    };

    return (
        <div className="banner d-flex align-items-center" style={{ backgroundImage: `url(${banner})` }}>
            <div className="bg-custom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mx-auto">
                            <div className="banner-area text-center pt-4 pb-4">
                                <p>Find your dream home today</p>
                                <h2 className="mt-2 mb-4 banner-title"><strong>Discover the Best Properties</strong></h2>
                                <div className="toggle-buttons mb-3 d-flex justify-content-center">
                                    <button 
                                        className={`btn-toggle ${listingType === "rent" ? "active" : ""}`} 
                                        onClick={() => setListingType("rent")}
                                        style={{ 
                                            background: listingType === "rent" ? "rgba(255, 255, 255, 0.8)" : "transparent", 
                                            color: listingType === "rent" ? "#000" : "#fff", 
                                            padding: "10px 20px", 
                                            border: "none", 
                                            borderRadius: "20px", 
                                            margin: "0 5px", 
                                            transition: "all 0.3s ease", 
                                            opacity: listingType === "rent" ? "1" : "0.6"
                                        }}
                                    >
                                        Rent
                                    </button>
                                    <button 
                                        className={`btn-toggle ${listingType === "sale" ? "active" : ""}`} 
                                        onClick={() => setListingType("sale")}
                                        style={{ 
                                            background: listingType === "sale" ? "rgba(255, 255, 255, 0.8)" : "transparent", 
                                            color: listingType === "sale" ? "#000" : "#fff", 
                                            padding: "10px 20px", 
                                            border: "none", 
                                            borderRadius: "20px", 
                                            margin: "0 5px", 
                                            transition: "all 0.3s ease", 
                                            opacity: listingType === "sale" ? "1" : "0.6"
                                        }}
                                    >
                                        Sale
                                    </button>
                                </div>
                                <div className="search-area">
                                    <input 
                                        value={query} 
                                        onChange={handleSearch} 
                                        type="text" 
                                        className="inp-search" 
                                        placeholder={`Search ${listingType} properties...`} 
                                    />
                                    <button className="btn-search m-2">Search</button>
                                </div>
                                {renderSearchResults()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
