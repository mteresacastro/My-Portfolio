import '../styles/mainContact.scss';

function MainContact() {

    return (
        <section className="mainContact" id="mainContact">
            <h2 className="mainContact__h2">Contacta conmigo</h2>
            <form className="mainContact__form" action="https://formsubmit.co/m.teresacastrogonzalez@gmail.com" method="POST">
                <label className="mainContact__form--label" htmlFor="email">E-mail
                    <input className="mainContact__form--input" name="email" id="email" type="email" placeholder="email@correo.com" required />
                </label>

                <label className="mainContact__form--label" htmlFor="subject">Asunto
                    <input className="mainContact__form--input" name="subject" id="subject" type="text" placeholder="Tema a tratar..." required />
                </label>

                <label className="mainContact__form--label textarea" htmlFor="message">Mensaje
                    <textarea className="mainContact__form--textarea" name="message" id="contact" cols="30" rows="10" placeholder="Estamos interesados en tu perfil..." type="text" required></textarea>
                </label>

                <button type="submit">Enviar</button>
            </form>
        </section>
    );
}

export default MainContact;