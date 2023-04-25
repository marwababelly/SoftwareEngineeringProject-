/* eslint-disable import/prefer-default-export */
import CarApiRoutes from "./car.api-routes";
import ApiInstance from "../../constants/api.instance";
import {
  ICar,
  ICarDetails,
  IGetAllCarsPayload,
  IGetDetailsPayload,
} from "./car.interface";
import { IResponse } from "../../constants/common.interface";

const actionCar = async (payload: FormData) => {
  const { data } = await ApiInstance.post(CarApiRoutes.ActionCar, payload);
  return data;
};

const removeCar = async (id: number) => {
  const { data } = await ApiInstance.delete(CarApiRoutes.RemoveCar, {
    params: {
      id,
    },
  });
  return data;
};

const getAllCars = async (payload?: IGetAllCarsPayload) => {
  const { data } = await ApiInstance.get<IResponse<ICar[]>>(
    CarApiRoutes.GetAllCars,
    {
      params: payload,
    }
  );
  return data;
};

const getCarDetails = async (payload?: IGetDetailsPayload) => {
  const { data } = await ApiInstance.get<IResponse<ICarDetails[]>>(
    CarApiRoutes.GetCarDetails,
    {
      params: payload,
    }
  );
  return data;
};

const carApi = {
  actionCar,
  removeCar,
  getAllCars,
  getCarDetails,
};

export default carApi;
