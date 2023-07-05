import { Info } from './features/Info';
import { Intro } from './features/Intro';

export default async function MainPage() {
  return (
    <>
      <Intro />
      <Info />
    </>
  );
}
