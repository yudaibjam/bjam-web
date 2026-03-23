"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ContactForm from "@/components/ContactForm";

const questions = [
  {
    question: "御社でAIツール（Copilot, ChatGPT等）は導入済みですか？",
    options: [
      "まだ導入していない",
      "導入したが使っている人は少ない",
      "一部の人が活用している",
      "全社的に活用している",
    ],
  },
  {
    question: "AI活用で一番解決したい課題は？",
    options: [
      "業務の効率化・時間短縮",
      "営業・マーケティングの強化",
      "社員のスキルアップ",
      "新規事業・新サービスの開発",
    ],
  },
  {
    question: "AI活用を推進する担当者はいますか？",
    options: [
      "専任の担当者がいる",
      "兼任で担当している人がいる",
      "まだ決まっていない",
    ],
  },
  {
    question: "AI活用に使える月間予算は？",
    options: [
      "まだ決まっていない",
      "〜30万円",
      "30万〜100万円",
      "100万円以上",
    ],
  },
  {
    question: "いつまでにAI活用を進めたいですか？",
    options: [
      "すぐにでも始めたい",
      "3ヶ月以内",
      "半年以内",
      "まだ具体的には決めていない",
    ],
  },
];

const results = {
  ready: {
    title: "すぐに始められます",
    emoji: "🚀",
    description:
      "御社はAI活用の準備が整っています。具体的な施策設計に入れる段階です。",
    recommendation:
      "AI業務変革コンサルティングで、御社の業務フローに最適なAI活用施策を設計・実装します。",
    cta: "具体的な施策を相談する",
  },
  foundation: {
    title: "まず基盤づくりから",
    emoji: "🔧",
    description:
      "ツールはあるのに使われていない、もったいない状態です。小さく始めて成果を出すアプローチが有効です。",
    recommendation:
      "AI自動化パッケージまたは研修で、まずは成功体験を作ることをおすすめします。",
    cta: "最適なプランを相談する",
  },
  firstStep: {
    title: "最初の一歩をお手伝い",
    emoji: "💡",
    description:
      "まずは御社の環境で何ができるかを整理するところから。無料相談で現状をお聞かせください。",
    recommendation:
      "30分の無料相談で、御社に合ったAI活用の第一歩をご提案します。",
    cta: "無料で相談する",
  },
};

type ResultKey = keyof typeof results;

function calculateResult(answers: number[]): ResultKey {
  let score = 0;

  // Q1 (index 0): AI tool adoption - index maps directly to points
  score += answers[0] ?? 0;

  // Q3 (index 2): person in charge - 0=2pts, 1=1pt, 2=0pts
  const q3 = answers[2] ?? 0;
  score += 2 - q3;

  // Q4 (index 3): budget - index maps directly to points
  score += answers[3] ?? 0;

  // Q5 (index 4): timeline - 0=3pts, 1=2pts, 2=1pt, 3=0pts
  const q5 = answers[4] ?? 0;
  score += 3 - q5;

  if (score >= 8) return "ready";
  if (score >= 4) return "foundation";
  return "firstStep";
}

export default function DiagnosisFlow() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = back

  const isResult = currentStep === 5;

  function handleSelect(optionIndex: number) {
    const newAnswers = [...answers];
    newAnswers[currentStep] = optionIndex;
    setAnswers(newAnswers);
    setDirection(1);
    setCurrentStep((s) => s + 1);
  }

  function handleBack() {
    setDirection(-1);
    setCurrentStep((s) => Math.max(0, s - 1));
  }

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -80 : 80,
      opacity: 0,
    }),
  };

  if (isResult) {
    const resultKey = calculateResult(answers);
    const result = results[resultKey];

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-2xl"
      >
        <div className="mb-10 text-center">
          <div className="mb-4 text-6xl">{result.emoji}</div>
          <h2 className="mb-4 text-2xl font-bold text-[#2563eb] sm:text-3xl">
            {result.title}
          </h2>
          <p className="text-base text-[#64748b] sm:text-lg">
            {result.description}
          </p>
        </div>

        <div className="mb-10 rounded-xl bg-[#dbeafe] p-6 text-center">
          <p className="text-base font-medium text-[#1a1a2e] sm:text-lg">
            {result.recommendation}
          </p>
        </div>

        <div className="mb-8 border-t border-[#e2e8f0]" />

        <div className="text-center">
          <h3 className="mb-6 text-lg font-bold text-[#1a1a2e] sm:text-xl">
            詳しいアドバイスをお送りします
          </h3>
          <ContactForm source="diagnosis" variant="full" />
        </div>
      </motion.div>
    );
  }

  const q = questions[currentStep];
  const progressPercent = ((currentStep + 1) / 5) * 100;

  return (
    <div className="mx-auto max-w-md">
      {/* Progress bar */}
      <div className="mb-8">
        <div className="mb-2 text-center text-sm text-[#64748b]">
          質問 {currentStep + 1} / 5
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-[#e2e8f0]">
          <div
            className="h-full rounded-full bg-[#2563eb] transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentStep}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.3 }}
        >
          {/* Question */}
          <h2 className="mb-8 text-center text-lg font-bold text-[#1a1a2e] sm:text-xl">
            {q.question}
          </h2>

          {/* Options */}
          <div className="flex flex-col gap-3">
            {q.options.map((option, i) => (
              <button
                key={i}
                type="button"
                onClick={() => handleSelect(i)}
                className="w-full cursor-pointer rounded-lg border border-[#e2e8f0] px-5 py-4 text-left text-sm font-medium text-[#1a1a2e] transition-colors hover:border-[#2563eb] hover:bg-[#dbeafe] sm:text-base"
              >
                {option}
              </button>
            ))}
          </div>

          {/* Back button */}
          {currentStep > 0 && (
            <div className="mt-6 text-center">
              <button
                type="button"
                onClick={handleBack}
                className="cursor-pointer text-sm text-[#64748b] hover:text-[#2563eb] transition-colors"
              >
                ← 戻る
              </button>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
