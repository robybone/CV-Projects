import { Fragment } from 'react'

/** Evidenzia i marcatori [VERIFICA …] / [VERIFY …] ancora presenti nei contenuti. */
const MARK = /(\[(?:VERIFICA|VERIFY)[^\]]*\])/g
const IS_MARK = /^\[(?:VERIFICA|VERIFY)/

export function Rich({ text }: { text: string }) {
  const parts = text.split(MARK)
  return (
    <>
      {parts.map((p, i) =>
        IS_MARK.test(p) ? (
          <mark key={i} className="verify-mark">{p.slice(1, -1)}</mark>
        ) : (
          <Fragment key={i}>{p}</Fragment>
        ),
      )}
    </>
  )
}

export const hasVerify = (s: string) => /\[(?:VERIFICA|VERIFY)/.test(s)
