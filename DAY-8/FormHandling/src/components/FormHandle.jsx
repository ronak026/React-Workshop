import React, { useState } from "react";

function FormHandle() {
    let [userName, setUser] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userName);
        setUser(''); // Clear the input field after submission
    };
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-lg shadow-lg flex flex-col gap-4 w-full max-w-sm"
            >
                <input
                    value={userName}
                    onChange={(e) => setUser(e.target.value)}
                    type="text"
                    placeholder="Enter Value"
                    className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                />
                <h1 className="text-xl font-semibold text-gray-700 text-center min-h-[2rem]">
                    {userName}
                </h1>
                <button
                    type="submit"
                    className="bg-blue-600 text-white rounded-md px-4 py-2 font-medium hover:bg-blue-700 transition"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default FormHandle;
