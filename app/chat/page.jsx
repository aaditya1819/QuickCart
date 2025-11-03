'use client';
import { useState } from 'react';

// Define predefined questions and answers
const predefinedQA = [
  {
    question: "What are your shipping options?",
    answer: "We offer standard, expedited, and next-day shipping. Costs and delivery times vary by location."
  },
  {
    question: "How can I track my order?",
    answer: "Once your order has shipped, you will receive an email with a tracking number and a link to the carrier's website."
  },
  {
    question: "What is your return policy?",
    answer: "We accept returns within 30 days of purchase. Items must be in their original condition. Please visit our returns page for more information."
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes, we ship to most countries. International shipping rates and times will be calculated at checkout."
  },
  {
    question: "How can I contact customer support?",
    answer: "You can reach our customer support team by emailing support@example.com or by calling our toll-free number at 1-800-123-4567."
  }
];

export default function Chat() {
  const [openQuestion, setOpenQuestion] = useState(null);
  const [history, setHistory] = useState([]);

  // Handle clicking on a predefined question
  const handleQuestionClick = (qa) => {
    // Set the currently open question
    setOpenQuestion(qa.question);
    // Add the question and answer to the history
    setHistory(prev => [...prev, qa]);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-150px)] max-w-2xl mx-auto my-8">
      <div className="flex-grow overflow-y-auto p-4 space-y-4">
        <h1 className="text-2xl font-bold mb-4">Frequently Asked Questions</h1>
        <div className="space-y-2">
          {predefinedQA.map((qa, index) => (
            <div key={index}>
              <button
                onClick={() => handleQuestionClick(qa)}
                className="w-full text-left p-2 bg-gray-100 hover:bg-gray-200 rounded-md focus:outline-none"
              >
                {qa.question}
              </button>
              {openQuestion === qa.question && (
                <div className="p-2 bg-blue-100 rounded-md mt-1">
                  <p>{qa.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="p-4 border-t">
        <h2 className="text-xl font-bold mb-2">Conversation History</h2>
        <div className="space-y-2">
          {history.map((item, index) => (
            <div key={index}>
              <p className="font-semibold text-blue-600">{item.question}</p>
              <p>{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
