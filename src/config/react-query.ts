import { QueryClient } from "@tanstack/react-query"


export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1000 * 60 * 5,
      staleTime: 1000 * 60 * 1,
      refetchOnWindowFocus: false
    }
  }
})

