import React, { useState, useEffect, useRef } from 'react';
import { Send, MessageCircle, X, Loader2 } from 'lucide-react';
import OpenAI from 'openai';
import { products } from './../../../data/products';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_KEY, // کلید اصلاح شده طبق درخواست شما
  baseURL: "https://api.gapgpt.app/v1",
  dangerouslyAllowBrowser: true
});

const ChatSupport = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hello Kasra! How can I assist you with WE-SHOP products or sports brands today?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [
          { 
            role: "system", 
            content: `You are the specialized AI assistant for "WE-SHOP". 
            
            KNOWLEDGE BASE:
            - Current Inventory: ${JSON.stringify(products)}
            
            STRICT GUIDELINES:
            1. ONLY discuss items in the inventory or sports brands (Nike, Adidas, etc.).
            2. You are allowed to provide expert advice on brands (e.g., comparing Nike vs Adidas for running).
            3. If a user asks about anything unrelated to WE-SHOP, sports, or brands, say: "I am only specialized in WE-SHOP products and sports brands."
            4. Use inventory data for prices and availability.
            5. Keep responses professional, helpful, and concise.
            6. Response Language: ALWAYS respond in English.`
          },
          ...messages.map(m => ({ role: m.role, content: m.content })),
          userMessage
        ],
      });

      const aiResponse = response.choices[0].message.content;
      setMessages(prev => [...prev, { role: 'assistant', content: aiResponse }]);
    } catch (error) {
      console.error("Chat Error:", error);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'Sorry, I encountered an error. Please try again later.' 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 active:scale-95"
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
      </button>

      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[350px] h-[500px] bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-5">
          
          <div className="p-4 bg-slate-800 border-b border-slate-700 flex items-center justify-between">
            <div>
              <h3 className="text-white font-bold text-sm">WE-SHOP Support</h3>
              <p className="text-slate-400 text-[10px]">AI Assistant (Online)</p>
            </div>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          </div>

          <div 
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-4 space-y-4"
          >
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-blue-600 text-white rounded-tr-none' 
                    : 'bg-slate-800 text-slate-200 rounded-tl-none border border-slate-700'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-800 p-3 rounded-2xl rounded-tl-none border border-slate-700">
                  <Loader2 size={18} className="text-blue-500 animate-spin" />
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-slate-800 border-t border-slate-700">
            <div className="relative flex items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask your question..."
                className="w-full bg-slate-900 text-slate-200 text-sm p-3 pr-12 rounded-xl border border-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
              />
              <button
                onClick={handleSendMessage}
                disabled={isLoading}
                className="absolute right-2 p-2 text-blue-500 hover:text-blue-400 disabled:opacity-50"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatSupport;
