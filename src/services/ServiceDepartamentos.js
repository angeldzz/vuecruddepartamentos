import axios from "axios";
import Global from "@/Global";
export default class ServiceDepartamentos {
    getDepartamentos() {
        return new Promise(function (resolve) {
            let request = "api/departamentos"
            let url = Global.urlDepartamentos + request
            axios.get(url).then(response => {
                console.log("Leyendo departamentos")
                resolve(response.data)
            })
        })
    }
    createDepartamento(departamento) {
        return new Promise(function (resolve) {
            let request = "api/departamentos"
            let url = Global.urlDepartamentos + request
            axios.post(url, departamento).then((response) => {
                console.log("Departamento Creado");
                resolve(response)
            })
        })
    }
    findDepartamento(idDepartamento) {
        return new Promise(function (resolve) {
            let request = "api/departamentos/" + idDepartamento
            let url = Global.urlDepartamentos + request
            axios.get(url).then(response => {
                resolve(response.data)
            })
        })
    }
    updateDepartamento(departamento) {
        return new Promise(function (resolve) {
            let request = "api/departamentos"
            let url = Global.urlDepartamentos + request
            axios.put(url, departamento).then(response => {
                resolve(response)
            })
        })
    }
    deleteDepartamento(id) {
        return new Promise(function (resolve) {
            let request = "api/departamentos/" + id
            let url = Global.urlDepartamentos + request
            axios.delete(url).then(response => {
                resolve(response)
            })
        })
    }
}