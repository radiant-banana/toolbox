import { ToolExplorer } from '@/components/ToolExplorer';
import { tools } from '@/content/tools';
import s from './page.module.css';
export default function Home() {
  return (
    <>
      <section className={s.hero} id="about">
        <div className="container">
          <div className={s.content}>
            <p className={s.eyebrow}>Personal utility collection</p>
            <h1>
              Small tools.
              <br />
              <em>Useful</em> results.
            </h1>
            <p className={s.copy}>
              A growing collection of focused web utilities for everyday tasks. No sprawling
              dashboards, just the right instrument when you need it.
            </p>
            <ul>
              <li>1 tool ready</li>
              <li>Runs in your browser</li>
              <li>Local-first by design</li>
            </ul>
          </div>
        </div>
      </section>
      <section className={s.tools} id="tools">
        <div className="container">
          <div className={s.heading}>
            <div>
              <p>Inside the box</p>
              <h2>Choose a tool</h2>
            </div>
            <span>Select a category, then open a utility in its own focused workspace.</span>
          </div>
          <ToolExplorer tools={tools} />
        </div>
      </section>
    </>
  );
}
