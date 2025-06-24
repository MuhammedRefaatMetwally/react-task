import { useState } from "react";

const NewsletterSection: React.FC<{ onSubmit?: (email: string) => void }> = ({
  onSubmit,
}) => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsLoading(true);
    try {
      await onSubmit?.(email);
      setEmail("");
    } catch (error) {
      console.error("Newsletter subscription failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="lg:col-span-2">
      <div className="newsletter-container-style w-full max-w-2xl mx-auto">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6"
        >
          <div className="flex-1 min-w-0">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-8 sm:px-10 py-4 sm:py-5 bg-transparent border border-gray-500 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-[#B6F09C] text-base sm:text-lg transition-colors"
              required
              disabled={isLoading}
              aria-label="Email address for newsletter"
            />
          </div>
          <button
            type="submit"
            className="flex-none w-auto bg-[#B6F09C] text-black hover:bg-[#9CE184] transition-colors rounded-2xl px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-medium whitespace-nowrap"
            disabled={isLoading || !email.trim()}
          >
            {isLoading ? "Subscribing..." : "Subscribe to news"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsletterSection;