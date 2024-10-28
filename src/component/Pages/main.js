
import React, { useState } from "react";
import Form from '../form'; // Import the Dashboard component if needed

export default function Main() {
    const [timetable, setTimetable] = useState(null); // State to store the generated timetable
    const [responseId, setResponseId] = useState(null); // State to store response ID
    const [file, setFile] = useState(null); // State to store the uploaded file
    const [query, setQuery] = useState(''); // State to store the query input
    const [filename, setFilename] = useState(''); // New state for filename

    // const handleRequest = () => {
    //     const exampleData = [
    //         { day: "Monday", time: "9 AM - 10 AM", course: "CS101", instructor: "Dr. Smith", room: "101" },
    //         { day: "Tuesday", time: "10 AM - 11 AM", course: "CS102", instructor: "Dr. Doe", room: "102" },
    //     ];
    //     setTimetable(exampleData);
    // };

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
            setFilename(selectedFile.name); // Set the filename
            // handleRequest();
        }
    };

    const handleRequest = async () => {
        if (!file) {
            alert("Please upload a file before proceeding.");
            return;
        }

        try {
            // Step 1: Hit the first API to upload the file
            const formData = new FormData();
            formData.append("file", file); // Assuming the input name for the file is "file"

            const uploadResponse = await fetch("https://f1smartaischeduler.dev.ryzeai.ai/upload", {
                method: "POST",
                body: formData,
            });

            console.log(uploadData);

            if (!uploadResponse.ok) {
                throw new Error("Failed to upload file");
            }

            const uploadData = await uploadResponse.json();
            console.log("File upload response:", uploadData);

            // Step 2: Extract the process_id from the response
            const processId = uploadData.process_id; // Adjust according to the actual response structure

            // Step 3: Hit the second API with the process_id and the query
            const queryResponse = await fetch(`https://f1smartaischeduler.dev.ryzeai.ai/ask?process_id=${processId}`, {
                method: "POST", // Assuming this endpoint requires POST; adjust as necessary
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ query }), // Send the query in the body
            });

            if (!queryResponse.ok) {
                throw new Error("Failed to get response from the query API");
            }

            const queryData = await queryResponse.json();
            console.log("Query API response:", queryData);

            // Step 4: Update the timetable state based on the response from the second API
            setTimetable(queryData.timetable || []); // Adjust according to your response structure
        } catch (error) {
            console.error("Error occurred:", error);
            // Handle error (e.g., show a notification to the user)
        }
    };
    const resetWindow = () => {
        setTimetable(null); // Clear the timetable
        setResponseId(null); // Clear the response ID
        setFile(null); // Clear the uploaded file
        setQuery('');
    };

    const SpeechInputComponent = () => {
        const [text, setText] = useState('');
        const [isListening, setIsListening] = useState(false);

        const handleSpeechRecognition = () => {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

            if (!SpeechRecognition) {
                alert('Speech Recognition API not supported in this browser.');
                return;
            }

            const recognition = new SpeechRecognition();
            recognition.continuous = false;
            recognition.interimResults = false;
            recognition.lang = 'en-US';

            recognition.onstart = () => {
                setIsListening(true);
            };

            recognition.onresult = (event) => {
                const spokenText = event.results[0][0].transcript;
                setText(spokenText); // Update the input with spoken text
            };

            recognition.onend = () => {
                setIsListening(false);
            };

            recognition.onerror = (event) => {
                console.error('Speech recognition error:', event.error);
                setIsListening(false);
            };

            recognition.start();
        };

        return (
            <div className="flex flex-col md:flex-row items-start p-8 bg-gray-100">

                <div className="bg-white shadow-lg border rounded-lg p-8 w-full md:w-4/12 mb-8 md:mb-0 md:mr-8">
                    <h1 className="text-2xl font-bold mb-6">Create Your Schedule</h1>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Upload your rules</label>
                        <input type="file" className="block w-full px-4 py-2 border rounded-lg" 
                         onChange={handleFileChange} 
                         />
                        <p className="text-sm text-gray-500 mt-1">Supported files: All file types.</p>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Schedule to be created</label>
                        <div className="flex items-center border rounded-lg px-4 py-2">
                            <input
                                type="text"
                                placeholder="Generate a timetable for CS department"
                                className="flex-grow focus:outline-none"
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                            />

                            <button
                                onClick={handleSpeechRecognition}
                                className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 rounded "
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="flex space-x-4">
                        <button
                            onClick={handleRequest} // Trigger the timetable generation
                            className="bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700"
                        >
                            Perform Request
                        </button>
                        <button
                            onClick={resetWindow} // Reset the window
                            className="bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300"
                        >
                            Reset Window
                        </button>
                    </div>
                </div>

                {/* Results Section */}
                <div className="bg-white shadow-lg border rounded-lg p-8 w-full md:w-8/12">
                    <h2 className="text-xl font-semibold mb-4">Results</h2>
                    {timetable ? (
                        <table className="w-full text-left mb-4 border">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="py-2 px-4 border">No.</th>
                                    <th className="py-2 px-4 border">Day</th>
                                    <th className="py-2 px-4 border">Time</th>
                                    <th className="py-2 px-4 border">Course</th>
                                    <th className="py-2 px-4 border">Instructor</th>
                                    <th className="py-2 px-4 border">Room</th>
                                </tr>
                            </thead>
                            <tbody>
                                {timetable.map((item, index) => (
                                    <tr key={index}>
                                        <td className="py-2 px-4 border">{index + 1}</td>
                                        <td className="py-2 px-4 border">{item.day}</td>
                                        <td className="py-2 px-4 border">{item.time}</td>
                                        <td className="py-2 px-4 border">{item.course}</td>
                                        <td className="py-2 px-4 border">{item.instructor}</td>
                                        <td className="py-2 px-4 border">{item.room}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <p className="mb-4">No data available yet. Please upload your schedule.</p>
                    )}
                </div>
            </div>
        );
    };

    return <SpeechInputComponent />; // Render SpeechInputComponent within Main
}


