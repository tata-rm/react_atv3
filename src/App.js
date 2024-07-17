import './App.css';
import Relógio from './componentes/useEffect';
import Entrada from './componentes/useRef';
import Fatorial from './componentes/useMemo';
import ListaTarefas from './componentes/useCallback';
import { AuthProvider } from './Context/useContext';
import FormLogin from './componentes/FormLogin';
import PerfilLogin from './componentes/PerfilLogin';
import {ProviderDespesas} from './Context/despesasContext';
import Calculadora from './componentes/orçamentoCalcular';
import ExibirDespesa from './componentes/orçamentoExibição';
import FormDespesa from './componentes/orçamentoForm';
import Saldo from './componentes/orçamentoSaldo';

function App() {
  return(
    <div>
      <Relógio />
      <Entrada />
      <Fatorial />
      <ListaTarefas />
      <AuthProvider>
          <FormLogin />
          <PerfilLogin />
      </AuthProvider>
      <ProviderDespesas>
        <FormDespesa />
        <ExibirDespesa />
        <Calculadora />
        <Saldo />
      </ProviderDespesas>
    </div>
  )
};

export default App;