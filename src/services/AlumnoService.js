import axios from 'axios';
import Global from '../Global';
export default class AlumnoService {

    constructor() {
        this.urlApi = Global.urlApiEjemplos;
    }

    getToken(usuario) {
        return new Promise((resolve) => {
            var request = "api/auth/login";
            var header = { headers: { 'Content-Type': 'application/json' } };
            axios.post(this.urlApi + request, usuario, header).then(res => {
                resolve(res.data.response);
            });
        })
    }

    getAlumnos(idCurso) {
        return new Promise((resolve) => {
            var request = "api/alumnos/filtrarcurso/" + idCurso;
            axios.get(this.urlApi + request).then(res => {
                resolve(res.data);
            });
        });
    }
    getAlumnosToken(idCurso,token) {
        return new Promise((resolve) => {
            var request = "api/alumnos/filtrarcursotoken/" + idCurso;
            var header = { headers: { 'Authorization': 'Bearer ' + token } };
            axios.get(this.urlApi + request, header).then(res => {
                console.log(res.data);
                resolve(res.data);
            });
        });
    }
}