import { About } from './features/About';
import { WorkExperience } from './features/Experience';
import { Intro } from './features/Intro';
import { NavBar } from './ui/NavBar';
import { Projects } from './features/Projects';

export default async function MainPage() {
  return (
    <>
      <NavBar />
      <Intro />
      <div>
        <About />
      </div>
      <WorkExperience />
      <div>
        <Projects />
      </div>
    </>
  );
}
