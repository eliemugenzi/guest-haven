'use client';
import { useQuery } from "@tanstack/react-query";
import Button from "./components/Button";
import HotelCard from "./components/HotelCard";

const Home = ()=> {

  const { isLoading, error, data } = useQuery({
    queryKey: ['/hotels']
  });

  if(isLoading) return 'Loading...';
  if(error) return `An error occured: ${error?.message}`;

  return (
    <div className="mx-10 my-10">
  <h1>Welcome to Guest Haven</h1>
  <div className="grid grid-cols-6 gap-6">
  {data?.map((item, index)=>{
    return (
      <HotelCard {...item} key={index} />
    )
  })}
  </div>
 
</div>
  )
}

export default Home;