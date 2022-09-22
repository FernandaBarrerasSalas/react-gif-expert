import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GiftExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch']);

  /*console.log(categories);*/

  const onAddCategory = (newCategory) => {

    if (categories.includes(newCategory)) return;
    //console.log(newCategory);
    setCategories([newCategory, ...categories]);
    //setCategories( cat => [...cat,'HOLA MUNDO'])
  }
  return (
    <>
      <h1>GiftExpertApp</h1>

      <AddCategory
        onNewCategory={(value) => onAddCategory(value)}
      />


      {
        categories.map((category) => {
          return (
            <GifGrid key={category} category={category} />
          )
        })
      }

    </>

  )
}
