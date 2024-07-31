"use client";
import AdCarousel from "./components/AdCarousel";
import Banner from "./components/Banner";
import Pizza from "./components/Pizza";

import { useState } from "react";
// pizza data
const pizzas = [
    {
        id: 1,
        name: "capricciosa",
        description: [
            "Aluat pentru pizza",
            "Sos de roșii",
            "Mozzarella",
            "Pepperoni",
            "Ciuperci",
            "Ardei gras",
            "Ceapă",
            "Olive",
            "Anchois",
            "Bacon",
        ],
        image: "/capricciosa.webp",
        priceSm: 9.99,
        priceMd: 10.99,
        priceLg: 11.99,
        toppings: [
            {
                image: "/cherry.png",
                name: "cherry tomatoes",
                price: 2,
            },
            {
                image: "/corn.png",
                name: "corn",
                price: 2,
            },
            {
                image: "/fresh-tomatoes.png",
                name: "fresh tomatoes",
                price: 2,
            },
            {
                image: "/jalapeno.png",
                name: "jalapeno",
                price: 2,
            },
            {
                image: "/parmesan.png",
                name: "parmesan",
                price: 2,
            },
        ],
    },
    {
        id: 2,
        name: "cheesy",
        description: [
            "Aluat pentru pizza",
            "Sos de roșii",
            "Mozzarella",
            "Pepperoni",
            "Ciuperci",
            "Ardei gras",
            "Ceapă",
            "Olive",
            "Anchois",
            "Bacon",
        ],
        image: "/cheesy.webp",
        priceSm: 10.99,
        priceMd: 11.99,
        priceLg: 12.99,
        toppings: [
            {
                image: "/cherry.png",
                name: "cherry tomatoes",
                price: 2,
            },
            {
                image: "/corn.png",
                name: "corn",
                price: 2,
            },
            {
                image: "/fresh-tomatoes.png",
                name: "fresh tomatoes",
                price: 2,
            },
            {
                image: "/jalapeno.png",
                name: "jalapeno",
                price: 2,
            },
            {
                image: "/parmesan.png",
                name: "parmesan",
                price: 2,
            },
        ],
    },
    {
        id: 3,
        name: "hawaii",
        description: [
            "Aluat pentru pizza",
            "Sos de roșii",
            "Mozzarella",
            "Pepperoni",
            "Ciuperci",
            "Ardei gras",
            "Ceapă",
            "Olive",
            "Anchois",
            "Bacon",
        ],
        image: "/hawaii.webp",
        priceSm: 10.99,
        priceMd: 11.99,
        priceLg: 12.99,
        toppings: [
            {
                image: "/cherry.png",
                name: "cherry tomatoes",
                price: 2,
            },
            {
                image: "/corn.png",
                name: "corn",
                price: 2,
            },
            {
                image: "/fresh-tomatoes.png",
                name: "fresh tomatoes",
                price: 2,
            },
            {
                image: "/jalapeno.png",
                name: "jalapeno",
                price: 2,
            },
            {
                image: "/parmesan.png",
                name: "parmesan",
                price: 2,
            },
        ],
    },
    {
        id: 4,
        name: "italian",
        description: [
            "Aluat pentru pizza",
            "Sos de roșii",
            "Mozzarella",
            "Pepperoni",
            "Ciuperci",
            "Ardei gras",
            "Ceapă",
            "Olive",
            "Anchois",
            "Bacon",
        ],
        image: "/italian.webp",
        priceSm: 11.99,
        priceMd: 12.99,
        priceLg: 13.99,
        toppings: [
            {
                image: "/cherry.png",
                name: "cherry tomatoes",
                price: 2,
            },
            {
                image: "/corn.png",
                name: "corn",
                price: 2,
            },
            {
                image: "/fresh-tomatoes.png",
                name: "fresh tomatoes",
                price: 2,
            },
            {
                image: "/jalapeno.png",
                name: "jalapeno",
                price: 2,
            },
            {
                image: "/parmesan.png",
                name: "parmesan",
                price: 2,
            },
        ],
    },
    {
        id: 5,
        name: "margherita",
        description: [
            "Aluat pentru pizza",
            "Sos de roșii",
            "Mozzarella",
            "Pepperoni",
            "Ciuperci",
            "Ardei gras",
            "Ceapă",
            "Olive",
            "Anchois",
            "Bacon",
        ],
        image: "/margherita.webp",
        priceSm: 9.99,
        priceMd: 10.99,
        priceLg: 11.99,
        toppings: [
            {
                image: "/cherry.png",
                name: "cherry tomatoes",
                price: 2,
            },
            {
                image: "/corn.png",
                name: "corn",
                price: 2,
            },
            {
                image: "/fresh-tomatoes.png",
                name: "fresh tomatoes",
                price: 2,
            },
            {
                image: "/jalapeno.png",
                name: "jalapeno",
                price: 2,
            },
            {
                image: "/parmesan.png",
                name: "parmesan",
                price: 2,
            },
        ],
    },
    {
        id: 6,
        name: "pepperoni",
        description: [
            "Aluat pentru pizza",
            "Sos de roșii",
            "Mozzarella",
            "Pepperoni",
            "Ciuperci",
            "Ardei gras",
            "Ceapă",
            "Olive",
            "Anchois",
            "Bacon",
        ],
        image: "/pepperoni.webp",
        priceSm: 10.99,
        priceMd: 11.99,
        priceLg: 12.99,
        toppings: [
            {
                image: "/cherry.png",
                name: "cherry tomatoes",
                price: 2,
            },
            {
                image: "/corn.png",
                name: "corn",
                price: 2,
            },
            {
                image: "/fresh-tomatoes.png",
                name: "fresh tomatoes",
                price: 2,
            },
            {
                image: "/jalapeno.png",
                name: "jalapeno",
                price: 2,
            },
            {
                image: "/parmesan.png",
                name: "parmesan",
                price: 2,
            },
        ],
    },
    {
        id: 7,
        name: "quattro formaggi",
        description: [
            "Aluat pentru pizza",
            "Sos de roșii",
            "Mozzarella",
            "Pepperoni",
            "Ciuperci",
            "Ardei gras",
            "Ceapă",
            "Olive",
            "Anchois",
            "Bacon",
        ],
        image: "/quattro-formaggi.webp",
        priceSm: 12.99,
        priceMd: 13.99,
        priceLg: 14.99,
        toppings: [
            {
                image: "/cherry.png",
                name: "cherry tomatoes",
                price: 2,
            },
            {
                image: "/corn.png",
                name: "corn",
                price: 2,
            },
            {
                image: "/fresh-tomatoes.png",
                name: "fresh tomatoes",
                price: 2,
            },
            {
                image: "/jalapeno.png",
                name: "jalapeno",
                price: 2,
            },
            {
                image: "/parmesan.png",
                name: "parmesan",
                price: 2,
            },
        ],
    },
    {
        id: 8,
        name: "quattro stagioni",
        description: [
            "Aluat pentru pizza",
            "Sos de roșii",
            "Mozzarella",
            "Pepperoni",
            "Ciuperci",
            "Ardei gras",
            "Ceapă",
            "Olive",
            "Anchois",
        ],
        image: "/quattro-stagioni.webp",
        priceSm: 11.99,
        priceMd: 12.99,
        priceLg: 13.99,
        toppings: [
            {
                image: "/cherry.png",
                name: "cherry tomatoes",
                price: 2,
            },
            {
                image: "/corn.png",
                name: "corn",
                price: 2,
            },
            {
                image: "/fresh-tomatoes.png",
                name: "fresh tomatoes",
                price: 2,
            },
            {
                image: "/jalapeno.png",
                name: "jalapeno",
                price: 2,
            },
            {
                image: "/parmesan.png",
                name: "parmesan",
                price: 2,
            },
        ],
    },
    {
        id: 9,
        name: "tonno",
        description: [
            "Aluat pentru pizza",
            "Sos de roșii",
            "Mozzarella",
            "Pepperoni",
            "Ciuperci",
            "Ardei gras",
            "Ceapă",
            "Olive",
            "Anchois",
        ],
        image: "/tonno.webp",
        priceSm: 10.99,
        priceMd: 11.99,
        priceLg: 12.99,
        toppings: [
            {
                image: "/cherry.png",
                name: "cherry tomatoes",
                price: 2,
            },
            {
                image: "/corn.png",
                name: "corn",
                price: 2,
            },
            {
                image: "/fresh-tomatoes.png",
                name: "fresh tomatoes",
                price: 2,
            },
            {
                image: "/jalapeno.png",
                name: "jalapeno",
                price: 2,
            },
            {
                image: "/parmesan.png",
                name: "parmesan",
                price: 2,
            },
        ],
    },
    {
        id: 10,
        name: "vegetarian",
        description: [
            "Aluat pentru pizza",
            "Sos de roșii",
            "Mozzarella",
            "Pepperoni",
            "Ciuperci",
            "Ardei gras",
            "Ceapă",
            "Olive",
            "Anchois",
        ],
        image: "/vegetarian.webp",
        priceSm: 9.99,
        priceMd: 10.99,
        priceLg: 11.99,
        toppings: [
            {
                image: "/cherry.png",
                name: "cherry tomatoes",
                price: 2,
            },
            {
                image: "/corn.png",
                name: "corn",
                price: 2,
            },
            {
                image: "/fresh-tomatoes.png",
                name: "fresh tomatoes",
                price: 2,
            },
            {
                image: "/jalapeno.png",
                name: "jalapeno",
                price: 2,
            },
            {
                image: "/parmesan.png",
                name: "parmesan",
                price: 2,
            },
        ],
    },
];

const listOfAlergens = [
    "Aluat pentru pizza",
    "Sos de roșii",
    "Mozzarella",
    "Pepperoni",
    "Ciuperci",
    "Ardei gras",
    "Ceapă",
    "Olive",
    "Anchois",
    "Bacon",
    "cherry tomatoes",
    "corn",
    "fresh tomatoes",
    "jalapeno",
    "parmesan",
];

export default function Home() {
    const [germeni, setGermeni] = useState([]);

    const handleAllergenChange = (ingredient) => {
        setGermeni((prev) =>
            prev.includes(ingredient)
                ? prev.filter((item) => item !== ingredient)
                : [...prev, ingredient]
        );
    };

    const filteredPizzas = pizzas.filter((pizza) =>
        germeni.every((germen) => !pizza.description.includes(germen))
    );

    return (
        <section>
            <Banner />
            <AdCarousel />
            <div className="container mx-auto">
                {/* Filtru pentru alergeni */}
                <div className="mb-4">
                    <h3 className="text-orange text-xl font-bold my-2">
                        Filtru pentru alergeni:
                    </h3>
                    <div className="flex flex-wrap gap-4">
                        {listOfAlergens.map((ingredient) => (
                            <label
                                className="flex items-center border border-orange rounded-lg px-3 py-2 cursor-pointer hover:opacity-75 transition-opacity duration-300"
                                key={ingredient}
                            >
                                <input
                                    className="mr-2 appearance-none checked:bg-orange checked:border-transparent border-2 border-orange rounded-md w-4 h-4 cursor-pointer"
                                    type="checkbox"
                                    checked={germeni.includes(ingredient)}
                                    onChange={() =>
                                        handleAllergenChange(ingredient)
                                    }
                                />
                                <span className="text-black">{ingredient}</span>
                            </label>
                        ))}
                    </div>
                </div>
                {/* pizza grid */}
                <div className="grid grid-cols-2 gap-[15px] md:grid-cols-3 xl:grid-cols-4 xl:gap-[30px] py-12">
                    {filteredPizzas.map((pizza) => (
                        <Pizza key={pizza.id} pizza={pizza} germeni={germeni} />
                    ))}
                </div>
            </div>
        </section>
    );
}
