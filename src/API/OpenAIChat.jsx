import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";

const useOpenAIChat = (userAPIKey) => {
  const INITIAL_CHAT_MESSAGES = {
    role: "system",
    content:
      "You are DoctorGPT, you will be provided with questions or cases from patients about their health, and your task is to provide them with the reasons and solutions for their cases in Arabic.",
  };
  const [isLoading, setIsLoading] = useState(false);
  const [chatMessages, setChatMessages] = useState([INITIAL_CHAT_MESSAGES]);

  const openai = new OpenAIApi(
    new Configuration({
      apiKey: userAPIKey || import.meta.env.VITE_OPENAI_API_KEY,
    }),
  );

  const sendMessage = async (message, setUserMessage) => {
    setUserMessage("");
    const newChatMessage = [
      ...chatMessages,
      { role: "user", content: message },
    ];
    setChatMessages(newChatMessage);
    try {
      setIsLoading(true);
      const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: newChatMessage,
      });

      const reply = completion.data.choices[0].message.content;
      setChatMessages([
        ...newChatMessage,
        { role: "assistant", content: reply },
      ]);
      return { sender: "AI", message: reply };
    } catch (error) {
      console.error(error);
      const response = JSON.parse(error.response.request.responseText).error
        .code;
      if (response === "invalid_api_key") {
        console.log(error);
        return { sender: "Error", message: "Error 401: Invalid API Key" };
      } else {
        return { sender: "Error", message: error.message };
      }
    } finally {
      setIsLoading(false);
      const loadingMessage = document.getElementById("Loading");
      if (loadingMessage) loadingMessage.remove();
    }
  };

  const reloadChat = () => {
    setChatMessages([INITIAL_CHAT_MESSAGES]);
    const chatMessages = document.getElementById("chat-messages");
    chatMessages.innerHTML = "";
  };

  return {
    isLoading,
    sendMessage,
    reloadChat,
  };
};

export default useOpenAIChat;
