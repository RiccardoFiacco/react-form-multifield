import { Row, Container } from "react-bootstrap";
import style from "./Main.module.css";
import { posts as originalPosts, createArr, lenguage } from "../../posts.js";
import { PostCard } from "./PostCard.jsx";
import { useState } from "react";
import gto from "../../assets/gto2.jpg"

let basePost = { //creiamo una variabile statica che ci servira da base per gli inserimenti
  id: 0,
  title : '',
  image : '',
  content: '',
  tags: '',
  published: false,
}

export default function Main() {
  const [formData, setFormData] = useState(basePost) //creiamo una varibile statica che ha come valore iniziale l'oggetto creato sopra
  const [posts, setPosts] = useState(originalPosts)
  //funzione che mi aggiorna i valori del form data al cambio degli input
  function changeHandler(event){
    event.preventDefault();
    console.log("cliccato")
    setFormData((formData)=>{ //passo una callback alla funzione set che ha come parametro la variabile reattiva
      return {...formData, //ritornera un oggetto copia di form data
        [event.target.name]:event.target.value} //ma che avra una key presa dal name dell elemento che ha scatenato l'evento con il rispettivo valore come value
    })
  }

  function onSubmit(event){
    event.preventDefault();
    //controllo se i campi non sono vuoti
    if(formData.title === '' && formData.content === ''){
      console.log('vuoto uno dei due')
      return
    }
    //creo una variabile di appoggio dove andro a mettere i valori che ho preso dal form
    const newPost = {
      id: posts.length + 1,
      title : formData.title,
      image : formData.image,
      content: formData.content,
      tags: createArr(lenguage),
      published: true,
    }
  
    setPosts([...posts, newPost])//con set new arr vado a creare un array con i vecchi post piu quello nuovo
  }

  function deletePost(postToDelete){
    setPosts(posts.filter(post=>post!== postToDelete))
  }

  function changeTitle(postToChange){
    posts.map(post=>{
      if(post === postToChange){     
          postToChange.title = "carlo"
      }
    })
    console.log(posts)
    setPosts([...posts])
  }
 
  return (
    <div className={[style.bgcolor_lightGrey, style.flex_grow_1].join(" ")}>
      <Container>
          <form className="row column-gap-3 row-gap-3" onSubmit ={onSubmit} action="">
            {/* vado a mettere nei campi di input la funzione da invocare al cambio dell'input e come valore il valore della variabile reattiva*/}
            <input onChange={(e)=>changeHandler(e)} type="text" className="col-1" name="title" value={formData.title} placeholder="inserisci titolo"></input> 
            <input onChange={(e)=>changeHandler(e)} type="text" className="col-1" name="content" value={formData.content} placeholder="inserisci testo"></input>
            <input onChange={(e)=>changeHandler(e)} type="text" className="col-1" name="image" value={formData.image} placeholder="inserisci url imagine"></input>
            
            <div className="col-1">
                <input onChange={changeHandler} checked={formData.published} type="checkbox" className="btn-check" id="html" autoComplete="off"/>
                <label className="btn btn-outline-primary" htmlFor="html">html</label>
            </div>
            <div className="col-1">
                <input onChange={changeHandler} checked={formData.published} type="checkbox" className="btn-check" id="css" autoComplete="off"/>
                <label className="btn btn-outline-primary" htmlFor="css">css</label>
            </div>
            <div className="col-1">
                <input onChange={changeHandler} checked={formData.published} type="checkbox" className="btn-check" id="js" autoComplete="off"/>
                <label className="btn btn-outline-primary" htmlFor="js">js</label>
            </div>
            <div className="col-1">
                <input type="checkbox" onChange={(e)=>changeHandler(e)} checked={formData.published} id="php"className="btn-check" />
                <label className="btn btn-outline-primary" htmlFor="php">php</label>
            </div> 
              
            <input type="submit" className="col-1"></input>
          </form>
        <Row
          className={[style.justify_center,style.align_center,style.padding_top_50,]}
        >
          {posts.map((el) => {
            return (
              el.published && (
                <PostCard
                  key={el.id}
                  id={el.id}
                  title={el.title}
                  image={el.image}
                  content={el.content}
                  tags={el.tags}
                  published={el.published}
                  callback = {()=>deletePost(el)}
                  callbackChangeTitle={()=>changeTitle(el)}
                />
              )
            );
          })}
        </Row>
      </Container>
    </div>
  );
}
