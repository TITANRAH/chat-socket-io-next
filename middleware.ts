import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    // puedoponer aqui las rutas publicas usando clerk
    // publicRoutes: '/contactos'
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};