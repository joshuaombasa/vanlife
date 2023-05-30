import React from "react";

export default function About() {
    return (
        <main className="about--container">
            <img src="../src/assets/images/about-hero.png" alt="" />
            <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
            <h4>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
                (Hitch costs extra 😉)
                <br />
                Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
            </h4>
            <div className="about--bottom--section">
                <h2>Your destination is waiting.
                    Your van is ready.
                </h2>
                <div className="explore--vans--about--page--link">
                    <p>Explore our vans</p>
                </div>
            </div>
        </main>
    )
}