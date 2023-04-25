import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { FC, PropsWithChildren, useState } from "react";

const Wrapper: FC<PropsWithChildren<{}>> = ({ children }) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default Wrapper;
