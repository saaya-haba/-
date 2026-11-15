/* アンケートのURLはここだけで変更できます。ゲームの進行は変更しません。 */
window.GAME_SURVEY={
 url:'https://forms.gle/6jEMtmitwB8pEdqx6',
 createButton(){
  const b=document.createElement('button');
  b.type='button';b.className='survey-button';b.textContent='アンケートに回答する';
  b.onclick=()=>window.open(window.GAME_SURVEY.url,'_blank','noopener,noreferrer');
  return b;
 }
};
