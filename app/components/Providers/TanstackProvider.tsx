'use client';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState } from 'react';
import axios from 'axios';

interface Props {
    children: React.ReactNode;
}


const defaultQueryFn = async ({queryKey}: any)=>{
    const { data } = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}${queryKey}`)

    return data;
}

const TanstackProvider: React.FC<Props> = ({ children })=>{
    const [queryClient] = useState(()=> new QueryClient({
        defaultOptions: {
            queries: {
                queryFn: defaultQueryFn,
            }
        }
    }));
    return (
      <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    )
}

export default TanstackProvider;
