import email from "../images/email.svg"

const Contact = () => (
    <section id='contact'>
        <h1 className='reveal-list'>04. Contact me</h1>
        <form
            action='https://formsubmit.co/bp.mahmoud7@gmail.com'
            method='POST'
        >
            <input
                type='text'
                name='name'
                id='name'
                placeholder='Name:'
                required
            />
            <input
                type='email'
                name='email'
                id='email'
                placeholder='Email:'
                required
            />
            <input
                type='text'
                name='message'
                id='message'
                placeholder='Message:'
                required
            />
            <button type='submit'>Send</button>
            <input
                type='hidden'
                name='_next'
                value='https://mahmoudalii.com'
            ></input>
            <input type='hidden' name='_captcha' value='false'></input>
        </form>
        <img className='bg-email' src={email} alt='' />
    </section>
)

export default Contact
