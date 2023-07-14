import { Experience } from './features/Experience';
import { About } from './features/About';
import { Intro } from './features/Intro';
import { Projects } from './features/Projects';
import { NavBar } from './ui/NavBar';

export default async function MainPage() {
  return (
    <>
      <NavBar />
      <Intro />
      <div>
        <About />
      </div>
        <Experience />
      <div>
        <Projects />
      </div>
    </>
  );
}
