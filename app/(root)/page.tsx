import Link from "next/link";

import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilter from "@/components/filters/HomeFilter";
import LocalSearch from "@/components/search/LocalSearch";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";
import handleError from "@/lib/handlers/error";
import dbConnect from "@/lib/mongoose";

const questions = [
  {
    _id: "1",
    title: "How to learn React?",
    description: "I want to learn React, can anyone help me?",
    tags: [
      { _id: "1", name: "React" },
      { _id: "2", name: "Javascript" },
    ],
    author: {
      _id: "1",
      name: "John Doe",
      image:
        "https://t4.ftcdn.net/jpg/02/79/66/93/360_F_279669366_Lk12QalYQKMczLEa4ySjhaLtx1M2u7e6.jpg",
    },
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
    author: {
      _id: "2",
      name: "Jane Smith",
      image:
        "https://t4.ftcdn.net/jpg/02/79/66/93/360_F_279669366_Lk12QalYQKMczLEa4ySjhaLtx1M2u7e6.jpg",
    },
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
    author: {
      _id: "3",
      name: "Alice Johnson",
      image:
        "https://t4.ftcdn.net/jpg/02/79/66/93/360_F_279669366_Lk12QalYQKMczLEa4ySjhaLtx1M2u7e6.jpg",
    },
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
    author: {
      _id: "4",
      name: "Bob Brown",
      image:
        "https://png.pngtree.com/png-clipart/20190924/original/pngtree-vector-user-young-boy-avatar-icon-png-image_4827810.jpg",
    },
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
    author: {
      _id: "5",
      name: "Sara Lee",
      image:
        "https://png.pngtree.com/png-clipart/20190924/original/pngtree-vector-user-young-boy-avatar-icon-png-image_4827810.jpg",
    },
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
    author: {
      _id: "6",
      name: "Tom White",
      image:
        "https://png.pngtree.com/png-clipart/20190924/original/pngtree-vector-user-young-boy-avatar-icon-png-image_4827810.jpg",
    },
    upvotes: 14,
    answers: 5,
    views: 190,
    createdAt: new Date(),
  },
];

interface SearchParams {
  searchParams: Promise<{ [key: string]: string }>;
}

const test = async () => {
  try {
    await dbConnect();
  } catch (error) {
    return handleError(error);
  }
};

const Home = async ({ searchParams }: SearchParams) => {
  const result = await test();
  console.log(result);

  const { query = "", filter = "" } = await searchParams;

  const filteredQuestions = questions.filter((question) => {
    const matchesQuery = question.title
      .toLowerCase()
      .includes(query.toLowerCase());
    const matchesFilter = filter
      ? question.tags[0].name.toLowerCase() === filter.toLowerCase()
      : true;
    return matchesQuery && matchesFilter;
  });
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
      <HomeFilter />
      <div className="mt-10 flex w-full flex-col gap-6">
        {filteredQuestions.map((question) => (
          <QuestionCard key={question._id} question={question} />
        ))}
      </div>
    </>
  );
};
export default Home;
