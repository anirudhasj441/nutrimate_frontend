import React from "react";

const DietPlanPage: React.FC = () => {
    return (
        <>
        <div className="hero">
                <h2>Your Personalized Diet Plan</h2>
                <p>Calculate your BMI & daily calories to get an ideal diet recommendation.</p>
            </div>
            <section>
                {/* <h2>Your Personalized Diet Plan</h2>
                <p>Calculate your BMI & daily calories to get an ideal diet recommendation.</p> */}

                <div
                    className="content"
                    // style={{
                    //     flexDirection: "column",
                    //     maxWidth: "500px",
                    //     margin: "auto"
                    // }}
                >

                    {/* BMI Calculator */}
                    <div className="card">
                        <h3>BMI Calculator</h3>

                        <label>Height (cm)</label>
                        <input
                            type="number"
                            id="height"
                            placeholder="Enter height"
                            style={{
                                padding: "8px",
                                width: "90%",
                                borderRadius: "8px",
                                border: "1px solid #9575cd"
                            }}
                        />

                        <label>Weight (kg)</label>
                        <input
                            type="number"
                            id="weight"
                            placeholder="Enter weight"
                            style={{
                                padding: "8px",
                                width: "90%",
                                borderRadius: "8px",
                                border: "1px solid #9575cd"
                            }}
                        />

                        <button>Calculate BMI</button>
                        <p id="bmiResult"></p>
                    </div>

                    {/* Daily Calorie Needs */}
                    <div className="card">
                        <h3>Daily Calorie Needs</h3>

                        <label>Age</label>
                        <input
                            type="number"
                            id="age"
                            placeholder="Enter age"
                            style={{
                                padding: "8px",
                                width: "90%",
                                borderRadius: "8px",
                                border: "1px solid #9575cd"
                            }}
                        />

                        <label>Gender</label>
                        <select id="gender" style={{
                                padding: "8px",
                                width: "97%",
                                borderRadius: "8px",
                                border: "1px solid #9575cd"
                            }}>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>

                        <label>Activity Level</label>
                        <select id="activity" style={{
                                padding: "8px",
                                width: "97%",
                                borderRadius: "8px",
                                border: "1px solid #9575cd"
                            }}>
                            <option value="1.2">Sedentary</option>
                            <option value="1.375">Lightly Active</option>
                            <option value="1.55">Moderately Active</option>
                            <option value="1.725">Very Active</option>
                        </select>

                        <button>Calculate Calories</button>
                        <p id="calorieResult"></p>
                    </div>

                    {/* Diet Plan */}
                    <div className="card">
                        <h3>Recommended Diet Plan</h3>
                        <p id="dietPlan">Fill details to generate plan...</p>
                    </div>

                </div>
            </section>
        </>
    );
};

export default DietPlanPage;
