import React from "react";

const TrackProgressPage: React.FC = () => {

    const clearProgress = () => {
        console.log("Clear progress clicked");
        // Add your logic later
    };

    return (
        <>
            <div className="hero">
                <h2>Track Your Daily Fitness Progress</h2>
                <p>Monitor calories, steps, and water intake. Your health journey starts here!</p>
            </div>

            <section>
                <h2>Daily Input 📅</h2>

                <div className="content">

                    {/* Calories */}
                    <div className="card">
                        <h3>Calories Consumed 🔥</h3>
                        <input
                            type="number"
                            id="calInput"
                            placeholder="Enter calories"
                            style={{
                                padding: "8px",
                                width: "90%",
                                borderRadius: "8px",
                                border: "1px solid #9575cd"
                            }}
                        />
                        <button>Save</button>
                        <p id="calResult" style={{ marginTop: "10px", color: "#4a148c" }}></p>
                    </div>

                    {/* Steps */}
                    <div className="card">
                        <h3>Steps Walked 👣</h3>
                        <input
                            type="number"
                            id="stepInput"
                            placeholder="Enter steps"
                            style={{
                                padding: "8px",
                                width: "90%",
                                borderRadius: "8px",
                                border: "1px solid #9575cd"
                            }}
                        />
                        <button>Save</button>
                        <p id="stepResult" style={{ marginTop: "10px", color: "#4a148c" }}></p>
                    </div>

                    {/* Water */}
                    <div className="card">
                        <h3>Water Intake 💧</h3>
                        <input
                            type="number"
                            id="waterInput"
                            placeholder="Glasses of water"
                            style={{
                                padding: "8px",
                                width: "90%",
                                borderRadius: "8px",
                                border: "1px solid #9575cd"
                            }}
                        />
                        <button>Save</button>
                        <p id="waterResult" style={{ marginTop: "10px", color: "#4a148c" }}></p>
                    </div>

                </div>
            </section>

            <section>
                <h2>Your Saved Progress 📊</h2>

                <div className="content">
                    <div className="card">
                        <h3>Today's Summary</h3>

                        <p><b>Calories:</b> <span id="sumCal">0</span></p>
                        <p><b>Steps:</b> <span id="sumSteps">0</span></p>
                        <p><b>Water:</b> <span id="sumWater">0</span> glasses</p>

                        <button
                            onClick={clearProgress}
                            style={{ backgroundColor: "#ef5350" }}
                        >
                            Clear Progress
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TrackProgressPage;
