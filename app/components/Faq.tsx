import { useState } from "react";
import { useIntl } from "react-intl";
import { FiPlus, FiMinus } from "react-icons/fi";

export default function FAQ() {
  const intl = useIntl();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: intl.formatMessage({ id: "aqw" }), 
      answer: intl.formatMessage({ id: "sac" }),   
    },
    {
      question: intl.formatMessage({ id: "se2" }),
      answer: intl.formatMessage({ id: "as3" }),
    },
    {
      question: intl.formatMessage({ id: "23d" }),
      answer: intl.formatMessage({ id: "123" }),
    },
    {
      question: intl.formatMessage({ id: "1ds" }),
      answer: intl.formatMessage({ id: "12g" }),
    },
    {
      question: intl.formatMessage({ id: "125" }),
      answer: intl.formatMessage({ id: "126" }),
    },
  ];

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto mt-16 px-4">
      <h2 className="text-3xl font-bold mb-10 text-center text-dark-red">
        {intl.formatMessage({ id: "ttr" })}
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-2xl shadow hover:shadow-md transition"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center px-5 py-4 font-semibold text-gray-800 text-lg"
            >
              <span>{faq.question}</span>
              {openIndex === index ? (
                <FiMinus className="text-xl text-dark-red" />
              ) : (
                <FiPlus className="text-xl text-dark-red" />
              )}
            </button>

            {openIndex === index && (
              <div className="px-5 py-4 text-gray-700 bg-gray-50 border-t animate-fadeIn">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}