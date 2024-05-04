import "./mydatatable.scss";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "Name", headerName: "Name", width: 130 },
  
  
    
  ,
];

const rows = [
  { id: 1, Name: "Coffee"},
  { id: 2, Name: "Non Coffee"},
  { id: 3, Name: "Cake"},
  { id: 4, Name: "Pastry"},
  { id: 5, Name: "Cookie"},
  { id: 6, Name: "A la carte"},
  { id: 7, Name: "Desert"},
  { id: 8, Name: "Special Menu"},

];

const Mydatatable = () => {
  return (
    
    <div className="datatable">
        <div className="datatableTitle">All Data</div>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default Mydatatable;
