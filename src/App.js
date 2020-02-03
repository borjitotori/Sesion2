import React, { Component } from "react";
import cloneDeep from "clone-deep";
import "./App.css";
import Asignatura from "./components/Asignatura";

class App extends Component {
  state = {
    data: [
      {
        visible: true,
        asignatura: "Programacion I",
        profesor: "Alberto Valero",
        id: "001",
        alumnos: [
          {
            id: "000",
            visible: true,
            nombre: "Marcos Alonso",
            nota: 7
          },
          {
            id: "001",
            visible: true,
            nombre: "Maria Martin-Toledano",
            nota: 6
          },
          {
            id: "002",
            visible: true,
            nombre: "Santiago Molpeceres",
            nota: 8
          }
        ]
      },
      {
        visible: true,
        asignatura: "Programacion II",
        profesor: "Alberto Valero",
        id: "002",
        alumnos: [
          {
            id: "003",
            visible: true,
            nombre: "Esla Sutia",
            nota: 7
          },
          {
            id: "004",
            visible: true,
            nombre: "Johny Melavo",
            nota: 6
          },
          {
            id: "005",
            visible: true,
            nombre: "Xin Chan",
            nota: 8
          }
        ]
      }
    ]
  };

  asignaturaOnClickHandler = asignaturaName => {
    const data = [...this.state.data];
    const asignatura = data.find(asig => asig.asignatura === asignaturaName);

    if (asignatura) {
      asignatura.visible = !asignatura.visible;
    }

    this.setState({ data });
  };

  alumnoOnClickHandler = (alumnoName, asignaturaName) => {
    const data = [...this.state.data];
    const asignatura = data.find(asig => asig.asignatura === asignaturaName);

    if (asignatura) {
      const alumno = asignatura.alumnos.find(alu => alu.nombre === alumnoName);
      if (alumno) alumno.visible = !alumno.visible;
    }

    this.setState({ data });
  };

  render() {
    return (
      <div>
        { this.state.data.map(asignatura =>
          <Asignatura
          key = {asignatura.id}
          asignatura={asignatura}
          asignaturaOnClick={this.asignaturaOnClickHandler}
          alumnoOnClick={this.alumnoOnClickHandler}
        />)}
      </div>
    );
  }
}

export default App;
