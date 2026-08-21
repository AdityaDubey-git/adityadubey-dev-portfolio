import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { Mail, Linkedin, Github, FileText, Phone, Send, Loader2 } from "lucide-react";
import { socialLinks } from "@/data/portfolio";
import { Reveal } from "./Reveal";

const contactSchema = z.object({
  from_name: z.string().min(2, "Name must be at least 2 characters"),
  reply_to: z.string().email("Please enter a valid email"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

const EMAILJS_SERVICE_ID = "service_3f1p3vi";
const EMAILJS_TEMPLATE_ID = "template_578wgel";
const EMAILJS_PUBLIC_KEY = "a3H5vPZeUyvIUG6TA";

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      from_name: "",
      reply_to: "",
      message: "",
    },
  });

  const onSubmit = async (_data: ContactForm) => {
    if (!formRef.current) return;
    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY,
      );
      toast.success("Message sent!", {
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      reset();
    } catch (error) {
      toast.error("Failed to send message", {
        description: "Please try again or contact me directly via email.",
      });
      console.error("EmailJS error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const buttons = [
    { label: "Email Me", href: socialLinks.email, icon: Mail, primary: true },
    { label: "LinkedIn", href: socialLinks.linkedin, icon: Linkedin },
    { label: "GitHub", href: socialLinks.github, icon: Github },
    { label: "Resume", href: socialLinks.resume, icon: FileText },
    { label: "Call Me", href: socialLinks.phone, icon: Phone },
  ].filter((b) => Boolean(b.href));

  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div
            className="relative overflow-hidden rounded-[2rem] border border-border px-6 py-14 sm:px-12"
            style={{ background: "var(--gradient-surface)", boxShadow: "var(--shadow-elegant)" }}
          >
            <div
              className="pointer-events-none absolute -top-24 left-1/2 size-[420px] -translate-x-1/2 rounded-full opacity-20 blur-3xl"
              style={{ background: "var(--gradient-accent)" }}
              aria-hidden
            />
            <p className="relative text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Contact
            </p>
            <h2 id="contact-heading" className="relative mt-4 text-3xl font-bold sm:text-5xl">
              Let's Build Something Together
            </h2>
            <p className="relative mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
              I'm always interested in learning opportunities, internships, projects, collaborations,
              and conversations around technology.
            </p>

            <form
              ref={formRef}
              onSubmit={handleSubmit(onSubmit)}
              className="relative mx-auto mt-10 grid max-w-2xl gap-4 text-left"
              aria-label="Send a message"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label htmlFor="from_name" className="text-sm font-medium text-foreground">
                    Name
                  </label>
                  <input
                    id="from_name"
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-xl border border-input bg-background/60 px-4 py-3 text-sm text-foreground outline-none ring-offset-background transition-colors placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
                    aria-invalid={errors.from_name ? "true" : "false"}
                    {...register("from_name")}
                  />
                  {errors.from_name && (
                    <p className="text-xs text-destructive">{errors.from_name.message}</p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="reply_to" className="text-sm font-medium text-foreground">
                    Email
                  </label>
                  <input
                    id="reply_to"
                    type="email"
                    placeholder="your@email.com"
                    className="w-full rounded-xl border border-input bg-background/60 px-4 py-3 text-sm text-foreground outline-none ring-offset-background transition-colors placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
                    aria-invalid={errors.reply_to ? "true" : "false"}
                    {...register("reply_to")}
                  />
                  {errors.reply_to && (
                    <p className="text-xs text-destructive">{errors.reply_to.message}</p>
                  )}
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell me about your project, opportunity, or question..."
                  className="w-full resize-none rounded-xl border border-input bg-background/60 px-4 py-3 text-sm text-foreground outline-none ring-offset-background transition-colors placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
                  aria-invalid={errors.message ? "true" : "false"}
                  {...register("message")}
                />
                {errors.message && (
                  <p className="text-xs text-destructive">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="size-4 animate-spin" aria-hidden />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="size-4" aria-hidden />
                    Send Message
                  </>
                )}
              </button>
            </form>

            {buttons.length > 0 && (
              <div className="relative mt-9 flex flex-wrap justify-center gap-3">
                {buttons.map((b) => (
                  <a
                    key={b.label}
                    href={b.href}
                    className={
                      b.primary
                        ? "inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
                        : "inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold transition-colors hover:bg-secondary"
                    }
                  >
                    <b.icon className="size-4" aria-hidden /> {b.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
