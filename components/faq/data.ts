export interface FAQ {
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    question: "How does SajiloPass calculate my fare?",
    answer:
      "SajiloPass securely compares your journey with the bus's live GPS route to calculate the exact fare based on the distance travelled.",
  },
  {
    question: "Do I need internet while travelling?",
    answer:
      "An internet connection is recommended for the best experience, allowing real-time journey detection and secure payment processing.",
  },
  {
    question: "Is my location tracked all the time?",
    answer:
      "No. Your location is only used during an active journey to detect boarding, calculate your trip, and determine the correct fare.",
  },
  {
    question: "What happens if my phone battery dies?",
    answer:
      "If your phone powers off during a trip, SajiloPass safely preserves your latest journey data and helps complete the trip once you're back online.",
  },
  {
    question: "Which payment methods are supported?",
    answer:
      "SajiloPass supports secure digital wallets and additional payment options that will continue expanding as the platform grows.",
  },
  {
    question: "Will I receive a receipt?",
    answer:
      "Yes. Every completed journey generates a digital receipt that can be delivered through SMS, email, or viewed directly in the app.",
  },
];