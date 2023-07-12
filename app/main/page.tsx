import { Experience } from './features/Experience';
import { Info } from './features/About';
import { Intro } from './features/Intro';
import { Projects } from './features/Projects';

export default async function MainPage() {
  return (
    <>
      <Intro />
      <Info />
      <Experience />
      <Projects />
    </>
  );
}
