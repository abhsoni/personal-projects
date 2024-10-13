// "use client";

import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

// import { useSearchParams } from "next/navigation";
// import {nex}
// function GET(request:Nex) {
//     const searchParams = request.nextUrl.searchParams;
//     const query = searchParams.get('query');
//     // Use the query parameter in your function
//   }
interface HomePageProps {
  searchParams: Params;
}
export default function Home({ searchParams }: HomePageProps) {
  const params = searchParams;
  const query1 = params["q"];

  console.log(query1);
  return (
    <>
      <div>Home PAGE</div>
      <div>{query1}</div>
    </>
  );
}
