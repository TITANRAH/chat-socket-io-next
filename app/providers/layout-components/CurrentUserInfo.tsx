import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { User } from "@/interfaces/userInterface";
import { Dispatch, SetStateAction } from "react";

interface Props {
  currentUserInfo?: User;
}

function CurrentUserInfo(props: Props) {
  const { currentUserInfo } = props;
  return (
    <>
      <Drawer direction={"right"}>
        <DrawerTrigger asChild>
          <div className="flex items-center gap-2">
            <span>{currentUserInfo!.userName}</span>
            <Avatar className="cursor-pointer">
              <AvatarImage src={currentUserInfo!.profilePicture} />
            </Avatar>
          </div>
        </DrawerTrigger>
        <DrawerContent className="h-full flex-shrink-0 w-[35%] ml-auto">
          <DrawerHeader className="text-left">
            <DrawerTitle>Citation</DrawerTitle>
            <DrawerDescription>
              Make sure to check if the given answer is align with the original
              source.
            </DrawerDescription>
          </DrawerHeader>
          <Separator />
          <ScrollArea className="overflow-auto p-4 break-all">
            {Array.from({ length: 10000 }, (_, index) => index + 1)}
          </ScrollArea>
          <Separator />
          <DrawerFooter className="pt-2">
            <p className="text-sm italic">
              Thank you for <strong>diligently</strong> double checking!
            </p>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default CurrentUserInfo;
