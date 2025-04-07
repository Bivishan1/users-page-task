// app/profiles/[id]/page.tsx
import { notFound } from "next/navigation";
import ProfileCard from "../components/ProfileCard";
import { getUsers, getUserById } from "@/lib/api";

export async function generateStaticParams() {
  const users = await getUsers();
  return users.map((user) => ({ id: user.id.toString() }));
}

export default async function ProfileDetailsPage({
  params,
}: {
  params: { id: string };
}) {
    
  const user = await getUserById(params.id).catch(() => notFound());

  if (!user) return <div>Loading...</div>;

  return (
    <>
      <ProfileCard id={user.id} name={user.name} email={user.email} />
    </>
  );
}

// export default ProfileDetailPage;
