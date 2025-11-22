import React from "react";

const UserRegistrationPage: React.FC = () => {

    const checkStrength = () => {
        console.log("Checking strength... (add logic)");
    };

    const registerUser = () => {
        console.log("Register user... (add logic)");
    };

    // const clearUser = () => {
    //     console.log("Clear user... (add logic)");
    // };

    return (
        <>
            <section style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                <h2>Create Your Account</h2>
                <p>Enter your details to generate a personalized fitness and diet plan.</p>

                <div
                    className="content"
                    style={{
                        flexDirection: "column",
                        maxWidth: "450px",
                        margin: "auto"
                    }}
                >

                    {/* Registration Form */}
                    <div className="card">
                        <h3>Registration Form</h3>

                        <label>Name</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Enter name"
                            style={{
                                padding: "8px",
                                width: "90%",
                                borderRadius: "8px",
                                border: "1px solid #9575cd"
                            }}
                        />

                        <label>Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter email"
                            style={{
                                padding: "8px",
                                width: "90%",
                                borderRadius: "8px",
                                border: "1px solid #9575cd"
                            }}
                        />

                        <label>Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter password"
                            style={{
                                padding: "8px",
                                width: "90%",
                                borderRadius: "8px",
                                border: "1px solid #9575cd"
                            }}
                            onInput={checkStrength}
                        />

                        <p id="strengthText" style={{ fontSize: "0.9em", fontWeight: "bold" }}></p>

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

                        <label>Goal</label>
                        <select
                            id="goal"
                            style={{
                                padding: "8px",
                                width: "90%",
                                borderRadius: "8px",
                                border: "1px solid #9575cd"
                            }}
                        >
                            <option value="weight_loss">Weight Loss</option>
                            <option value="balanced">Balanced Diet</option>
                            <option value="muscle_gain">Muscle Gain</option>
                        </select>

                        <button onClick={registerUser}>Register</button>

                        <p id="result" style={{ marginTop: "10px" }}></p>
                    </div>

                </div>
            </section>
        </>
    );
};

export default UserRegistrationPage;
