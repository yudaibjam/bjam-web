"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const faqs = [
  {
    question: "どのAIツールに対応していますか？",
    answer:
      "特定のツールに限定しません。Copilot、ChatGPT、Gemini、Google Workspace AI、その他社内ツールなど、御社が利用可能な環境の中で最適な活用方法を設計します。",
  },
  {
    question: "社内のセキュリティ制約が厳しいのですが対応可能ですか？",
    answer:
      "はい。セキュリティ制約のある環境こそb-jamの得意分野です。御社のIT部門と連携し、許可されたツールの範囲内で最大限の成果を出します。",
  },
  {
    question: "小さい会社でもお願いできますか？",
    answer:
      "従業員50〜500名規模の企業を主な対象としていますが、規模に関わらずまずはご相談ください。",
  },
  {
    question: "料金はいくらですか？",
    answer:
      "ヒアリングの上、御社の状況に合わせたお見積りをお出しします。まずはお気軽に無料相談をご利用ください。",
  },
  {
    question: "研修だけでもお願いできますか？",
    answer:
      "はい。半日〜2日の研修プログラムを単体でもお受けしています。",
  },
  {
    question: "リモートで対応可能ですか？",
    answer:
      "基本的にオンラインでの対応が可能です。必要に応じて対面での実施も承ります。",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-muted-light py-16 sm:py-24">
      <Container>
        <SectionHeading title="よくあるご質問" />

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white border border-border rounded-lg overflow-hidden"
              >
                <button
                  type="button"
                  className="w-full flex items-center justify-between px-6 py-4 text-left cursor-pointer"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                >
                  <span className="font-medium text-foreground pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-muted transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-4 text-muted leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
