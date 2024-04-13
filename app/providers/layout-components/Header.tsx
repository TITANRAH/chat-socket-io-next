"use server";
import { User } from "@/interfaces/userInterface";
import CurrentUserInfo from "./CurrentUserInfo";
import { GetCurrentUserFromMongoDB } from "@/server-actions/users";



async function Header() {

  let userClerk: User;

  try {
    const response = await GetCurrentUserFromMongoDB();
    userClerk = response;
    
  } catch (error) {
    console.log(error);
  }

  return (
    <div className="bg-gray-200 w-full p-5 py-5 flex justify-between items-center border-b border-solid border-gray-300">
      <div>
        <h1 className="text-2xl font-semibold uppercase text-primary">Chat</h1>
      </div>
      <div className="gap-5 flex items-center"></div>

      {userClerk!._id && <CurrentUserInfo currentUserInfo={userClerk!} />}
    </div>
  );
}

export default Header;
