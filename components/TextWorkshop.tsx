'use client';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import s from './TextWorkshop.module.css';
const KEY = 'toolbox:text-workshop:draft',
  DEFAULT =
    'Hello World!\n\nThis is the first utility in my Toolbox. It can clean, transform, and inspect text directly in the browser.';
export function TextWorkshop() {
  const [text, setText] = useState(DEFAULT),
    [loaded, setLoaded] = useState(false),
    [toast, setToast] = useState('');
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => {
    const saved = localStorage.getItem(KEY);
    if (saved !== null) setText(saved);
    setLoaded(true);
  }, []);
  useEffect(() => {
    if (loaded) localStorage.setItem(KEY, text);
  }, [loaded, text]);
  const stats = useMemo(() => {
    const w = text.trim() ? text.trim().split(/\s+/).length : 0;
    return {
      chars: text.length,
      words: w,
      lines: text ? text.split(/\r?\n/).length : 0,
      time: w ? Math.max(1, Math.ceil(w / 200)) : 0,
    };
  }, [text]);
  const note = useCallback((m: string) => {
    if (timer.current) clearTimeout(timer.current);
    setToast(m);
    timer.current = setTimeout(() => setToast(''), 1800);
  }, []);
  const clean = () => {
    setText((v) =>
      v
        .split(/\r?\n/)
        .map((l) => l.trim().replace(/[ \t]+/g, ' '))
        .join('\n')
        .replace(/\n{3,}/g, '\n\n')
        .trim(),
    );
    note('Whitespace cleaned');
  };
  const copy = async () => {
    await navigator.clipboard.writeText(text);
    note('Text copied');
  };
  return (
    <section className={s.work}>
      <div className={s.bar}>
        <b>Active workbench</b>
        <span>{loaded ? 'Draft saved locally' : 'Loading local draft'}</span>
      </div>
      <div className={s.layout}>
        <div className={s.editor}>
          <label htmlFor="text">
            Your text <span>Live analysis</span>
          </label>
          <textarea
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            spellCheck
            placeholder="Type or paste text here..."
          />
          <div className={s.actions}>
            <button onClick={() => setText((v) => v.toUpperCase())}>Uppercase</button>
            <button onClick={() => setText((v) => v.toLowerCase())}>Lowercase</button>
            <button
              onClick={() =>
                setText((v) => v.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase()))
              }
            >
              Title case
            </button>
            <button onClick={clean}>Clean spaces</button>
            <button
              onClick={() => {
                setText((v) => v.split(/\r?\n/).sort().join('\n'));
                note('Lines sorted');
              }}
            >
              Sort lines
            </button>
            <button
              onClick={() => {
                setText((v) => [...new Set(v.split(/\r?\n/))].join('\n'));
                note('Duplicates removed');
              }}
            >
              Unique lines
            </button>
            <button className={s.primary} onClick={copy}>
              Copy text
            </button>
            <button
              className={s.danger}
              onClick={() => {
                setText('');
                note('Draft cleared');
              }}
            >
              Clear
            </button>
          </div>
        </div>
        <aside className={s.stats}>
          <p>Live measures</p>
          <dl>
            <div>
              <dt>Characters</dt>
              <dd>{stats.chars.toLocaleString()}</dd>
            </div>
            <div>
              <dt>Words</dt>
              <dd>{stats.words.toLocaleString()}</dd>
            </div>
            <div>
              <dt>Lines</dt>
              <dd>{stats.lines.toLocaleString()}</dd>
            </div>
            <div>
              <dt>Reading time</dt>
              <dd>{stats.time}m</dd>
            </div>
          </dl>
          <section>
            <b>Local-first</b>
            <span>The draft stays in this browser. It is not uploaded anywhere.</span>
          </section>
        </aside>
      </div>
      <output className={`${s.toast} ${toast ? s.show : ''}`}>{toast}</output>
    </section>
  );
}
