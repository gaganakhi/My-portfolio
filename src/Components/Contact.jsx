export default function Contact() {
    return (
      <section id="contact" className="mt-10 p-6 rounded-2xl bg-white shadow-sm">
        <h3 className="text-2xl font-semibold">Get in touch</h3>
  
        <p className="mt-2 text-slate-600">
          Interested in working together? Fill out the form or email me.
        </p>
  
        <form className="mt-4 grid md:grid-cols-2 gap-4">
          <input placeholder="Your name" className="border rounded-lg px-3 py-2" />
          <input placeholder="Your email" className="border rounded-lg px-3 py-2" />
          <textarea placeholder="Message" className="md:col-span-2 border rounded-lg px-3 py-2 h-28" />
  
          <button type="button" className="px-5 py-2 rounded-lg bg-indigo-600 text-white md:col-span-2">
            Send message
          </button>
        </form>
      </section>
    );
  }
  