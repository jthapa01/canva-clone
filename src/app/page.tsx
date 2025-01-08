import { protectServer } from "@/features/auth/utils";
import { auth } from "@/auth";

export default async function Home() {
  await protectServer();
  const session = await auth();
  return <div>{JSON.stringify(session)}</div>;
};