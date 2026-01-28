"use client";
import React, { useState, useEffect } from 'react';
import whatsapp from "../assets/WhatsApp.webp"
import chat_bg from "../assets/chat_bg.png"
import manish from "../assets/Manish.png"

function getISTTime() {
  const now = new Date();
  const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
  const istOffset = 5.5 * 60 * 60000;
  const ist = new Date(utc + istOffset);
  return ist.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', hour12: false });
}

const WhatsAppButton = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [chatTime, setChatTime] = useState('');
  const phoneNumber = '919634182319';

  useEffect(() => {
    const interval = setInterval(() => {
      if (!showPopup) {
        setChatTime(getISTTime());
        setShowPopup(true);
      }
    }, 20000); // 20 seconds
    return () => clearInterval(interval);
  }, [showPopup]);

  const handleSend = () => {
    if (!inputValue.trim()) return;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(inputValue)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setShowPopup(false);
  };

  const handleOpenPopup = () => {
    setChatTime(getISTTime());
    setShowPopup(true);
  };

  return (
    <>
      <div
        className="fixed bottom-3 right-3 z-50 cursor-pointer"
        onClick={handleOpenPopup}
      >
        <div className="bg-[#25D366] rounded-full p-2 shadow-lg animate-whatsapp-pulse">
          <img
            src={whatsapp}
            alt="Chat on WhatsApp"
            width={50}
            height={50}
          />
        </div>
      </div>
      {showPopup && (
        <div className="fixed bottom-20 md:bottom-24 right-4 md:right-10 z-50 w-72 md:w-80 max-w-[90vw] h-[280px] md:h-[350px] bg-white rounded-3xl shadow-2xl animate-crazy-bounce-in flex flex-col">
          {/* Header */}
          <div className="flex items-center bg-[#075E54] rounded-t-2xl px-3 md:px-4 py-2 md:py-3 relative">
            <div className="relative w-8 h-8 md:w-10 md:h-10 mr-2 md:mr-3">
              <img src={manish} alt="WA" className="w-8 h-8 md:w-10 md:h-10 rounded-full" />
              <span className="absolute bottom-0 right-0 w-2 h-2 md:w-3 md:h-3 bg-[#25D366] border border-white rounded-full"></span>
            </div>
            <div className="flex-1">
              <div className="text-white font-semibold leading-tight text-sm md:text-base">Manish Sharma</div>
              <div className="text-xs text-[#d9fdd3]">Build bold ship fast</div>
            </div>
            <button
              className="text-white text-lg md:text-xl absolute right-3 md:right-4 top-2 md:top-3 hover:text-gray-200 cursor-pointer"
              onClick={() => setShowPopup(false)}
              aria-label="Close chat"
            >
              ×
            </button>
          </div>
          {/* Chat bubble */}
          <div className="px-3 md:px-4 py-2 md:py-3 flex-1 flex flex-col gap-2 overflow-y-auto bg-cover bg-center" style={{ backgroundImage: `url(${chat_bg})` }}>
            <div className="self-start bg-white rounded-tl-2xl rounded-tr-2xl rounded-br-2xl border border-gray-200 shadow-sm text-gray-800 max-w-[80%] px-3 md:px-4 py-2 mt-2 ml-1">
              <div className="font-semibold text-xs md:text-sm mb-1">Manish Sharma</div>
              <div className="text-xs md:text-sm">Hello there! 👋<br/>How can i help you?</div>
              <div className="text-xs text-gray-400 text-right mt-1">{chatTime}</div>
            </div>
          </div>
          {/* Input area */}
          <div className="flex items-center px-2 md:px-3 py-2 bg-white rounded-b-2xl border-t border-gray-100">
            <input
              type="text"
              className="flex-1 outline-none border-none bg-transparent text-xs md:text-sm px-2 py-1 text-gray-400"
              placeholder="Type a message.."
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
            />
            <div className="ml-1 md:ml-2 flex items-center">
              <button
                className={`p-1.5 md:p-2 rounded-full bg-[#25D366] transition-all duration-300 rotate-45 cursor-pointer
                  ${inputValue.trim() ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-75 pointer-events-none'}`}
                onClick={handleSend}
                aria-label="Send message"
                style={{ willChange: 'opacity, transform' }}
              >
                {/* Rocket SVG icon */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-4 h-4 md:w-5 md:h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12l14-5-5 14-2.5-6.5L5 12z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsAppButton;