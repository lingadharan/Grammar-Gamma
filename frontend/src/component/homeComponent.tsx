import AIResponse from './chat/aiResponse';
import UserRequest from './chat/userRequest';

export default async function HomeComponent() {
  const backendURL = process.env.NEXT_PUBLIC_BE_BASE_URL;
  if (!backendURL) return <p>Backend URL not defined</p>;
  // const response = await fetch(`${backendURL}/chat`,)
  return (
    <div className="min-h-full w-full bg-slate-950 text-slate-100 p-4 sm:p-6 md:p-8 flex flex-col gap-6 max-w-5xl mx-auto">
      <UserRequest />
      <AIResponse />
    </div>
  );
}
