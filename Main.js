Vue.createApp({
    data() {
        return {
            nombre: '',
            apellido: '',
            monto: 0,
            cantDias: 0,
            nombreCorrecto: true,
            apellidoCorrecto: true,
            montoCorrecto: true,
            cantDiasCorrecto: true,
        }
    },
    methods: {
        cargarInputs(nombre, apellido, monto, cantDias) {
            this.nombre = document.getElementById("txtNombre").value;
            this.apellido = document.getElementById("txtApellido").value;
            this.monto = parseFloat(document.getElementById("monto").value);
            this.cantDias = parseFloat(document.getElementById("cantDias").value);
            return this.nombre, this.apellido, this.monto, this.cantDias;
        },
        validarInputs(nombre, apellido, monto, cantDias) {
            
            this.nombreCorrecto=(this.nombre != "")?true:false;
            this.apellidoCorrecto=(this.apellido != "")?true:false;
            this.montoCorrecto=(this.monto >= 1000)?true:false;
            this.cantDiasCorrecto=(this.cantDias >= 30)?true:false;
            if(this.nombreCorrecto,this.apellidoCorrecto,this.montoCorrecto,this.cantDiasCorrecto){
                return
            }
        },
        calcularPorcentaje(cantDias) {
            debugger;
            var porcentaje = 0;
            if(cantDias >= 30 && cantDias <= 60){ porcentaje = 40}
            if(cantDias >= 61 && cantDias <= 120){ porcentaje = 45}
            if(cantDias >= 121 && cantDias <= 360){porcentaje = 50}
            if(cantDias >360){porcentaje = 65}
        }
    }
}).mount('#app')