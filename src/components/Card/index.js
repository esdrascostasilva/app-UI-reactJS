import styles from './Card.module.css'

function Card()
{
    return (
        <section className={styles.card}>
            <a
                href="https://www.youtube.com/watch?v=qJ2oiv1c7U8"
                rel='noreferrer noopener'
                target='_blank'>
                    <img src="https://img.youtube.com/vi/qJ2oiv1c7U8/mqdefault.jpg" alt='Capa' />
            </a>
        </section>
    );
}

export default Card;