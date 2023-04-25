import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { TiEdit } from "react-icons/ti";

type Props<T extends { id: number }> = {
  editItem: T;
  handleEdit: (editItem: T) => void;
  handleDelete: (id: number) => void;
};

function Actions<T extends { id: number }>({
  editItem,
  handleEdit,
  handleDelete,
}: Props<T>) {
  return (
    <td>
      <div className="flex gap-x-2 items-center justify-center text-2xl w-full h-full">
        <button onClick={() => handleEdit(editItem)}>
          <TiEdit className="text-primary-500 action-edit" />
        </button>
        <button onClick={() => handleDelete(editItem.id)}>
          <AiOutlineDelete className="text-red-500" />
        </button>
      </div>
    </td>
  );
}

export default Actions;
