export default function ContactMe(){
    return(
        <div className="hero min-h-screen px-6 sm:px-12 lg:px-32" id="ContactMe">
            <div className="hero-content contact-me p-4 sm:p-8 rounded-md flex-col lg:flex-row shadow-2xl items-center text-center lg:text-right gap-10">
                
                <div className="flex flex-col lg:text-right text-center">
                <p className="py-6">
                    أسعد دائمًا بالتعاون مع من يقدّر الفن والتقنية، لا تتردد في مراسلتي.
                </p>
                <a className="my-2" href="https://wa.me/966502020734"
                target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-phone rounded-icon"></i>  502020734 966+</a>
                <a href="mailto:rahaf0alghamdi@gmail.com"><i className="fa-solid fa-envelope rounded-icon"></i> rahaf0alghamdi@gmail.com</a>
                </div>

                <div className="card card-contact w-full sm:max-w-sm shrink-0">
                <div className="card-body">
                    <form className="fieldset"
                        action="https://formspree.io/f/xqabdlnq"
                        method="POST"
                    >
                        <label className="label">الاسم</label>
                        <input type="text" name="Name" className="input" placeholder="الاسم" />

                        <label className="label">الإيميل</label>
                        <input type="email" name="Email" className="input" placeholder="الإيميل" />

                        <label className="label">الرسالة</label>
                        <textarea className="textarea" name="Message" placeholder="الرسالة"></textarea>

                        <button className="btn btn-gradiant w-1/2 mx-auto mt-5" type="submit">إرسال</button>
                    </form>
                </div>
                </div>

            </div>
        </div>


    );
}
