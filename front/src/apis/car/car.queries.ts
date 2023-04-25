import carApi from "./car.api";
import { IGetAllCarsPayload } from "./car.interface";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

const useInfinityCarsQuery = (
  payload: IGetAllCarsPayload,
  disabled?: boolean
) => {
  const queryResult = useInfiniteQuery(
    ["get-infinite-cars", payload],
    async ({ pageParam = 0 }) => {
      const result = await carApi.getAllCars({
        ...payload,
        pageNum: pageParam,
      });
      return {
        data: result,
        pageParam: pageParam + 1,
      };
    },
    {
      getNextPageParam: (lastPage) => {
        if (!lastPage.data.hasNextPage) return undefined;
        return lastPage.pageParam;
      },
      enabled: !disabled,
    }
  );
  return queryResult;
};

const useCarQuery = (payload?: IGetAllCarsPayload, disabled?: boolean) => {
  const queryResult = useQuery(
    ["get-cars", payload],
    () => carApi.getAllCars(payload),
    {
      select: (result) => ({
        data: result.data,
        totalRecords: result.totalRecords,
        totalPages: result.totalPages,
      }),
      enabled: !disabled,
    }
  );
  return queryResult;
};

const carQueries = {
  useInfinityCarsQuery,
  useCarQuery,
};

export default carQueries;
