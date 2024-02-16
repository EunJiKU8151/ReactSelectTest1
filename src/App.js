import { FormProvider, useForm } from "react-hook-form";
import Header from './components/Header';
import Table from './components/Table';

function App() {
  const methods = useForm();

  return (
    // FormProvider: 컴포넌트를 감싸주면 어디서든 react-hook-form에 등록된 input의 값에 접근 가능!!!
    <FormProvider {...methods}>
      <Header />
      <Table />
    </FormProvider>
  );
}

export default App;