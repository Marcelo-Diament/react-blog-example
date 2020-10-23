import React, { useState, useEffect } from 'react'
import Post from './Post'
import users from './users.json'
import './style.css'

const Posts = () => {
  const [activeUser, setActiveUser] = useState(-1)
  const [activePosts, setActivePosts] = useState([])

  useEffect(() => {
    let queryParameter = activeUser > -1 ? `?userId=${activeUser}` : ''

    fetch(`https://jsonplaceholder.typicode.com/posts${queryParameter}`)
      .then(response => response.json())
      .then(json => setActivePosts(json))
  }, [activeUser])

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
        <section className="posts-content-container">
          {activePosts.map((post, index) => {
            return (
              <Post key={index} {...post} />
            )
          })}
        </section>
      </article>
    </section>
  )
}

export default Posts