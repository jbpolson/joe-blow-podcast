
import React, { useState } from 'react';

interface ContactFormProps {
  handleButtonHover: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleButtonLeave: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const ContactForm = ({ handleButtonHover, handleButtonLeave }: ContactFormProps) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-4xl">
        <h2 className="text-4xl font-bold mb-12">
          REACH OUT AND CONNECT WITH US
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input 
              type="text" 
              placeholder="Name" 
              className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-highlight" 
            />
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-highlight" 
              value={email} 
              onChange={e => setEmail(e.target.value)} 
            />
          </div>
          <textarea 
            placeholder="Message" 
            rows={4} 
            className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-highlight" 
          />
          <button 
            type="submit" 
            className="px-6 py-2 rounded-full bg-black text-white hover:bg-highlight transition-all duration-200"
            onMouseMove={handleButtonHover}
            onMouseLeave={handleButtonLeave}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
