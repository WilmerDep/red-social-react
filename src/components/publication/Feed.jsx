import { Link, NavLink } from "react-router-dom";
import Avatar from "../../assets/img/user.png";

export const Feed = () => {
  return (
    <>
      <section className="layout__content">
        <header className="content__header">
          <h1 className="content__title">Timeline</h1>
          <button className="content__button">Mostrar nuevas</button>
        </header>

        <div className="content__posts">
          <div className="posts__post">
            <div className="post__container">
              <div className="post__image-user">
                <NavLink className="post__image-link">
                  <img
                    src={Avatar}
                    className="post__user-image"
                    alt="Foto de perfil"
                  />
                </NavLink>
              </div>

              <div className="post__body">
                <div className="post__user-info">
                  <Link to="#" className="user-info__name">
                    Wilmer Jimenez
                  </Link>
                  <span className="user-info__divider"> | </span>
                  <Link to="#" className="user-info__create-date">
                    Hace 1 hora
                  </Link>
                </div>

                <h4 className="post__content">Hola, buenos dias.</h4>
              </div>
            </div>

            <div className="post__buttons">
              <Link to="#" className="post__button">
                <i className="fa-solid fa-trash-can"></i>
              </Link>
            </div>
          </div>

          <div className="posts__post">
            <div className="post__container">
              <div className="post__image-user">
                <NavLink className="post__image-link">
                  <img
                    src={Avatar}
                    className="post__user-image"
                    alt="Foto de perfil"
                  />
                </NavLink>
              </div>

              <div className="post__body">
                <div className="post__user-info">
                  <Link to="#" className="user-info__name">
                    Wilmer Jimenez
                  </Link>
                  <span className="user-info__divider"> | </span>
                  <Link to="#" className="user-info__create-date">
                    Hace 1 hora
                  </Link>
                </div>

                <h4 className="post__content">Hola, buenos dias.</h4>
              </div>
            </div>

            <div className="post__buttons">
              <Link to="#" className="post__button">
                <i className="fa-solid fa-trash-can"></i>
              </Link>
            </div>
          </div>

          <div className="posts__post">
            <div className="post__container">
              <div className="post__image-user">
                <NavLink className="post__image-link">
                  <img
                    src={Avatar}
                    className="post__user-image"
                    alt="Foto de perfil"
                  />
                </NavLink>
              </div>

              <div className="post__body">
                <div className="post__user-info">
                  <Link to="#" className="user-info__name">
                    Wilmer Jimenez
                  </Link>
                  <span className="user-info__divider"> | </span>
                  <Link to="#" className="user-info__create-date">
                    Hace 1 hora
                  </Link>
                </div>

                <h4 className="post__content">Hola, buenos dias.</h4>
              </div>
            </div>

            <div className="post__buttons">
              <Link to="#" className="post__button">
                <i className="fa-solid fa-trash-can"></i>
              </Link>
            </div>
          </div>

          <div className="posts__post">
            <div className="post__container">
              <div className="post__image-user">
                <NavLink className="post__image-link">
                  <img
                    src={Avatar}
                    className="post__user-image"
                    alt="Foto de perfil"
                  />
                </NavLink>
              </div>

              <div className="post__body">
                <div className="post__user-info">
                  <Link to="#" className="user-info__name">
                    Wilmer Jimenez
                  </Link>
                  <span className="user-info__divider"> | </span>
                  <Link to="#" className="user-info__create-date">
                    Hace 1 hora
                  </Link>
                </div>

                <h4 className="post__content">Hola, buenos dias.</h4>
              </div>
            </div>

            <div className="post__buttons">
              <Link to="#" className="post__button">
                <i className="fa-solid fa-trash-can"></i>
              </Link>
            </div>
          </div>
        </div>

        <div className="content__container-btn">
          <button className="content__btn-more-post">
            Ver mas publicaciones
          </button>
        </div>
      </section>
    </>
  );
};
