import FAQItem from "./FAQItem";
import { faqs } from "./data";

export default function FAQList() {
  return (
    <div className="mx-auto mt-20 max-w-5xl">

      <div className="space-y-7">

        {faqs.map((faq) => (
          <FAQItem
            key={faq.question}
            question={faq.question}
            answer={faq.answer}
          />
        ))}

      </div>

    </div>
  );
}