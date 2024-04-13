"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Separator } from "@/components/ui/separator";
import { User } from "@/interfaces/userInterface";
import Image from "next/image";
import dayjs from "dayjs";
import { useClerk } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Loader2, Trash2, Upload } from "lucide-react";
import useUserStore from "@/store/store-dos";
import { Input } from "@/components/ui/input";

interface Props {
  currentUserInfo?: User;
}

function CurrentUserInfo(props: Props) {
  const state = useUserStore((state) => state);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const { currentUserInfo } = props;
  const { signOut } = useClerk();
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [showHeader, setShowHeader] = useState<boolean | null>(true);
  const onLogout = async () => {
    try {
      setLoading(true);
      await signOut();
      alert("Logout sucess");
      router.push("/sign-in");
      setShowHeader(false);
    } catch (error: any) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    state.setCurrentUser(currentUserInfo);

    console.log("current", currentUserInfo);

    if (currentUserInfo?._id) {
      setShowHeader(true);
    } else {
      setShowHeader(false);
    }
  }, [currentUserInfo]);

  const getProperty = (key: string, value: string) => {
    return (
      <div className="flex flex-col">
        <span className="font-semibold text-gray-700">{key}</span>
        <span className="text-gray-700">{value}</span>
      </div>
    );
  };
  return (
    <>
      {showHeader && (
        <Drawer direction={"right"}>
          <DrawerTrigger asChild>
            <div className="flex items-center gap-2">
              <span>{currentUserInfo!.userName}</span>
              <Avatar className="cursor-pointer">
                <AvatarImage src={currentUserInfo!.profilePicture} />
              </Avatar>
            </div>
          </DrawerTrigger>
          <DrawerContent className="h-full flex-shrink-0 w-[25%] ml-auto p-10">
            <DrawerHeader className="text-left">
              <div className="flex justify-start items-center gap-4">
                <DrawerClose className="">x</DrawerClose>

                <DrawerTitle className="m-0 p-0">Profile</DrawerTitle>
              </div>
              {/* <DrawerDescription>
              Make sure to check if the given answer is align with the original
              source.
            </DrawerDescription> */}
            </DrawerHeader>
            <Separator />

            <div className="flex flex-col gap-5">
              <div className="flex flex-col justify-center items-center p-5 gap-2">
                <Image
                  src={
                    selectedFile
                      ? URL.createObjectURL(selectedFile)
                      : currentUserInfo?.profilePicture!
                  }
                  alt="image profile"
                  width={100}
                  height={100}
                  className="rounded-full max-w-100 max-h-100"
                />
                {selectedFile && (
                  <Trash2
                    color="red"
                    className="absolute top-32 right-40 cursor-pointer"
                    onClick={() => {
                      setSelectedFile(null);
                      // Agrega aquí la lógica para manejar el evento de hacer clic en la 'X'
                    }}
                  ></Trash2>
                )}

                <span className="text-gray-500 cursor-pointer">
                  {/* llamo a input creo una imagen la guardo en un estado la muestro arriba en el avatar */}
                  <Input
                    id="picture"
                    type="file"
                    onChange={(event) =>
                      setSelectedFile(event.target.files![0])
                    }
                  />
                </span>
              </div>
              <Separator />
              <div className="flex flex-col gap-5">
                {getProperty("Name", currentUserInfo?.name!)}
                {getProperty("UserName", currentUserInfo?.userName!)}
                {getProperty("Id", currentUserInfo?._id!)}
                {getProperty(
                  "Joined On",
                  dayjs(currentUserInfo?.createdAt!).format("DD MMM YYYY")
                )}
              </div>

              <DrawerClose>
                <Button className="w-full" onClick={() => onLogout()}>
                  {loading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    "Logout"
                  )}
                </Button>
              </DrawerClose>

              <Button className="w-full" type="button" disabled={!selectedFile}>
                Actualizar foto
              </Button>
            </div>
            {/* <ScrollArea className="overflow-auto p-4 break-all">
            {Array.from({ length: 10000 }, (_, index) => index + 1)}
          </ScrollArea> */}
            <Separator />
            <DrawerFooter className="pt-2">
              <p className="text-sm">CHAT</p>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      )}
    </>
  );
}

export default CurrentUserInfo;
