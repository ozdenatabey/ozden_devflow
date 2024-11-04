import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

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
      <form
        className="px-10 pt-[100px]"
        action={async () => {
          "use server";
          await signOut({ redirectTo: ROUTES.SIGN_IN });
        }}
      >
        <Button type="submit">Log out</Button>
      </form>
    </>
  );
};
export default Home;
