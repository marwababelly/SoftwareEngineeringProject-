import React, { ReactNode } from "react";

import "./table.css";
import Actions from "./components/actions/actions.component";

export type TRenderHeadAction = (item: string, index: number) => JSX.Element;

export type TRenderBodyAction<T> = (
  item: T,
  index: number,
  first?: ReactNode,
  end?: ReactNode
) => JSX.Element;

export type ITableProps<T> = {
  pagesCount: number;
  currPage: number;
  headData: string[];
  bodyData: T[];
  renderHead: TRenderHeadAction;
  renderBody: TRenderBodyAction<T>;
  setPage: (value: number) => void;
  withoutActions?: boolean;
  handleEdit: (editItem: T) => void;
  handleDelete: (id: number) => void;
};

function Table<T extends { id: number }>({
  withoutActions,
  pagesCount,
  currPage,
  headData,
  bodyData,
  renderHead,
  renderBody,
  setPage,
  handleEdit,
  handleDelete,
}: ITableProps<T>) {
  const range = Array.from(Array(pagesCount).keys());

  return (
    <div>
      <div className="table-wrapper">
        <table>
          {headData && renderHead ? (
            <thead>
              <tr>
                {headData.map((item, index) => renderHead(item, index))}
                <th>actions</th>
              </tr>
            </thead>
          ) : null}
          {bodyData && renderBody ? (
            <tbody>
              {bodyData.map((item, index) =>
                renderBody(
                  item,
                  index,
                  undefined,
                  !withoutActions ? (
                    <Actions
                      editItem={item}
                      handleEdit={handleEdit}
                      handleDelete={handleDelete}
                    />
                  ) : undefined
                )
              )}
            </tbody>
          ) : null}
        </table>
      </div>

      <div className="table__pagination">
        {range.map((pageNum) => (
          <div
            key={pageNum}
            className={`table__pagination-item ${
              currPage === pageNum ? "active" : ""
            }`}
            onClick={() => setPage(pageNum)}
          >
            {pageNum + 1}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Table;
