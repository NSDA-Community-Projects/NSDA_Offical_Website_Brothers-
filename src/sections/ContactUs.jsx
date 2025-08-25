import ContactAddress from "../components/ContactAdress";
import ContactForm from "../components/ContactForm";

const ContactUs = () => {
  return (
    <section
      id="Contact"
      className="p-[23px] flex flex-col md:flex-row justify-between w-full gap-8"
    >
      <ContactAddress />
      <ContactForm />
    </section>
  );
};

export default ContactUs;
