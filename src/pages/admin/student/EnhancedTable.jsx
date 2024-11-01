// components/Table/EnhancedTable.jsx
import * as React from 'react';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Toolbar,
  Typography,
  Paper,
  Checkbox,
  IconButton,
  Tooltip,
  FormControlLabel,
  Switch
} from '@mui/material';
import { alpha } from '@mui/material/styles';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import PropTypes from 'prop-types';

// Constants
const DEFAULT_ROWS_PER_PAGE = 10;
const DEFAULT_ORDER = 'asc';
const DEFAULT_ORDER_BY = 'name';

// Table header configuration
const headCells = [
  {
    id: 'studentCode',
    numeric: false,
    disablePadding: true,
    label: 'Mã SV',
  },
  {
    id: 'name',
    numeric: false,
    disablePadding: false,
    label: 'Họ tên SV',
  },
  {
    id: 'className',
    numeric: false,
    disablePadding: false,
    label: 'Lớp',
  },
  {
    id: 'dateOfBirth',
    numeric: false,
    disablePadding: false,
    label: 'Ngày sinh',
  },
  {
    id: 'lastAction',
    numeric: false,
    disablePadding: false,
    label: 'Hoạt động gần nhất',
  },
];

// Helper functions
const createData = (id, studentCode, name, className, dateOfBirth, lastAction) => ({
    id,
    studentCode,
    name,
    className,
    dateOfBirth,
    lastAction,
});

const descendingComparator = (a, b, orderBy) => {
  if (b[orderBy] < a[orderBy]) return -1;
  if (b[orderBy] > a[orderBy]) return 1;
  return 0;
};

const getComparator = (order, orderBy) =>
  order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);

// Sample data
const rows = [
  createData('6455435', '6455435', 'A', 'K66CNPMA', '01-01-2003', '01-01-2024 16:00:00'),
  createData('4535534', '4535534', 'B', 'K66CNPMA', '01-01-2003', '01-01-2024 16:00:00'),
  createData('3453155', '3453155', 'C', 'K66CNPMA', '01-01-2003', '01-01-2024 16:00:00'),
  createData('3453495', '3453495', 'D', 'K66CNPMA', '01-01-2003', '01-01-2024 16:00:00'),
  createData('8762344', '8762344', 'E', 'K66CNPMA', '01-01-2003', '01-01-2024 16:00:00'),
  createData('7868866', '7868866', 'F', 'K66CNPMA', '01-01-2003', '01-01-2024 16:00:00'),
  createData('7978973', '7978973', 'G', 'K66CNPMA', '01-01-2003', '01-01-2024 16:00:00'),
  createData('4353553', '4353553', 'H', 'K66CNPMA', '01-01-2003', '01-01-2024 16:00:00'),
  createData('4353253', '4353253', 'I', 'K66CNPMA', '01-01-2003', '01-01-2024 16:00:00')
  // ... rest of your data
];

// Table Header Component
const EnhancedTableHead = ({
  onSelectAllClick,
  order,
  orderBy,
  numSelected,
  rowCount,
  onRequestSort,
}) => {
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

// Table Toolbar Component
const EnhancedTableToolbar = ({ numSelected }) => (
  <Toolbar
    sx={{
      pl: { sm: 2 },
      pr: { xs: 1, sm: 1 },
      ...(numSelected > 0 && {
        bgcolor: (theme) =>
          alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
      }),
    }}
  >
    {numSelected > 0 ? (
      <Typography
        sx={{ flex: '1 1 100%' }}
        color="inherit"
        variant="subtitle1"
        component="div"
      >
        {numSelected} selected
      </Typography>
    ) : (
      <Typography
        sx={{ flex: '1 1 100%' }}
        variant="h6"
        id="tableTitle"
        component="div"
      >
        Danh sách sinh viên
      </Typography>
    )}

    {numSelected > 0 ? (
      <Tooltip title="Delete">
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
    ) : (
      <Tooltip title="Lọc danh sách">
        <IconButton>
          <FilterListIcon />
        </IconButton>
      </Tooltip>
    )}
  </Toolbar>
);

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

// Main Table Component
const EnhancedTable = () => {
  const [order, setOrder] = React.useState(DEFAULT_ORDER);
  const [orderBy, setOrderBy] = React.useState(DEFAULT_ORDER_BY);
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(DEFAULT_ROWS_PER_PAGE);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      [...rows]
        .sort(getComparator(order, orderBy))
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [order, orderBy, page, rowsPerPage]
  );

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {visibleRows.map((row, index) => {
                const isItemSelected = selected.includes(row.id);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row.id)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                    sx={{ cursor: 'pointer' }}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{
                          'aria-labelledby': labelId,
                        }}
                      />
                    </TableCell>
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"
                    >
                      {row.studentCode}
                    </TableCell>
                    <TableCell align="left">{row.name}</TableCell>
                    <TableCell align="left">{row.className}</TableCell>
                    <TableCell align="left">{row.dateOfBirth}</TableCell>
                    <TableCell align="left">{row.lastAction}</TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 50, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          labelRowsPerPage="Số hàng mỗi trang:"
          labelDisplayedRows={({ from, to, count }) => `${from} - ${to} trong tổng số ${count} sinh viên ,  Trang ${page + 1} trên ${Math.ceil(rows.length / rowsPerPage)}`}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Thu nhỏ danh sách"
      />
    </Box>
  );
};

export default EnhancedTable;