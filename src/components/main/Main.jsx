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
  

  function onSubmit(event){
    event.preventDefault();
    //controllo se i campi non sono vuoti

    if(title === '' && text === ''){
      console.log('vuoto uno dei due')
      return
    }
    //tramite set do i valori alla variabile reattiva che è un oggetto in questo caso
    const newPost = {
      id: posts.length + 1,
      title : title,
      image : gto,
      content: text,
      tags: createArr(lenguage),
      published: true,
    }
  
    setPosts([...posts, newPost])//con set new arr vado a creare un array con i vecchi post piu quello nuovo
    SetTitle('') //azzero i campi di input
    SetText('')
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
          <form className="row column-gap-3" onSubmit ={onSubmit} action="">
            <input onChange={(e)=>SetTitle(e.target.value)} type="text" className="col-3" value={title} placeholder="inserisci titolo"></input>
            <input onChange={(e)=>SetText(e.target.value)} type="text" className="col-3" value={text} placeholder="inserisci testo"></input>
            <input type="submit" className="col-1"></input>
          </form>
        <Row
          className={[style.justify_center,style.align_center,style.padding_top_50,]}
        >
          {posts.map((el) => {
            console.log("renderizzo")
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
