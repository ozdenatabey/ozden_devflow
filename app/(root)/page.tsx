import Link from "next/link";

import LocalSearch from "@/components/search/LocalSearch";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

const questions = [
  {
    _id: "1",
    title: "How to learn React?",
    description: "I want to learn React, can anyone help me?",
    tags: [
      { _id: "1", name: "React" },
      { _id: "2", name: "Javascript" },
    ],
    author: { _id: "1", name: "John Doe" },
    upvotes: 10,
    answers: 5,
    views: 100,
    createdAt: new Date(),
  },
  {
    _id: "2",
    title: "How to get started with Next.js?",
    description:
      "I'm new to Next.js and would love some guidance on setting up my first project.",
    tags: [
      { _id: "8", name: "Next.js" },
      { _id: "2", name: "Javascript" },
    ],
    author: { _id: "2", name: "Jane Smith" },
    upvotes: 22,
    answers: 10,
    views: 250,
    createdAt: new Date(),
  },
  {
    _id: "3",
    title: "What's the difference between Tailwind CSS and Bootstrap?",
    description:
      "Can someone explain the main differences between Tailwind CSS and Bootstrap?",
    tags: [
      { _id: "9", name: "Tailwind CSS" },
      { _id: "10", name: "Bootstrap" },
    ],
    author: { _id: "3", name: "Alice Johnson" },
    upvotes: 17,
    answers: 8,
    views: 220,
    createdAt: new Date(),
  },
  {
    _id: "4",
    title: "How to use Vue.js with Vuex for state management?",
    description:
      "I'm building a Vue app and want to manage global state. Is Vuex the best option?",
    tags: [
      { _id: "11", name: "Vue.js" },
      { _id: "12", name: "Vuex" },
    ],
    author: { _id: "4", name: "Bob Brown" },
    upvotes: 13,
    answers: 6,
    views: 180,
    createdAt: new Date(),
  },
  {
    _id: "5",
    title: "SSR vs. SSG in Next.js?",
    description:
      "What are the pros and cons of server-side rendering vs. static site generation in Next.js?",
    tags: [
      { _id: "8", name: "Next.js" },
      { _id: "13", name: "SSR" },
      { _id: "14", name: "SSG" },
    ],
    author: { _id: "5", name: "Sara Lee" },
    upvotes: 19,
    answers: 9,
    views: 300,
    createdAt: new Date(),
  },
  {
    _id: "6",
    title: "Best practices for animations in Angular?",
    description:
      "How can I add smooth animations to my Angular app without affecting performance?",
    tags: [
      { _id: "15", name: "Angular" },
      { _id: "16", name: "Animations" },
    ],
    author: { _id: "6", name: "Tom White" },
    upvotes: 14,
    answers: 5,
    views: 190,
    createdAt: new Date(),
  },
];

interface SearchParams {
  searchParams: Promise<{ [key: string]: string }>;
}

const Home = async ({ searchParams }: SearchParams) => {
  const { query = "" } = await searchParams;
  const filteredQuestions = questions.filter((question) =>
    question.title.toLowerCase().includes(query?.toLocaleLowerCase())
  );
  return (
    <>
      <section className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>

        <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
          <Link href={ROUTES.ASK_QUESTION}>Ask a Question</Link>
        </Button>
      </section>
      <section className="mt-11">
        <LocalSearch
          route="/"
          imgSrc="/icons/search.svg"
          placeholder="Search questions..."
          otherClasses="flex-1"
        />
      </section>
      {/* Home Filter */}
      <div className="mt-10 flex w-full flex-col gap-6">
        {filteredQuestions.map((question) => (
          <h1 key={question._id}>{question.title}</h1>
        ))}
      </div>
    </>
  );
};
export default Home;
