import React from "react";

const HealthyRecipesPage: React.FC = () => {
    return (
        <>
            <div className="hero">
                <h2>Explore Healthy & Delicious Recipes</h2>
                <p>Search or filter recipes based on your mood, cravings, or fitness goals.</p>
            </div>

            <section>
                <h2>Search Recipes 🔍</h2>

                <input
                    type="text"
                    id="searchInput"
                    placeholder="Search for recipes..."
                    style={{
                        padding: "10px",
                        width: "250px",
                        borderRadius: "8px",
                        border: "1px solid #9575cd"
                    }}
                />

                <h2>Filter by Category 🍽️</h2>

                <div style={{ marginBottom: "20px", display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
                    <button className="filterBtn" data-category="breakfast">Breakfast</button>
                    <button className="filterBtn" data-category="lunch">Lunch</button>
                    <button className="filterBtn" data-category="dinner">Dinner</button>
                    <button className="filterBtn" data-category="protein">High Protein</button>
                    <button className="filterBtn" data-category="lowcarb">Low Carb</button>
                    <button className="filterBtn" data-category="all">Show All</button>
                </div>

                <div className="content" id="recipeContainer">

                    {/* Recipe 1 */}
                    <div className="card recipe" data-category="breakfast protein">
                        <h3>Protein Oats</h3>
                        <p>Oats + banana + whey + nuts</p>
                        <button>View More</button>

                        <div
                            className="details"
                            style={{ display: "none", marginTop: "10px" }}
                        >
                            <p><b>Ingredients:</b> Oats, whey protein, milk, nuts, honey.</p>
                            <p><b>Instructions:</b> Mix all ingredients and cook for 5 minutes.</p>
                        </div>
                    </div>

                    {/* Recipe 2 */}
                    <div className="card recipe" data-category="lunch lowcarb">
                        <h3>Grilled Chicken Salad</h3>
                        <p>Lean protein with fresh greens</p>
                        <button>View More</button>

                        <div
                            className="details"
                            style={{ display: "none", marginTop: "10px" }}
                        >
                            <p><b>Ingredients:</b> Chicken, lettuce, veggies, olive oil.</p>
                            <p><b>Instructions:</b> Grill chicken and toss with veggies.</p>
                        </div>
                    </div>

                    {/* Recipe 3 */}
                    <div className="card recipe" data-category="dinner">
                        <h3>Veggie Stir Fry</h3>
                        <p>Colorful vegetables sautéed lightly</p>
                        <button>View More</button>

                        <div
                            className="details"
                            style={{ display: "none", marginTop: "10px" }}
                        >
                            <p><b>Ingredients:</b> Carrots, beans, peppers, soy sauce.</p>
                            <p><b>Instructions:</b> Stir fry all veggies for 8 minutes.</p>
                        </div>
                    </div>

                    {/* Recipe 4 */}
                    <div className="card recipe" data-category="breakfast">
                        <h3>Fruit Smoothie Bowl</h3>
                        <p>Blended fruits with toppings</p>
                        <button>View More</button>

                        <div
                            className="details"
                            style={{ display: "none", marginTop: "10px" }}
                        >
                            <p><b>Ingredients:</b> Mango, banana, yogurt, chia seeds.</p>
                            <p><b>Instructions:</b> Blend fruits and top with seeds.</p>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};

export default HealthyRecipesPage;
