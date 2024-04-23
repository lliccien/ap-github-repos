/* eslint-disable @typescript-eslint/no-explicit-any */
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { GithubRepo } from "../../interfaces/GithubRepo";
import { FC, useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

interface Props {
  data: GithubRepo[];
}

export const DataTableRepos: FC<Props> = ({ data }) => {
  const [globalFilter, setGlobalFilter] = useState(null);

  const formatData = (value: any) => {
    return new Date(value).toLocaleDateString();
  };

  const createAtBodyTemplate = (rowData: { created_at: any }) => {
    return formatData(rowData.created_at);
  };

  const actionBodyTemplate = (rowData: {
    html_url: string | URL | undefined;
  }) => {
    return (
      <Button
        icon="pi pi-external-link"
        onClick={() => {
          window.open(rowData.html_url, "_blank");
        }}
      />
    );
  };

  const header = (
    <div style={{ textAlign: "right" }}>
      <i className="pi pi-search" style={{ margin: "4px 4px 0 0" }}></i>
      <InputText
        type="search"
        onInput={(e: any) => {
          setGlobalFilter(e.target.value);
        }}
        placeholder="Global Search"
        size="50"
      />
    </div>
  );

  return (
    <DataTable
      value={data}
      paginator
      rows={10}
      header={header}
      globalFilter={globalFilter}
    >
      <Column field="name" header="Name" sortable filter></Column>
      <Column field="private" header="Private" sortable filter></Column>
      <Column field="description" header="Description" sortable filter></Column>
      <Column
        field="language"
        header="Program Language"
        sortable
        filter
      ></Column>
      <Column
        field="created_at"
        header="Creation Date"
        body={createAtBodyTemplate}
        sortable
        filter
      ></Column>
      <Column
        field="stargazers_count"
        header="Starred"
        sortable
        filter
      ></Column>
      <Column field="forks" header="Forks" sortable filter></Column>
      <Column body={actionBodyTemplate} header="Go to Repo"></Column>
    </DataTable>
  );
};
