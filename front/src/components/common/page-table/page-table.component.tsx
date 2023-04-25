import React from "react";
import GenericTable, { ITableProps } from "../../base/table/table.component";
import { GoPlus } from "react-icons/go";
import useMainStore from "../../../zustand/main/main.store";

export type PageTableProps<T> = {
  title: string;
  form: ({ editItem }: { editItem?: T }) => JSX.Element;
} & Omit<ITableProps<T>, "handleEdit">;

function PageTable<T extends { id: number }>({
  withoutActions,
  title,
  headData,
  bodyData,
  currPage,
  pagesCount,
  renderHead,
  renderBody,
  setPage,
  form,
  handleDelete,
}: PageTableProps<T>) {
  const setPopupState = useMainStore((state) => state.setPopupState);

  const handleOpenFormEditModal = (editItem: T) => {
    console.log(editItem);
    setPopupState({
      open: true,
      children: form({ editItem }),
    });
  };

  const handleOpenFormModal = () => {
    setPopupState({
      open: true,
      children: form({}),
    });
  };

  const Table = GenericTable<T>({
    withoutActions,
    pagesCount,
    currPage,
    headData,
    bodyData,
    renderHead,
    renderBody,
    setPage,
    handleDelete,
    handleEdit: handleOpenFormEditModal,
  });

  return (
    <div>
      <div className="page-header">
        <h2>{title}</h2>
        <button className="add-button" onClick={handleOpenFormModal}>
          <GoPlus />
        </button>
      </div>
      <div className="grid grid-cols-12">
        <div className="col-span-12">
          <div className="card">
            <div className="card__body">{Table}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageTable;
