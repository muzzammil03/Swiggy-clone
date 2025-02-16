import { useState } from "react";
import Footer from "../components/Footer.jsx";
export default function HelpSupport() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    "I want to partner my restaurant with Swiggy",
    "What are the mandatory documents needed to list my restaurant on Swiggy?",
    "I want to opt-out from Google reserve",
    "After I submit all documents, how long will it take for my restaurant to go live on Swiggy?",
    "What is this one-time onboarding fee? Do I have to pay it while registering?",
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
    <div className="min-h-screen bg-gray-100">
     
      {/* Hero Section */}
      <div className="bg-blue-900 text-white text-center py-10">
        <h2 className="text-3xl font-bold">Help & Support</h2>
        <p className="text-lg opacity-80">Let's take a step ahead and help you better.</p>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto mt-8 p-4 md:p-8 bg-white shadow-lg rounded-lg">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <aside className="w-full md:w-1/3 bg-gray-300 p-4 rounded-lg">
            <ul className="space-y-3">
              {["Partner Onboarding", "Legal", "FAQs", "Instamart Onboarding"].map((item, index) => (
                <li key={index} className={`p-2 rounded-lg text-lg ${index === 0 ? "bg-white shadow-md font-bold" : "hover:bg-gray-200 cursor-pointer"}`}>
                  {item}
                </li>
              ))}
            </ul>
          </aside>

          {/* FAQ Section */}
          <div className="w-full md:w-2/3">
            <h3 className="text-2xl font-semibold mb-4">Partner Onboarding</h3>
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b pb-2">
                  <button
                    className="flex justify-between w-full text-left text-lg font-medium text-gray-700"
                    onClick={() => toggleFAQ(index)}
                  >
                    {faq}
                    <span>{openIndex === index ? "▲" : "▼"}</span>
                  </button>
                  {openIndex === index && (
                    <p className="text-gray-600 mt-2 text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}
