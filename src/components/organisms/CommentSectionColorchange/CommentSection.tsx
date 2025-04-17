
import React from "react";
import styles from "./style.module.css";
import { useTheme } from "../ThemeContext";

const DynamicIcon: React.FC<{ 
  lightSrc: string; 
  darkSrc: string; 
  alt: string; 
  className?: string 
}> = ({ lightSrc, darkSrc, alt, className }) => {
  const { theme } = useTheme();
  
  return (
    <img 
      src={theme === 'dark' ? darkSrc : lightSrc}
      alt={alt}
      className={className}
      style={{
        transition: 'filter 0.3s ease',
        filter: theme === 'dark' ? 'invert(0)' : 'none'
      }}
    />
  );
};

const CommentSection: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className={`${styles.comments} ${theme === 'dark' ? styles.dark : ''}`}>
      
      <div className={styles.comment_input}>
        <div>
        <img src="/img/ава_конь.svg" alt="Шахматная фигура" className={styles.comment_input_logo} />
        </div>
        <input
          className={styles.writeacomment}
          type="text"
          placeholder="Написать комментарий..."
        />
        <button className={styles.send_button}>
        <img src="/img/иконка отправить.svg" alt="Отправить"  className={styles.comment_input_button}/>
        </button>
      </div>

      <h3 className={styles.comments_title}>
        Комментарии <span className={styles.maincomment}>999</span>
      </h3>

     
      <div className={styles.comment}>
        <div className={styles.author_info}>
        <img src="/img/ава_конь_тёмный_фон.svg" alt="Author Avatar" />
          <span className={styles.nickname}>author nickname</span>
          <span className={styles.date}>11.09.2001</span>
        </div>
        <p className={styles.comment_text}>
          Tincidunt senectus litora primis, arcu inceptos tincidunt gravida. Ridiculus etiam ultrices non
          facilisi leo; non finibus porta.
        </p>
        <div className={styles.reactions}>
          <span className={styles.answer}>Ответить</span>
          <span className={styles.reaction}>
            <DynamicIcon
              lightSrc="/img/иконка_зелён_светлая.svg"
              darkSrc="/img/иконка_зелён_тёмная.svg"
              alt="Лайк"
              className={styles.icongreen}
            />
            999
          </span>
          <span className={styles.reaction}>
            <DynamicIcon
              lightSrc="/img/иконка_красн_светлая.svg"
              darkSrc="/img/иконка_красн_тёмная.svg"
              alt="Дизлайк"
              className={styles.iconred}
            />
            999
          </span>
        </div>
      </div>

      
      <div className={styles.comment}>
        <div className={styles.author_info}>
        <img src="/img/ава_конь_тёмный_фон.svg" alt="Author Avatar" />
          <span className={styles.nickname}>another user</span>
          <span className={styles.date}>12.09.2001</span>
        </div>
        <p className={styles.comment_text}>
          Это пример другого комментария с немного измененным текстом.
        </p>
        <div className={styles.reactions}>
          <span className={styles.answer}>Ответить</span>
          <span className={styles.reaction}>
            <DynamicIcon
              lightSrc="/img/иконка_зелён_светлая.svg"
              darkSrc="/img/иконка_зелён_тёмная.svg"
              alt="Лайк"
              className={styles.icongreen}
            />
            999
          </span>
          <span className={styles.reaction}>
            <DynamicIcon
              lightSrc="/img/иконка_красн_светлая.svg"
              darkSrc="/img/иконка_красн_тёмная.svg"
              alt="Дизлайк"
              className={styles.iconred}
            />
                999
          </span>
        </div>
      </div>

      
      <div className={styles.comment}>
        <div className={styles.author_info}>
        <img src="/img/ава_конь_тёмный_фон.svg" alt="Author Avatar" />
          <span className={styles.nickname}>chess_fan</span>
          <span className={styles.date}>13.09.2001</span>
        </div>
        <p className={styles.comment_text}>
          Еще один комментарий для демонстрации работы компонента.
        </p>
        <div className={styles.reactions}>
          <span className={styles.answer}>Ответить</span>
          <span className={styles.reaction}>
            <DynamicIcon
              lightSrc="/img/иконка_зелён_светлая.svg"
              darkSrc="/img/иконка_зелён_тёмная.svg"
              alt="Лайк"
              className={styles.icongreen}
            />
            999
          </span>
          <span className={styles.reaction}>
            <DynamicIcon
              lightSrc="/img/иконка_красн_светлая.svg"
              darkSrc="/img/иконка_красн_тёмная.svg"
              alt="Дизлайк"
              className={styles.iconred}
            />
            999
          </span>
        </div>
      </div>
    </div>
  );
};

export default CommentSection;