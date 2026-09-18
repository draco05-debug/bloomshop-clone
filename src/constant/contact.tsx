import { Clock3, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

const contactDetails = [
  {
    title: "Email Us",
    value: "hello@bloomshop.com",
    secondary: "support@bloomshop.com",
    detail: "Send us an email anytime",
    icon: Mail,
  },
  {
    title: "Call Us",
    value: "+1 (555) 123-4567",
    secondary: "+1 (555) 987-6543",
    detail: "Mon-Fri from 8am to 5pm",
    icon: Phone,
  },
  {
    title: "Visit Us",
    value: "123 Fashion Street",
    secondary: "Style City, SC 12345",
    detail: "Come say hello at our office",
    icon: MapPin,
  },
  {
    title: "Working Hours",
    value: "Monday - Friday: 9am - 6pm",
    secondary: "Saturday: 10am - 4pm",
    detail: "Sunday: Closed",
    icon: Clock3,
  },
];

const supportHighlights = [
  {
    title: "24/7 Support",
    text: "Get help whenever you need it.",
  },
  {
    title: "Quick Response",
    text: "We reply within 2 hours.",
  },
  {
    title: "Secure & Private",
    text: "Your information is safe with us.",
  },
];

const faqs = [
  {
    question: "What are your shipping policies?",
    answer:
      "We offer free shipping on orders over $50. Standard shipping takes 3-5 business days.",
  },
  {
    question: "How can I track my order?",
    answer:
      "Once your order ships, you'll receive a tracking number via email to monitor your package.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We accept returns within 30 days of purchase. Items must be in original condition.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes, we ship worldwide. International shipping rates vary by destination.",
  },
];

const Contact = () => {
  return (
    <div className="bg-[#f7f3ee] text-slate-900">
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-12">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-600">
            Contact
          </p>
          <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">
            We&apos;d love to hear from you
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
            Have a question, suggestion, or just want to say hello? We&apos;re here
            to help and would love to hear from you.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="rounded-[30px] bg-white p-8 shadow-[0_20px_45px_rgba(15,23,42,0.08)] sm:p-10">
            <h2 className="text-3xl font-semibold">Send us a message</h2>
            <p className="mt-2 text-slate-600">
              Fill out the form below and we&apos;ll get back to you as soon as
              possible.
            </p>

            <form className="mt-8 grid gap-5 sm:grid-cols-2">
              <label className="block text-sm font-medium text-slate-700 sm:col-span-1">
                Your Name
                <input
                  type="text"
                  placeholder="Your name"
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-amber-400 focus:bg-white"
                />
              </label>

              <label className="block text-sm font-medium text-slate-700 sm:col-span-1">
                Your Email
                <input
                  type="email"
                  placeholder="Your email"
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-amber-400 focus:bg-white"
                />
              </label>

              <label className="block text-sm font-medium text-slate-700 sm:col-span-2">
                Subject
                <input
                  type="text"
                  placeholder="What can we help you with?"
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-amber-400 focus:bg-white"
                />
              </label>

              <label className="block text-sm font-medium text-slate-700 sm:col-span-2">
                Your Message
                <textarea
                  rows={5}
                  placeholder="Write your message here..."
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-amber-400 focus:bg-white"
                />
              </label>

              <div className="sm:col-span-2 pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-[#f5c518] px-7 py-3 text-sm font-semibold text-slate-900 transition hover:bg-[#e1b400]"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          <div className="space-y-5">
            {contactDetails.map(({ title, value, secondary, detail, icon: Icon }) => (
              <div
                key={title}
                className="rounded-[28px] border border-amber-100 bg-[#fffdf9] p-6 shadow-sm"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                  <Icon size={20} />
                </div>
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-base font-medium text-slate-800">{value}</p>
                <p className="mt-1 text-base text-slate-600">{secondary}</p>
                <p className="mt-3 text-sm text-slate-500">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-12">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-600">
            Why Contact Us?
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Support built around your shopping experience
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {supportHighlights.map(({ title, text }) => (
            <div key={title} className="rounded-[28px] bg-white p-7 shadow-sm ring-1 ring-slate-100">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#f5c518]/15 text-amber-700">
                <MessageCircle size={20} />
              </div>
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-12">
        <div className="rounded-[30px] bg-[#18181b] px-8 py-10 text-white shadow-[0_24px_50px_rgba(15,23,42,0.2)] sm:px-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-400">
                Still have questions?
              </p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                Can&apos;t find what you&apos;re looking for?
              </h2>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                Call Us Now
              </button>
              <button className="rounded-full bg-[#f5c518] px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-[#e1b400]">
                Live Chat
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-12">
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-600">
            FAQ
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-slate-600">
            Find quick answers to common questions about our products and services.
          </p>
        </div>

        <div className="grid gap-4">
          {faqs.map(({ question, answer }) => (
            <div key={question} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-800">{question}</h3>
              <p className="mt-2 text-slate-600">{answer}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Contact;
