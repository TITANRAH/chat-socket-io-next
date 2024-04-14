import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { getStorage, uploadBytes, ref, getDownloadURL } from "firebase/storage";
import firebaseApp from "@/config/firebase-config";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const UploadToImageToFirebaseReturnUrl = async (file: File) => {
  try {
    const storage = getStorage(firebaseApp);
    const storageRef = ref(storage, "images" + "/" + file.name);
    const uploadedImageResponse = await uploadBytes(storageRef, file);
    const downloadURL = getDownloadURL(uploadedImageResponse.ref);

    return downloadURL;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
