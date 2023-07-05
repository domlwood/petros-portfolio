import { Loader } from './loader';
import MainPage from './main/page';

export default async function HomePage() {
  return (
    <Loader>
      <MainPage />
    </Loader>
  );
}
