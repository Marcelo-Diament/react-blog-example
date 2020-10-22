import React, { useState } from 'react'
import users from './users.json'
import './style.css'

const Posts = () => {
  const [activeUser, setActiveUser] = useState(-1)

  const handleClick = (userId) => {
    setActiveUser(userId)
  }

  return (
    <section className="posts-container">
      <h2 className="posts-container-title">Posts por Usuários</h2>
      <p className="posts-container-description">Esses posts estão sendo chamados do site <a href="https://jsonplaceholder.typicode.com" target="_blank" rel="noopener noreferrer" title="Acesse o JSON Placeholder">JSON Placeholder</a> - veja o <a href="https://jsonplaceholder.typicode.com/posts" target="_blank" rel="noopener noreferrer" title="Veja o modelo de dados">modelo de dados (JSON)</a> que está sendo utilizado.</p>
      <nav className="posts-container-controls">
        {users.map(user => <button
          key={user.id}
          className={`posts-container-controls-item ${activeUser === user.userId && 'active'}`}
          onClick={() => handleClick(user.userId)}
        >
          User {user.userId}
        </button>
        )}
        <button
          className={`posts-container-controls-item ${activeUser === -1 && 'active'}`}
          onClick={() => handleClick(-1)}
        >
          Todos
        </button>
      </nav>
      <article className="posts-content">
        <h2 className="posts-content-title">Posts {activeUser === -1 ? 'de todos os users' : `do user ${activeUser}`}</h2>
      </article>
      {/* <article className="post-item">
        <img src={placeholderImg} alt="Imagem de Marcação" width="100%" height="auto" />
        <h3 className="post-item-title">Nome do Post</h3>
        <small className="post-item-details">
          <span className="post-item-details-post-id">Id do Post</span> | <span className="post-item-details-author-id">Id do User</span>
        </small>
        <p className="post-item-details-content">Conteúdo</p>
      </article> */}
    </section>
  )
}

export default Posts