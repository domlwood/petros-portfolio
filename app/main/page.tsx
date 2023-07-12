import { Info } from './features/About';
import { Experience } from './features/Experience';
import { Intro } from './features/Intro';
import { Projects } from './features/Projects';

export default async function MainPage() {
  return (
    <>
      <Intro />
      <Info />
      <Experience/>
      <Projects/>
    </>
  );
}
