import axios from "axios";
import Global from "@/Global";
export default class ServiceDepartamentos {
    getDepartamentos(){
        return new Promise(function (resolve) {
            let request = "api/departamentos"
            let url = Global.urlDepartamentos + request
            axios.get(url).then(response => {
                console.log("Leyendo departamentos")
                resolve(response.data)
            })
        })
    }
    createDepartamento(departamento){
        return new Promise(function (resolve) {
        let request = "api/departamentos"
        let url = Global.urlDepartamentos + request
            axios.post(url, departamento).then((response) => {
                console.log("Departamento Creado");
                resolve(response)
            })

        })
    }
}