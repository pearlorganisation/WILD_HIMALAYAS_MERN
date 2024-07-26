import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionHeading from "./SectionHeading";

const FaqSection = () => {
  const accordionData = [
    {
      id: 1,
      ques: "Why is your trek fee higher than that of other trekking companies? ",
      answer:
        "Many trekkers call and ask us this question. You may notice that our trek fee is marginally higher for some treks, and you may wonder why you have to pay more for the same trek. The answer is straightforward. There's a very big difference in the quality of the experience you will have with Indiahikes compared with anyone else. You'll notice a stark difference in three areas:",
    },
    {
      id: 2,
      ques: "I'm a solo woman. Is it safe for me? ",
      answer:
        "Many trekkers call and ask us this question. You may notice that our trek fee is marginally higher for some treks, and you may wonder why you have to pay more for the same trek. The answer is straightforward. There's a very big difference in the quality of the experience you will have with Indiahikes compared with anyone else. You'll notice a stark difference in three areas:",
    },
    {
      id: 3,
      ques: "What are some easy treks for beginners?",
      answer:
        "Many trekkers call and ask us this question. You may notice that our trek fee is marginally higher for some treks, and you may wonder why you have to pay more for the same trek. The answer is straightforward. There's a very big difference in the quality of the experience you will have with Indiahikes compared with anyone else. You'll notice a stark difference in three areas:",
    },
    {
      id: 4,
      ques: "Can I join your groups as a solo trekker?",
      answer:
        "Many trekkers call and ask us this question. You may notice that our trek fee is marginally higher for some treks, and you may wonder why you have to pay more for the same trek. The answer is straightforward. There's a very big difference in the quality of the experience you will have with Indiahikes compared with anyone else. You'll notice a stark difference in three areas:",
    },
    {
      id: 5,
      ques: "Why do I have to register so much in advance?",
      answer:
        "Many trekkers call and ask us this question. You may notice that our trek fee is marginally higher for some treks, and you may wonder why you have to pay more for the same trek. The answer is straightforward. There's a very big difference in the quality of the experience you will have with Indiahikes compared with anyone else. You'll notice a stark difference in three areas:",
    },
  ];
  return (

    <section className="mx-auto max-w-7xl px-2 py-10 md:px-0">
      <div>
        <SectionHeading mainHeading={"Frequently Asked Questions"} />
        <div className="mx-auto mt-8 max-w-3xl space-y-4 md:mt-16">
          <Accordion type="single" collapsible>
            {accordionData?.map((item) => (
              <>
                <AccordionItem value={item.id} key={item.id}>
                  <AccordionTrigger>{item?.ques}</AccordionTrigger>
                  <AccordionContent>{item?.answer}</AccordionContent>
                </AccordionItem>
              </>
            ))}
          </Accordion>
        </div>
        <p className="textbase mt-6 text-center text-gray-600">
          Can&apos;t find what you&apos;re looking for?{" "}
          <a
            href="#"
            title=""
            className="font-semibold text-myStyle hover:underline"
          >
            Contact our support
          </a>
        </p>
      </div>
    </section>
    
  );
};
export default FaqSection;
