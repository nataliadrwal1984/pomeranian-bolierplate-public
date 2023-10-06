import React from 'react';

// Typy null i undefined

// null i undefiend oba oznaczaja ze zmienne nie mają wartości

// jezeli porownamy wartosci obu to podwojne porownanie zwroci true bo oba mowia ze nie maja wartosci

// jezeli porownamy wartosci obu to potrojnie porownanie zwroci false bo sprawdzany jest dodatkowo typ

export const EmptyValuesAndStrings = () => {
  let a; // undefined

  const b = null; // null

  let c = null; // null

  console.log(a, b, c);

  return (
    <ol>
      <li>null == undefined - {String(null == undefined)}</li>

      <li>null === undefined - {String(null === undefined)}</li>

      <li>{c ? 'null - jestem true' : 'null - jestem false'}</li>

      <li>
        {undefined ? 'undefiend - jestem true' : 'undefiend - jestem false'}
      </li>
    </ol>
  );
};
