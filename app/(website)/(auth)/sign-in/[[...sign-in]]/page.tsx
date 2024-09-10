import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="h-full grid grid-cols-1 lg:grid-cols-2">
      <div className="hidden bg-cover bg-center lg:flex bg-[url('https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZWx8ZW58MHx8MHx8fDA%3D')]"></div>
      <div className="flex justify-center items-center">
        <SignIn />
      </div>
    </div>
  );
}
