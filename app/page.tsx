import { connectMongoDB } from "@/config/db-config";
import { GetCurrentUserFromMongoDB } from "@/server-actions/users";
import { UserButton } from "@clerk/nextjs";

connectMongoDB()

export default async function Home() {
  // const loggedInUserData = await currentUser();
  const loggedInUserData = await GetCurrentUserFromMongoDB();
  console.log(loggedInUserData);

  // let email = "";

  // if (loggedInUserData!.emailAddresses!) {
  //   email = loggedInUserData?.emailAddresses[0].emailAddress || "";
  // }

  return (
    <div className="">
      <div className="flex flex-col gap-3 text-3xl p-10">
        <UserButton afterSignOutUrl="/sign-in" />
        <span>Name: {loggedInUserData?.name}</span>
        <span>UserName: {loggedInUserData?.userName}</span>
        <span>Email: {loggedInUserData.email}</span>
      </div>
    </div>
  );
}
