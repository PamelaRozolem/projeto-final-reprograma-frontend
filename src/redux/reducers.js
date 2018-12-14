import { combineReducers } from 'redux'

let usuarioInicial = null

const json = localStorage.getItem('usuario')
if (json) {
  usuarioInicial = JSON.parse(json)
}

function usuario(state=usuarioInicial, action) {
  switch(action.type) {
    case 'LOGA_USUARIO':
      const usuarioLogado = action.dados;
      const json = JSON.stringify(usuarioLogado);
      localStorage.setItem('usuario', json);
        return {status: action.status, message: 'usuario logado com sucesso'};
      case 'ERROR_LOGAR_USUARIO':
        return {status: (action.error.response && action.error.response.status)? action.error.response.status : 404,
           message: (action.error.response && action.error.response.data.error)? action.error.response.data.error : 'Servidor não encontrado'
            || 'Servidor não encontrado'};
      case 'DESLOGA_USUARIO':
      localStorage.removeItem('usuario');
      const usuarioDeslogado = null;
        return usuarioDeslogado;
      default:
        return state;
  }
};




function cadastrarUsuario (state=[], action){
  switch(action.type) {
    case 'CADASTRA_USUARIO':
      return {status: action.response.status, message: action.response.data.message};
     case 'ERROR_CADASTRAR_USUARIO':
     return {status: (action.error.response && action.error.response.status)? action.error.response.status : 404,
      message: (action.error.response && action.error.response.data.error)? action.error.response.data.error : 'Servidor não encontrado'
       || 'Servidor não encontrado'};
    default:
      return state;
  }
};

function confirmarEmailNovoUsuario (state=[], action){
  switch(action.type) {
    case 'CONFIRMAR_EMAIL':
      return {status: action.response.status, message: action.response.data.message};
    case 'ERROR_CONFIRMAR_EMAIL':
      return {status: (action.error.response && action.error.response.status)? action.error.response.status : 404,
        message: (action.error.response && action.error.response.data.error)? action.error.response.data.error : 'Servidor não encontrado'
         || 'Servidor não encontrado'};
      default:
      return state;
  }
};

function forgotPassword(state=[], action){
  switch(action.type){
    case 'FORGOT_PASSWORD':
     return action.response.data;
     case 'ERROR_FORGOT':
      return {status: (action.error.response && action.error.response.status)? action.error.response.status : 404,
        message: (action.error.response && action.error.response.data.error)? action.error.response.data.error : 'Servidor não encontrado'
        || 'Servidor não encontrado'};
    default:
      return state;
  };
}

function resetPassword(state=[], action){
  switch(action.type){
    case 'RESET_SENHA':
      return action.response.data;
    default:
      return state;
  };
}

function wallets(state = [], action) {
  switch(action.type) {
    case 'CRIAR_WALLETS':
      return state.concat(action.response.data.wallet);
    case 'OBTER_WALLETS':
      return state.concat(action.response.data.wallet)
    case 'ERROR_OBTER_WALLETS': 
      return {status: (action.error.response && action.error.response.status)? action.error.response.status : 404,
        message: (action.error.response && action.error.response.data.error)? action.error.response.data.error : 'Servidor não encontrado'
        || 'Servidor não encontrado'};
    case 'ERROR_CRIAR_WALLETS':
      return {status: (action.error.response && action.error.response.status)? action.error.response.status : 404,
        message: (action.error.response && action.error.response.data.error)? action.error.response.data.error : 'Servidor não encontrado'
        || 'Servidor não encontrado'};
    case 'DELETE_WALLETS':
      return state.filter( (item) => item._id !== action.id);
    case 'RESET_WALLETS':
      return state = [];
    case 'ERROR_DELETE_WALLETS': 
      return {status: (action.error.response && action.error.response.status)? action.error.response.status : 404,
        message: (action.error.response && action.error.response.data.error)? action.error.response.data.error : 'Servidor não encontrado'
        || 'Servidor não encontrado'};
    default:
      return state;
  }
};

const reducers = combineReducers({
  usuario: usuario,
  cadastrarUsuario: cadastrarUsuario,
  confirmarEmailNovoUsuario: confirmarEmailNovoUsuario,
  forgotPassword:forgotPassword,
  resetPassword: resetPassword,
  wallets:wallets
});

export default reducers;