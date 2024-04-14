'use server'

import { connectMongoDB } from "@/config/db-config";
import userModel from "@/models/user-model";
import UserModel from "@/models/user-model";
import { currentUser } from "@clerk/nextjs";
import { User } from "lucide-react";
import { revalidatePath } from "next/cache";
import { brotliDecompress } from "zlib";

connectMongoDB();

// creo la conexion

// la llamo

// al loguearse puedo definir donde va despues del login

// en el middleware esta definido que si no eta autenticad lo mande a login

// esta funcuion es para guardar el usuario logeueado en la bd

// con sign up guado en clerk con signin logueo y si logueo ahi guardo en bd

// genero estafuncion y la llamo en el home que es la primera vista la page

// llamno a currentUser para obtener losd atos del usuario

// tomo el id y busco al usuario con findOne

// si lo encuentra regresalo

// si no guardalo y retornalo
//

// traeme al usuario o crealo en bd cuando se loguee
export const GetCurrentUserFromMongoDB = async () => {
  try {
    const clerkUser = await currentUser();

    const mongoUser = await UserModel.findOne({ clerkUserId: clerkUser!.id });

    if (mongoUser) {
      return JSON.parse(JSON.stringify(mongoUser));
    }

    let email = "";

    if (clerkUser?.emailAddresses) {
      email = clerkUser.emailAddresses[0]?.emailAddress || "";
    }

    const newUserPayload = {
      clerkUserId: clerkUser!.id,
      name: clerkUser!.firstName + " " + clerkUser!.lastName,
      userName: clerkUser!.username,
      email,
      profilePicture: clerkUser!.imageUrl,
    };

    const newUser = await UserModel.create(newUserPayload);

    return newUser;

    // check if the user is already in the databse based on clerkUserId

    // if the useris not the database, create un new uaser
  } catch (error: any) {
    return {
      error: error,
    };
  }
};

export const UpdateUserProfile = async (userId: string, payload: any) => {
  try {

    const user = userModel;
    const updateUser = await user.findByIdAndUpdate(userId, payload, {
      new: true,
    });

    console.log('updateUser', updateUser)

    return JSON.parse(JSON.stringify(updateUser));

  } catch (error: any) {
    return {
      error: error.message,
    };
  } finally {
    revalidatePath('/')
  }
};
