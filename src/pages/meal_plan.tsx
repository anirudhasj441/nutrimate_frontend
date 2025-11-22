import React from "react";

const MealPlanPage: React.FC = () => {
    return (
        <>
            <div className="hero">
                <h2>Your Weekly Meal Plan</h2>
                <p>Balanced, nutritious, and personalized meals to keep you energized and healthy.</p>
            </div>  <section>
                <h2>Weekly Meal Overview 🍽️</h2><div className="content">
                    <div className="card">
                        <h3>Monday</h3>
                        <p>Breakfast: Oatmeal with fruits</p>
                        <p>Lunch: Grilled chicken salad</p>
                        <p>Dinner: Veggie stir-fry</p>
                    </div>

                    <div className="card">
                        <h3>Tuesday</h3>
                        <p>Breakfast: Smoothie bowl</p>
                        <p>Lunch: Brown rice + dal</p>
                        <p>Dinner: Paneer wrap</p>
                    </div>

                    <div className="card">
                        <h3>Wednesday</h3>
                        <p>Breakfast: Poha</p>
                        <p>Lunch: Veg biryani</p>
                        <p>Dinner: Soup + salad</p>
                    </div>

                    <div className="card">
                        <h3>Thursday</h3>
                        <p>Breakfast: Dosa + chutney</p>
                        <p>Lunch: Grilled fish + veggies</p>
                        <p>Dinner: Quinoa bowl</p>
                    </div>

                    <div className="card">
                        <h3>Friday</h3>
                        <p>Breakfast: Idli + sambar</p>
                        <p>Lunch: Rajma + rice</p>
                        <p>Dinner: Sprouts salad</p>
                    </div>

                    <div className="card">
                        <h3>Saturday</h3>
                        <p>Breakfast: Upma</p>
                        <p>Lunch: Chicken curry + roti</p>
                        <p>Dinner: Pasta (wheat)</p>
                    </div>

                    <div className="card">
                        <h3>Sunday</h3>
                        <p>Breakfast: Paratha + curd</p>
                        <p>Lunch: Veg thali</p>
                        <p>Dinner: Light khichdi</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default MealPlanPage;

