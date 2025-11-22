import React from "react";
import { useNavigate } from "react-router-dom";

const IndexPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="hero">
                <h2>Welcome to NutriMate!</h2>
                <p>Your one-stop platform for personalized fitness, nutrition, and healthy living.</p>
            </div>

            <section>
                <div className="content">
                    <div className="card">
                        <h3>Meal Plan 🍽️</h3>
                        <p>Get a customized weekly meal plan designed by nutrition experts.</p>
                        <button onClick={() => navigate("/meal-plan")}>View Plans</button>
                    </div>

                    <div className="card">
                        <h3>Healthy Recipes 🥗</h3>
                        <p>Discover simple, tasty, and healthy recipes that support your goals.</p>
                        <button>Explore Recipes</button>
                    </div>

                    <div className="card">
                        <h3>Track Progress 📊</h3>
                        <p>Monitor your daily calories, steps, and fitness milestones.</p>
                        <button>Start Tracking</button>
                    </div>

                    <div className="card">
                        <h3>Diet Plan 🥤</h3>
                        <p>Choose a diet that suits your lifestyle — keto, vegan, or balanced.</p>
                        <button>View Diets</button>
                    </div>

                    <div className="card">
                        <h3>User Registration 👤</h3>
                        <p>Fill in your personal info — age, height, weight & goals — to get a personalized plan.</p>
                        <button>Register Now</button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default IndexPage;