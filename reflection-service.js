/* 回答の送信先。回答は端末に保存しません。 */
window.REFLECTION_SERVICE = {
  url:'https://script.google.com/macros/s/AKfycbzgObRn43fuZtLQAoej05EODwnZEKxQy7dE3rsbFbc0l6Z6h6ed1y0i46KTEL0TLWJ8/exec',
  async submit(character,answer){
    const response=await fetch(this.url,{
      method:'POST',credentials:'omit',redirect:'follow',
      headers:{'Content-Type':'text/plain;charset=UTF-8'},
      body:JSON.stringify({character,answer})
    });
    if(!response.ok)throw new Error('通信に失敗しました');
    const data=await response.json();
    if(data.ok!==true)throw new Error('送信できませんでした');
    return Array.isArray(data.answers)?data.answers.filter(x=>typeof x==='string'&&x.trim()&&x!==answer).slice(0,2):[];
  }
};
