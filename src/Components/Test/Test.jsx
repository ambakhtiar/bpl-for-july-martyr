import React, { useState } from "react";

function Test() {
    const [showCard, setShowCard] = useState(false);
    const [showOtherPage, setShowOtherPage] = useState(false);

    // Reset state if going back to home
    const goHome = () => {
        setShowOtherPage(false);
        setShowCard(false);
    };

    if (showOtherPage) {
        return (
            <div className="p-6 text-center">
                <h1 className="text-2xl font-bold">🚀 This is the Other Page!</h1>
                <button
                    onClick={goHome}
                    className="mt-4 bg-gray-500 text-white px-4 py-2 rounded"
                >
                    Go Back
                </button>
            </div>
        );
    }

    return (
        <div className="p-6 text-center">
            {/* Button 1: Toggle card */}
            <button
                onClick={() => setShowCard(!showCard)}
                className="bg-blue-500 text-white px-4 py-2 rounded m-2"
            >
                {showCard ? "Hide Card" : "Show Card"}
            </button>

            {/* Button 2: Show other page */}
            <button
                onClick={() => setShowOtherPage(true)}
                className="bg-green-500 text-white px-4 py-2 rounded m-2"
            >
                Go to Other Page
            </button>

            {/* Card content */}
            {showCard && (
                <div className="mt-4 p-4 border rounded shadow">
                    <h2 className="text-lg font-semibold">🏏 Dream 11 Card</h2>
                    <p>This is a sample card displayed on button click.</p>
                </div>
            )}
        </div>
    );
}

export default Test;
