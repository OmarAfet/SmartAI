import { Configuration, OpenAIApi } from "openai";
import { useState, useRef } from "react";
import Input from "../Components/Input";

const DoctorGPT = () => {
	const [userMessage, setUserMessage] = useState("");
	const [chatMessages, setChatMessages] = useState([{ role: "system", content: "You are DoctorGPT, you will be provided with questions or cases from patients about their health, and your task is to provide them with the reasons and solutions for their cases in Arabic." }]);
	const [isLoading, setIsLoading] = useState(false);
	// const [userAPIKey, setUserAPIKey] = useState("");
	const lastMessageRef = useRef(null);

	const openai = new OpenAIApi(
		new Configuration({
			apiKey: import.meta.env.VITE_OPENAI_API_KEY,
		})
	);

	const reloadChat = () => {
		const chatMessages = document.getElementById("chat-messages");
		chatMessages.innerHTML = "";
		setChatMessages([{ role: "system", content: "You are DoctorGPT, you will be provided with questions or cases from patients about their health, and your task is to provide them with the reasons and solutions for their cases in Arabic." }]);
	};

	const handleSubmit = () => {
		const newChatMessages = [...chatMessages, { role: "user", content: userMessage }];
		setChatMessages(newChatMessages);
		appendMessage("User", userMessage);
		setUserMessage("");
		sendMessage(newChatMessages);
	};

	const sendMessage = async (messages) => {
		try {
			if (isLoading) return;
			if (!userMessage) return;
			setIsLoading(true);
			appendMessage("Loading", "<img class='h-6 w-6' src='./Images/Loading Black.gif' />");
			const completion = await openai.createChatCompletion({
				model: "gpt-3.5-turbo",
				messages: messages,
			});

			const reply = completion.data.choices[0].message.content;
			appendMessage("AI", reply);
			const newChatMessages = [...messages, { role: "assistant", content: reply }];
			setChatMessages(newChatMessages);
		} catch (error) {
			console.error(error);
			const response = JSON.parse(error.response.request.responseText).error.code;
			if (response === "invalid_api_key"/* || !userAPIKey */) {
				console.log(error);
				appendMessage("Error", "Error 401: Invalid API Key");
			} else {
				appendMessage("Error", "حدث خطأ أثناء معالجة طلبك. حاول مرة اخرى.");
			}
		} finally {
			const loadingMessage = document.getElementById("Loading");
			if (loadingMessage) loadingMessage.remove();
			setIsLoading(false);
			if (lastMessageRef.current) {
				lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
			}
		}
	};

	const appendMessage = (sender, message) => {
		if (isLoading) return;
		if (!userMessage) return;
		const chatMessages = document.getElementById("chat-messages");
		const messageElement = document.createElement("div");
		messageElement.id = sender;
		messageElement.className = `flex ${sender == "User" ? "items-start" : "items-end"} flex flex-col`;
		messageElement.innerHTML = `
			<div class="font-bold">
				${sender === "User" ? "انت" : "DoctorGPT"}
			</div>
			<div class="${sender == "User" ? "bg-main text-OpenColor-gray-0" : sender == "Error" ? "bg-OpenColor-red-1" : "bg-OpenColor-gray-1"} p-2 rounded-lg break-all">
				${message}
			</div>
		`;
		chatMessages.appendChild(messageElement);
	};

	return (
		<>
			<div className="container mx-auto">
				{/* API input field (in case there's no free API from the owner) */}
				{/* <div className="max-w-4xl mx-auto p-4">
					<div id="chat-container" className="bg-white p-4 rounded-lg shadow-lg overflow-hidden">
						<div className="text-center text-sm">
							<div className="flex flex-row-reverse gap-2">
								<div className="flex-1 relative flex items-center">
									<Input
										placeholder={"API KEY"}
										onChange={(e) => {
											setUserAPIKey(e.target.value);
										}}
										value={userAPIKey}
										type={"password"}
									/>
								</div>
							</div>
							<div className="pt-4 text-center text-sm">
								<div dir="ltr">To get the app up and running please set your OpenAI API Key.</div>
								<div>لتشغيل التطبيق ، يرجى تعيين مفتاح OpenAI API الخاص بك.</div>
							</div>
						</div>
					</div>
				</div> */}
				<div className="max-w-4xl mx-auto p-4">
					<div id="chat-container" className="bg-white p-4 rounded-lg shadow-lg overflow-hidden">
						<div className="text-center font-bold text-2xl p-4 pt-0">DoctorGPT</div>
						<hr />
						<div id="chat-messages" className="flex flex-col gap-4 py-8">
							{/* Messages */}
						</div>
						<div className="flex flex-row-reverse gap-2">
							<div className="flex-1 relative flex items-center">
								<Input
									onKeyDown={(e) => {
										if (e.key === "Enter") {
											handleSubmit();
										}
									}}
									placeholder={"اكتب رسالة..."}
									onChange={(e) => {
										setUserMessage(e.target.value);
									}}
									value={userMessage}
								/>
							</div>
							<button onClick={handleSubmit} className="bg-main p-2 rounded-lg">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
									<path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
								</svg>
							</button>
							<button onClick={reloadChat} className="bg-main p-2 rounded-lg">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="white" className="w-6 h-6">
									<path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
								</svg>
							</button>
						</div>
						<div ref={lastMessageRef} className="pt-4 text-center text-sm">
							<div dir="ltr">
								DoctorGPT is still under development if you face any errors please{" "}
								<a className="text-main" target="_blank" href="https://github.com/OmarAfet/SmartAI/issues/new">
									contact us
								</a>
							</div>
							<div>
								لا يزال DoctorGPT قيد التطوير إذا واجهت أي أخطاء ، يرجى{" "}
								<a className="text-main" target="_blank" href="https://github.com/OmarAfet/SmartAI/issues/new">
									{" "}
									التواصل
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default DoctorGPT;
