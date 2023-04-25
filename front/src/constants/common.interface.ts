export type TAutoComplete = {
  id: number;
  name: string;
};

export interface IResponse<T> {
  data: T;
  pageSize: number;
  pageNum: number;
  totalRecords: number;
  totalPages: number;
  errorMessage: string;
  hasNextPage: boolean;
}

export interface IPaginationPayload {
  pageSize: number;
  pageNum: number;
}

export interface IEditItemProps<T> {
  editItem?: T;
}
