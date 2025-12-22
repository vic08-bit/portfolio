// file: components/Contact.tsx
const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-light-text-primary dark:text-dark-text-primary">Get In Touch</h2>
        <div className="mx-auto mt-4 mb-12 h-1 w-24 bg-accent"></div>
        <p className="mx-auto max-w-xl text-lg">I'm currently seeking new opportunities for a Security Engineer role. My inbox is always open—whether you have a question or just want to connect, I'll get back to you!</p>
      </div>
      <form action="https://formspree.io/f/your_form_id" method="POST" className="mx-auto mt-12 max-w-xl">
        <div className="mb-6">
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-light-text-primary dark:text-dark-text-primary">Your Name</label>
          <input type="text" id="name" name="name" required className="block w-full rounded-md border border-light-border dark:border-dark-border bg-light-card dark:bg-dark-card p-3 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent" />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-light-text-primary dark:text-dark-text-primary">Your Email</label>
          <input type="email" id="email" name="email" required className="block w-full rounded-md border border-light-border dark:border-dark-border bg-light-card dark:bg-dark-card p-3 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent" />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block mb-2 text-sm font-medium text-light-text-primary dark:text-dark-text-primary">Message</label>
          <textarea id="message" name="message" rows={5} required className="block w-full rounded-md border border-light-border dark:border-dark-border bg-light-card dark:bg-dark-card p-3 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"></textarea>
        </div>
        <div className="text-center">
          <button type="submit" className="w-full rounded-md border-2 border-accent px-8 py-4 font-mono text-lg text-accent transition-all duration-300 hover:bg-accent hover:text-white sm:w-auto">Send Message</button>
        </div>
      </form>
    </section>
  );
};
export default Contact;