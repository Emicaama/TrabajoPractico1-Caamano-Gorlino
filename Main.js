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
            porcentaje:0,
            interes:0,
            resultado: 0,
            show: false
        },
        
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
            debugger
            if(!this.nombreCorrecto || !this.apellidoCorrecto || !this.montoCorrecto || !this.cantDiasCorrecto){ 
                return this.show= false;
            }
            else{
                return this.show= true;
            }
        },
        calcularPorcentaje(cantDias) {
            if(this.cantDias >= 30 && this.cantDias <= 60){ this.porcentaje = 40}
            if(this.cantDias >= 61 && this.cantDias <= 120){ this.porcentaje = 45}
            if(this.cantDias >= 121 && this.cantDias <= 360){ this.porcentaje = 50}
            if(this.cantDias > 360){ this.porcentaje = 65}
            
            return this.porcentaje;
        },
        calcularInteres(monto, cantDias, porcentaje){
            this.interes = (this.monto*(this.cantDias/360)*(this.porcentaje/100));
            return this.interes;
        },
        calcularResultado(monto,interes){
            this.resultado = this.monto + this.interes;
            return this.resultado;
        },
        borrarDatos(nombre, apellido, monto, cantDias){
            this.nombre = "";
            this.apellido = "";
            this.monto = 0;
            this.cantDias = 0; 
            this.show = false;
        }

    }
}).mount('#app')