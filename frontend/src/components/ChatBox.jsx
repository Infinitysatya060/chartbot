import { useState } from "react";
import API from "../services/api";
import { SendHorizonal, Bot, User } from "lucide-react";

function ChatBox() {

    const [message, setMessage] = useState("");
    const [chat, setChat] = useState([]);
    const [loading, setLoading] = useState(false);

    const sendMessage = async () => {

        if (!message.trim()) return;

        const userMessage = {
            type: "user",
            text: message
        };

        setChat((prev) => [...prev, userMessage]);

        const currentMessage = message;

        setMessage("");

        try {

            setLoading(true);

            const response = await API.post("/chat/", {
                message: currentMessage
            });

            const botMessage = {
                type: "bot",
                text: response.data.reply
            };

            setChat((prev) => [...prev, botMessage]);

        } catch (error) {

            console.log(error);

            const errorMessage = {
                type: "bot",
                text: "Server Error or Backend Not Running"
            };

            setChat((prev) => [...prev, errorMessage]);

        } finally {

            setLoading(false);
        }
    };

    return (

        <div className="bg-[#0f172a] h-screen flex flex-col">

            {/* Header */}

            <div className="bg-[#111827] border-b border-gray-700 p-4 flex items-center gap-3 shadow-md">

                <div className="bg-blue-600 p-2 rounded-full">
                    <Bot className="text-white" size={22} />
                </div>

                <div>
                    <h1 className="text-white text-xl font-semibold">
                        AI Chatbot
                    </h1>

                    <p className="text-gray-400 text-sm">
                        Online
                    </p>
                </div>

            </div>

            {/* Chat Area */}

            <div className="flex-1 overflow-y-auto p-4 space-y-4">

                {chat.length === 0 && (

                    <div className="h-full flex items-center justify-center">

                        <div className="text-center">

                            <Bot
                                size={60}
                                className="mx-auto text-blue-500 mb-4"
                            />

                            <h2 className="text-white text-2xl font-bold">
                                Welcome to AI Chatbot
                            </h2>

                            <p className="text-gray-400 mt-2">
                                Ask anything and start chatting
                            </p>

                        </div>

                    </div>
                )}

                {chat.map((item, index) => (

                    <div
                        key={index}
                        className={`flex ${
                            item.type === "user"
                                ? "justify-end"
                                : "justify-start"
                        }`}
                    >

                        <div
                            className={`max-w-[75%] px-4 py-3 rounded-2xl shadow-md ${
                                item.type === "user"
                                    ? "bg-blue-600 text-white rounded-br-none"
                                    : "bg-[#1e293b] text-gray-200 rounded-bl-none border border-gray-700"
                            }`}
                        >

                            <div className="flex items-start gap-2">

                                {item.type === "bot" ? (
                                    <Bot size={18} className="mt-1" />
                                ) : (
                                    <User size={18} className="mt-1" />
                                )}

                                <p className="whitespace-pre-wrap text-sm leading-relaxed">
                                    {item.text}
                                </p>

                            </div>

                        </div>

                    </div>
                ))}

                {loading && (

                    <div className="flex justify-start">

                        <div className="bg-[#1e293b] border border-gray-700 text-gray-300 px-4 py-3 rounded-2xl rounded-bl-none">

                            AI is typing...

                        </div>

                    </div>
                )}

            </div>

            {/* Input Area */}

            <div className="p-4 border-t border-gray-700 bg-[#111827]">

                <div className="flex items-center gap-3">

                    <textarea
                        className="flex-1 bg-[#1e293b] text-white border border-gray-700 rounded-xl p-4 outline-none resize-none focus:border-blue-500"
                        rows="2"
                        placeholder="Type your message..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />

                    <button
                        className="bg-blue-600 hover:bg-blue-700 transition-all text-white p-4 rounded-xl disabled:opacity-50"
                        onClick={sendMessage}
                        disabled={loading}
                    >

                        <SendHorizonal size={22} />

                    </button>

                </div>

            </div>

        </div>
    );
}

export default ChatBox;