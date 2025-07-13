import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import authService from "../src/authservice";
import RoleDef from "../utils/roleDef"
const AdminBoard = ({ onLogout}) => {
  const [dataTabla, setDataTable] = useState(null);
  const [notiShow, setNotiShow] = useState(false);
  const showDataTabla = () => {
    console.log(dataTabla);
  };

  const handleChangeRole = (id, newRole) => {
    setDataTable(
      dataTabla.map((user) =>
        user.id === id ? { ...user, role: newRole } : user
      )
    );
  };

  const handleChangePasswordValue = (id, newPassValue) => {
    setDataTable(
      dataTabla.map((user) =>
        user.id === id ? { ...user, passwordValue: newPassValue } : user
      )
    );
  };

  const handleChangeEmail = (id, newEmail) => {
    setDataTable(
      dataTabla.map((user) =>
        user.id === id ? { ...user, email: newEmail } : user
      )
    );
  };

  const handleChangeAccessCourse = (id, newAccessCourse) => {
    setDataTable(
      dataTabla.map((user) =>
        user.id === id ? { ...user, accessCourse: newAccessCourse } : user
      )
    );
  };

  const handleChangeFirstName = (id, newfirstName) => {
    setDataTable(
      dataTabla.map((user) =>
        user.id === id ? { ...user, firstName: newfirstName } : user
      )
    );
  };

  const handleChangeLastName = (id, newlastName) => {
    setDataTable(
      dataTabla.map((user) =>
        user.id === id ? { ...user, lastName: newlastName } : user
      )
    );
  };

  useEffect(() => {
    const loadData = async () => {

      try {
        const data = await authService.getTableAdmin();
        setDataTable(data);
      } catch (error) {
        console.error("Error loading profile:", error);
      } finally {

      }
    };

    loadData();
  }, []); // Убрали onLogout из зависимостей

  // Стили для кнопок
  const buttonStyle = {
    padding: "12px 24px",
    background: "linear-gradient(45deg, #dc3545 30%, #c82333 90%)",
    color: "white",
    border: "none",
    margin: "8px",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "500",
    boxShadow: "0 3px 5px 2px rgba(220, 53, 69, .3)",
    transition: "all 0.3s ease",
    ":hover": {
      transform: "translateY(-2px)",
      boxShadow: "0 6px 10px 4px rgba(220, 53, 69, .3)"
    }
  };
const styles = {
  notiContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "30px",
    padding:  "20px",
    backgroundColor: "#abebc6",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    flexWrap: "wrap",
    gap: "10px",
    textAlign: "center",
  },
}
  return (
    <div style={{ 
      padding: "24px", 
      backgroundColor: "#f5f5f5", 
      minHeight: "100vh",
      fontFamily: "'Roboto', sans-serif"
    }}>
      {/* Header */}
      <div style={{
        marginBottom: "32px",
        textAlign: "center"
      }}>
        <h1 style={{
          fontSize: "2.5rem",
          fontWeight: "bold",
          color: "#2c3e50",
          margin: "0 0 8px 0",
          textShadow: "0 2px 4px rgba(0,0,0,0.1)"
        }}>
          🔧 Админ панель
        </h1>
        <p style={{
          color: "#6c757d",
          fontSize: "1.1rem",
          margin: 0
        }}>
          Управление пользователями системы
        </p>
      </div>
      {notiShow && (
            <div style={styles.notiContainer}>
              <span
                style={{
                  color: "#0c7e08",
                  margin: "0 auto",
                  fontWeight: "bold",
                }}
              >
                Профиль успешно обновлён!
              </span>
            </div>
          )}


      {dataTabla ? (
        <TableContainer 
          component={Paper} 
          sx={{ 
            borderRadius: "12px",
            boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
            overflow: "hidden"
          }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow sx={{ 
                backgroundColor: "#2c3e50",
                "& th": {
                  color: "white",
                  fontWeight: "600",
                  fontSize: "0.95rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px"
                }
              }}>
                <TableCell>ID</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Пароль</TableCell>
                <TableCell>Роль</TableCell>
                <TableCell>Доступ к курсам</TableCell>
                <TableCell>Имя</TableCell>
                <TableCell>Фамилия</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dataTabla.map((row, index) => (
                <TableRow
                  key={row.id}
                  sx={{ 
                    "&:last-child td, &:last-child th": { border: 0 },
                    "&:nth-of-type(odd)": { 
                      backgroundColor: "#f8f9fa" 
                    },
                    "&:hover": { 
                      backgroundColor: "#e3f2fd",
                      transform: "scale(1.01)",
                      boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
                    },
                    transition: "all 0.2s ease"
                  }}
                >
                  <TableCell sx={{ fontWeight: "600", color: "#495057" }}>
                    {row.id}
                  </TableCell>
                  <TableCell>
                    <TextField
                      onChange={(e) =>
                        handleChangeEmail(row.id, e.target.value)
                      }
                      value={row.email || ""}
                      variant="outlined"
                      size="small"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "8px",
                          backgroundColor: "white",
                          "&:hover fieldset": {
                            borderColor: "#3498db"
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#2980b9"
                          }
                        }
                      }}
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      onChange={(e) =>
                        handleChangePasswordValue(row.id, e.target.value)
                      }
                      value={row.passwordValue || ""}
                      variant="outlined"
                      size="small"
                      type="password"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "8px",
                          backgroundColor: "white",
                          "&:hover fieldset": {
                            borderColor: "#e74c3c"
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#c0392b"
                          }
                        }
                      }}
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      onChange={(e) =>
                        handleChangeRole(row.id, e.target.value)
                      }
                      value={RoleDef(row.role) || ""}
                      variant="outlined"
                      size="small"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "8px",
                          backgroundColor: "white",
                          "&:hover fieldset": {
                            borderColor: "#9b59b6"
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#8e44ad"
                          }
                        }
                      }}
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      onChange={(e) =>
                        handleChangeAccessCourse(row.id, e.target.value)
                      }
                      value={row.accessCourse || ""}
                      variant="outlined"
                      size="small"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "8px",
                          backgroundColor: "white",
                          "&:hover fieldset": {
                            borderColor: "#f39c12"
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#e67e22"
                          }
                        }
                      }}
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      onChange={(e) =>
                        handleChangeFirstName(row.id, e.target.value)
                      }
                      value={row.firstName || ""}
                      variant="outlined"
                      size="small"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "8px",
                          backgroundColor: "white",
                          "&:hover fieldset": {
                            borderColor: "#27ae60"
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#229954"
                          }
                        }
                      }}
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      onChange={(e) =>
                        handleChangeLastName(row.id, e.target.value)
                      }
                      value={row.lastName || ""}
                      variant="outlined"
                      size="small"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "8px",
                          backgroundColor: "white",
                          "&:hover fieldset": {
                            borderColor: "#16a085"
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#138d75"
                          }
                        }
                      }}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <div style={{
          textAlign: "center",
          padding: "64px 24px",
          backgroundColor: "white",
          borderRadius: "12px",
          boxShadow: "0 4px 16px rgba(0,0,0,0.1)"
        }}>
          <div style={{ fontSize: "4rem", marginBottom: "16px" }}>📋</div>
          <h3 style={{ 
            color: "#6c757d", 
            fontSize: "1.5rem",
            margin: 0
          }}>
            Данных нет
          </h3>
        </div>
      )}
      
      <div style={{ 
        marginTop: "32px",
        textAlign: "center",
        padding: "24px",
        backgroundColor: "white",
        borderRadius: "12px",
        boxShadow: "0 4px 16px rgba(0,0,0,0.05)"
      }}>
        <button 
          onClick={onLogout} 
          style={{
            ...buttonStyle,
            background: "linear-gradient(45deg, #dc3545 30%, #c82333 90%)"
          }}
          onMouseOver={(e) => {
            e.target.style.transform = "translateY(-2px)";
            e.target.style.boxShadow = "0 6px 12px rgba(220, 53, 69, .4)";
          }}
          onMouseOut={(e) => {
            e.target.style.transform = "translateY(0)";
            e.target.style.boxShadow = "0 3px 5px 2px rgba(220, 53, 69, .3)";
          }}
        >
          🚪 Выйти
        </button>
        <button 
          onClick={showDataTabla} 
          style={{
            ...buttonStyle,
            background: "linear-gradient(45deg, #17a2b8 30%, #138496 90%)",
            boxShadow: "0 3px 5px 2px rgba(23, 162, 184, .3)"
          }}
          onMouseOver={(e) => {
            e.target.style.transform = "translateY(-2px)";
            e.target.style.boxShadow = "0 6px 12px rgba(23, 162, 184, .4)";
          }}
          onMouseOut={(e) => {
            e.target.style.transform = "translateY(0)";
            e.target.style.boxShadow = "0 3px 5px 2px rgba(23, 162, 184, .3)";
          }}
        >
          📊 Показать данные
        </button>
        <button
          onClick={() => authService.savePostGres(dataTabla, setNotiShow)}
          style={{
            ...buttonStyle,
            background: "linear-gradient(45deg, #28a745 30%, #20c997 90%)",
            boxShadow: "0 3px 5px 2px rgba(40, 167, 69, .3)"
          }}
          onMouseOver={(e) => {
            e.target.style.transform = "translateY(-2px)";
            e.target.style.boxShadow = "0 6px 12px rgba(40, 167, 69, .4)";
          }}
          onMouseOut={(e) => {
            e.target.style.transform = "translateY(0)";
            e.target.style.boxShadow = "0 3px 5px 2px rgba(40, 167, 69, .3)";
          }}
        >
          💾 Сохранить в БД
        </button>
      </div>
    </div>
  );
};

export default AdminBoard;