import { auth } from "@/auth";

const Home = async () => {
  const name: string = "ozden";
  const session = await auth();
  console.log(session);
  return (
    <>
      <h1 className="h2-semibold text-primary-500">
        Welcome to the world of Next JS {name}
      </h1>
      <h1 className="h2-semibold font-space-grotesk text-primary-500">
        Welcome to the world of Next JS
      </h1>
    </>
  );
};
export default Home;
