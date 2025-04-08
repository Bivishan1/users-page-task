// app/profiles/[id]/error.tsx
'use client';

export default function Error({ error }: { error: Error }) {
  return (
    <div className="text-red-500 p-8 text-center">
      Failed to load profile: {error.message}
    </div>
  );
}