// app/profiles/[id]/page.tsx
import { notFound } from "next/navigation";
import ProfileCard from "../components/ProfileCard";
import { getUserById } from "@/lib/api";

interface Props {
  // params is specific property to use as route parameters.

  //params: { id: string }; // Change number to string since URL params are strings
//new code
params: Promise<{ id: string }>;
// Change number to string since URL params are strings
}

export default async function ProfileDetailsPage({  params}: Props) {
    // Fetch user data based on the ID from params   
    const { id } = await params;

  const user = await getUserById(id).catch(() => notFound());

  if (!user) return <div>Loading...</div>;

  return (
    <>
      <ProfileCard id={user.id} name={user.name} email={user.email} />
    </>
  );
}

// export default ProfileDetailPage;
