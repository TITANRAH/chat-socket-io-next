'use server'

import Header from "./layout-components/Header";
import Content from "./layout-components/Content";

export default async function LayoutProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <div>
      <Header />
      <Content>{children}</Content>
    </div>
  );
}
