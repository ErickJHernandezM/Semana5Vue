import { createStore } from 'vuex'
export default createStore({
  state: {
    Npersonas:'',
    Tell:'',
    Correo:'',
    Descripcion: '',
    Fecha:'',
    Tamano:'',
    Accesorios:[],
    Sabores:[],
  },
  getters: {
    Npersonas(state){
      return state.Npersonas;
    },
    Correo(state){
      return state.Correo;
    },
    Tell(state){
      return state.Tell;
    },
    Descripcion(state){
      return state.Descripcion;
    },
    Fecha(state){
      return state.Fecha;
    },
    Tamano(state){
      return state.Tamano;
    },
    Accesorios(state){
      return state.Accesorios;
    },
    Sabores(state){
      return state.Sabores;
    }
  },
  mutations: {
    Npersonas(state,Npersonas){
      state.Npersonas=Npersonas;
    },
    Correo(state,Correo){
      state.Correo=Correo;
    },
    Tell(state,Tell){
      state.Tell=Tell;
    },
    Descripcion(state,Descripcion){
      state.Descripcion=Descripcion;
    },
    Fecha(state,Fecha){
      state.Fecha=Fecha;
    },
    Tamano(state,Tamano){
      state.Tamano=Tamano;
    },
    Accesorios(state,Accesorios){
      state.Accesorios=Accesorios;
    },
    Sabores(state,Sabores){
      state.Sabores=Sabores;
    }
  },
  actions: {
    Npersonas({commit},Npersonas){
      commit("Npersonas",Npersonas);
    },
    Correo({commit},Correo){
      commit("Correo",Correo);
    },
    Tell({commit},Tell){
      commit("Tell",Tell);
    },
    Descripcion({commit},Descripcion){
      commit("Descripcion",Descripcion);
    },
    Fecha({commit},Fecha){
      commit("Fecha",Fecha);
    },
    Tamano({commit},Tamano){
      commit("Tamano",Tamano);
    },
    Accesorios({commit},Accesorios){
      commit("Accesorios",Accesorios);
    },
    Sabores({commit},Sabores){
      commit("Sabores",Sabores);
    }
  },
  modules: {
  },
})
